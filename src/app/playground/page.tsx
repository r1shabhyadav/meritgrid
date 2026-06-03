"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<"challenge" | "leaderboard">("challenge");
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{score: number, feedback: string} | null>(null);

  const mockLeaderboard = [
    { rank: 1, name: "Ananya Sharma", score: 980 },
    { rank: 2, name: "Rahul Verma", score: 850 },
    { rank: 3, name: "Priya Patel", score: 720 },
    { rank: 4, name: "Vikram Singh", score: 610 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    setSubmitting(true);
    
    // Mocking an immediate automated test suite run
    setTimeout(() => {
      setResult({
        score: 85,
        feedback: "Pass: 4/5 Tests. Time Complexity: O(n log n). Space Complexity: O(1). Great job, but edge cases for empty arrays failed."
      });
      setSubmitting(false);
    }, 2000);
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
          <Link href="/playground" className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md bg-secondary-container text-on-secondary-container font-bold border-l-4 border-primary transition-all rounded">
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
            <span className="font-headline-md text-headline-md font-bold text-primary">Competitive Playground</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">Log Out</Link>
          </div>
        </header>

        <div className="p-margin-md flex-1 max-w-5xl mx-auto w-full">
          
          <div className="flex gap-4 mb-8 border-b border-outline-variant pb-4">
            <button 
              onClick={() => setActiveTab("challenge")}
              className={`px-6 py-2 font-bold uppercase tracking-widest text-label-md rounded transition-colors ${activeTab === 'challenge' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant'}`}
            >
              Active Challenge
            </button>
            <button 
              onClick={() => setActiveTab("leaderboard")}
              className={`px-6 py-2 font-bold uppercase tracking-widest text-label-md rounded transition-colors ${activeTab === 'leaderboard' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant'}`}
            >
              Global Leaderboard
            </button>
          </div>

          {activeTab === "challenge" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ui-panel p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-label-caps text-primary uppercase tracking-widest">Algorithmic Sprint</span>
                    <h2 className="text-headline-md text-on-surface mt-1">Case: Transaction Batch Normalization (Medium)</h2>
                  </div>
                  <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded text-label-caps text-on-surface font-bold">15:00 MIN</span>
                </div>
                
                <div className="space-y-4 text-body-sm text-on-surface-variant">
                  <p>You are a junior developer at Acme Payments. The payments team receives transaction batches where failed transactions are marked with <strong>status: 0</strong> and successful ones with <strong>status: 1</strong>. They need a utility that reorders the array so that all successful transactions appear first while keeping the original relative order.</p>
                  <p><strong>Requirements:</strong> Implement <code>reorderTransactions(transactions)</code> in-place (no extra array), preserve relative order, and aim for O(n) time.</p>

                  <div className="bg-surface p-4 border border-outline-variant rounded font-code-sm">
                    <pre className="whitespace-pre-wrap"><code>Input: {`[{"id":1,"status":0},{"id":2,"status":1},{"id":3,"status":0},{"id":4,"status":1}]`}</code></pre>
                    <pre className="whitespace-pre-wrap mt-2"><code>Output: {`[{"id":2,"status":1},{"id":4,"status":1},{"id":1,"status":0},{"id":3,"status":0}]`}</code></pre>
                  </div>
                </div>
              </div>

              <div className="ui-panel flex flex-col overflow-hidden">
                <div className="bg-surface-container-highest px-4 py-2 border-b border-outline-variant flex justify-between items-center">
                  <span className="font-code-sm text-on-surface-variant">solution.js</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">code</span>
                </div>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <textarea 
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="flex-1 bg-background text-primary font-code-sm p-4 focus:outline-none resize-none"
                    placeholder={`/* You are a junior developer at Acme Payments.
  Implement reorderTransactions(transactions) in-place to move failed transactions (status:0)
  to the end while preserving relative order of successful ones. */\nfunction reorderTransactions(transactions) {\n  // Write your logic here\n}`}
                    spellCheck={false}
                  ></textarea>
                  
                  <div className="p-4 border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
                    <button type="submit" disabled={submitting} className="bg-primary text-on-primary font-bold px-6 py-2 uppercase tracking-widest text-label-caps rounded hover:opacity-90 disabled:opacity-50">
                      {submitting ? 'Running Tests...' : 'Submit & Execute'}
                    </button>
                  </div>
                </form>
              </div>

              {result && (
                <div className="col-span-1 md:col-span-2 ui-panel p-6 border-l-4 border-primary bg-primary/10">
                  <h3 className="text-label-md text-primary uppercase tracking-widest mb-2">Automated Test Results</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-surface-container text-primary font-bold rounded border border-outline-variant text-label-md">Score: {result.score}/100</span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant font-code-sm">{result.feedback}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="ui-panel overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface-container-lowest">
                    <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase">Rank</th>
                    <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase">Candidate Name</th>
                    <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase text-right">Weekly Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {mockLeaderboard.map((user, idx) => (
                    <tr key={user.name} className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 font-headline-md text-primary">{user.rank}</td>
                      <td className="px-6 py-4 font-body-md text-on-surface flex items-center gap-3">
                        {idx === 0 && <span className="material-symbols-outlined text-[#FFD700]">social_leaderboard</span>}
                        {user.name}
                      </td>
                      <td className="px-6 py-4 font-body-md text-primary text-right font-bold">{user.score} pt</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
