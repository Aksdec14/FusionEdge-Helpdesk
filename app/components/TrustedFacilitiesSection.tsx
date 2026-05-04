"use client";

import { useEffect, useRef } from "react";

const CLIENT_LOGOS = [
    "Enterprise Office",
    "Corporate Campus",
    "Multi-Site Ops",
    "Facility Team",
    "Workplace Admin",
    "Property Group",
    "Infrastructure",
    "Service Desk",
    "Operations Hub",
    "Maintenance Team",
];

// Duplicate items so the marquee loops seamlessly
const ROW_ONE = [...CLIENT_LOGOS.slice(0, 6), ...CLIENT_LOGOS.slice(0, 6)];
const ROW_TWO = [...CLIENT_LOGOS.slice(4), ...CLIENT_LOGOS.slice(4)];

function MarqueeRow({
    logos,
    direction = "ltr",
    speed = "22s",
}: {
    logos: string[];
    direction?: "ltr" | "rtl";
    speed?: string;
}) {
    return (
        /* ── overflow hidden mask ── */
        <div className="w-full overflow-hidden">
            <div
                className="flex w-max gap-4"
                style={{
                    animation: `marquee-${direction} ${speed} linear infinite`,
                }}
            >
                {logos.map((logo, i) => (
                    <div
                        key={`${logo}-${i}`}
                        aria-hidden={i >= logos.length / 2}   /* hide duplicates from a11y tree */
                        className="
              flex h-24 w-44 shrink-0 items-center justify-center
              rounded-lg border border-gray-100 bg-white px-5
              text-center shadow-sm shadow-gray-200/70
              sm:w-52 lg:w-60
            "
                    >
                        <span className="text-[0.65rem] font-bold uppercase tracking-wide text-gray-700 sm:text-xs">
                            {logo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TrustedFacilitiesSection() {
    return (
        <>
            {/* ── Keyframes injected once at the top ── */}
            <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        /* Pause on hover / focus-within for accessibility */
        .marquee-pause:hover div,
        .marquee-pause:focus-within div {
          animation-play-state: paused;
        }
      `}</style>

            <section
                id="trusted-teams"
                className="overflow-hidden bg-[#F7F5F2] py-14 sm:py-20 lg:py-24"
                aria-labelledby="trusted-heading"
            >
                {/* ── Header copy ── */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span
                            className="
                inline-flex rounded-full border border-purple-100
                bg-white px-4 py-2 text-[0.65rem] font-semibold
                uppercase tracking-wide text-[#6B3FA0] shadow-sm
                sm:text-xs
              "
                        >
                            Our Clients
                        </span>

                        <h2
                            id="trusted-heading"
                            className="
                mt-5 text-[clamp(1.75rem,5vw,3rem)]
                font-bold leading-tight tracking-tight text-gray-950
              "
                        >
                            Trusted by Teams Managing Complex Facilities
                        </h2>

                        <p
                            className="
                mt-5 text-[clamp(0.875rem,2vw,1.125rem)]
                leading-8 text-gray-600
              "
                        >
                            From enterprise offices to campuses and multi-site facilities,
                            teams rely on FusionEdge to maintain efficiency, visibility, and
                            operational control.
                        </p>

                        <p className="mt-3 text-sm font-medium text-gray-500">
                            Place client logos here for credibility and trust signals.
                        </p>
                    </div>
                </div>

                {/* ── Marquee rows ── */}
                <div
                    className="marquee-pause mt-12 flex flex-col gap-4 sm:mt-14"
                    aria-label="Client logos"
                >
                    {/* Row 1 — left to right */}
                    <MarqueeRow logos={ROW_ONE} direction="ltr" speed="22s" />

                    {/* Row 2 — right to left, slightly faster */}
                    <MarqueeRow logos={ROW_TWO} direction="rtl" speed="18s" />
                </div>

                {/* ── CTA ── */}
                <div className="mx-auto mt-10 flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
                    <a
                        href="#contact"
                        className="
              inline-flex min-h-[44px] items-center justify-center gap-2
              rounded-xl border border-gray-200 bg-white
              px-5 py-3 text-sm font-semibold text-gray-900
              shadow-sm transition-all duration-200
              hover:border-[#6B3FA0] hover:text-[#6B3FA0] hover:shadow-md
              active:scale-[0.98]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#6B3FA0] focus-visible:ring-offset-2
            "
                    >
                        Get a Free Demo
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </section>
        </>
    );
}