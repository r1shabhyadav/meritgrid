"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Skill {
  name: string;
  proficiency: string;
}

interface Project {
  title: string;
  score: number;
}

interface Candidate {
  id: number;
  name: string;
  email: string;
  hireabilityIndex: number;
  location: string;
  skills: Skill[];
  projects: Project[];
}

export default function EmployerDashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [skillFilter, setSkillFilter] = useState("");
  const [minScore, setMinScore] = useState(1000);

  useEffect(() => {
    fetch('/api/candidates')
      .then(res => res.json())
      .then(data => {
        // Ensure data is an array before setting
        setCandidates(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setCandidates([]);
        setLoading(false);
      });
  }, []);

  const [aiRanked, setAiRanked] = useState(false);

  let filteredCandidates = candidates.filter(c => {
    const meetsScore = c.hireabilityIndex >= minScore;
    const meetsSkill = skillFilter === "" || c.skills.some(s => s.name.toLowerCase().includes(skillFilter.toLowerCase()));
    return meetsScore && meetsSkill;
  });

  if (aiRanked) {
    filteredCandidates = [...filteredCandidates].sort((a, b) => b.hireabilityIndex - a.hireabilityIndex);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-background industrial-grid">
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[200px] border-r border-outline-variant bg-surface-container-low flex-col py-lg z-50">
        <div className="px-md mb-xl mt-6">
          <div className="flex items-center gap-sm">
            <span className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">MeritGrid</span>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant">Recruiter Intel</div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link href="/employer/dashboard" className="flex items-center gap-md bg-surface-container-highest text-primary border-l-2 border-primary py-2 px-md">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </Link>
          <a className="flex items-center gap-md text-on-surface-variant hover:bg-surface-container-high py-2 px-md transition-colors" href="#">
            <span className="material-symbols-outlined">work</span>
            <span className="font-body-md text-body-md">Open Roles</span>
          </a>
        </nav>
      </aside>

      <main className="md:ml-[200px] flex-1 flex flex-col h-screen overflow-hidden bg-surface/30 backdrop-blur-sm">
        <header className="flex justify-between items-center h-16 w-full px-8 border-b border-outline-variant bg-surface sticky top-0 shrink-0 z-40">
          <div className="flex items-center gap-lg">
            <span className="font-headline-md text-headline-md font-bold text-primary">Employer Intelligence</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">Log Out</Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-surface-lowest flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant border-b border-outline-variant shrink-0">
            <div className="bg-surface-container-low p-4 flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Active Jobs</span>
              <span className="font-headline-xl text-headline-xl text-primary">2</span>
            </div>
            <div className="bg-surface-container-low p-4 flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Total Candidates</span>
              <span className="font-headline-xl text-headline-xl text-primary">{candidates.length}</span>
            </div>
            <div className="bg-surface-container-low p-4 flex flex-col gap-1">
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Filtered Matches</span>
              <span className="font-headline-xl text-headline-xl text-primary">{filteredCandidates.length}</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-12 gap-px bg-outline-variant">
            <div className="col-span-12 lg:col-span-9 bg-background flex flex-col">
              <div className="flex flex-col gap-4 px-6 py-4 border-b border-outline-variant bg-surface-container-low">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">group</span>
                    <span className="font-headline-md text-headline-md uppercase tracking-tight">Candidate Discovery</span>
                  </div>
                </div>
                
                {/* Advanced Filters */}
                <div className="flex flex-wrap items-center gap-6 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-on-surface-variant">REQUIRED SKILL</label>
                    <select 
                      value={skillFilter} 
                      onChange={e => setSkillFilter(e.target.value)}
                      className="bg-surface border border-outline-variant text-on-surface px-3 py-1.5 rounded focus:outline-none focus:border-primary text-body-sm"
                    >
                      <option value="">Any Skill</option>
                      <option value="React">React</option>
                      <option value="Node.js">Node.js</option>
                      <option value="Docker">Docker</option>
                      <option value="DevOps">DevOps</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-on-surface-variant">MIN HIREABILITY INDEX: {minScore}</label>
                    <input 
                      type="range" 
                      min="1000" 
                      max="2000" 
                      step="50"
                      value={minScore}
                      onChange={e => setMinScore(Number(e.target.value))}
                      className="w-48 accent-primary"
                    />
                  </div>
                  
                  <button 
                    onClick={() => setAiRanked(!aiRanked)}
                    className={`ml-auto px-4 py-2 font-bold uppercase tracking-widest text-label-sm border rounded flex items-center gap-2 ${aiRanked ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-outline-variant text-primary hover:bg-surface-container-high'}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    {aiRanked ? 'AI Sorted: Best Fit' : 'Sort by AI Fit'}
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant bg-surface-container-lowest">
                      <th className="px-6 py-3 font-label-xs text-label-xs text-on-surface-variant uppercase">Candidate</th>
                      <th className="px-6 py-3 font-label-xs text-label-xs text-on-surface-variant uppercase">Top Skills</th>
                      <th className="px-6 py-3 font-label-xs text-label-xs text-on-surface-variant uppercase">Projects</th>
                      <th className="px-6 py-3 font-label-xs text-label-xs text-on-surface-variant uppercase">Hireability Index</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-on-surface-variant">
                          <span className="material-symbols-outlined animate-spin mb-2">sync</span>
                          <p>Fetching from Database...</p>
                        </td>
                      </tr>
                    ) : filteredCandidates.map(c => (
                      <tr key={c.id} className="hover:bg-surface-container-high transition-colors cursor-pointer">
                        <td className="px-6 py-4">
                          <div className="font-body-md text-body-md text-primary">{c.name}</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">{c.location}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 flex-wrap max-w-xs">
                            {c.skills.map(s => (
                              <span key={s.name} className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface text-[10px] uppercase font-bold tracking-widest border border-outline-variant">
                                {s.name} ({s.proficiency})
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-body-md text-body-md text-primary">{c.projects.length}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">{c.hireabilityIndex}</span>
                            <div className="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: `${Math.min(((c.hireabilityIndex - 1000) / 1000) * 100, 100)}%` }}></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {!loading && filteredCandidates.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-on-surface-variant">
                          <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
                          <p>No candidates match these filters.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="hidden lg:flex col-span-3 bg-surface-container-low border-l border-outline-variant flex-col">
              <div className="p-6 border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="font-headline-md text-headline-md uppercase tracking-tight">System Events</span>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-body-sm text-body-sm text-primary">
                      Connected to Neon PostgreSQL Database. Filters active.
                    </p>
                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase font-semibold">Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
