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
            className="bg-white py-14 sm:py-16 lg:py-20"
            aria-labelledby="how-it-works-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] p-[1px] shadow-xl shadow-purple-100">
                    <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <div>
                                <span className="inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                                    How It Works
                                </span>

                                <h2
                                    id="how-it-works-heading"
                                    className="mt-5 text-3xl font-bold leading-tight tracking-normal text-gray-950 sm:text-4xl"
                                >
                                    How FusionEdge Helpdesk Works
                                </h2>

                                <h3 className="mt-6 text-xl font-bold text-gray-900">
                                    Built for Teams Managing Facility Operations
                                </h3>

                                <p className="mt-3 text-base leading-8 text-gray-600">
                                    FusionEdge Helpdesk is designed specifically for teams
                                    handling operational requests across large facilities and
                                    workplaces.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                {WORKFLOW_STEPS.map((step, index) => (
                                    <div
                                        key={step}
                                        className="relative rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] text-sm font-bold text-white">
                                            {index + 1}
                                        </div>
                                        <p className="mt-5 text-lg font-bold leading-snug text-gray-950">
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