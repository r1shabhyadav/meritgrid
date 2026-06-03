"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InterviewArena() {
  useEffect(() => {
    // Micro-interaction for the cursor in the code editor
    const cursorInterval = setInterval(() => {
      const cursors = document.querySelectorAll('.text-primary-fixed-dim-cursor');
      cursors.forEach((c: any) => {
        if (c.innerText === '_') {
          c.style.visibility = c.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }
      });
    }, 530);

    // Simple mock telemetry update
    const telemetryInterval = setInterval(() => {
      const cpu = Math.floor(Math.random() * (15 - 8) + 8);
      const mem = (Math.random() * (1.6 - 1.3) + 1.3).toFixed(1);
      const latency = Math.floor(Math.random() * (18 - 11) + 11);
      
      document.querySelectorAll('footer span').forEach((span: any) => {
        if (span.innerText.includes('CPU:')) span.innerText = `CPU: ${cpu}%`;
        if (span.innerText.includes('MEM:')) span.innerText = `MEM: ${mem}GB`;
        if (span.innerText.includes('LATENCY:')) span.innerText = `LATENCY: ${latency}ms`;
      });
    }, 3000);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(telemetryInterval);
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-base overflow-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        .scanline {
            width: 100%;
            height: 2px;
            background: rgba(40, 54, 24, 0.3);
            position: absolute;
            z-index: 10;
            animation: scan 4s linear infinite;
        }
        @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
        }
      `}} />
      
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full flex flex-col justify-between py-container-margin w-64 border-r border-outline-variant bg-surface-container-lowest z-40">
        <div>
          <div className="px-6 mb-10">
            <h1 className="text-headline-md font-display-lg font-bold text-on-background">MeritGrid</h1>
            <p className="font-label-caps text-label-caps opacity-50">V2.4.0-CORE</p>
          </div>
          <nav className="flex flex-col gap-1">
            <Link href="/employer/dashboard" className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface px-4 py-3 transition-colors hover:bg-surface-container-low">
              <span className="material-symbols-outlined">home</span>
              <span className="font-label-caps text-label-caps">Company Home</span>
            </Link>
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface px-4 py-3 transition-colors hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined">work</span>
              <span className="font-label-caps text-label-caps">Job Postings</span>
            </a>
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface px-4 py-3 transition-colors hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined">search</span>
              <span className="font-label-caps text-label-caps">Candidate Search</span>
            </a>
            <Link href="/employer/interview-arena" className="flex items-center gap-3 bg-surface-variant/30 text-primary-fixed-dim border-l-2 border-primary-fixed-dim px-4 py-3">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>video_chat</span>
              <span className="font-label-caps text-label-caps">Interviews</span>
            </Link>
            <a className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface px-4 py-3 transition-colors hover:bg-surface-container-low" href="#">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-caps text-label-caps">Settings</span>
            </a>
          </nav>
        </div>
        <div className="px-4">
          <button className="w-full py-3 mb-6 bg-primary-fixed-dim text-on-primary font-label-caps text-label-caps font-bold hover:opacity-90 active:scale-95 transition-all rounded">
            Create New Job JD
          </button>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-3 text-on-surface-variant opacity-60 px-4 py-2 hover:opacity-100 transition-opacity" href="#">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-label-caps text-label-caps">Hireability Index</span>
            </a>
            <a className="flex items-center gap-3 text-on-surface-variant opacity-60 px-4 py-2 hover:opacity-100 transition-opacity" href="#">
              <span className="material-symbols-outlined">help_center</span>
              <span className="font-label-caps text-label-caps">Support</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* MAIN CANVAS */}
      <main className="ml-64 flex-1 flex flex-col relative overflow-hidden h-screen">
        {/* TOP NAV BAR */}
        <header className="fixed top-0 right-0 left-64 z-50 flex items-center justify-between px-container-margin w-[calc(100%-16rem)] h-16 border-b border-outline-variant bg-surface-container-lowest/80 backdrop-blur-md">
          <div className="flex items-center gap-8">
            <span className="font-display-lg text-headline-md font-bold tracking-tight text-on-background">Arena <span className="text-primary-fixed-dim">PLAYGROUND</span></span>
            <div className="flex gap-6">
              <Link className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps" href="/employer/dashboard">Dashboard</Link>
              <a className="text-on-surface-variant hover:text-on-surface font-label-caps text-label-caps" href="#">Practice</a>
              <a className="text-primary-fixed-dim border-b-2 border-primary-fixed-dim pb-1 font-label-caps text-label-caps" href="#">Contests</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input className="bg-surface-container-low border border-outline-variant px-4 py-1.5 font-data-mono text-data-mono focus:outline-none focus:border-primary-fixed-dim transition-all w-64 rounded" placeholder="QUICK ACCESS" type="text" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-sm opacity-40">search</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary-fixed-dim">notifications</span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary-fixed-dim">terminal</span>
              <div className="w-8 h-8 rounded-full border border-primary-fixed-dim/30 bg-slate-200 overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">person</span>
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="mt-16 p-6 flex flex-1 gap-4 overflow-hidden h-[calc(100vh-6rem)]">
          {/* LEFT ZONE: AI Monitoring */}
          <section className="w-1/4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-label-caps text-label-caps text-primary-fixed-dim flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
                LIVE AI MONITORING
              </h2>
              <span className="font-data-mono text-[10px] opacity-40">CH: 01_VIDEO_FEED</span>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              {/* Candidate View */}
              <div className="relative group h-1/2 border border-outline-variant overflow-hidden bg-surface-container-lowest rounded-md">
                <div className="scanline"></div>
                {/* Fallback grey box since Google images might 403 */}
                <div className="w-full h-full bg-surface-variant/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant opacity-50">person</span>
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white backdrop-blur font-data-mono text-[10px] border border-primary-fixed-dim/30 rounded-sm">
                  CANDIDATE: LOERNER
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <div className="font-label-caps text-[10px] text-primary-fixed-dim">EYE CONTACT: STABLE</div>
                    <div className="w-24 h-1 bg-surface-variant/40 relative">
                      <div className="absolute top-0 left-0 h-full bg-primary-fixed-dim" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div class="flex justify-between items-end">
                    <div className="font-label-caps text-[10px] text-on-surface-variant bg-surface-container-highest/80 px-1 rounded">STRESS LEVEL: NOMINAL</div>
                    <div className="w-24 h-1 bg-surface-variant/40 relative">
                      <div className="absolute top-0 left-0 h-full bg-secondary-fixed-dim" style={{ width: '22%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interviewer View */}
              <div className="relative group h-1/2 border border-outline-variant overflow-hidden bg-surface-container-lowest rounded-md">
                <div className="w-full h-full bg-surface-variant/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-on-surface-variant opacity-50">record_voice_over</span>
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white backdrop-blur font-data-mono text-[10px] border border-outline-variant rounded-sm">
                  INTERVIEWER: STAFF_09
                </div>
                <div className="absolute inset-0 border-2 border-primary-fixed-dim/10 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/80 p-3 border border-outline-variant rounded-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-data-mono text-[11px]">ATTENTION SCORE</span>
                    <span className="font-data-mono text-[11px] text-primary-fixed-dim">94.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CENTER ZONE: Technical Playground */}
          <section className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-4">
                <h2 className="font-label-caps text-label-caps">SESSION: MG-7742-X</h2>
                <div className="flex items-center gap-2 font-data-mono text-[12px] opacity-60">
                  <span className="material-symbols-outlined text-[14px]">timer</span>
                  00:42:15
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-surface-container-high border border-outline-variant font-data-mono text-[10px] text-primary-fixed-dim rounded-sm">
                  ORIGINALITY: 98%
                </div>
                <div className="px-2 py-1 bg-surface-container-high border border-outline-variant font-data-mono text-[10px] text-secondary-fixed-dim rounded-sm">
                  TYPING: CONSISTENT
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex border border-outline-variant bg-surface-container-lowest rounded-md overflow-hidden">
              {/* Problem Statement */}
              <div className="w-1/3 border-r border-outline-variant p-6 overflow-y-auto">
                <span className="font-label-caps text-[10px] text-primary-fixed-dim mb-2 block">TASK_01_OPTIMIZATION</span>
                <h3 className="font-headline-md text-body-base font-bold mb-4">Optimize Distributed Cache</h3>
                <p className="font-body-base text-[13px] text-on-surface-variant leading-relaxed mb-6">
                  Implement a high-performance LRU cache that remains thread-safe across a distributed network of nodes. You must account for eventual consistency and minimize latency spikes during eviction cycles.
                </p>
                <div className="space-y-4">
                  <div className="p-3 bg-surface-container-low border border-outline-variant rounded-sm">
                    <span className="font-label-caps text-[10px] opacity-40 block mb-1">CONSTRAINTS</span>
                    <ul className="font-data-mono text-[11px] space-y-1">
                      <li>- Read Latency &lt; 1ms</li>
                      <li>- Write Throughput &gt; 50k ops/s</li>
                      <li>- Max Memory: 512MB</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="flex-1 flex flex-col bg-[#1E1E1E] text-white">
                <div className="h-10 bg-[#2D2D2D] border-b border-[#404040] flex items-center justify-between px-4">
                  <div className="flex gap-4">
                    <span className="text-primary-fixed-dim font-data-mono text-[12px]">main.py</span>
                    <span className="text-white/40 font-data-mono text-[12px]">utils.py</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] opacity-40">fullscreen</span>
                </div>
                <div className="flex-1 p-6 font-data-mono text-[14px] leading-relaxed text-[#D4D4D4] overflow-y-auto">
                  <span className="text-[#C586C0]">import</span> collections<br/>
                  <span className="text-[#C586C0]">import</span> threading<br/>
                  <br/>
                  <span className="text-[#C586C0]">class</span> <span className="text-[#4EC9B0]">DistributedCache</span>:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">__init__</span>(self, capacity: <span className="text-[#4EC9B0]">int</span>):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.capacity = capacity<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.cache = collections.OrderedDict()<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.lock = threading.Lock()<br/>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">get</span>(self, key: <span className="text-[#4EC9B0]">str</span>):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">with</span> self.lock:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">if</span> key <span className="text-[#C586C0]">not in</span> self.cache:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> <span className="text-[#B5CEA8]">-1</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.cache.move_to_end(key)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">return</span> self.cache[key]<br/>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6A9955]"># TODO: Implement put with distributed sync</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C586C0]">def</span> <span className="text-[#DCDCAA]">put</span>(self, key, value):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary-fixed-dim text-primary-fixed-dim-cursor">_</span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT ZONE: Intelligence */}
          <section className="w-1/4 flex flex-col gap-4">
            <h2 className="font-label-caps text-label-caps">OPERATIONAL TELEMETRY</h2>
            
            {/* Hireability Card */}
            <div className="glass-panel p-card-padding border border-outline-variant glow-border relative overflow-hidden rounded-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-label-caps text-[10px] text-primary-fixed-dim">HIREABILITY INDEX</span>
                  <div className="text-display-lg font-display-lg leading-none mt-1">87<span className="text-body-base opacity-40 ml-1">/100</span></div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-primary-fixed-dim/30 rounded-full">
                  <span className="material-symbols-outlined text-primary-fixed-dim">verified</span>
                </div>
              </div>
              <div className="aspect-square w-full bg-surface-container-low rounded-lg p-4 mb-4 relative overflow-hidden flex items-center justify-center border border-outline-variant">
                {/* Radar Chart Placeholder */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 border border-primary-fixed-dim rounded-full"></div>
                  <div className="w-3/5 h-3/5 border border-primary-fixed-dim rounded-full absolute"></div>
                  <div className="w-2/5 h-2/5 border border-primary-fixed-dim rounded-full absolute"></div>
                </div>
                <div className="relative w-3/4 h-3/4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <polygon fill="rgba(40, 54, 24, 0.2)" points="50,10 85,35 75,85 25,85 15,35" stroke="var(--color-primary-fixed-dim)" strokeWidth="1.5"></polygon>
                    <circle cx="50" cy="10" fill="var(--color-primary-fixed-dim)" r="1.5"></circle>
                    <circle cx="85" cy="35" fill="var(--color-primary-fixed-dim)" r="1.5"></circle>
                    <circle cx="75" cy="85" fill="var(--color-primary-fixed-dim)" r="1.5"></circle>
                    <circle cx="25" cy="85" fill="var(--color-primary-fixed-dim)" r="1.5"></circle>
                    <circle cx="15" cy="35" fill="var(--color-primary-fixed-dim)" r="1.5"></circle>
                  </svg>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full font-data-mono text-[9px] pb-1 font-bold">DS</div>
                  <div className="absolute right-0 top-1/4 translate-x-full font-data-mono text-[9px] pl-1 font-bold">SYS</div>
                  <div className="absolute bottom-0 right-1/4 translate-y-full font-data-mono text-[9px] pt-1 font-bold">ALGO</div>
                  <div className="absolute bottom-0 left-1/4 translate-y-full font-data-mono text-[9px] pt-1 font-bold">COMM</div>
                </div>
              </div>
            </div>

            {/* Plagiarism Feed */}
            <div className="border border-outline-variant flex-1 bg-surface-container-lowest p-4 flex flex-col gap-3 rounded-md">
              <span className="font-label-caps text-[10px] opacity-40">INTELLIGENCE_FEED</span>
              <div className="space-y-3">
                <div className="flex gap-3 items-start border-l border-error/50 pl-3">
                  <span className="material-symbols-outlined text-error text-[16px]">warning</span>
                  <div>
                    <p className="font-data-mono text-[11px] text-error">BROWSER TAB SWITCH</p>
                    <p className="text-[10px] opacity-50">Detected outside domain focus [2s]</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start border-l border-primary-fixed-dim pl-3">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">security</span>
                  <div>
                    <p className="font-data-mono text-[11px] text-on-surface">ORIGINALITY CHECK</p>
                    <p className="text-[10px] opacity-50">Code block matched 0 internal repos</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start border-l border-secondary-fixed-dim pl-3">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-[16px]">psychology</span>
                  <div>
                    <p className="font-data-mono text-[11px] text-on-surface">PATTERN RECOGNITION</p>
                    <p className="text-[10px] opacity-50">Complex logic flow identified</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SYSTEM FOOTER */}
        <footer className="fixed bottom-0 right-0 left-64 h-8 border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between px-container-margin w-[calc(100%-16rem)]">
          <div className="flex items-center gap-6">
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">CONNECTED: US-EAST-1</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">CPU: 12%</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">MEM: 1.4GB</span>
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">LATENCY: 12ms</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-data-mono text-[10px] text-on-surface-variant opacity-60">Press Ctrl+S to save draft</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim shadow-sm"></div>
              <span className="font-data-mono text-[10px] text-primary-fixed-dim uppercase">Status: Nominal</span>
            </div>
          </div>
        </footer>

        {/* Contextual FAB */}
        <button className="fixed bottom-12 right-6 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-[32px]">terminal</span>
        </button>
      </main>
    </div>
  );
}
