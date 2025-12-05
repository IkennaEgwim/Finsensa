"use client";

import { useEffect, useRef, useState } from "react";

const C = {
  blue: "#0B3BFF",
  demo: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  snap: "/snapshot.pdf",
  stripe: {
    starter: "https://buy.stripe.com/test_starter",
    growth: "https://buy.stripe.com/test_growth",
    pro: "https://buy.stripe.com/test_pro",
    advisor: "https://buy.stripe.com/test_advisor",
  },
};

const NAV_PRODUCT = [
  { href: "#tour", label: "Overview" },
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#compare", label: "Compare" },
];

const FEATURES = [
  {
    t: "Cash view + Trust badge",
    d: "A live 13-week line with a freshness timer, a fix queue, and a confidence badge.",
    Img: IllustrationTrust,
  },
  {
    t: "Alerts that matter",
    d: "Low cash runway, payroll/tax proximity, and late-payer radar.",
    Img: IllustrationAlerts,
  },
  {
    t: "Debt list, explained simply",
    d: "Keep loan details and key rules in one tidy place.",
    Img: IllustrationDebts,
  },
  {
    t: "One-click lender pack",
    d: "Bank-ready report with cash view, flows, ratios, and warnings.",
    Img: IllustrationReport,
  },
];

const STEPS = [
  { n: "1", t: "Connect", d: "Link your bank (read-only) or upload a CSV." },
  {
    n: "2",
    t: "See truth",
    d: "Your cash forecast appears in 60s with a Trust badge.",
  },
  {
    n: "3",
    t: "Act early",
    d: "Get alerts, run what-ifs, and export a lender pack.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "£39",
    badge: "",
    hl: "Get the basics",
    bullets: ["13-week cash view", "Core alerts", "Up to 2 loans"],
    url: C.stripe.starter,
  },
  {
    name: "Growth",
    price: "£99",
    badge: "Most popular",
    hl: "What-ifs and renewals",
    bullets: ["What-ifs", "Loan rules & renewals", "Up to 6 loans"],
    url: C.stripe.growth,
  },
  {
    name: "Pro",
    price: "£249",
    badge: "",
    hl: "For complex setups",
    bullets: ["Unlimited loans", "Multi-entity", "Custom lender exports"],
    url: C.stripe.pro,
  },
];

const RESOURCES = [
  {
    id: "resources-blog",
    t: "Blog",
    d: "Plain-English posts on cash flow, renewals, and talking to lenders.",
    cta: "Read posts",
    color: C.blue,
  },
  {
    id: "resources-webinars",
    t: "Webinars",
    d: "Live 30-minute sessions: forecast in 60s, renewal timeline, late-payer radar.",
    cta: "See dates",
    color: C.blue,
  },
  {
    id: "resources-ebooks",
    t: "eBooks & Checklists",
    d: "Guides: lender pack, 90/60/30 renewal prep, weekly Cash Check.",
    cta: "Browse library",
    color: C.blue,
  },
];

const COMPARE_HEAD = ["Feature", "Starter", "Growth", "Pro", "Advisor"];
const COMPARE_ROWS = [
  ["Entities (companies)", "1", "1", "3", "20 (+£12–£15 each extra)"],
  ["Loans tracked", "2", "6", "Unlimited", "Per client"],
  ["Cash forecast (13 weeks)", "Yes", "Yes", "Yes", "Yes"],
  ["Trust badge (freshness & fixes)", "Yes", "Yes", "Yes", "Yes"],
  [
    "Alerts (cash/payroll/taxes/late payer)",
    "Core",
    "Core + tuning",
    "Advanced",
    "Advisor routing",
  ],
  ["What-ifs", "—", "2 presets", "Full set", "Per client"],
  ["Credit-Ready Pack export", "Basic", "Standard", "Custom", "Co-branded"],
  ["Multi-entity dashboard", "—", "—", "Yes", "Roll-up"],
  [
    "Support",
    "Email",
    "Priority email",
    "Priority + office hours",
    "Partner success",
  ],
];

export default function Page() {
  return <App />;
}

const S = ({ id, dark, children }) => (
  <section
    id={id}
    className={`${dark ? "bg-slate-50 border-y border-slate-200" : ""}`}
  >
    {children}
  </section>
);

const Wrap = ({ w = "7xl", children }) => {
  const map = {
    "7xl": "max-w-7xl",
    "5xl": "max-w-5xl",
    "3xl": "max-w-3xl",
    md: "max-w-md",
  };
  const max = map[w] || map["7xl"];
  return (
    <div className={`${max} mx-auto px-4 sm:px-6 lg:px-8`}>{children}</div>
  );
};

