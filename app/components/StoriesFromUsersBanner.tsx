"use client";

export default function StoriesFromUsersBanner() {
    return (
        <section
            id="stories"
            className="w-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] py-14 sm:py-16 lg:py-20"
            aria-labelledby="stories-heading"
        >
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                <div>
                    <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-white">
                        Customer Stories
                    </span>

                    <h2
                        id="stories-heading"
                        className="mt-5 text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl"
                    >
                        Stories from Our Users
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                        See how facility teams are improving their operations with
                        FusionEdge.
                    </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-purple-950/20 sm:p-8 lg:p-10">
                    <blockquote>
                        <p className="text-xl font-semibold leading-9 text-gray-950 sm:text-2xl">
                            “FusionEdge has completely streamlined how we manage
                            facility requests across our offices. Nothing gets lost
                            anymore.”
                        </p>

                        <footer className="mt-6 border-t border-gray-100 pt-5">
                            <p className="text-sm font-bold text-gray-900">
                                Facility Manager
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Corporate Campus
                            </p>
                        </footer>
                    </blockquote>

                    <a
                        href="#testimonials"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#6B3FA0] active:scale-[0.98] sm:w-auto"
                    >
                        View More Customer Testimonials
                        <span className="ml-2" aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}