"use client";

const WORKFLOW_STEPS = [
    "Raise a Request",
    "Assign the Right Team",
    "Resolve & Track",
];

export default function HelpdeskWorksBanner() {
    return (
        <section
            id="how-it-works"
            className="bg-white py-10 sm:py-14 lg:py-20"
            aria-labelledby="how-it-works-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Gradient border wrapper */}
                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#5B1A8B] to-[#1DBDA0] p-[1.5px] shadow-xl shadow-purple-100/60">
                    <div className="rounded-3xl bg-white p-5 sm:p-8 lg:p-10">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">

                            {/* ── Left: copy ── */}
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#5B1A8B]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#1DBDA0]" aria-hidden="true" />
                                    How It Works
                                </span>

                                <h2
                                    id="how-it-works-heading"
                                    className="mt-4 font-bold leading-tight tracking-tight text-gray-950"
                                    style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
                                >
                                    How{" "}
                                    <span className="bg-gradient-to-r from-[#5B1A8B] to-[#1DBDA0] bg-clip-text text-transparent">
                                        FusionEdge
                                    </span>{" "}
                                    Helpdesk Works
                                </h2>

                                <h3 className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
                                    Built for Teams Managing Facility Operations
                                </h3>

                                <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                                    FusionEdge Helpdesk is designed specifically for teams
                                    handling operational requests across large facilities and
                                    workplaces.
                                </p>
                            </div>

                            {/* ── Right: workflow steps ── */}
                            <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3">
                                {WORKFLOW_STEPS.map((step, index) => (
                                    <div
                                        key={step}
                                        className="
                                            relative flex min-[480px]:flex-col
                                            items-center min-[480px]:items-start
                                            gap-3 min-[480px]:gap-0
                                            rounded-2xl border border-[#ede8f5]
                                            bg-[#faf9fc] p-4 sm:p-5
                                            transition-all duration-200
                                            hover:-translate-y-1 hover:shadow-md hover:shadow-purple-100/60
                                        "
                                    >
                                        {/* Step number badge */}
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B1A8B] to-[#1DBDA0] text-sm font-bold text-white shadow-sm">
                                            {index + 1}
                                        </div>

                                        {/* Arrow connector — only between cards on 3-col layout */}
                                        {index < WORKFLOW_STEPS.length - 1 && (
                                            <span
                                                className="absolute -right-1.5 top-1/2 hidden -translate-y-1/2 text-sm font-bold text-purple-300 min-[480px]:block"
                                                aria-hidden="true"
                                            >
                                                →
                                            </span>
                                        )}

                                        <p className="min-[480px]:mt-4 text-sm font-bold leading-snug text-gray-900 sm:text-base">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}