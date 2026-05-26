import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen font-body-lg selection:bg-primary-container selection:text-on-primary-container">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-surface-container/90 backdrop-blur-md border-b border-outline-variant">
        <div className="flex items-center justify-between px-8 h-16 w-full max-w-max-width mx-auto">
          <div className="flex items-center gap-8">
            <span className="font-bold text-headline-md text-primary flex items-center gap-2 uppercase tracking-tighter">
              MeritGrid
            </span>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#product" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Product</a>
              <Link href="/roadmap" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Roadmaps</Link>
              <Link href="/playground" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Playground</Link>
              <Link href="/portfolio" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Projects</Link>
              <Link href="/employer/dashboard" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold transition-colors">Employers</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface border border-outline-variant px-3 py-1.5 rounded text-label-md min-w-[200px]">
              <span className="material-symbols-outlined text-outline text-[16px] mr-2">search</span>
              <span className="text-outline">Search platform...</span>
              <span className="ml-auto font-code-sm text-outline border border-outline-variant px-1 rounded">/</span>
            </div>
            <Link href="/login" className="text-on-surface-variant hover:text-on-surface text-label-md uppercase tracking-widest font-bold px-4">Login</Link>
            <Link href="/login" className="bg-primary text-on-primary text-label-md uppercase tracking-widest font-bold px-5 py-2 rounded border border-primary hover:bg-transparent hover:text-primary transition-all">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 max-w-max-width mx-auto w-full flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-outline-variant"></div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-label-sm uppercase tracking-widest text-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            MeritGrid V2 is Live
          </div>
          
          <h1 className="text-[56px] leading-[1.1] md:text-[80px] font-bold text-on-surface tracking-tight max-w-4xl">
            Stop Collecting Certificates.<br />
            <span className="text-primary">Start Building Proof.</span>
          </h1>
          
          <p className="mt-8 text-[20px] leading-relaxed text-on-surface-variant max-w-[672px] font-body-lg">
            AI-generated learning roadmaps, industry-grade projects, competitive skill rankings, and employer discovery—all in one platform.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/login" className="bg-primary text-on-primary text-label-md uppercase tracking-widest font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
              Get Started
            </Link>
            <Link href="/roadmap" className="bg-surface-container text-on-surface border border-outline-variant text-label-md uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-surface-container-high transition-colors">
              Explore Roadmaps
            </Link>
          </div>

          {/* Dense Hero Visual (Abstract Dashboard) */}
          <div className="mt-24 w-full max-w-5xl border border-outline-variant rounded-lg bg-surface shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-surface-container border-b border-outline-variant flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
              <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
              <div className="w-3 h-3 rounded-full bg-outline-variant"></div>
            </div>
            <div className="grid grid-cols-12 pt-8">
              <div className="col-span-3 border-r border-outline-variant p-6 space-y-6 hidden md:block">
                <div className="h-4 w-24 bg-surface-variant rounded"></div>
                <div className="space-y-3">
                  <div className="h-3 w-full bg-surface-variant rounded"></div>
                  <div className="h-3 w-4/5 bg-surface-variant rounded"></div>
                  <div className="h-3 w-full bg-surface-variant rounded"></div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-9 p-8 grid grid-cols-2 gap-6 bg-[linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:40px_40px]">
                <div className="col-span-2 ui-panel p-6 bg-surface border-primary/30 shadow-md">
                  <h3 className="text-label-md text-primary uppercase tracking-widest mb-4">Live Roadmap Generation</h3>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1 h-32 bg-surface-container rounded border border-outline-variant relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-secondary-container opacity-50"></div>
                    </div>
                    <div className="flex-1 h-48 bg-surface-container rounded border border-primary relative overflow-hidden shadow-lg">
                      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-primary opacity-90 flex items-center justify-center text-on-primary font-bold">1742 HI</div>
                    </div>
                    <div className="flex-1 h-24 bg-surface-container rounded border border-outline-variant relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-tertiary-container opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-y border-outline-variant bg-surface-container-low py-12">
          <div className="max-w-max-width mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-outline-variant/50">
            <div className="text-center">
              <div className="text-[32px] font-bold text-primary">50,000+</div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-widest mt-2">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] font-bold text-primary">100,000+</div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-widest mt-2">Case Studies Completed</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] font-bold text-primary">10,000+</div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-widest mt-2">Monthly Competitors</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] font-bold text-primary">500+</div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-widest mt-2">Hiring Employers</div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-24 px-8 max-w-max-width mx-auto w-full">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[40px] font-bold text-on-surface leading-tight">Credentials Don't Prove Capability</h2>
            <p className="mt-4 text-body-lg text-on-surface-variant">The traditional hiring pipeline is broken at every stage. We rebuilt it from the ground up.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 border border-outline-variant bg-surface-container">
              <span className="material-symbols-outlined text-4xl text-outline mb-6">menu_book</span>
              <h3 className="text-headline-md font-bold mb-4">Learning</h3>
              <ul className="space-y-3 text-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Courses teach passive theory</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> No practical validation</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Outdated curriculums</li>
              </ul>
            </div>
            <div className="p-8 border border-outline-variant bg-surface-container">
              <span className="material-symbols-outlined text-4xl text-outline mb-6">quiz</span>
              <h3 className="text-headline-md font-bold mb-4">Assessment</h3>
              <ul className="space-y-3 text-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Exams test memorization</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Multiple choice answers</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Not representative of real skills</li>
              </ul>
            </div>
            <div className="p-8 border border-outline-variant bg-surface-container">
              <span className="material-symbols-outlined text-4xl text-outline mb-6">work_off</span>
              <h3 className="text-headline-md font-bold mb-4">Hiring</h3>
              <ul className="space-y-3 text-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Resumes are noisy</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Employers guess on capability</li>
                <li className="flex items-center gap-2"><span className="text-error font-bold">×</span> Bias toward pedigree</li>
              </ul>
            </div>
          </div>
          
          <div className="p-8 bg-primary text-on-primary rounded text-center shadow-xl">
            <h3 className="text-[24px] font-bold uppercase tracking-widest">MeritGrid Fixes All Three</h3>
          </div>
        </section>

        {/* Three Engine Architecture */}
        <section id="product" className="py-24 px-8 bg-surface-container-lowest border-y border-outline-variant relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(rgba(107,114,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="max-w-max-width mx-auto w-full relative z-10">
            <h2 className="text-[40px] font-bold text-on-surface mb-16 max-w-[672px]">The Three Engine Architecture</h2>
            
            <div className="flex flex-col gap-12">
              {/* LEARN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 ui-panel p-8 bg-surface border-l-4 border-l-primary">
                  <div className="text-label-caps text-primary mb-4 font-bold tracking-widest">STAGE 01</div>
                  <h3 className="text-[32px] font-bold text-on-surface mb-6">LEARN</h3>
                  <ul className="space-y-4 text-body-lg text-on-surface-variant font-medium">
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> AI-Generated Roadmaps</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Diagnostic Skill Gap Analysis</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Curated Open Resources</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span> Personalized Learning Pacing</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <span className="material-symbols-outlined text-[120px] text-outline-variant">route</span>
                </div>
              </div>

              <div className="flex justify-center -my-6 hidden md:flex">
                <div className="w-px h-16 bg-outline"></div>
              </div>

              {/* PROVE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center hidden md:flex">
                  <span className="material-symbols-outlined text-[120px] text-outline-variant">verified</span>
                </div>
                <div className="ui-panel p-8 bg-surface border-l-4 border-l-secondary">
                  <div className="text-label-caps text-secondary mb-4 font-bold tracking-widest">STAGE 02</div>
                  <h3 className="text-[32px] font-bold text-on-surface mb-6">PROVE</h3>
                  <ul className="space-y-4 text-body-lg text-on-surface-variant font-medium">
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Industry-Grade Case Studies</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Automated AI Code Feedback</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Competitive Playground Arena</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">check_circle</span> Dynamic Hireability Index</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center -my-6 hidden md:flex">
                <div className="w-px h-16 bg-outline"></div>
              </div>

              {/* HIRE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 ui-panel p-8 bg-surface border-l-4 border-l-tertiary">
                  <div className="text-label-caps text-tertiary mb-4 font-bold tracking-widest">STAGE 03</div>
                  <h3 className="text-[32px] font-bold text-on-surface mb-6">HIRE</h3>
                  <ul className="space-y-4 text-body-lg text-on-surface-variant font-medium">
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check_circle</span> Verified Talent Portfolio</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check_circle</span> Intelligent Candidate Discovery</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check_circle</span> Skill-Based Algorithmic Matching</li>
                    <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check_circle</span> Employer Recruiter Dashboard</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <span className="material-symbols-outlined text-[120px] text-outline-variant">work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Roadmaps Section */}
        <section className="py-24 px-8 max-w-max-width mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[40px] font-bold text-on-surface leading-tight mb-6">Generative AI Roadmaps</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Declare your career goal. Take a rigorous 20-question AI-generated diagnostic test to empirically prove your starting point, and watch our AI build a hyper-specific curriculum using curated open internet resources.
              </p>
              <Link href="/roadmap" className="inline-flex items-center gap-2 text-primary font-bold text-label-md uppercase tracking-widest hover:underline">
                Try the Generator <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            
            <div className="ui-panel bg-surface p-6 font-code-sm border-t-4 border-t-primary shadow-xl">
              <div className="text-outline mb-4">Goal: Frontend Developer</div>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
                  <div className="font-bold text-primary mb-1">Week 1-2: HTML & CSS Architecture</div>
                  <div className="text-on-surface-variant">Focus on semantic layout, CSS Grid, and responsive breakpoints.</div>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
                  <div className="font-bold text-primary mb-1">Week 3-5: Vanilla JavaScript Systems</div>
                  <div className="text-on-surface-variant">Master the event loop, closures, and DOM manipulation.</div>
                </div>
                <div className="p-4 bg-primary text-on-primary rounded shadow-md relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-full w-2 bg-secondary"></div>
                  <div className="font-bold mb-1">Week 6-8: React Ecosystem</div>
                  <div className="opacity-90">Hooks, Context API, and state management paradigms.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Case Studies & AI Feedback */}
        <section className="py-24 px-8 bg-surface-container-low border-y border-outline-variant">
          <div className="max-w-max-width mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-[40px] font-bold text-on-surface">Build Real Work. Not Toy Exercises.</h2>
              <p className="mt-4 text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
                Submit links to GitHub repositories or live URLs. Our AI evaluates your implementation against industry standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ui-panel p-8 bg-surface">
                <h3 className="text-label-caps text-outline uppercase tracking-widest mb-6">1. Submit Case Study</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-outline-variant bg-surface-container-lowest">
                    <div className="font-bold text-on-surface">Data Analytics</div>
                    <div className="text-body-sm text-on-surface-variant mt-1">Analyze declining ecommerce conversion rates using Python & Pandas.</div>
                  </div>
                  <div className="p-4 border-2 border-primary bg-primary/5">
                    <div className="font-bold text-primary">System Design</div>
                    <div className="text-body-sm text-on-surface-variant mt-1">Architecture for a high-throughput message broker.</div>
                  </div>
                  <div className="w-full p-3 bg-surface-container border border-outline-variant text-outline text-center font-code-sm">
                    github.com/username/message-broker
                  </div>
                </div>
              </div>
              
              <div className="ui-panel p-8 bg-surface border-l-4 border-l-secondary relative overflow-hidden">
                <div className="absolute top-4 right-4"><span className="material-symbols-outlined text-secondary text-3xl">auto_awesome</span></div>
                <h3 className="text-label-caps text-secondary uppercase tracking-widest mb-6">2. AI Feedback Loop</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-label-sm font-bold text-primary">Strengths</div>
                    <p className="text-body-sm text-on-surface mt-1">Excellent partitioning strategy. Kafka implementation is robust.</p>
                  </div>
                  <div>
                    <div className="text-label-sm font-bold text-error">Improvements</div>
                    <p className="text-body-sm text-on-surface mt-1">Missing dead-letter queue. Lacks proper consumer offset commit logic.</p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                    <span className="font-code-sm text-on-surface-variant">Score: 84/100</span>
                    <span className="bg-secondary text-on-secondary px-3 py-1 font-bold rounded">HI +120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Playground Section */}
        <section className="py-24 px-8 max-w-max-width mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 ui-panel border-outline bg-surface overflow-hidden shadow-2xl">
              <div className="bg-surface-container px-6 py-4 border-b border-outline-variant flex justify-between">
                <span className="font-bold text-on-surface">Global Leaderboard</span>
                <span className="text-label-sm text-outline uppercase">Live</span>
              </div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-outline-variant font-code-sm">
                  <tr className="bg-surface-container-lowest">
                    <td className="px-6 py-3 text-tertiary">#1</td>
                    <td className="px-6 py-3 font-bold text-on-surface">Elena R.</td>
                    <td className="px-6 py-3 text-right text-primary">2450</td>
                  </tr>
                  <tr className="bg-surface-container-lowest">
                    <td className="px-6 py-3 text-outline-variant text-body-lg">#2</td>
                    <td className="px-6 py-3 font-bold text-on-surface">David K.</td>
                    <td className="px-6 py-3 text-right text-primary">2390</td>
                  </tr>
                  <tr className="bg-surface-container-lowest border-l-4 border-l-primary">
                    <td className="px-6 py-3 text-tertiary-container">#3</td>
                    <td className="px-6 py-3 font-bold text-on-surface">You</td>
                    <td className="px-6 py-3 text-right text-primary">2210</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-[40px] font-bold text-on-surface leading-tight mb-6">Codeforces For Every Skill</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                The Playground is a competitive arena. It’s not just for coding. Compete in timed sprints for Design, Marketing, Analytics, Writing, Product, and Engineering.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded text-label-sm uppercase tracking-widest text-on-surface-variant">Design</span>
                <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded text-label-sm uppercase tracking-widest text-on-surface-variant">Marketing</span>
                <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded text-label-sm uppercase tracking-widest text-on-surface-variant">Analytics</span>
                <span className="px-3 py-1 bg-surface-container border border-outline-variant rounded text-label-sm uppercase tracking-widest text-on-surface-variant">Engineering</span>
              </div>
              <Link href="/playground" className="inline-flex items-center gap-2 text-primary font-bold text-label-md uppercase tracking-widest hover:underline">
                Enter The Arena <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hireability Index & Employer Platform */}
        <section className="py-24 px-8 bg-surface-container-lowest border-t border-outline-variant">
          <div className="max-w-max-width mx-auto w-full text-center mb-16">
            <h2 className="text-[40px] font-bold text-on-surface">Hire Proof. Not Promises.</h2>
            <p className="mt-4 text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
              Employers use MeritGrid to filter candidates based on real performance signals, verified projects, and our proprietary Hireability Index.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-max-width mx-auto">
            <div className="col-span-1 ui-panel p-8 bg-surface flex flex-col items-center justify-center text-center shadow-xl border-t-4 border-t-primary">
              <h3 className="text-label-caps text-outline uppercase tracking-widest mb-6">The Hireability Index</h3>
              <div className="text-[64px] font-bold text-primary leading-none mb-2">1742</div>
              <div className="text-label-md text-tertiary uppercase tracking-widest font-bold mb-8">Gold Tier</div>
              
              <div className="w-full text-left space-y-3 font-code-sm border-t border-outline-variant pt-6">
                <div className="flex justify-between"><span className="text-on-surface">React</span><span className="text-primary font-bold">94%</span></div>
                <div className="flex justify-between"><span className="text-on-surface">System Design</span><span className="text-primary font-bold">88%</span></div>
                <div className="flex justify-between"><span className="text-on-surface">Accessibility</span><span className="text-primary font-bold">91%</span></div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 ui-panel bg-surface overflow-hidden shadow-xl">
              <div className="bg-surface-container px-6 py-4 border-b border-outline-variant flex gap-4">
                <div className="px-3 py-1 bg-surface border border-outline-variant text-label-sm font-bold text-on-surface">Filter: React</div>
                <div className="px-3 py-1 bg-primary text-on-primary text-label-sm font-bold">Min Index: 1500</div>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-4 border border-outline-variant bg-surface flex justify-between items-center hover:border-primary transition-colors cursor-pointer">
                  <div>
                    <div className="font-bold text-on-surface text-lg">Ananya Sharma</div>
                    <div className="text-body-sm text-on-surface-variant mt-1">Bangalore, India • 3 Verified Projects</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xl">1820 HI</div>
                    <div className="text-label-sm text-outline mt-1 uppercase">Match: 98%</div>
                  </div>
                </div>
                <div className="p-4 border border-outline-variant bg-surface flex justify-between items-center hover:border-primary transition-colors cursor-pointer">
                  <div>
                    <div className="font-bold text-on-surface text-lg">Rahul Verma</div>
                    <div className="text-body-sm text-on-surface-variant mt-1">Pune, India • 2 Verified Projects</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary text-xl">1650 HI</div>
                    <div className="text-label-sm text-outline mt-1 uppercase">Match: 85%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-8 max-w-max-width mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ui-panel p-8 bg-surface relative">
              <span className="text-6xl text-outline-variant absolute top-4 left-4 opacity-50">"</span>
              <p className="text-body-lg text-on-surface relative z-10 font-medium mb-6">
                MeritGrid completely bypassed the resume screen for us. We hired our lead architect solely based on her performance in the System Design playground.
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div>
                  <div className="font-bold text-on-surface text-body-sm">Sarah Jenkins</div>
                  <div className="text-label-sm text-on-surface-variant uppercase">VP Engineering, DataCorp</div>
                </div>
              </div>
            </div>
            
            <div className="ui-panel p-8 bg-surface relative">
              <span className="text-6xl text-outline-variant absolute top-4 left-4 opacity-50">"</span>
              <p className="text-body-lg text-on-surface relative z-10 font-medium mb-6">
                I didn't have a CS degree. By completing the AI roadmaps and verifying my projects, I built a Hireability Index that got me interviews at three unicorns.
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                <div className="w-10 h-10 bg-secondary rounded-full"></div>
                <div>
                  <div className="font-bold text-on-surface text-body-sm">Michael T.</div>
                  <div className="text-label-sm text-on-surface-variant uppercase">Frontend Developer</div>
                </div>
              </div>
            </div>

            <div className="ui-panel p-8 bg-surface relative">
              <span className="text-6xl text-outline-variant absolute top-4 left-4 opacity-50">"</span>
              <p className="text-body-lg text-on-surface relative z-10 font-medium mb-6">
                The AI feedback loop is ruthless but exactly what you need. It catches architectural flaws that standard tutorials never even mention.
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant pt-4">
                <div className="w-10 h-10 bg-tertiary rounded-full"></div>
                <div>
                  <div className="font-bold text-on-surface text-body-sm">Elena Rodriguez</div>
                  <div className="text-label-sm text-on-surface-variant uppercase">Playground Rank #1</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8 bg-primary text-center">
          <h2 className="text-[48px] md:text-[64px] font-bold text-on-primary leading-tight mb-6">
            Learn. Prove. Get Hired.
          </h2>
          <p className="text-[20px] text-on-primary/80 max-w-[672px] mx-auto mb-12">
            Join the first platform built around demonstrated capability. Stop relying on noisy credentials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/login" className="bg-on-primary text-primary text-label-md uppercase tracking-widest font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity shadow-xl">
              Start Learning
            </Link>
            <Link href="/employer/dashboard" className="bg-transparent border-2 border-on-primary text-on-primary text-label-md uppercase tracking-widest font-bold px-8 py-4 rounded hover:bg-on-primary hover:text-primary transition-colors">
              Explore Candidates
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant pt-20 pb-12">
        <div className="max-w-max-width mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-headline-md text-primary block mb-6 uppercase tracking-tighter">MeritGrid</span>
            <p className="text-body-sm text-on-surface-variant max-w-[384px] mb-6">
              A premium technical workspace for ambitious learners to build real projects and verify their expertise.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="font-code-sm text-outline uppercase tracking-widest text-[10px]">All Systems Operational</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-label-sm text-on-surface uppercase tracking-widest mb-6 font-bold">Product</h4>
            <ul className="space-y-4 text-body-sm text-on-surface-variant">
              <li><Link href="/roadmap" className="hover:text-primary transition-colors">Roadmaps</Link></li>
              <li><Link href="/playground" className="hover:text-primary transition-colors">Playground</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/employer/dashboard" className="hover:text-primary transition-colors">Employers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-label-sm text-on-surface uppercase tracking-widest mb-6 font-bold">Resources</h4>
            <ul className="space-y-4 text-body-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Scoring Rubric</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-label-sm text-on-surface uppercase tracking-widest mb-6 font-bold">Company</h4>
            <ul className="space-y-4 text-body-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-max-width mx-auto px-8 pt-8 border-t border-outline-variant/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-outline">© 2026 MeritGrid. Built for capability.</p>
          <div className="flex gap-4">
            <span className="font-code-sm text-outline border border-outline-variant px-2 py-1 rounded text-[10px]">V2.4.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
