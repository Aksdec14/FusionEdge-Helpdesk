"use client";

const CARDS = [
    {
        eyebrow: "Ready to Simplify Facility Support?",
        title: "Capture issues instantly and resolve requests faster.",
        description:
            "When service requests are organized, teams respond faster and facilities run smoother. FusionEdge Helpdesk helps you capture issues instantly, assign responsibility clearly, and resolve problems efficiently.",
        cta: "Get Started - Book a Free Demo",
        href: "#contact",
        variant: "primary",
    },
    {
        eyebrow: "Explore More About Helpdesk",
        title: "Why Facility Teams Need a Modern Helpdesk System",
        description:
            "Learn how modern helpdesk systems are transforming facility management and operational efficiency. Discover how centralized service request management improves response times, accountability, and operational visibility.",
        cta: "Explore More Blogs",
        href: "#blogs",
        variant: "secondary",
    },
];

export default function HelpdeskCTAAndBlogsSection() {
    return (
        <section
            id="contact"
            className="bg-white py-14 sm:py-20 lg:py-24"
            aria-labelledby="helpdesk-cta-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
                    {CARDS.map((card, index) => {
                        const isPrimary = card.variant === "primary";

                        return (
                            <article
                                key={card.eyebrow}
                                className={`flex min-h-[360px] flex-col justify-between rounded-lg p-6 sm:p-8 lg:p-10 ${isPrimary
                                        ? "bg-gradient-to-br from-[#6B3FA0] to-[#2DD4BF] text-white shadow-xl shadow-purple-100"
                                        : "border border-gray-100 bg-gray-50 text-gray-950 shadow-sm"
                                    }`}
                            >
                                <div>
                                    <span
                                        className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-normal ${isPrimary
                                                ? "bg-white/15 text-white"
                                                : "bg-white text-[#6B3FA0] shadow-sm"
                                            }`}
                                    >
                                        {card.eyebrow}
                                    </span>

                                    <h2
                                        id={index === 0 ? "helpdesk-cta-heading" : undefined}
                                        className="mt-6 text-3xl font-bold leading-tight tracking-normal sm:text-4xl"
                                    >
                                        {card.title}
                                    </h2>

                                    <p
                                        className={`mt-5 max-w-xl text-base leading-8 ${isPrimary ? "text-white/85" : "text-gray-600"
                                            }`}
                                    >
                                        {card.description}
                                    </p>
                                </div>

                                <a
                                    href={card.href}
                                    className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] sm:w-fit ${isPrimary
                                            ? "bg-white text-[#6B3FA0] hover:bg-gray-950 hover:text-white"
                                            : "bg-gray-950 text-white hover:bg-[#6B3FA0]"
                                        }`}
                                >
                                    {card.cta}
                                    <span className="ml-2" aria-hidden="true">
                                        →
                                    </span>
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}