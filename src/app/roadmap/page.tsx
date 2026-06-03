"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PhaseInteractiveSection } from "./page-interactive";

interface Phase {
  id: number;
  name: string;
  duration: string;
  resources: string[];
  status: string;
}

interface Roadmap {
  title: string;
  phases: Phase[];
  caseStudy: {
    title: string;
    description: string;
  };
}

interface Question {
  id: string;
  type: "mcq" | "blank";
  question: string;
  options: string[];
  answer: string;
}

export default function RoadmapPage() {
  const [step, setStep] = useState<"goal" | "diagnostic" | "generating-diagnostic" | "diagnostic-quiz" | "generating-roadmap" | "roadmap">("goal");
  const [goal, setGoal] = useState("");
  const [language, setLanguage] = useState<string>("English");
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
    const [selectedTopic, setSelectedTopic] = useState<{ phaseId: number; topicName: string } | null>(null);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbackSummary, setFeedbackSummary] = useState("");

  const startDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    setStep("diagnostic");
  };

  const submitLanguage = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("generating-diagnostic");

    try {
      const response = await fetch("/api/ai/generate-diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, language }),
      });
      const data = await response.json();
      if (data.questions) {
        setQuestions(data.questions);
        setStep("diagnostic-quiz");
      } else {
        throw new Error("No questions returned");
      }
    } catch (err) {
      console.error(err);
      setStep("goal");
    }
  };

  const handleAnswerChange = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const submitQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate Score
    let score = 0;
    questions.forEach(q => {
      const userAnswer = answers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    setStep("generating-roadmap");

    try {
      const response = await fetch("/api/ai/generate-roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          goal,
          diagnosticScore: score,
          language
        }),
      });
      const data = await response.json();
      setRoadmap(data);
      setStep("roadmap");
    } catch (err) {
      console.error(err);
      setStep("goal");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background industrial-grid">
      <aside className="hidden md:flex flex-col h-full py-base bg-surface-container border-r border-outline-variant w-64 shrink-0">
        <div className="px-6 py-8">
          <h1 className="font-headline-md text-headline-md text-on-surface">MeritGrid</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">V2.4.0-CORE</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <Link href="/roadmap" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary transition-all rounded">
            <span className="material-symbols-outlined">map</span> Roadmap
          </Link>
          <Link href="/playground" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded">
            <span className="material-symbols-outlined">sports_esports</span> Playground
          </Link>
          <Link href="/portfolio" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded">
            <span className="material-symbols-outlined">analytics</span> Portfolio
          </Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-surface/30 backdrop-blur-sm">
        <header className="flex justify-between items-center w-full px-margin-md h-16 bg-surface border-b border-outline-variant sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <span className="font-headline-md text-headline-md font-bold text-primary">AI Roadmap Generator</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">Log Out</Link>
          </div>
        </header>

        <div className="p-margin-md flex-1 max-w-4xl mx-auto w-full pb-32">
          {step === "goal" && (
            <div className="ui-panel p-8 text-center space-y-6 max-w-[512px] mx-auto mt-20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full"></div>
              <span className="material-symbols-outlined text-primary text-6xl">auto_awesome</span>
              <h2 className="text-headline-lg text-on-surface">Declare Your Goal</h2>
              <p className="text-body-lg text-on-surface-variant">Tell us what you want to learn, and our AI will generate a strict, industry-aligned roadmap for you.</p>
              
              <form onSubmit={startDiagnostic} className="flex flex-col gap-4 mt-8">
                <input 
                  type="text" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Fullstack Developer, UX Designer"
                  className="w-full bg-surface border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all rounded"
                  required
                />
                <button type="submit" className="w-full bg-primary text-on-primary font-bold py-3 uppercase tracking-widest hover:opacity-90 transition-opacity rounded">
                  Continue to Diagnostic
                </button>
              </form>
            </div>
          )}

          {step === "diagnostic" && (
            <div className="ui-panel p-8 space-y-6 max-w-[512px] mx-auto mt-20 shadow-2xl relative">
              <div className="flex items-center gap-4 border-b border-outline-variant pb-4">
                <span className="material-symbols-outlined text-primary text-4xl">language</span>
                <div>
                  <h2 className="text-headline-md text-on-surface">Localization</h2>
                  <p className="text-body-sm text-on-surface-variant">Select your preferred test language.</p>
                </div>
              </div>
              
              <form onSubmit={submitLanguage} className="flex flex-col gap-8 mt-4">
                <div>
                  <label className="block text-label-sm font-bold text-outline uppercase tracking-widest mb-2">Language</label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-surface border border-outline-variant px-4 py-3 text-on-surface font-body-lg focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="Tamil">Tamil (தமிழ்)</option>
                    <option value="Telugu">Telugu (తెలుగు)</option>
                    <option value="Bengali">Bengali (বাংলা)</option>
                    <option value="Marathi">Marathi (मराठी)</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-primary text-on-primary font-bold py-3 uppercase tracking-widest text-label-md rounded hover:opacity-90 flex items-center justify-center gap-2">
                  Generate AI Diagnostic <span className="material-symbols-outlined">quiz</span>
                </button>
              </form>
            </div>
          )}

          {step === "generating-diagnostic" && (
            <div className="flex flex-col items-center justify-center mt-32 space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl animate-spin">sync</span>
              <p className="text-primary font-label-md uppercase tracking-widest animate-pulse">Generating 20-Question Diagnostic Quiz...</p>
            </div>
          )}

          {step === "diagnostic-quiz" && (
            <div className="max-w-[672px] mx-auto space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-headline-lg text-on-surface">Skill Diagnostic</h2>
                <p className="text-body-lg text-on-surface-variant">Complete this 20-question quiz to empirically determine your starting point for {goal}.</p>
              </div>

              <form onSubmit={submitQuiz} className="space-y-8">
                {questions.map((q, idx) => (
                  <div key={q.id || idx} className="ui-panel p-6 bg-surface shadow-md">
                    <div className="flex gap-4">
                      <span className="text-primary font-bold font-headline-md">{idx + 1}.</span>
                      <div className="flex-1">
                        <p className="text-body-lg font-bold text-on-surface mb-4 leading-relaxed">{q.question}</p>
                        
                        {q.type === "mcq" && q.options && (
                          <div className="space-y-3">
                            {q.options.map((opt, oIdx) => (
                              <label key={oIdx} className="flex items-start gap-3 p-3 border border-outline-variant rounded cursor-pointer hover:bg-surface-container-low transition-colors">
                                <input 
                                  type="radio" 
                                  name={`question-${q.id}`} 
                                  value={opt}
                                  onChange={() => handleAnswerChange(q.id, opt)}
                                  required
                                  className="mt-1 accent-primary"
                                />
                                <span className="text-body-md text-on-surface">{opt}</span>
                              </label>
                            ))}
                          </div>
                        )}

                        {q.type === "blank" && (
                          <div className="mt-2">
                            <input 
                              type="text" 
                              placeholder="Type your answer here..."
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              required
                              className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <button type="submit" className="w-full bg-primary text-on-primary font-bold py-4 uppercase tracking-widest text-label-md rounded hover:opacity-90 flex items-center justify-center gap-2 sticky bottom-8 shadow-2xl">
                  Submit Quiz & Generate Roadmap <span className="material-symbols-outlined">auto_awesome</span>
                </button>
              </form>
            </div>
          )}

          {step === "generating-roadmap" && (
            <div className="flex flex-col items-center justify-center mt-32 space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl animate-spin">sync</span>
              <p className="text-primary font-label-md uppercase tracking-widest animate-pulse">Analyzing Score & Compiling Roadmap...</p>
            </div>
          )}

          {step === "roadmap" && roadmap && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <h1 className="text-headline-lg text-on-surface">{roadmap.title}</h1>
                <button onClick={() => { setRoadmap(null); setStep("goal"); }} className="text-on-surface-variant hover:text-on-surface text-sm underline">Start Over</button>
              </div>

              <div className="space-y-6">
                {roadmap.phases.map((phase, i) => (
                  <div key={phase.id} className="ui-panel p-6 flex flex-col md:flex-row gap-6 hover:border-primary transition-colors">
                    <div className="md:w-1/4 border-r border-outline-variant/30 pr-6">
                      <span className="text-label-sm text-primary uppercase tracking-widest block mb-2">Phase 0{i + 1}</span>
                      <h3 className="text-headline-md text-on-surface">{phase.name}</h3>
                      <p className="text-body-sm text-on-surface-variant mt-2">{phase.duration}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-3">Curated Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.resources.map(res => (
                          <span key={res} className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-label-md text-on-surface">
                            {res}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-on-primary font-bold text-label-md uppercase rounded transition-colors">
                          Begin Phase
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                <PhaseInteractiveSection 
                  roadmap={roadmap}
                  expandedPhase={expandedPhase}
                  setExpandedPhase={setExpandedPhase}
                  selectedTopic={selectedTopic}
                  setSelectedTopic={setSelectedTopic}
                  showFeedbackModal={showFeedbackModal}
                  setShowFeedbackModal={setShowFeedbackModal}
                  feedbackSummary={feedbackSummary}
                  setFeedbackSummary={setFeedbackSummary}
                />

              <div className="mt-12 ui-panel p-8 bg-[linear-gradient(45deg,rgba(43,45,49,0.5),transparent)] border-primary/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <span className="material-symbols-outlined text-6xl text-primary">verified</span>
                </div>
                <h3 className="text-label-sm text-primary uppercase tracking-widest mb-2">Proof of Work</h3>
                <h2 className="text-headline-md text-on-surface mb-2">{roadmap.caseStudy.title}</h2>
                <p className="text-body-lg text-on-surface-variant">{roadmap.caseStudy.description}</p>
                <button className="mt-6 bg-surface-container-highest border border-outline-variant text-on-surface px-6 py-2 rounded font-bold hover:bg-surface-variant transition-colors opacity-50 cursor-not-allowed">
                  Locked (Complete phases first)
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