const H = ({ as: T = "h2", children }) => (
  <T className="text-2xl md:text-3xl font-bold tracking-tight">{children}</T>
);

const P = ({ c = "text-slate-600", s = "mt-2", children }) => (
  <p className={`${s} ${c}`}>{children}</p>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`p-6 rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const Btn = ({ href = "#", primary, children, target, onClick, className = "" }) => (
  <a
    href={href}
    target={target}
    onClick={onClick}
    rel={target ? "noopener noreferrer" : undefined}
    className={`${className} px-5 py-3 rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 ${
      primary
        ? "text-white hover:brightness-110 hover:shadow-md"
        : "border border-slate-300 hover:bg-slate-50 hover:text-[#0B3BFF] hover:border-[#0B3BFF]"
    }`}
    style={primary ? { background: C.blue } : {}}
  >
    {children}
  </a>
);
function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] bg-white text-slate-900 px-3 py-2 rounded"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-white text-slate-900">
        <TopPromoBar />
        <Header />
        <main id="main">
          <Hero />
          <OutcomeStrip />
          <SocialProof />
          <Tour />
          <Demo />
          <SnapshotPreview />
          <HowItWorks />
          <Split
            t="For Accountants & VCFOs"
            bullets={[
              "Roll-up across clients with red/amber/green.",
              "Route taxes/payroll alerts.",
              "Send a co-branded Cash Check PDF.",
            ]}
            primary={{ href: "#pricing", label: "See advisor bundle" }}
            secondary={{ href: "#lead", label: "Partner with us" }}
            Img={IllustrationAdvisor}
          />
          <Split
            dark
            bullets={[]}
            t="For Bank Relationship Managers"
            body="Invite five clients. They upload a CSV and send you a one-page lender pack. Reviews move faster and your inbox is quieter."
            primary={{ href: "#lead", label: "Start an RM pilot" }}
            secondary={{ href: "#resources", label: "See pilot guide" }}
            Img={IllustrationEnterprise}
          />
          <Proof />
          <Plans />
          <AdvisorPanel />
          <FeatureCompare />
          <Resources />
          <Glossary />
          <LeadCapture />
          <Login />
          <FAQ />
          <EnterpriseCTA />
        </main>
        <Footer />
        <MobileStickyCTA />
        <TestSuite />
      </div>
    </>
  );
}

function TopPromoBar() {
  return (
    <div className="text-white" style={{ background: C.blue }}>
      <Wrap>
        <div className="py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Launch Offer</span>
            <span className="opacity-80">
              Advisor bundle: first 5 client seats free for 30 days
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="opacity-80 hidden sm:inline">Offer ends in</span>
            <Countdown hours={17} minutes={26} seconds={0} />
          </div>
        </div>
      </Wrap>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [prod, setProd] = useState(false);
  const [res, setRes] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const resBtnRef = useRef<HTMLButtonElement | null>(null);
  const resMenuRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setProd(false);
        setRes(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        prod &&
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(t) &&
        !btnRef.current.contains(t)
      ) {
        setProd(false);
      }
      if (
        res &&
        resMenuRef.current &&
        resBtnRef.current &&
        !resMenuRef.current.contains(t) &&
        !resBtnRef.current.contains(t)
      ) {
        setRes(false);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [prod, res]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <Wrap>
        <div className="py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/finsensa-logo-mark.svg"
              alt="Finsensa"
              className="w-8 h-8 rounded-xl"
            />
            <span className="font-bold tracking-tight">Finsensa</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 relative">
            <div className="relative">
              <button
                ref={btnRef}
                className="flex items-center gap-1 hover:text-[#0B3BFF] hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
                onClick={() => setProd((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={prod}
                aria-controls="product-menu"
              >
                Product
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#0f172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {prod && (
                <div
                  ref={menuRef}
                  id="product-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-40"
                >
                  {NAV_PRODUCT.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      className="block px-3 py-2 rounded-lg hover:bg-slate-50"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className="hover:text-[#0B3BFF] hover:underline underline-offset-4"
            >
              Pricing
            </a>

            <div className="relative">
              <button
                ref={resBtnRef}
                className="flex items-center gap-1 hover:text-[#0B3BFF] hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
                onClick={() => setRes((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={res}
                aria-controls="resources-menu"
              >
                Resources
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="#0f172a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {res && (
                <div
                  ref={resMenuRef}
                  id="resources-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-40"
                >
                  <a
                    href="#resources-blog"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#resources-webinars"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50"
                  >
                    Webinars
                  </a>
                  <a
                    href="#resources-ebooks"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-50"
                  >
                    eBooks &amp; Checklists
                  </a>
                </div>
              )}
            </div>

            <a
              href="#login"
              className="hover:text-[#0B3BFF] hover:underline underline-offset-4"
            >
              Login
            </a>
            <Btn href="#lead" primary>
              Start free trial
            </Btn>
          </nav>

          {/* Hamburger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg border border-slate-200"
            onClick={() => setOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Mobile drawer + overlay */}
          <div className={`fixed inset-0 z-[100] md:hidden ${open ? "" : "pointer-events-none"}`}>
  <div
    className={`absolute inset-0 transition-opacity ${open ? "bg-slate-900/90 opacity-100" : "opacity-0"}`}
    onClick={() => setOpen(false)}
  />
  <aside
    id="mobile-menu"
    ref={panelRef}
    role="dialog"
    aria-modal="true"
    className={[
      "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl p-6 flex flex-col",
      "transform transition-transform duration-200",
      open ? "translate-x-0" : "translate-x-full",
    ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/finsensa-logo-mark.svg"
                    alt="Finsensa"
                    className="w-7 h-7 rounded-xl"
                  />
                  <span className="font-semibold">Finsensa</span>
                </div>
                <button
                  aria-label="Close menu"
                  className="p-2"
                  onClick={closeMobile}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="#0f172a"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="mt-6 grid gap-2 text-slate-800">
                <div>
                  <div className="px-2 py-2 font-semibold text-slate-600">
                    Product
                  </div>
                  {NAV_PRODUCT.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      onClick={closeMobile}
                      className="block px-4 py-2 rounded-lg hover:bg-slate-50"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
                <a
                  href="#pricing"
                  onClick={closeMobile}
                  className="px-2 py-2 rounded-lg hover:bg-slate-50"
                >
                  Pricing
                </a>
                <div>
                  <div className="px-2 py-2 font-semibold text-slate-600">
                    Resources
                  </div>
                  <a
                    href="#resources-blog"
                    onClick={closeMobile}
                    className="block px-4 py-2 rounded-lg hover:bg-slate-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#resources-webinars"
                    onClick={closeMobile}
                    className="block px-4 py-2 rounded-lg hover:bg-slate-50"
                  >
                    Webinars
                  </a>
                  <a
                    href="#resources-ebooks"
                    onClick={closeMobile}
                    className="block px-4 py-2 rounded-lg hover:bg-slate-50"
                  >
                    eBooks &amp; Checklists
                  </a>
                </div>
                <a
                  href="#login"
                  onClick={closeMobile}
                  className="px-2 py-2 rounded-lg hover:bg-slate-50"
                >
                  Login
                </a>
              </nav>

              <div className="mt-auto grid gap-2">
                <Btn href="#lead" primary onClick={closeMobile}>
                  Start free trial
                </Btn>
                <a
                  href="#demo"
                  onClick={closeMobile}
                  className="px-4 py-3 rounded-2xl text-center border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                >
                  Watch demo
                </a>
              </div>
            </aside>
          </div>
        </div>
      </Wrap>
    </header>
  );
}

function Hero() {
  return (
    <S>
      <Wrap>
        <div className="pt-6 pb-8 md:pt-12 md:pb-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              See your next 13 weeks of cash in{" "}
              <span className="underline decoration-sky-400">60 seconds</span>.
            </h1>
            <P c="text-slate-600 text-sm" s="mt-2">
              For UK small businesses and their accountants.
            </P>
            <P c="text-slate-700 text-lg" s="mt-4">
              Get early warnings for payroll, taxes, and late payers. Download a
              one-page
              <span title="A short, bank-ready PDF that shows cash, key ratios, and any warnings.">
                {" "}
                lender pack
              </span>{" "}
              in one click. We cap alerts at 3 so you act, not drown in noise.
            </P>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Btn href="#lead" primary>
                Start free trial
              </Btn>
              <a href="#demo" className="text-sm underline">
                Watch 90-sec demo
              </a>
              <a href="#snapshot" className="text-sm underline">
                Download sample lender pack
              </a>
            </div>
            <P c="text-xs text-slate-500" s="mt-3">
              Read-only Open Banking · CSV fallback · No credit card required
            </P>
            <div className="mt-4 text-sm text-slate-600">
              “Turned a 4-day annual review into 2 days with the lender pack.” —
              UK RM
            </div>
          </div>
          <IllustrationDashboard />
        </div>
      </Wrap>
    </S>
  );
}

function OutcomeStrip() {
  const items = [
    ["First forecast in 60s", "Connect bank or upload CSV"],
    ["First useful alert in 24h", "Payroll, taxes or late payer"],
    ["5-minute weekly check", "Stay green with our Trust badge"],
  ];
  return (
    <S dark>
      <Wrap>
        <div className="py-6 grid md:grid-cols-3 gap-4">
          {items.map(([t, s]) => (
            <Card key={t}>
              <div className="text-base font-semibold">{t}</div>
              <div className="text-sm text-slate-600">{s}</div>
            </Card>
          ))}
        </div>
      </Wrap>
    </S>
  );
}

function SocialProof() {
  return (
    <S>
      <Wrap>
        <div className="py-8">
          <P c="text-center text-sm text-slate-500">
            Trusted by UK SMEs in Construction, Retail & e-commerce,
            Hospitality, and Advisory
          </P>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-80">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-10 bg-slate-100 rounded-xl"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function Tour() {
  return (
    <S id="tour">
      <Wrap>
        <div className="py-10">
          <H>See the essentials at a glance</H>
          <P>Pictures first. Each card shows a real outcome, not buzzwords.</P>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {FEATURES.map(({ t, d, Img }) => (
              <Card key={t} className="p-5">
                <div className="aspect-video w-full mb-4 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                  <Img />
                </div>
                <div className="font-semibold">{t}</div>
                <P s="mt-1">{d}</P>
              </Card>
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function Demo() {
  return (
    <S id="demo">
      <Wrap w="5xl">
        <div className="py-8">
          <H as="h3">Watch the 90-second demo</H>
          <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
            <iframe
              src={C.demo}
              title="Finsensa 90-second demo"
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function SnapshotPreview() {
  return (
    <S id="snapshot">
      <Wrap w="5xl">
        <div className="py-8">
          <Card className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <H as="h3">Credit-Ready Snapshot (sample)</H>
              <P s="mt-2">
                See the one-page pack your lender wants: cash
                <span title="Spare cash after planned payments.">
                  {" "}
                  headroom
                </span>
                , key ratios, renewal countdown, and recent flows.
              </P>
              <div className="mt-4 flex gap-3">
                <Btn href={C.snap} target="_blank" primary>
                  Download sample PDF
                </Btn>
                <a
                  href="#lead"
                  className="px-5 py-3 rounded-2xl border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                >
                  Start free trial
                </a>
              </div>
            </div>
            <IllustrationReport />
          </Card>
        </div>
      </Wrap>
    </S>
  );
}

function HowItWorks() {
  return (
    <S id="how" dark>
      <Wrap>
        <div className="py-10">
          <H>How it works</H>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <Card key={s.n}>
                <div
                  className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold"
                  style={{ background: C.blue }}
                >
                  {s.n}
                </div>
                <div className="mt-3 font-semibold">{s.t}</div>
                <P s="mt-1">
                  {s.d ===
                  "Your cash forecast appears in 60s with a Trust badge." ? (
                    <>
                      <span>Your cash forecast appears in 60s with a </span>
                      <span title="A small traffic-light that shows if your data is up to date and what to fix.">
                        Trust badge
                      </span>
                      <span>.</span>
                    </>
                  ) : (
                    s.d
                  )}
                </P>
              </Card>
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function Split({ dark, t, body, bullets = [], primary, secondary, Img }) {
  return (
    <S dark={dark}>
      <Wrap>
        <div className="py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <H as="h3">{t}</H>
            {body ? (
              <P s="mt-2" c="text-slate-700 text-sm">
                {body}
              </P>
            ) : null}
            {bullets.length ? (
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex gap-3">
              <Btn href={primary.href} primary>
                {primary.label}
              </Btn>
              {secondary ? (
                <a
                  href={secondary.href}
                  className="px-5 py-3 rounded-2xl border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                >
                  {secondary.label}
                </a>
              ) : null}
            </div>
            {t.includes("Accountants") && (
              <div className="mt-2 text-sm">
                <a href="#lead" className="underline">
                  Run a Cash Check for 3 clients free
                </a>
              </div>
            )}
            {t.includes("Relationship Managers") && (
              <div className="mt-2 text-sm">
                <a href="#lead" className="underline">
                  Invite 5 clients to send a lender pack
                </a>
              </div>
            )}
          </div>
          <Img />
        </div>
      </Wrap>
    </S>
  );
}

function Proof() {
  const items = [
    {
      t: "Avoided a tax pinch",
      m: "£18k",
      x: "Retail SME spotted a taxes clash 14 days early and moved spend—no overdraft fees.",
    },
    {
      t: "Faster review",
      m: "4→2 days",
      x: "Lender turnaround time halved when the lender pack replaced email tennis.",
    },
    {
      t: "Fewer late shocks",
      m: "-32%",
      x: "Construction firm cut late-payer surprises after weekly checks.",
    },
  ];
  return (
    <S>
      <Wrap>
        <div className="py-10 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <Card key={i.t}>
              <div className="text-sm text-slate-500">{i.t}</div>
              <div className="text-3xl font-extrabold mt-1">{i.m}</div>
              <P s="mt-2" c="text-slate-700 text-sm">
                {i.x}
              </P>
            </Card>
          ))}
        </div>
        <div className="max-w-3xl mx-auto pb-10">
          <blockquote className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700">
            “If every SME sent this pack before reviews, my inbox would be
            quieter and deals would move faster.”
            <footer className="mt-3 text-sm text-slate-500">
              Relationship Manager, UK lender (pilot)
            </footer>
          </blockquote>
        </div>
      </Wrap>
    </S>
  );
}

function Plans() {
  return (
    <S id="pricing" dark>
      <Wrap>
        <div className="py-12 text-center">
          <H>Choose your Finsensa plan</H>
          <P>
            All plans include: read-only bank connections, 13-week cash view,
            and core alerts.
          </P>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <PlanCard key={p.name} {...p} />
            ))}
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <P c="text-xs text-slate-500" s="">
              No card required for trial. Annual plans save 2 months.
            </P>
            <a href="#snapshot" className="text-sm underline">
              Download sample lender pack
            </a>
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function PlanCard({ name, price, badge, hl, bullets, url }) {
  return (
    <Card>
      <div className="flex items-baseline gap-2">
        {badge ? (
          <div className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200">
            {badge}
          </div>
        ) : null}
        <div className="text-lg font-semibold">{name}</div>
      </div>
      <div className="text-3xl font-extrabold mt-1">
        {price}
        <span className="text-base font-semibold">/mo</span>
      </div>
      <P c="text-sm text-slate-500" s="mt-1">
        {hl}
      </P>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-col gap-2">
        <Btn href="#lead" primary>
          Start free trial
        </Btn>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm underline text-slate-700"
        >
          Buy now
        </a>
      </div>
    </Card>
  );
}

function AdvisorPanel() {
  return (
    <S>
      <Wrap>
        <div className="py-8">
          <Card className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <H as="h3">Advisor bundle</H>
              <P s="mt-2" c="text-sm text-slate-700">
                £295/mo for 20 client entities, then £12–£15 per extra. Includes
                roll-ups, alert routing, and co-branded Cash Checks.
              </P>
              <div className="mt-4 flex gap-3">
                <Btn href="#lead" primary>
                  Start advisor trial
                </Btn>
                <a
                  href={C.stripe.advisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                >
                  Buy now
                </a>
              </div>
              <div className="mt-2 text-sm">
                <a href="#lead" className="underline">
                  Run a Cash Check for 3 clients free
                </a>
              </div>
            </div>
            <IllustrationAdvisor />
          </Card>
        </div>
      </Wrap>
    </S>
  );
}

function FeatureCompare() {
  return (
    <S id="compare">
      <Wrap>
        <div className="py-10">
          <H as="h3">Compare plan features</H>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-separate [border-spacing:0]">
              <thead>
                <tr>
                  {COMPARE_HEAD.map((h) => (
                    <th
                      key={h}
                      className="text-left sticky top-0 bg-white border-b border-slate-200 p-3 font-semibold text-slate-700"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} className="even:bg-slate-50/60">
                    {row.map((c, j) => (
                      <td
                        key={j}
                        className="p-3 border-b border-slate-100 align-top"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function Resources() {
  return (
    <S id="resources">
      <Wrap>
        <div className="py-12">
          <H>Resources</H>
          <P>
            Short reads, live sessions, and practical guides to help you run
            cash and credit with confidence.
          </P>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {RESOURCES.map((r) => (
              <div key={r.id} id={r.id}>
                <Card>
                  <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center">
                    <span className="text-sm text-slate-500">Cover</span>
                  </div>
                  <div className="mt-3 font-semibold">{r.t}</div>
                  <P s="mt-1">{r.d}</P>
                  <a
                    href="#"
                    className="mt-3 inline-block px-4 py-2 rounded-2xl text-white transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                    style={{ background: r.color }}
                  >
                    {r.cta}
                  </a>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function Glossary() {
  const items = [
    [
      "Lender pack",
      "Bank-ready report with cash view, loan list, and key warnings.",
    ],
    ["Headroom", "Spare cash or limit left after planned payments."],
    [
      "Trust badge",
      "Shows if your data is fresh and if anything needs fixing.",
    ],
  ];
  return (
    <S dark>
      <Wrap>
        <div className="py-10">
          <H as="h3">Glossary (plain English)</H>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-slate-700">
            {items.map(([k, v]) => (
              <div
                key={k}
                className="p-4 rounded-xl bg-white border border-slate-200"
              >
                <b>{k}</b>: {v}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function LeadCapture() {
  return (
    <S id="lead">
      <Wrap w="3xl">
        <div className="py-12">
          <Card>
            <H as="h3">Get your first forecast now</H>
            <P s="mt-1" c="text-slate-600 text-sm">
              Enter your details and we’ll send setup steps. Read-only
              connections · CSV fallback.
            </P>
            <form
              action="https://formcarry.com/s/-qq8EZv-xPs"
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
              <Select
                name="role"
                label="Role"
                options={[
                  "Owner / MD",
                  "Finance lead",
                  "Accountant / VCFO",
                  "Other",
                ]}
              />
              <Select
                name="companySize"
                label="Company size"
                options={["1–4", "5–20", "21–50", "51–200"]}
              />
              <div className="md:col-span-2 flex items-center gap-2 text-xs text-slate-500">
                <input
                  name="consent"
                  id="consent"
                  type="checkbox"
                  required
                  className="rounded border-slate-300"
                />
                <label htmlFor="consent">
                  I agree to receive onboarding emails. You can unsubscribe
                  anytime.
                </label>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  name="intent"
                  value="start_trial"
                  className="px-5 py-3 rounded-2xl text-white transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
                  style={{ background: C.blue }}
                >
                  Start free trial
                </button>
                <div className="mt-3 text-sm">
                  Prefer a walkthrough?{" "}
                  <a href="#demo" className="underline">
                    Watch the 90-sec demo
                  </a>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </Wrap>
    </S>
  );
}

function Select({ name, label, options }) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <select
        name={name}
        required
        className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Login() {
  return (
    <S id="login">
      <Wrap w="md">
        <div className="py-10">
          <Card>
            <H as="h3">Login</H>
            <P s="mt-1" c="text-slate-600 text-sm">
              Already have an account? Sign in to your cockpit.
            </P>
            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-sm font-medium">Email</label>
              <input
                className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
                placeholder="you@company.com"
              />
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
                placeholder="••••••••"
              />
              <Btn href="#" primary>
                Sign in
              </Btn>
            </form>
            <P s="mt-3" c="text-xs text-slate-500">
              Single sign-on available for partners.
            </P>
          </Card>
        </div>
      </Wrap>
    </S>
  );
}

function FAQ() {
  const qa = [
    [
      "Do I need accounting software?",
      "No. Bank connect or a simple CSV is enough to start. We integrate with Xero/QuickBooks/Sage for extras.",
    ],
    [
      "Is bank access safe?",
      "Yes. We use read-only connections via regulated providers. We cannot move money—only read balances and transactions.",
    ],
    [
      "What is a lender pack?",
      "A short, bank-ready report with your cash view, recent bank flows, key ratios, and warnings so reviews go faster.",
    ],
    [
      "How fast do I see value?",
      "First forecast in about 60 seconds. Most users get a first useful alert within 24 hours.",
    ],
  ];
  return (
    <S id="faq">
      <Wrap w="5xl">
        <div className="py-12">
          <H>Frequently asked questions</H>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {qa.map(([q, a]) => (
              <Card key={q}>
                <div className="font-semibold">{q}</div>
                <P s="mt-2" c="text-slate-700 text-sm">
                  {a}
                </P>
              </Card>
            ))}
          </div>
        </div>
      </Wrap>
    </S>
  );
}

function EnterpriseCTA() {
  return (
    <section className="text-white" style={{ background: C.blue }}>
      <Wrap>
        <div className="py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <H as="h3">Finsensa for Platforms & Lenders</H>
            <P s="mt-2" c="text-slate-300">
              Launch at scale with single sign-on, shared assets, and
              centralized billing. Custom exports and co-branded packs for your
              portfolio.
            </P>
            <div className="mt-5 flex gap-3">
              <a
                href="#lead"
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 transition-colors hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-200"
              >
                Book an enterprise demo
              </a>
              <a
                href="#"
                className="px-5 py-3 rounded-2xl border border-white/30 transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/40"
              >
                Security & Trust
              </a>
            </div>
          </div>
          <IllustrationEnterprise />
        </div>
      </Wrap>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      h: "Product",
      links: [
        { t: "Product tour", h: "#tour" },
        { t: "Pricing", h: "#pricing" },
        { t: "Compare plans", h: "#compare" },
      ],
    },
    {
      h: "Company",
      links: [
        { t: "Book a demo", h: "#lead" },
        { t: "Contact", h: "#lead" },
        { t: "Login", h: "#login" },
      ],
    },
    {
      h: "Trust",
      links: [
        { t: "Data Protection Addendum" },
        { t: "Sub-processors" },
        { t: "Security overview" },
        { t: "Privacy · Terms" },
      ],
    },
  ];
  return (
    <footer className="bg-slate-900 text-slate-200">
      <Wrap>
        <div className="py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/finsensa-logo-mark.svg"
                alt="Finsensa"
                className="w-8 h-8 rounded-xl bg-white"
              />
              <span className="font-bold">Finsensa</span>
            </div>
            <P s="mt-3" c="text-sm text-slate-400">
              Read-only Open Banking · Encryption in transit/at rest
            </P>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="font-semibold">{c.h}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {c.links.map((l) => (
                  <li key={l.t}>
                    {l.h ? (
                      <a href={l.h} className="hover:underline">
                        {l.t}
                      </a>
                    ) : (
                      l.t
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrap>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Finsensa. All rights reserved.
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/90 backdrop-blur border-t border-slate-200 p-3 flex items-center justify-between">
      <span className="text-sm font-medium">See cash in 60 seconds</span>
      <div className="flex gap-2">
        <Btn href="#lead" primary>
          Start trial
        </Btn>
        <a
          href="#login"
          className="px-3 py-2 rounded-2xl border border-slate-300 text-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
        >
          Login
        </a>
      </div>
    </div>
  );
}

function Countdown({ hours = 0, minutes = 0, seconds = 0 }) {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => n.toString().padStart(2, "0"),
    h = pad(Math.floor(time / 3600)),
    m = pad(Math.floor((time % 3600) / 60)),
    s = pad(Math.floor(time % 60));
  return (
    <div className="flex items-center gap-2">
      {[
        ["Hours", h],
        ["Minutes", m],
        ["Seconds", s],
      ].map(([l, v]) => (
        <div
          key={l}
          className="px-3 py-1 rounded-lg bg-white text-slate-900 text-center"
        >
          <div className="text-lg font-bold leading-none">{v}</div>
          <div className="text-[10px] uppercase tracking-wide opacity-70">
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}

function TestSuite() {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    const http = (u) => typeof u === "string" && /^https?:\/\//.test(u);
    const exists = (sel) => !!document.querySelector(sel);
    setOk(
      [
        http(C.stripe.starter),
        http(C.stripe.growth),
        http(C.stripe.pro),
        http(C.stripe.advisor),
        typeof C.demo === "string" && C.demo,
        typeof C.snap === "string" && C.snap,
        exists("#demo"),
        exists("#pricing"),
        exists("#tour"),
        exists("#how"),
        exists("#lead"),
        exists("header"),
      ].every(Boolean)
    );
  }, []);
  return (
    <div aria-hidden={!ok} className="sr-only">
      {ok ? "ok" : "fail"}
    </div>
  );
}

function IllustrationDashboard() {
  return (
    <svg
      viewBox="0 0 600 360"
      className="w-full h-auto rounded-2xl border border-slate-200 bg-white"
      role="img"
      aria-label="Dashboard preview showing a cash line and Trust badge"
    >
      <rect x="0" y="0" width="600" height="360" fill="#ffffff" />
      <rect x="20" y="20" width="140" height="20" rx="6" fill="#0f172a" />
      <rect x="20" y="60" width="80" height="10" rx="5" fill="#cbd5e1" />
      <rect x="520" y="20" width="60" height="24" rx="12" fill="#22c55e" />
      <path
        d="M40 300 C 120 220, 200 260, 260 180 S 400 140, 560 220"
        stroke="#0ea5e9"
        strokeWidth="6"
        fill="none"
      />
      <rect x="40" y="320" width="120" height="12" rx="6" fill="#94a3b8" />
      <rect x="180" y="320" width="80" height="12" rx="6" fill="#cbd5e1" />
    </svg>
  );
}

function IllustrationTrust() {
  return (
    <svg
      viewBox="0 0 600 338"
      className="w-full h-full"
      role="img"
      aria-label="Cash line with freshness timer and confidence badge"
    >
      <rect width="600" height="338" fill="#ffffff" />
      <rect x="20" y="20" width="100" height="16" rx="8" fill="#94a3b8" />
      <rect x="140" y="20" width="80" height="16" rx="8" fill="#22c55e" />
      <path
        d="M30 280 C 150 180, 230 240, 320 160 S 470 150, 570 210"
        stroke="#0ea5e9"
        strokeWidth="6"
        fill="none"
      />
      <circle cx="520" cy="40" r="14" fill="#22c55e" />
    </svg>
  );
}

function IllustrationAlerts() {
  return (
    <svg
      viewBox="0 0 600 338"
      className="w-full h-full"
      role="img"
      aria-label="Alerts for low cash, payroll, taxes, late payer"
    >
      <rect width="600" height="338" fill="#ffffff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={24}
            y={24 + i * 74}
            width={420}
            height={48}
            rx={12}
            fill="#f1f5f9"
          />
          <rect
            x={460}
            y={24 + i * 74}
            width={116}
            height={48}
            rx={12}
            fill={["#ef4444", "#f59e0b", "#0ea5e9", "#22c55e"][i]}
          />
        </g>
      ))}
    </svg>
  );
}

function IllustrationDebts() {
  return (
    <svg
      viewBox="0 0 600 338"
      className="w-full h-full"
      role="img"
      aria-label="Debt list with pass/amber/fail tags"
    >
      <rect width="600" height="338" fill="#ffffff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={24}
            y={24 + i * 74}
            width={420}
            height={48}
            rx={12}
            fill="#f8fafc"
          />
          <rect
            x={460}
            y={24 + i * 74}
            width={36}
            height={12}
            rx={6}
            fill={["#22c55e", "#f59e0b", "#22c55e", "#ef4444"][i]}
          />
        </g>
      ))}
    </svg>
  );
}

function IllustrationReport() {
  return (
    <svg
      viewBox="0 0 600 338"
      className="w-full h-full"
      role="img"
      aria-label="Credit-Ready Pack cover with charts"
    >
      <rect width="600" height="338" fill="#ffffff" />
      <rect x="40" y="24" width="240" height="290" rx="16" fill="#f1f5f9" />
      <rect x="320" y="24" width="240" height="290" rx="16" fill="#f1f5f9" />
      <rect x="70" y="60" width="180" height="16" rx="8" fill="#94a3b8" />
      <rect x="350" y="60" width="180" height="16" rx="8" fill="#94a3b8" />
      <path
        d="M350 240 C 390 200, 430 260, 560 200"
        stroke="#0ea5e9"
        strokeWidth="6"
        fill="none"
      />
    </svg>
  );
}

function IllustrationAdvisor() {
  return (
    <svg
      viewBox="0 0 600 360"
      className="w-full h-auto rounded-2xl border border-slate-200 bg-white"
      role="img"
      aria-label="Advisor roll‑up across clients"
    >
      <rect x="0" y="0" width="600" height="360" fill="#ffffff" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x="24"
            y={24 + i * 52}
            width="480"
            height="36"
            rx="10"
            fill="#f8fafc"
          />
          <circle
            cx="540"
            cy={42 + i * 52}
            r="10"
            fill={
              [
                "#22c55e",
                "#f59e0b",
                "#22c55e",
                "#ef4444",
                "#22c55e",
                "#22c55e",
              ][i]
            }
          />
        </g>
      ))}
    </svg>
  );
}

function IllustrationEnterprise() {
  return (
    <svg
      viewBox="0 0 600 360"
      className="w-full h-auto rounded-2xl border border-white/20 bg-white/5"
      role="img"
      aria-label="Enterprise management dashboard"
    >
      <rect x="0" y="0" width="600" height="360" fill="transparent" />
      <rect
        x="30"
        y="40"
        width="540"
        height="40"
        rx="12"
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x="30"
        y="100"
        width="260"
        height="200"
        rx="16"
        fill="rgba(255,255,255,0.15)"
      />
      <rect
        x="310"
        y="100"
        width="260"
        height="200"
        rx="16"
        fill="rgba(255,255,255,0.15)"
      />
    </svg>
  );
}
