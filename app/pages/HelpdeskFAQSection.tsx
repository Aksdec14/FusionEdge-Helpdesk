"use client";

import { useState } from "react";

const FAQS = [
    {
        question: "What is FusionEdge Helpdesk software?",
        answer:
            "FusionEdge Helpdesk is a centralized platform designed to manage service requests across facilities. It helps teams log, assign, track, and resolve issues efficiently from one system.",
    },
    {
        question: "What is the purpose of a helpdesk in facility management?",
        answer:
            "A helpdesk allows teams to manage operational requests such as maintenance issues, cleaning services, IT support, and infrastructure problems with proper tracking and accountability.",
    },
    {
        question: "How does FusionEdge Helpdesk work?",
        answer:
            "Users submit service requests through the platform. The system categorizes and assigns the ticket to the right team. Managers can track progress, monitor SLA performance, and analyze operational data through dashboards.",
    },
    {
        question: "Is FusionEdge Helpdesk cloud-based?",
        answer:
            "Yes. FusionEdge is a cloud-based platform, allowing facility teams to manage requests and track operations from anywhere.",
    },
    {
        question: "Can FusionEdge manage requests from multiple facilities?",
        answer:
            "Yes. FusionEdge is designed to manage requests across multiple buildings, campuses, or sites from one centralized dashboard.",
    },
];

export default function HelpdeskFAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            id="faqs"
            className="bg-white py-16 sm:py-20 lg:py-28"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
                <div className="lg:pt-6">
                    <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                        Time for Some FAQ
                    </span>

                    <h2
                        id="faq-heading"
                        className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-normal text-gray-950 sm:text-5xl"
                    >
                        Any questions? We got you.
                    </h2>

                    <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
                        Get quick answers about how FusionEdge Helpdesk supports facility
                        teams, centralizes service requests, and improves operational
                        visibility.
                    </p>

                    <a
                        href="#contact"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6B3FA0] transition-colors duration-200 hover:text-[#2DD4BF]"
                    >
                        More FAQs
                        <span aria-hidden="true">-&gt;</span>
                    </a>
                </div>

                <div className="divide-y divide-gray-300 border-y border-gray-300">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={faq.question}>
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="text-base font-bold leading-7 text-gray-900 sm:text-lg">
                                        {faq.question}
                                    </span>
                                    <span className="mt-1 text-xl font-semibold leading-none text-gray-800">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className={`grid overflow-hidden transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr] pb-5"
                                            : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="min-h-0">
                                        <p className="max-w-2xl text-base leading-8 text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}