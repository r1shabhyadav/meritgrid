"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EmployerDashboard() {
  const [isHovering, setIsHovering] = useState(false);
  const [threshold, setThreshold] = useState(80);

  return (
    <div className="bg-surface text-on-surface font-body-base overflow-hidden min-h-screen">
      {/* SideNavBar */}
      <aside className="flex flex-col h-screen fixed left-0 top-0 docked w-64 bg-surface-container-low border-r border-outline-variant z-40">
        <div className="p-6">
          <div className="font-label-caps text-label-caps font-bold text-on-surface tracking-widest">MERITGRID</div>
          <div className="font-data-mono text-[10px] text-primary-fixed-dim mt-1 opacity-70">V2.4.0-CORE</div>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          <Link href="/employer/dashboard" className="bg-surface-container-highest text-primary-fixed-dim border-l-4 border-primary-fixed-dim flex items-center gap-3 px-4 py-3 font-data-mono text-data-mono">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Command
          </Link>
          <a className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:text-on-surface hover:bg-surface-container-high transition-all font-data-mono text-data-mono" href="#">
            <span className="material-symbols-outlined" data-icon="account_tree">account_tree</span> Pipeline
          </a>
          <Link href="/employer/interview-arena" className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:text-on-surface hover:bg-surface-container-high transition-all font-data-mono text-data-mono">
            <span className="material-symbols-outlined" data-icon="videocam">videocam</span> Interview Arena
          </Link>
          <a className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:text-on-surface hover:bg-surface-container-high transition-all font-data-mono text-data-mono" href="#">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span> Analytics
          </a>
          <a className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:text-on-surface hover:bg-surface-container-high transition-all font-data-mono text-data-mono" href="#">
            <span className="material-symbols-outlined" data-icon="rule">rule</span> Screening
          </a>
          <a className="text-on-surface-variant flex items-center gap-3 px-4 py-3 hover:text-on-surface hover:bg-surface-container-high transition-all font-data-mono text-data-mono" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-outline-variant space-y-4">
          <button className="w-full py-3 bg-primary-container text-on-primary-container font-label-caps text-[11px] rounded transition-transform active:scale-95">
            DEPLOY NEW JD
          </button>
          <div className="flex flex-col gap-1">
            <a className="text-on-surface-variant flex items-center gap-3 px-4 py-2 hover:text-primary-fixed-dim text-xs font-data-mono" href="#">
              <span className="material-symbols-outlined text-sm" data-icon="description">description</span> Docs
            </a>
            <a className="text-on-surface-variant flex items-center gap-3 px-4 py-2 hover:text-primary-fixed-dim text-xs font-data-mono" href="#">
              <span className="material-symbols-outlined text-sm" data-icon="help">help</span> Support
            </a>
          </div>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-surface border-b border-outline-variant flex items-center justify-between px-gutter z-30">
        <div className="flex items-center gap-8">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-sm" data-icon="search">search</span>
            <input className="bg-surface-container-low border border-outline-variant rounded pl-10 pr-4 py-1.5 w-64 text-sm focus:border-primary-fixed-dim focus:ring-0 outline-none font-data-mono" placeholder="Search Command..." type="text" />
          </div>
          <nav className="hidden lg:flex gap-6 font-data-mono text-sm">
            <a className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors" href="#">Dashboard</a>
            <a className="text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1" href="#">Contests</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
          </button>
          <div className="h-8 w-8 rounded-full border border-primary-fixed-dim overflow-hidden bg-surface-container-highest">
            {/* Replace with standard placeholder or generic image */}
            <div className="w-full h-full bg-slate-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px] text-white">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 mt-16 p-8 h-[calc(100vh-64px)] overflow-y-auto bg-surface-dim pb-20">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column: Operations */}
          <div className="col-span-12 lg:col-span-9 space-y-8">
            {/* Section Title */}
            <div className="flex items-center justify-between">
              <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-fixed-dim"></span>
                LIVE HIRING OPERATIONS
              </h2>
              <a className="font-data-mono text-xs text-on-surface-variant hover:text-primary-fixed-dim flex items-center gap-1" href="#">
                VIEW ARCHIVE <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            {/* Threshold Bar */}
            <div className="glass-panel rim-light p-5 relative group transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-caps text-xs text-on-surface-variant tracking-widest">GLOBAL HIREABILITY THRESHOLD</span>
                <span className="font-data-mono text-lg font-bold text-primary-fixed-dim">{threshold}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={threshold} 
                onChange={(e) => setThreshold(Number(e.target.value))} 
                className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-fixed-dim" 
              />
              <div className="flex justify-between text-[10px] font-data-mono text-on-surface-variant mt-2">
                <span>0 (NOVEL)</span>
                <span>100 (EXPERT)</span>
              </div>
            </div>

            {/* Horizontal Operation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="glass-panel rim-light p-5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 p-2">
                  <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 font-label-caps">LIVE</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary-fixed-dim transition-colors">Backend Infrastructure Engineer</h3>
                <p className="font-data-mono text-xs text-on-surface-variant mt-1">Status: Node.js / K8s / Terraform</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border border-surface bg-slate-700"></div>
                    <div className="w-6 h-6 rounded-full border border-surface bg-slate-600"></div>
                    <div className="w-6 h-6 rounded-full border border-surface bg-slate-500"></div>
                    <span className="pl-4 text-[10px] text-on-surface-variant self-center">+12 applicants</span>
                  </div>
                  <button className="border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 text-[10px] font-label-caps hover:bg-primary-fixed-dim hover:text-on-primary transition-all">JOIN SESSION</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-panel rim-light p-5 relative opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 p-2">
                  <span className="border border-outline-variant text-on-surface-variant text-[10px] px-2 py-0.5 font-label-caps">STANDBY</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface">AI Research Intern</h3>
                <p className="font-data-mono text-xs text-on-surface-variant mt-1">Status: PyTorch / NLP / LLM Evaluation</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-data-mono text-[10px] text-on-surface-variant">Scheduled for 14:00 UTC</div>
                  <button className="border border-outline text-on-surface-variant px-3 py-1 text-[10px] font-label-caps hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-all">PREVIEW JD</button>
                </div>
              </div>
            </div>

            {/* Hiring System Architecture (The Flow Visual) */}
            <div className="space-y-4 pt-4">
              <h2 className="font-label-caps text-on-surface text-xl flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-fixed-dim"></span>
                SYSTEM WORKFLOW ARCHITECTURE
              </h2>
              <div className="glass-panel rim-light p-8 min-h-[400px] flex flex-col justify-between relative hover:-translate-y-1 transition-all duration-300">
                {/* Connecting Lines Layout */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-full h-[2px] border-b border-dashed border-primary-fixed-dim"></div>
                </div>

                {/* Top Row Nodes */}
                <div className="flex justify-between relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded glass-panel border border-primary-fixed-dim glow-border flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-2xl" data-icon="business">business</span>
                    </div>
                    <span className="font-label-caps text-[10px]">CO. PROFILE</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 translate-y-4">
                    <div className="w-16 h-16 rounded glass-panel border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl" data-icon="description">description</span>
                    </div>
                    <span className="font-label-caps text-[10px]">JD GENERATOR</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded glass-panel border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl" data-icon="person_search">person_search</span>
                    </div>
                    <span className="font-label-caps text-[10px]">SEARCH ENGINE</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 translate-y-4">
                    <div className="w-16 h-16 rounded glass-panel border border-primary-fixed-dim glow-border flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-2xl" data-icon="filter_alt">filter_alt</span>
                    </div>
                    <span className="font-label-caps text-[10px]">SHORTLISTED</span>
                  </div>
                </div>

                {/* Animated Connecting Middle Line */}
                <div className="relative h-12 flex items-center overflow-hidden">
                  <div className="node-line h-[1px] w-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                    <span className="font-data-mono text-[9px] text-primary-fixed-dim animate-pulse">STREAMING_DATA</span>
                    <span className="material-symbols-outlined text-primary-fixed-dim text-xs" data-icon="chevron_right">chevron_right</span>
                  </div>
                </div>

                {/* Bottom Row Nodes */}
                <div className="flex justify-around items-center relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full glass-panel border border-primary-fixed-dim glow-border flex flex-col items-center justify-center p-2 text-center hover:-translate-y-1 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary-fixed-dim text-2xl" data-icon="psychology">psychology</span>
                      <span className="font-data-mono text-[8px] mt-1">CORE AI ENGINE</span>
                    </div>
                    <span className="font-label-caps text-[10px]">PROFILE ANALYTICS</span>
                  </div>

                  {/* Large Center Interview Arena Node */}
                  <Link href="/employer/interview-arena" className="relative group cursor-pointer block hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -inset-4 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all rounded-full"></div>
                    <div className="w-28 h-28 rounded-xl glass-panel border-2 border-primary flex flex-col items-center justify-center p-4 relative">
                      <span className="material-symbols-outlined text-primary text-4xl" data-icon="videocam">videocam</span>
                      <div className="flex gap-1 mt-2">
                        <span className="w-1 h-1 bg-primary rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-on-surface text-surface text-[9px] px-1 font-bold">LIVE</div>
                    </div>
                    <div className="text-center mt-3">
                      <span className="font-label-caps text-[12px] block text-primary">INTERVIEW ARENA</span>
                      <span className="font-data-mono text-[8px] opacity-60">MONITORING PLAGIARISM...</span>
                    </div>
                  </Link>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded glass-panel border border-outline-variant flex items-center justify-center group hover:border-primary-fixed-dim transition-all hover:-translate-y-1 duration-300">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-2xl" data-icon="check_circle">check_circle</span>
                    </div>
                    <span className="font-label-caps text-[10px]">FINAL SELECTION</span>
                  </div>
                </div>

                {/* Status Annotations */}
                <div className="absolute left-8 bottom-8 font-data-mono text-[10px] text-on-surface-variant/50 max-w-[150px]">
                  // SYSTEM_MAP_v2.4<br/>
                  // ACTIVE_NODES: 04<br/>
                  // TRAFFIC: NOMINAL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Panels */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            {/* Hiring Statistics */}
            <section className="glass-panel rim-light p-gutter hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-label-caps text-xs text-on-surface-variant border-b border-outline-variant pb-2 mb-4">OPERATOR STATS</h3>
              <div className="space-y-6">
                <div>
                  <span className="font-data-mono text-[10px] text-on-surface-variant uppercase">Efficiency Rating</span>
                  <div className="h-1 bg-surface-container-highest mt-2 overflow-hidden">
                    <div className="h-full bg-primary-fixed-dim w-3/4"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-data-mono text-[10px] text-on-surface-variant block uppercase">Weekly Interviews</span>
                    <span className="text-xl font-headline-md">42</span>
                  </div>
                  <div>
                    <span className="font-data-mono text-[10px] text-on-surface-variant block uppercase">Avg Score</span>
                    <span className="text-xl font-headline-md">8.4</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Pipeline Activity */}
            <section className="glass-panel rim-light p-gutter hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-label-caps text-xs text-on-surface-variant border-b border-outline-variant pb-2 mb-4">RECENT PIPELINE</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded glass-panel flex items-center justify-center text-xs font-data-mono shrink-0">JD</div>
                  <div>
                    <p className="text-[12px] font-semibold">Backend JD Published</p>
                    <p className="text-[10px] text-on-surface-variant font-data-mono">2 mins ago • ID: 89012</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-sm" data-icon="person">person</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold">New Applicant: Sarah C.</p>
                    <p className="text-[10px] text-on-surface-variant font-data-mono">15 mins ago • Fit Score: 94%</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-error-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-error text-sm" data-icon="block">block</span>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold">Plagiarism Flagged</p>
                    <p className="text-[10px] text-on-surface-variant font-data-mono">1h ago • Candidate #341</p>
                  </div>
                </div>
                <button className="w-full text-center text-[10px] font-label-caps text-on-surface-variant hover:text-primary-fixed-dim pt-2 border-t border-outline-variant">VIEW FULL LOG</button>
              </div>
            </section>

            {/* System Health */}
            <section className="glass-panel rim-light p-gutter hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-4">
                <h3 className="font-label-caps text-xs text-on-surface-variant">SYSTEM STATUS</h3>
                <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full animate-pulse"></span>
              </div>
              <div className="space-y-3 font-data-mono text-[11px]">
                <div className="flex justify-between items-center bg-surface-container-low p-2">
                  <span className="text-on-surface-variant">API LATENCY</span>
                  <span className="text-primary-fixed-dim">18ms</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-low p-2">
                  <span className="text-on-surface-variant">QUEUE LOAD</span>
                  <span className="text-secondary-fixed-dim">12%</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-low p-2">
                  <span className="text-on-surface-variant">WORKER NODES</span>
                  <span className="text-primary-fixed-dim">402/402</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container-low p-2">
                  <span className="text-on-surface-variant">GPU UPTIME</span>
                  <span className="text-primary-fixed-dim">99.9%</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-1 bg-surface-container-lowest bg-opacity-90 backdrop-blur-md border-t border-outline-variant h-8">
        <div className="font-label-caps text-[10px] text-on-surface-variant">© 2024 MERITGRID PROTOCOLS</div>
        <div className="flex gap-6 font-data-mono text-[10px] uppercase">
          <span className="text-on-surface-variant">CONNECTED: <span className="text-primary-fixed-dim">US-EAST-1</span></span>
          <span className="text-on-surface-variant">CPU: <span className="text-primary-fixed-dim">12%</span></span>
          <span className="text-on-surface-variant">LATENCY: <span className="text-primary-fixed-dim">18MS</span></span>
          <span className="text-on-surface-variant">UPTIME: <span className="text-primary-fixed-dim">99.9%</span></span>
        </div>
      </footer>

      {/* Interactive Layer: Terminal Action Floating FAB */}
      <button className="fixed bottom-12 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50" title="Quick Command">
        <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
      </button>
    </div>
  );
}
