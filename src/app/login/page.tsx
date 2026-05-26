"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [role, setRole] = useState<"learner" | "employer">("learner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password, role });
    
    // Auth routing based on PRD
    if (role === "employer") {
      router.push("/employer/dashboard");
    } else {
      router.push("/roadmap");
    }
  };
  return (
    <div className="font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-[linear-gradient(rgba(43,45,49,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(43,45,49,0.2)_1px,transparent_1px)] bg-[size:40px_40px]">
      <main className="w-full max-w-[420px] px-lg py-xl relative">
        <div className="mb-xl text-center">
          <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight uppercase">MeritGrid</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs opacity-80">Engineering-first technical learning.</p>
        </div>

        <div className="bg-surface border border-outline-variant p-lg shadow-2xl relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline"></div>

          <div className="flex gap-md mb-lg border-b border-outline-variant/30">
            <button
              className={`pb-sm font-label-caps text-label-caps transition-all ${activeTab === 'login' ? 'text-on-surface border-b border-on-surface' : 'text-on-surface-variant hover:text-on-surface border-transparent'}`}
              onClick={() => setActiveTab("login")}
            >
              LOGIN
            </button>
            <button
              className={`pb-sm font-label-caps text-label-caps transition-all ${activeTab === 'signup' ? 'text-on-surface border-b border-on-surface' : 'text-on-surface-variant hover:text-on-surface border-transparent'}`}
              onClick={() => setActiveTab("signup")}
            >
              SIGN UP
            </button>
          </div>

          <div className="space-y-sm mb-lg">
            <button className="w-full flex items-center justify-center gap-sm py-sm border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-high transition-colors group">
              <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface">CONTINUE WITH GITHUB</span>
            </button>
            <button className="w-full flex items-center justify-center gap-sm py-sm border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-high transition-colors group">
              <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-on-surface">CONTINUE WITH GOOGLE</span>
            </button>
          </div>

          <div className="relative flex items-center mb-lg">
            <div className="flex-grow border-t border-outline-variant/30"></div>
            <span className="mx-md font-code-sm text-[10px] text-outline uppercase tracking-[0.2em]">OR</span>
            <div className="flex-grow border-t border-outline-variant/30"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-md">
            
            <div className="flex gap-2 mb-4 p-1 bg-surface-container-lowest border border-outline-variant rounded">
              <button 
                type="button" 
                onClick={() => setRole("learner")}
                className={`flex-1 py-2 text-label-sm font-bold uppercase tracking-widest rounded ${role === 'learner' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Learner
              </button>
              <button 
                type="button" 
                onClick={() => setRole("employer")}
                className={`flex-1 py-2 text-label-sm font-bold uppercase tracking-widest rounded ${role === 'employer' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                Employer
              </button>
            </div>

            <div className="space-y-xs">
              <label className="font-label-caps text-label-caps text-outline block">EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@meritgrid.io"
                className="w-full bg-surface-container-lowest border border-outline-variant px-sm py-sm text-on-surface font-body-md focus:outline-none focus:border-on-surface transition-colors"
                required
              />
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between items-end">
                <label className="font-label-caps text-label-caps text-outline block">PASSWORD</label>
                <a href="#" className="font-code-sm text-[10px] text-on-surface-variant hover:text-on-surface transition-colors">Forgot?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-container-lowest border border-outline-variant px-sm py-sm text-on-surface font-body-md focus:outline-none focus:border-on-surface transition-colors font-code-sm"
                required
              />
            </div>
            
            <button className="w-full bg-on-surface text-surface font-bold py-sm px-lg hover:opacity-90 transition-opacity font-body-md text-body-md uppercase tracking-wider active:translate-y-[1px]" type="submit">
              Authenticate Session
            </button>
          </form>

          <div className="mt-lg pt-md border-t border-outline-variant/30 flex justify-between items-center opacity-40">
            <span className="font-code-sm text-[11px] flex items-center gap-xs">
              <span className="material-symbols-outlined text-[14px]">info</span>
              SSO active for 24h
            </span>
            <span className="font-code-sm text-[11px] px-xs border border-outline rounded-sm">ESC</span>
          </div>
        </div>

        <div className="mt-lg flex justify-between items-center px-xs">
          <div className="flex items-center gap-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-[#52ff52] opacity-80"></div>
            <span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-widest opacity-60">Status: Operational</span>
          </div>
          <div className="flex gap-md">
            <a className="font-code-sm text-code-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Support</a>
            <span className="font-code-sm text-code-sm text-outline">MVP v1.0</span>
          </div>
        </div>
      </main>
      
      <div className="fixed top-0 right-0 p-lg opacity-10 pointer-events-none hidden md:block">
        <pre className="font-code-sm text-code-sm text-on-surface leading-tight">
{`{
  "auth": "industrial_sso",
  "status": 200,
  "node": "region-01",
  "sec": "enabled"
}`}
        </pre>
      </div>
    </div>
  );
}
