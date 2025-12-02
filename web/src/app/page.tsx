"use client";

import { useEffect, useState } from "react";

function FinsensaTemplateAdapt() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopPromoBar />
      <Header />
      <Hero />
      <OutcomeStrip />
      <SocialProof />
      <Tour />
      <HowItWorks />
      <StartWithoutIntegrations />
      <ForAdvisors />
      <ForBankRMs />
      <Proof />
      <Plans />
      <FeatureCompare />
      <Resources />
      <Glossary />
      <LeadCapture />
      <Login />
      <FAQ />
      <EnterpriseCTA />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function TopPromoBar() {
  return (
    <div className="text-white" style={{ background: "#0B3BFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Launch Offer</span>
          <span className="opacity-80">Advisor bundle: first 5 client seats free for 30 days</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="opacity-80 hidden sm:inline">Offer ends in</span>
          <Countdown hours={17} minutes={26} seconds={0} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <img src="/finsensa-logo-mark.svg" alt="Finsensa" className="w-8 h-8 rounded-xl" />
        <span className="font-bold tracking-tight">Finsensa</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
        <a href="#tour" className="hover:text-slate-900">Product</a>
        <a href="#how" className="hover:text-slate-900">How it works</a>
        <a href="#pricing" className="hover:text-slate-900">Pricing</a>
        <a href="#compare" className="hover:text-slate-900">Compare</a>
        <a href="#resources" className="hover:text-slate-900">Resources</a>
        <a href="#login" className="hover:text-slate-900">Login</a>
        <a href="#lead" className="px-4 py-2 rounded-xl text-white" style={{ background: "#0B3BFF" }}>Start free trial</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-12 md:pb-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            See your next 13 weeks of cash in <span className="underline decoration-sky-400">60 seconds</span>.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Get early warnings for payroll, taxes, and late payers. Export a bank‑ready <span className="font-medium">credit pack</span> (a simple lender report) in one click. We cap alerts at 3 so you act, not drown in noise.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#lead" className="px-5 py-3 rounded-2xl text-white text-base" style={{ background: "#0B3BFF" }}>Start free trial</a>
            <a href="#lead" className="px-5 py-3 rounded-2xl border border-slate-300 text-base">Book 15‑min demo</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Read‑only Open Banking · CSV fallback · No credit card required</p>
        </div>
        <div className="relative">
          <IllustrationDashboard />
        </div>
      </div>
    </section>
  );
}

function OutcomeStrip() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid md:grid-cols-3 gap-4">
        <OutcomeTile title="First forecast in 60s" subtitle="Connect bank or upload CSV" />
        <OutcomeTile title="First useful alert in 24h" subtitle="Payroll, taxes or late payer" />
        <OutcomeTile title="5‑minute weekly check" subtitle="Stay green with our Trust badge" />
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-center text-sm text-slate-500">Trusted by UK SMEs in Construction, Retail & e‑commerce, Hospitality, and Advisory</p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-80">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-10 bg-slate-100 rounded-xl" aria-hidden />
        ))}
      </div>
    </section>
  );
}

function Tour() {
  return (
    <section id="tour" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">See the essentials at a glance</h2>
      <p className="mt-2 text-slate-600">Pictures first. Each card shows a real outcome, not buzzwords.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <FeatureCard title="Cash view + Trust badge" desc="A live 13‑week line with a freshness timer, a fix queue, and a green/amber/red confidence badge.">
          <IllustrationTrust />
        </FeatureCard>
        <FeatureCard title="Alerts that matter" desc="Low cash runway, payroll and tax proximity, and late‑payer radar—early warnings, not noise.">
          <IllustrationAlerts />
        </FeatureCard>
        <FeatureCard title="Debt list, explained simply" desc="Keep loan details and key rules in one tidy place. We label each rule as pass / amber / fail with plain English.">
          <IllustrationDebts />
        </FeatureCard>
        <FeatureCard title="One‑click credit pack" desc="A bank‑ready report with cash view, recent bank flows, key ratios, and your warnings—so reviews go faster.">
          <IllustrationReport />
        </FeatureCard>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <StepCard step="1" title="Connect" desc="Link your bank (read‑only) or upload a CSV. No payments, no setup calls." />
          <StepCard step="2" title="See truth" desc="Your cash forecast appears in 60s with a Trust badge that calls out anything to fix." />
          <StepCard step="3" title="Act early" desc="Get alerts, run one‑click what‑ifs, and export a credit pack for lenders." />
        </div>
      </div>
    </section>
  );
}

