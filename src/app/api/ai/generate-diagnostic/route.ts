import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request: Request) {
  try {
    const { goal, language } = await request.json();

    if (!goal) {
      return NextResponse.json({ error: 'Goal is required' }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `You are an expert technical assessor specializing in ${goal}.
Create a rigorous 10-question diagnostic test to accurately gauge a learner's current proficiency level in: "${goal}".
Design questions to assess:
- Foundational concepts and theory
- Hands-on practical experience
- Problem-solving ability
- Real-world application understanding
- Advanced concepts (if applicable)

Progressively increase difficulty from beginner to advanced levels. Questions should help determine if the learner is a Beginner, Intermediate, or Advanced practitioner.

Requirements:
1. Provide exactly 10 questions specifically related to gauging tech skill level in "${goal}".
2. Mix of "mcq" (Multiple Choice) and "blank" (Fill in the blank). Make about 7 MCQs and 3 blanks.
3. For MCQs, provide 3 to 4 closely related and highly plausible options.
4. Questions should progressively assess skill maturity from Level 1 (Beginner) to Level 5 (Expert).
5. DO NOT use em dashes anywhere in your response.
6. All content MUST be in ${language || 'English'}.

Return strictly as a JSON object matching this schema:
{
  "questions": [
    {
      "id": "1",
      "type": "mcq",
      "question": "[Question text assessing specific skill level]",
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
      
      // Validate response structure
      if (!data.questions || !Array.isArray(data.questions) || data.questions.length === 0) {
        console.error("Invalid response structure from Gemini:", data);
        // Return fallback mock data for testing
        return NextResponse.json({
          questions: [
            {
              id: "1",
              type: "mcq",
              question: "What is the first step in learning a new skill?",
              options: ["Learning fundamentals", "Building a project", "Reading documentation", "Watching tutorials"],
              answer: "Learning fundamentals"
            },
            {
              id: "2",
              type: "blank",
              question: "The core principle of mastery is ________.",
              options: [],
              answer: "practice"
            }
          ]
        });
      }
      
      return NextResponse.json(data);
    } else {
      throw new Error("No text response from Gemini");
    }
  } catch (error: any) {
    console.error("Gemini Diagnostic Error:", error);
    // Return fallback mock data on error
    return NextResponse.json({
      questions: [
        {
          id: "1",
          type: "mcq",
          question: "What is the primary focus when starting to learn a new skill?",
          options: ["Theoretical knowledge", "Practical application", "Career advancement", "All of the above"],
          answer: "All of the above"
        },
        {
          id: "2",
          type: "blank",
          question: "A key aspect of learning is ________.",
          options: [],
          answer: "problem-solving"
        }
      ]
    });
  }
}
