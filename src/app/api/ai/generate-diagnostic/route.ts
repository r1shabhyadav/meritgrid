import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { goal, language } = await request.json();

    if (!goal) {
      return NextResponse.json({ error: 'Goal is required' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `You are an expert technical assessor.
Create a rigorous 20-question diagnostic test to evaluate a learner's proficiency in the skill goal: "${goal}".
The questions should progressively test fundamentals up to advanced concepts.

Requirements:
1. Provide exactly 20 questions.
2. Mix of "mcq" (Multiple Choice) and "blank" (Fill in the blank). Make about 15 MCQs and 5 blanks.
3. For MCQs, provide 3 to 4 closely related and highly plausible options.
4. DO NOT use em dashes anywhere in your response.
5. All content MUST be in ${language || 'English'}.

Return strictly as a JSON object matching this schema:
{
  "questions": [
    {
      "id": "1",
      "type": "mcq",
      "question": "[Question text]",
      "options": ["[Option A]", "[Option B]", "[Option C]", "[Option D]"],
      "answer": "[Exact string of the correct option]"
    },
    {
      "id": "2",
      "type": "blank",
      "question": "[Question text with a ________ for the blank]",
      "options": [],
      "answer": "[Exact string for the blank]"
    }
  ]
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
      const data = JSON.parse(response.text);
      return NextResponse.json(data);
    } else {
      throw new Error("No text response from Gemini");
    }
  } catch (error: any) {
    console.error("Gemini Diagnostic Error:", error);
    return NextResponse.json({ error: 'Failed to generate diagnostic', details: error.message }, { status: 500 });
  }
}