function StartWithoutIntegrations() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">Start without integrations</h3>
          <p className="mt-2 text-slate-700 text-sm">No IT, no waiting. Upload a simple bank CSV and type your current cash. We draw the 13‑week line instantly and show a small list of fixes if anything is missing.</p>
          <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Works with any bank CSV (we include examples).</li>
            <li>We cap alerts at 3. Each alert has one clear action.</li>
            <li>Edit details later when you are ready to connect.</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#lead" className="px-5 py-3 rounded-2xl text-white" style={{ background: "#0B3BFF" }}>Try with a sample CSV</a>
            <a href="#resources" className="px-5 py-3 rounded-2xl border border-slate-300">See CSV guide</a>
          </div>
        </div>
        <IllustrationTrust />
      </div>
    </section>
  );
}

function ForAdvisors() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">For Accountants & VCFOs</h3>
          <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
            <li>Roll‑up view across clients with red/amber/green status.</li>
            <li>Route taxes/payroll alerts to the right person.</li>
            <li>Send a co‑branded <span className="font-medium">Cash Check</span> PDF in one click.</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-2xl text-white" style={{ background: "#0B3BFF" }}>See advisor bundle</a>
            <a href="#lead" className="px-5 py-3 rounded-2xl border border-slate-300">Partner with us</a>
          </div>
        </div>
        <IllustrationAdvisor />
      </div>
    </section>
  );
}

function ForBankRMs() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">For Bank Relationship Managers</h3>
          <p className="mt-2 text-slate-700 text-sm">Invite five clients. They upload a CSV and send you a one‑page Credit Pack. Reviews move faster and your inbox is quieter.</p>
          <div className="mt-5 flex gap-3">
            <a href="#lead" className="px-5 py-3 rounded-2xl text-white" style={{ background: "#0B3BFF" }}>Start an RM pilot</a>
            <a href="#resources" className="px-5 py-3 rounded-2xl border border-slate-300">See pilot guide</a>
          </div>
        </div>
        <IllustrationEnterprise />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <Caselet title="Avoided a tax pinch" metric="£18k" text="Retail SME spotted a taxes clash 14 days early and moved spend—no overdraft fees." />
        <Caselet title="Faster review" metric="4→2 days" text="Lender turnaround time halved when the credit pack replaced email tennis." />
        <Caselet title="Fewer late shocks" metric="‑32%" text="Construction firm cut late‑payer surprises after running weekly checks." />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <blockquote className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
          “If every SME sent this pack before reviews, my inbox would be quieter and deals would move faster.”
          <footer className="mt-3 text-sm text-slate-500">Relationship Manager, UK lender (pilot)</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="pricing" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Choose your Finsensa plan</h2>
        <p className="mt-2 text-center text-slate-600">All plans include: read‑only bank connections, 13‑week cash view, and core alerts.</p>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <PlanCard name="Starter" price="£39" period="/mo" highlight="Get the basics" bullets={["13‑week cash view","Core alerts","Up to 2 loans"]} />
          <PlanCard name="Growth" price="£99" period="/mo" badge="50% OFF" highlight="Grow your brand" bullets={["What‑ifs","Loan rules & renewals","Up to 6 loans"]} />
          <PlanCard name="Pro" price="£249" period="/mo" highlight="Scale your finance" bullets={["Unlimited loans","Multi‑entity","Custom lender exports"]} />
          <PlanCard name="Advisor" price="£295" period="/mo" sub="for 20 entities" highlight="For firms" bullets={["Roll‑ups & routing","Co‑branded Cash Check","+£12–£15 per extra"]} />
        </div>
        <p className="mt-4 text-xs text-center text-slate-500">Annual plans save 2 months. Store‑billed customers may include platform fees; we price this in.</p>
      </div>
    </section>
  );
}

