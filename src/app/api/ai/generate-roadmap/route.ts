import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { goal, diagnosticScore, language } = await request.json();

    if (!goal) {
      return NextResponse.json({ error: 'Goal is required' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Determine experience level based on diagnostic score out of 20
    let derivedExperience = "Beginner";
    if (diagnosticScore >= 15) {
      derivedExperience = "Advanced";
    } else if (diagnosticScore >= 8) {
      derivedExperience = "Intermediate";
    }

    const prompt = `You are an expert career counselor and technical curriculum designer.
Generate a highly personalized learning roadmap for the skill goal: "${goal}".
The learner just completed a rigorous 20-question diagnostic test and scored ${diagnosticScore}/20.
Based on this empirical score, their objective skill level is: ${derivedExperience}.

CRITICAL REQUIREMENT: The entire output (including the title, phase names, resource descriptions, and case study details) MUST be written in ${language || 'English'}. If the language is Hindi, use Devangari script. If Tamil, use Tamil script, etc.

Return the response strictly as a JSON object matching this schema:
{
  "title": "Pathway: [Skill Name]",
  "phases": [
    {
      "id": 1,
      "name": "[Phase Name]",
      "duration": "[Duration e.g., 2 Weeks]",
      "resources": ["[Resource 1]", "[Resource 2]"],
      "status": "locked"
    }
  ],
  "caseStudy": {
    "title": "[Case Study Title]",
    "description": "[Detailed Industry Case Study Description]"
  }
}
Provide 3 logical phases tailored strictly to their ${derivedExperience} experience level, and 1 final rigorous industry case study. Output nothing but valid JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    if (response.text) {
      const roadmapData = JSON.parse(response.text);
      return NextResponse.json(roadmapData);
    } else {
      throw new Error("No text response from Gemini");
    }
  } catch (error: any) {
    console.error("Gemini Roadmap Error:", error);
    return NextResponse.json({ error: 'Failed to generate roadmap', details: error.message }, { status: 500 });
  }
}
