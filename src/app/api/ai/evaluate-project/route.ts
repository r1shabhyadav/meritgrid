import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { projectLink } = await request.json();

    if (!projectLink) {
      return NextResponse.json({ error: 'Project link is required' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `You are a strict technical evaluator. The user has submitted a project for evaluation: ${projectLink}.
Since you cannot browse this link right now, assume they have built a standard MVP for their declared goal. 
Evaluate it strictly but constructively.
Return the response strictly as a JSON object matching this schema:
{
  "score": [integer 1-100],
  "feedback": "2-3 sentences of constructive feedback. Mention what was done well and what needs improvement.",
  "hireabilityIndexDelta": [integer 10-50]
}
Output nothing but valid JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    if (response.text) {
      const evaluation = JSON.parse(response.text);
      
      // Update Learner in DB (Mocking the user ID as 2 - Ananya for demo purposes)
      // In a real app, you'd get the ID from the session JWT.
      const learnerId = 2;
      
      await prisma.project.create({
        data: {
          title: `Project: ${new URL(projectLink).pathname.split('/').pop() || 'Submission'}`,
          score: evaluation.score,
          feedback: evaluation.feedback,
          userId: learnerId
        }
      });
      
      await prisma.user.update({
        where: { id: learnerId },
        data: {
          hireabilityIndex: { increment: evaluation.hireabilityIndexDelta }
        }
      });

      return NextResponse.json(evaluation);
    } else {
      throw new Error("No text response from Gemini");
    }
  } catch (error: any) {
    console.error("Gemini Evaluation Error:", error);
    return NextResponse.json({ error: 'Failed to evaluate project', details: error.message }, { status: 500 });
  }
}