function FeatureCompare() {
  const rows = [
    ["Entities (companies)", "1", "1", "3", "20 (+£12–£15 each extra)"],
    ["Loans tracked", "2", "6", "Unlimited", "Per client"],
    ["Cash forecast (13 weeks)", "Yes", "Yes", "Yes", "Yes"],
    ["Trust badge (freshness & fixes)", "Yes", "Yes", "Yes", "Yes"],
    ["Alerts (cash/payroll/taxes/late payer)", "Core", "Core + tuning", "Advanced rules", "Advisor routing"],
    ["What‑ifs", "—", "2 presets", "Full set", "Per client"],
    ["Credit‑Ready Pack export", "Basic", "Standard", "Custom templates", "Co‑branded"],
    ["Multi‑entity dashboard", "—", "—", "Yes", "Roll‑up across clients"],
    ["Support", "Email", "Priority email", "Priority + office hours", "Partner success"],
  ];
  return (
    <section id="compare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight">Compare plan features</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm border-separate [border-spacing:0]">
          <thead>
            <tr>
              <Th>Feature</Th>
              <Th>Starter</Th>
              <Th>Growth</Th>
              <Th>Pro</Th>
              <Th>Advisor</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="even:bg-slate-50/60">
                {row.map((cell, i) => (
                  <Td key={i}>{cell}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Resources</h2>
      <p className="mt-2 text-slate-600">Short reads, live sessions, and practical guides to help you run cash and credit with confidence.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
            <span className="text-sm text-slate-500">Blog cover</span>
          </div>
          <div className="mt-3 font-semibold">Blog</div>
          <p className="text-sm text-slate-600 mt-1">Plain‑English posts on cash flow, renewals, and talking to lenders.</p>
          <a href="#" className="mt-3 inline-block px-4 py-2 rounded-xl text-white" style={{ background: "#0B3BFF" }}>Read posts</a>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
            <span className="text-sm text-slate-500">Webinar thumbnail</span>
          </div>
          <div className="mt-3 font-semibold">Webinars</div>
          <p className="text-sm text-slate-600 mt-1">Live 30‑minute sessions: cash forecast in 60s, renewal timeline, late‑payer radar.</p>
          <a href="#" className="mt-3 inline-block px-4 py-2 rounded-xl text-white" style={{ background: "#0B3BFF" }}>See dates</a>
        </div>
        <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
            <span className="text-sm text-slate-500">eBook cover</span>
          </div>
          <div className="mt-3 font-semibold">eBooks & Checklists</div>
          <p className="text-sm text-slate-600 mt-1">Downloadable guides: Bank‑ready credit pack, 90/60/30 renewal prep, weekly Cash Check.</p>
          <a href="#" className="mt-3 inline-block px-4 py-2 rounded-2xl text-white" style={{ background: "#00C2FF" }}>Browse library</a>
        </div>
      </div>
    </section>
  );
}

function Glossary() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h3 className="text-xl md:text-2xl font-bold">Glossary (plain English)</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          <div className="p-4 rounded-xl bg-white border border-slate-200"><b>Credit pack</b>: a short, bank‑ready report with cash view, loan list, and key warnings.</div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><b>Headroom</b>: the spare cash or limit left after planned payments.</div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><b>Trust badge</b>: shows if your data is fresh and if anything needs fixing.</div>
        </div>
      </div>
    </section>
  );
}

function LeadCapture() {
  return (
    <section id="lead" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h3 className="text-xl font-bold">Get your first forecast now</h3>
        <p className="mt-1 text-slate-600 text-sm">Enter your details and we’ll send setup steps. Read-only connections · CSV fallback.</p>

        <form
          action="https://formcarry.com/s/-qq8EZv-xPs"  /* <- replace with your URL */
          method="POST"
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          <input type="hidden" name="_gotcha" />
          <input type="hidden" name="source" value="finsensa-landing" />

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Work email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              name="role"
              required
              className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
            >
              <option value="">Select…</option>
              <option>Owner / MD</option>
              <option>Finance lead</option>
              <option>Accountant / VCFO</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Company size</label>
            <select
              name="companySize"
              required
              className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
            >
              <option value="">Select…</option>
              <option>1–4</option>
              <option>5–20</option>
              <option>21–50</option>
              <option>51–200</option>
            </select>
          </div>

          <div className="md:col-span-2 flex items-center gap-2 text-xs text-slate-500">
            <input name="consent" id="consent" type="checkbox" required className="rounded border-slate-300" />
            <label htmlFor="consent">I agree to receive onboarding emails. You can unsubscribe anytime.</label>
          </div>

          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              name="intent"
              value="start_trial"
              className="px-5 py-3 rounded-2xl text-white"
              style={{ background: "#0B3BFF" }}
            >
              Start free trial
            </button>

            <button
              type="submit"
              name="intent"
              value="book_demo"
              className="px-5 py-3 rounded-2xl border border-slate-300"
            >
              Book 15-min demo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Login() {
  return (
    <section id="login" className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h3 className="text-xl font-bold">Login</h3>
        <p className="mt-1 text-slate-600 text-sm">Already have an account? Sign in to your cockpit.</p>
        <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="••••••••" />
          </div>
          <button className="mt-2 px-5 py-3 rounded-2xl text-white" style={{ background: "#0B3BFF" }}>Sign in</button>
        </form>
        <p className="mt-3 text-xs text-slate-500">Single sign‑on available for partners.</p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Faq q="Do I need accounting software?" a="No. Bank connect or a simple CSV is enough to start. We integrate with Xero/QuickBooks/Sage for extras." />
        <Faq q="Is bank access safe?" a="Yes. We use read‑only connections via regulated providers. We cannot move money—only read balances and transactions." />
        <Faq q="What is a credit pack?" a="A short, bank‑ready report with your cash view, recent bank flows, key ratios, and warnings so reviews go faster." />
        <Faq q="How fast do I see value?" a="First forecast in about 60 seconds. Most users get a first useful alert within 24 hours." />
      </div>
    </section>
  );
}

function EnterpriseCTA() {
  return (
    <section className="text-white" style={{ background: "#0B3BFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Finsensa for Platforms & Lenders</h3>
          <p className="mt-2 text-slate-300">Launch at scale with single sign‑on, shared assets, and centralized billing. Custom exports and co‑branded packs for your portfolio.</p>
          <div className="mt-5 flex gap-3">
            <a href="#lead" className="px-5 py-3 rounded-2xl bg-white text-slate-900">Book an enterprise demo</a>
            <a href="#" className="px-5 py-3 rounded-2xl border border-white/30">Security & Trust</a>
          </div>
        </div>
        <IllustrationEnterprise />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/finsensa-logo-mark.svg" alt="Finsensa" className="w-8 h-8 rounded-xl bg-white" />
            <span className="font-bold">Finsensa</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">Read‑only Open Banking (agent) · Encryption in transit/at rest · Status page</p>
        </div>
        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="#tour" className="hover:underline">Product tour</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#compare" className="hover:underline">Compare plans</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="#lead" className="hover:underline">Book a demo</a></li>
            <li><a href="#lead" className="hover:underline">Contact</a></li>
            <li><a href="#login" className="hover:underline">Login</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Trust</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Data Protection Addendum</li>
            <li>Sub‑processors</li>
            <li>Security overview</li>
            <li>Privacy · Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Finsensa. All rights reserved.</div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/90 backdrop-blur border-t border-slate-200 p-3 flex items-center justify-between">
      <span className="text-sm font-medium">See cash in 60 seconds</span>
      <div className="flex gap-2">
        <a href="#lead" className="px-3 py-2 rounded-xl text-white text-sm" style={{ background: "#0B3BFF" }}>Start trial</a>
        <a href="#login" className="px-3 py-2 rounded-xl border border-slate-300 text-sm">Login</a>
      </div>
    </div>
  );
}

function OutcomeTile({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm text-slate-600">{subtitle}</div>
    </div>
  );
}

function FeatureCard({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-video w-full mb-4 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
        {children}
      </div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold" style={{ background: "#0B3BFF" }}>{step}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Caselet({ title, metric, text }: { title: string; metric: string; text: string }) {
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-3xl font-extrabold mt-1">{metric}</div>
      <p className="mt-2 text-sm text-slate-700">{text}</p>
    </div>
  );
}

function PlanCard({ name, price, period, highlight, bullets, badge, sub }: { name: string; price: string; period: string; highlight: string; bullets: string[]; badge?: string; sub?: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
      <div className="flex items-baseline gap-2">
        {badge && <div className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200">{badge}</div>}
        <div className="text-lg font-semibold">{name}</div>
      </div>
      <div className="text-3xl font-extrabold mt-1">{price}<span className="text-base font-semibold">{period}</span></div>
      {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
      <div className="mt-1 text-sm text-slate-500">{highlight}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href="#lead" className="mt-5 px-5 py-3 rounded-2xl text-white text-center" style={{ background: "#0B3BFF" }}>Select</a>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left sticky top-0 bg-white border-b border-slate-200 p-3 font-semibold text-slate-700">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="p-3 border-b border-slate-100 align-top">{children}</td>;
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white">
      <div className="font-semibold">{q}</div>
      <p className="mt-2 text-sm text-slate-700">{a}</p>
    </div>
  );
}

function IllustrationDashboard() {
  return (
    <svg viewBox="0 0 600 360" className="w-full h-auto rounded-2xl border border-slate-200 bg-white" role="img" aria-label="Dashboard preview showing a cash line and Trust badge">
      <rect x="0" y="0" width="600" height="360" fill="#ffffff" />
      <rect x="20" y="20" width="140" height="20" rx="6" fill="#0f172a" />
      <rect x="20" y="60" width="80" height="10" rx="5" fill="#cbd5e1" />
      <rect x="520" y="20" width="60" height="24" rx="12" fill="#22c55e" />
      <path d="M40 300 C 120 220, 200 260, 260 180 S 400 140, 560 220" stroke="#0ea5e9" strokeWidth="6" fill="none" />
      <rect x="40" y="320" width="120" height="12" rx="6" fill="#94a3b8" />
      <rect x="180" y="320" width="80" height="12" rx="6" fill="#cbd5e1" />
    </svg>
  );
}

function IllustrationTrust() {
  return (
    <svg viewBox="0 0 600 338" className="w-full h-full" role="img" aria-label="Cash line with freshness timer and confidence badge">
      <rect width="600" height="338" fill="#ffffff" />
      <rect x="20" y="20" width="100" height="16" rx="8" fill="#94a3b8" />
      <rect x="140" y="20" width="80" height="16" rx="8" fill="#22c55e" />
      <path d="M30 280 C 150 180, 230 240, 320 160 S 470 150, 570 210" stroke="#0ea5e9" strokeWidth="6" fill="none" />
      <circle cx="520" cy="40" r="14" fill="#22c55e" />
    </svg>
  );
}

function IllustrationAlerts() {
  return (
    <svg viewBox="0 0 600 338" className="w-full h-full" role="img" aria-label="Alerts for low cash, payroll, taxes, late payer">
      <rect width="600" height="338" fill="#ffffff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="24" y={24 + i * 74} width="420" height="48" rx="12" fill="#f1f5f9" />
          <rect x="460" y={24 + i * 74} width="116" height="48" rx="12" fill={["#ef4444", "#f59e0b", "#0ea5e9", "#22c55e"][i]} />
        </g>
      ))}
    </svg>
  );
}

function IllustrationDebts() {
  return (
    <svg viewBox="0 0 600 338" className="w-full h-full" role="img" aria-label="Debt list with pass/amber/fail tags">
      <rect width="600" height="338" fill="#ffffff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="24" y={24 + i * 74} width="420" height="48" rx="12" fill="#f8fafc" />
          <rect x="460" y={24 + i * 74} width="36" height="12" rx="6" fill={["#22c55e", "#f59e0b", "#22c55e", "#ef4444"][i]} />
        </g>
      ))}
    </svg>
  );
}

function IllustrationReport() {
  return (
    <svg viewBox="0 0 600 338" className="w-full h-full" role="img" aria-label="Credit‑Ready Pack cover with charts">
      <rect width="600" height="338" fill="#ffffff" />
      <rect x="40" y="24" width="240" height="290" rx="16" fill="#f1f5f9" />
      <rect x="320" y="24" width="240" height="290" rx="16" fill="#f1f5f9" />
      <rect x="70" y="60" width="180" height="16" rx="8" fill="#94a3b8" />
      <rect x="350" y="60" width="180" height="16" rx="8" fill="#94a3b8" />
      <path d="M350 240 C 390 200, 430 260, 560 200" stroke="#0ea5e9" strokeWidth="6" fill="none" />
    </svg>
  );
}

function IllustrationAdvisor() {
  return (
    <svg viewBox="0 0 600 360" className="w-full h-auto rounded-2xl border border-slate-200 bg-white" role="img" aria-label="Advisor roll‑up across clients">
      <rect x="0" y="0" width="600" height="360" fill="#ffffff" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="24" y={24 + i * 52} width="480" height="36" rx="10" fill="#f8fafc" />
          <circle cx="540" cy={42 + i * 52} r="10" fill={["#22c55e", "#f59e0b", "#22c55e", "#ef4444", "#22c55e", "#22c55e"][i]} />
        </g>
      ))}
    </svg>
  );
}

