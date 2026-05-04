"use client";

// ─── SVG Icon components ─────────────────────────────────────────────────────

function IconFacility() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="#6B3FA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="9" width="18" height="12" rx="1" />
            <path d="M3 9l9-6 9 6" />
            <rect x="9" y="13" width="6" height="8" />
            <path d="M12 6v.01" />
        </svg>
    );
}

function IconMultiSite() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="#6B3FA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
        >
            {/* Three nodes */}
            <circle cx="5" cy="5" r="2.25" />
            <circle cx="19" cy="5" r="2.25" />
            <circle cx="12" cy="19" r="2.25" />
            {/* Edges */}
            <line x1="7.2" y1="5" x2="16.8" y2="5" />
            <line x1="6.2" y1="6.8" x2="11" y2="16.8" />
            <line x1="17.8" y1="6.8" x2="13" y2="16.8" />
            {/* Location pin caps */}
            <path d="M5 2.75 Q5 1 6.5 1.5 Q8 2 7.25 3.5" strokeWidth="1.6" />
            <path d="M19 2.75 Q19 1 20.5 1.5 Q22 2 21.25 3.5" strokeWidth="1.6" />
            <path d="M12 16.75Q12 15 13.5 15.5Q15 16 14.25 17.5" strokeWidth="1.6" />
        </svg>
    );
}

function IconResponse() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="9" stroke="#6B3FA0" strokeWidth="2" />
            <polyline points="12 6 12 12 15.5 14" stroke="#6B3FA0" strokeWidth="2" />
            {/* Teal accent arrow */}
            <path d="M16.5 3.5L20 2l-1.5 3.5" stroke="#2DD4BF" strokeWidth="1.8" fill="none" />
        </svg>
    );
}

function IconTransparency() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 5C6.5 5 2.5 12 2.5 12S6.5 19 12 19 21.5 12 21.5 12 17.5 5 12 5z"
                stroke="#6B3FA0" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" stroke="#6B3FA0" strokeWidth="2" />
            {/* Teal tick accents */}
            <line x1="12" y1="2" x2="12" y2="5" stroke="#2DD4BF" strokeWidth="1.8" />
            <line x1="12" y1="19" x2="12" y2="22" stroke="#2DD4BF" strokeWidth="1.8" />
        </svg>
    );
}

function IconInsights() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
        >
            {/* Bars */}
            <line x1="6" y1="20" x2="6" y2="14" stroke="#6B3FA0" strokeWidth="2" />
            <line x1="12" y1="20" x2="12" y2="4" stroke="#6B3FA0" strokeWidth="2" />
            <line x1="18" y1="20" x2="18" y2="10" stroke="#6B3FA0" strokeWidth="2" />
            {/* Baseline */}
            <line x1="2" y1="20" x2="22" y2="20" stroke="#6B3FA0" strokeWidth="2" />
            {/* Teal trend line */}
            <path d="M5 12Q9 7 12 10Q15 13 19 7"
                stroke="#2DD4BF" strokeWidth="1.8" fill="none" />
        </svg>
    );
}

// ─── Benefits data ────────────────────────────────────────────────────────────

const BENEFITS = [
    {
        title: "Designed for Facility Operations",
        description:
            "Unlike generic ticketing systems, FusionEdge is built for managing maintenance, cleaning, IT, and infrastructure requests.",
        icon: <IconFacility />,
    },
    {
        title: "Multi-Site Visibility",
        description:
            "Track and manage service requests across multiple buildings or campuses from one dashboard.",
        icon: <IconMultiSite />,
    },
    {
        title: "Faster Response Times",
        description:
            "Automated routing ensures issues reach the right people immediately.",
        icon: <IconResponse />,
    },
    {
        title: "Full Operational Transparency",
        description:
            "Every request is logged with a complete activity history.",
        icon: <IconTransparency />,
    },
    {
        title: "Data-Driven Insights",
        description:
            "Analyze ticket trends, response times, and operational bottlenecks with built-in analytics.",
        icon: <IconInsights />,
    },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function WhyFusionEdgeHelpdeskSection() {
    const lastIsOdd = BENEFITS.length % 2 !== 0;

    return (
        <section
            id="why-fusionedge"
            className="bg-white py-16 sm:py-20 lg:py-24"
            aria-labelledby="why-fusionedge-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ── Header row ── */}
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                    <div>
                        <span className="text-sm font-semibold text-[#6B3FA0]">
                            Why FusionEdge Helpdesk?
                        </span>
                        <h2
                            id="why-fusionedge-heading"
                            className="mt-3 font-bold leading-tight tracking-tight text-gray-950"
                            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                        >
                            Built for facility teams that need control without complexity.
                        </h2>
                    </div>

                    <div className="lg:pl-8">
                        <p
                            className="text-gray-600 leading-8"
                            style={{ fontSize: "clamp(0.9375rem, 2vw, 1.125rem)" }}
                        >
                            FusionEdge gives operations teams one focused place to manage
                            facility requests, coordinate response work, and understand what
                            is happening across every site.
                        </p>

                        {/*
              FIX: min-h for touch target + focus-visible ring
            */}
                        <a
                            href="#contact"
                            className="
                mt-5 inline-flex min-h-[44px] items-center justify-center gap-2
                rounded-lg bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]
                px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                transition-all duration-200 hover:shadow-md active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#6B3FA0] focus-visible:ring-offset-2
              "
                        >
                            Get Started
                        </a>
                    </div>
                </div>

                {/*
          ── Benefit cards ──────────────────────────────────────────────────────
          FIX 1: Removed rigid min-h-[220px] — cards now size to content.
          FIX 2: Last card (5th, when total is odd) uses lg:col-span-2 so it
                 spans the full two-column width instead of stranding half-width.
          FIX 3: sm:grid-cols-2 already handles tablet; no change needed there.
        */}
                <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2">
                    {BENEFITS.map((benefit, index) => {
                        const isLastOdd = lastIsOdd && index === BENEFITS.length - 1;

                        return (
                            <article
                                key={benefit.title}
                                className={`
                  group rounded-2xl border border-gray-100 bg-gray-50 p-6
                  transition-all duration-200
                  hover:-translate-y-1 hover:bg-white
                  hover:shadow-xl hover:shadow-gray-200/70
                  sm:p-8
                  ${isLastOdd ? "sm:col-span-2" : ""}
                `}
                            >
                                {/*
                  FIX: replaced letter placeholder with a real SVG icon
                  wrapped in a consistent pill container
                */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-white shadow-sm">
                                    {benefit.icon}
                                </div>

                                <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-950">
                                    {benefit.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                                    {benefit.description}
                                </p>

                                <span
                                    className="mt-6 inline-flex text-lg font-semibold text-[#6B3FA0] transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}