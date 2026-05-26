"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const skillData = [
  { subject: 'React', A: 120, fullMark: 150 },
  { subject: 'System Design', A: 98, fullMark: 150 },
  { subject: 'CSS/Tailwind', A: 140, fullMark: 150 },
  { subject: 'Node.js', A: 85, fullMark: 150 },
  { subject: 'Accessibility', A: 110, fullMark: 150 },
];

const eloData = [
  { name: 'W1', score: 1200 },
  { name: 'W2', score: 1350 },
  { name: 'W3', score: 1310 },
  { name: 'W4', score: 1480 },
  { name: 'W5', score: 1620 },
  { name: 'W6', score: 1742 },
];

export default function PortfolioPage() {
  const [projectLink, setProjectLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{score: number, feedback: string, hireabilityIndexDelta: number} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectLink) return;
    setLoading(true);
    
    try {
      const res = await fetch("/api/ai/evaluate-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectLink }),
      });
      const data = await res.json();
      if (data.feedback) {
        setFeedback(data);
      }
    } catch (error) {
      console.error(error);
    }
    
    setLoading(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background industrial-grid">
      <aside className="hidden md:flex flex-col h-full py-base bg-surface-container border-r border-outline-variant w-64 shrink-0">
        <div className="px-6 py-8">
          <h1 className="font-headline-md text-headline-md text-on-surface">MeritGrid</h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">V2.4.0-CORE</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <Link href="/roadmap" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded">
            <span className="material-symbols-outlined">map</span> Roadmap
          </Link>
          <Link href="/playground" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-variant transition-all rounded">
            <span className="material-symbols-outlined">sports_esports</span> Playground
          </Link>
          <Link href="/portfolio" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary transition-all">
            <span className="material-symbols-outlined">analytics</span> Portfolio
          </Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-surface/30 backdrop-blur-sm">
        <header className="flex justify-between items-center w-full px-margin-md h-16 bg-surface border-b border-outline-variant sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <span className="font-headline-md text-headline-md font-bold text-primary">Your Portfolio & Ratings</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Log Out</Link>
          </div>
        </header>

        <div className="p-margin-md flex-1 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Charts */}
          <div className="lg:col-span-1 space-y-8">
            <div className="ui-panel p-6 bg-surface">
              <h2 className="text-label-caps text-outline uppercase tracking-widest mb-4">Skill Proficiency Radar</h2>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#D1D5DB" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar name="Proficiency" dataKey="A" stroke="#283618" fill="#606C38" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="ui-panel p-6 bg-surface">
              <h2 className="text-label-caps text-outline uppercase tracking-widest mb-4">Hireability Index History</h2>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={eloData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" />
                    <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 10 }} />
                    <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} domain={['dataMin - 100', 'dataMax + 100']} />
                    <Tooltip contentStyle={{ backgroundColor: '#F0EFEB', borderColor: '#D1D5DB', fontSize: 12 }} />
                    <Line type="monotone" dataKey="score" stroke="#283618" strokeWidth={3} dot={{ r: 4, fill: '#DDA15E' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column: Projects */}
          <div className="lg:col-span-2 space-y-8">
            <div className="ui-panel p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-4xl text-primary">upload_file</span>
                <div>
                  <h2 className="text-headline-md text-on-surface">Submit Case Study</h2>
                  <p className="text-body-sm text-on-surface-variant">Provide a link to your deployed project or GitHub repository for AI evaluation.</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="url"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  placeholder="https://github.com/your-username/repo"
                  className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-all rounded"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-on-primary font-bold py-3 uppercase tracking-widest hover:opacity-90 transition-opacity rounded disabled:opacity-50"
                >
                  {loading ? "AI Evaluating..." : "Submit for Evaluation"}
                </button>
              </form>

              {feedback && (
                <div className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded">
                  <h3 className="text-label-md text-primary uppercase tracking-widest mb-2">AI Feedback Received</h3>
                  <p className="text-body-sm text-on-surface-variant">{feedback.feedback}</p>
                  <div className="mt-4 flex gap-4">
                    <span className="px-3 py-1 bg-surface-container text-primary font-bold rounded border border-outline-variant">Score: {feedback.score}/100</span>
                    <span className="px-3 py-1 bg-surface-container text-secondary font-bold rounded border border-outline-variant">Hireability Index: +{feedback.hireabilityIndexDelta}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="ui-panel p-6">
              <h2 className="text-headline-md text-on-surface mb-6">Verified Projects</h2>
              <div className="space-y-4">
                <div className="p-4 border border-outline-variant rounded hover:border-primary transition-colors bg-surface-container-lowest">
                  <div className="flex justify-between items-start">
                    <h3 className="text-body-lg font-bold text-on-surface">E-commerce Microservices</h3>
                    <span className="text-primary font-bold">92/100</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-2">Built using Node.js, Express, and PostgreSQL.</p>
                </div>
                <div className="p-4 border border-outline-variant rounded hover:border-primary transition-colors bg-surface-container-lowest">
                  <div className="flex justify-between items-start">
                    <h3 className="text-body-lg font-bold text-on-surface">React Dashboard</h3>
                    <span className="text-primary font-bold">88/100</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mt-2">Responsive admin dashboard with Next.js and Tailwind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