function IllustrationEnterprise() {
  return (
    <svg viewBox="0 0 600 360" className="w-full h-auto rounded-2xl border border-white/20 bg-white/5" role="img" aria-label="Enterprise management dashboard">
      <rect x="0" y="0" width="600" height="360" fill="transparent" />
      <rect x="30" y="40" width="540" height="40" rx="12" fill="rgba(255,255,255,0.2)" />
      <rect x="30" y="100" width="260" height="200" rx="16" fill="rgba(255,255,255,0.15)" />
      <rect x="310" y="100" width="260" height="200" rx="16" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

function Countdown({ hours = 0, minutes = 0, seconds = 0 }: { hours?: number; minutes?: number; seconds?: number }) {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = Math.floor(time / 3600).toString().padStart(2, "0");
  const m = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const s = Math.floor(time % 60).toString().padStart(2, "0");
  return (
    <div className="flex items-center gap-2">
      <KpiBox label="Hours" value={h} />
      <KpiBox label="Minutes" value={m} />
      <KpiBox label="Seconds" value={s} />
    </div>
  );
}

function KpiBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-1 rounded-lg bg-white text-slate-900 text-center">
      <div className="text-lg font-bold leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-wide opacity-70">{label}</div>
    </div>
  );
}
export default function Page() {
  return <FinsensaTemplateAdapt />;
}
