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

    const prompt = `You are an expert career counselor, technical curriculum designer, and industry mentor.
Generate a highly personalized, comprehensive learning roadmap for the skill goal: "${goal}".
The learner just completed a rigorous 20-question diagnostic test and scored ${diagnosticScore}/20.
Based on this empirical score, their objective skill level is: ${derivedExperience}.

CRITICAL REQUIREMENT: The entire output (including phase names, topic names, resource descriptions, case study details) MUST be written in ${language || 'English'}. If the language is Hindi, use Devangari script. If Tamil, use Tamil script, etc.

Return the response strictly as a JSON object matching this schema:
{
  "title": "Pathway: [Skill Name] (${derivedExperience} Track)",
  "phases": [
    {
      "id": 1,
      "name": "[Phase Name]",
      "duration": "[e.g., 2 Weeks]",
      "topics": [
        {
          "name": "[Topic Name]",
          "timeToFinish": "[e.g., 3 Days, 1 Week]",
          "freeResources": ["[Free Resource 1 - URL or name]", "[Free Resource 2]"],
          "caseBasedProblems": ["[Real-world problem/use case 1]", "[Real-world problem/use case 2]"]
        }
      ],
      "status": "locked"
    }
  ],
  "caseStudy": {
    "title": "[Industry Case Study Title]",
    "description": "[Detailed real-world industry case study]",
    "technologies": ["[Tech 1]", "[Tech 2]"],
    "challenges": ["[Challenge 1]", "[Challenge 2]"]
  }
}
Provide 3 logical phases with 3-4 topics each, tailored strictly to their ${derivedExperience} experience level. Include practical, free, publicly available resources and real-world problems. Output nothing but valid JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    if (response.text) {
      const roadmapData = JSON.parse(response.text);
      
      // Validate structure
      if (!roadmapData.title || !roadmapData.phases || !Array.isArray(roadmapData.phases)) {
        console.error("Invalid roadmap structure:", roadmapData);
        // Return fallback data
        return NextResponse.json({
          title: `Pathway: Professional Development (${derivedExperience} Track)`,
          phases: [
            {
              id: 1,
              name: "Fundamentals & Setup",
              duration: "2 Weeks",
              topics: [
                {
                  name: "Core Concepts",
                  timeToFinish: "3 Days",
                  freeResources: ["Documentation", "Free Tutorial Series"],
                  caseBasedProblems: ["Build your first project", "Understand core principles through practice"]
                },
                {
                  name: "Development Environment",
                  timeToFinish: "2 Days",
                  freeResources: ["Setup Guide", "Community Forum"],
                  caseBasedProblems: ["Configure your workspace", "Debug common setup issues"]
                }
              ],
              status: "locked"
            },
            {
              id: 2,
              name: "Intermediate Skills",
              duration: "3 Weeks",
              topics: [
                {
                  name: "Advanced Techniques",
                  timeToFinish: "1 Week",
                  freeResources: ["Advanced Tutorial", "Open Source Examples"],
                  caseBasedProblems: ["Optimize performance", "Handle edge cases"]
                }
              ],
              status: "locked"
            },
            {
              id: 3,
              name: "Mastery & Projects",
              duration: "2 Weeks",
              topics: [
                {
                  name: "Real-World Application",
                  timeToFinish: "1 Week",
                  freeResources: ["Industry Best Practices", "Code Review Resources"],
                  caseBasedProblems: ["Build production-grade solution", "Contribute to open source"]
                }
              ],
              status: "locked"
            }
          ],
          caseStudy: {
            title: "Industry Case Study: Real-World Application",
            description: "A comprehensive industry case study showcasing real-world application of skills learned.",
            technologies: ["Core Technology", "Supporting Tools"],
            challenges: ["Scalability", "Performance Optimization", "User Experience"]
          }
        });
      }
      
      return NextResponse.json(roadmapData);
    } else {
      throw new Error("No text response from Gemini");
    }
  } catch (error: any) {
    console.error("Gemini Roadmap Error:", error);
    // Return fallback data on error
    return NextResponse.json({
      title: "Pathway: Professional Development (Beginner Track)",
      phases: [
        {
          id: 1,
          name: "Fundamentals & Setup",
          duration: "2 Weeks",
          topics: [
            {
              name: "Core Concepts",
              timeToFinish: "3 Days",
              freeResources: ["Documentation", "Free Tutorial Series"],
              caseBasedProblems: ["Build your first project", "Understand core principles"]
            }
          ],
          status: "locked"
        }
      ],
      caseStudy: {
        title: "Industry Case Study: Real-World Application",
        description: "A comprehensive case study on real-world application of the skills you'll learn.",
        technologies: ["Core Technology"],
        challenges: ["Implementation", "Optimization"]
      }
    });
  }
}
