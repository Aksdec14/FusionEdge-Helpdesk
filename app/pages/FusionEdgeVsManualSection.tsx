"use client";

// ─── Icon pairs — one manual (gray + red accent) / one solution (green + teal accent) ───

function IconScattered() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="1" />
            <path d="M4 9h16" />
            <circle cx="9" cy="6.5" r="1" fill="#9ca3af" />
            <path d="M9 13h6M9 17h3" stroke="#d1d5db" />
            {/* red X — fragmentation signal */}
            <path d="M18 14l3-3m0 3l-3-3" stroke="#ef4444" strokeWidth="1.6" />
        </svg>
    );
}
function IconCentralized() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12h6M12 9v6" />
            <path d="M7 5h10M7 19h10" stroke="#2DD4BF" strokeWidth="1.5" />
        </svg>
    );
}

function IconOwnershipBad() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
            <path d="M17 13l2 2 2-2" stroke="#ef4444" strokeWidth="1.6" />
        </svg>
    );
}
function IconOwnershipGood() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
            <path d="M16 13l2 2 4-4" strokeWidth="1.8" />
        </svg>
    );
}

function IconDelayed() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
            <path d="M16 4l4-2-1 4" stroke="#ef4444" strokeWidth="1.5" fill="none" />
        </svg>
    );
}
function IconRouting() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* lightning bolt */}
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    );
}

function IconBlind() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.9 17.9A9.9 9.9 0 0 1 12 19C6.5 19 2.5 12 2.5 12a17.3 17.3 0 0 1 4.1-5.4M9.9 5.2A10 10 0 0 1 12 5c5.5 0 9.5 7 9.5 7a17.5 17.5 0 0 1-2.1 3" />
            <path d="M3 3l18 18" stroke="#ef4444" strokeWidth="2" />
        </svg>
    );
}
function IconDashboard() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <path d="M3 10v4a4 4 0 0 0 4 4h3" stroke="#2DD4BF" strokeWidth="1.6" />
        </svg>
    );
}

function IconBadRecord() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9 13l6 6M15 13l-6 6" stroke="#ef4444" strokeWidth="1.6" />
        </svg>
    );
}
function IconHistory() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9 15l2 2 4-4" />
        </svg>
    );
}

function IconSilos() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="8" height="13" rx="1" />
            <rect x="14" y="7" width="8" height="13" rx="1" />
            <path d="M10 13h4" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="2 1.5" />
            <path d="M5 7V4M19 7V4" stroke="#d1d5db" />
        </svg>
    );
}
function IconMultiSite() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            stroke="#7DA05B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="8" height="13" rx="1" />
            <rect x="14" y="7" width="8" height="13" rx="1" />
            <path d="M10 13h4" stroke="#2DD4BF" strokeWidth="1.8" />
            <path d="M5 7V4M19 7V4" />
            <path d="M8 4h8" stroke="#2DD4BF" strokeWidth="1.6" />
        </svg>
    );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const COMPARISON_ROWS = [
    {
        manual: { text: "Requests scattered across emails, calls, or WhatsApp", icon: <IconScattered /> },
        fusionedge: { text: "All requests centralized in one platform", icon: <IconCentralized /> },
    },
    {
        manual: { text: "Difficult to track request ownership", icon: <IconOwnershipBad /> },
        fusionedge: { text: "Clear ticket assignment and accountability", icon: <IconOwnershipGood /> },
    },
    {
        manual: { text: "Issues often get missed or delayed", icon: <IconDelayed /> },
        fusionedge: { text: "Automated routing and SLA monitoring", icon: <IconRouting /> },
    },
    {
        manual: { text: "Limited visibility across teams", icon: <IconBlind /> },
        fusionedge: { text: "Real-time dashboards for full visibility", icon: <IconDashboard /> },
    },
    {
        manual: { text: "Poor record keeping", icon: <IconBadRecord /> },
        fusionedge: { text: "Complete ticket history and analytics", icon: <IconHistory /> },
    },
    {
        manual: { text: "Hard to scale across locations", icon: <IconSilos /> },
        fusionedge: { text: "Built for multi-site facility management", icon: <IconMultiSite /> },
    },
];

// ─── Row card ────────────────────────────────────────────────────────────────

function ComparisonCard({
    index,
    text,
    icon,
    variant,
}: {
    index: number;
    text: string;
    icon: React.ReactNode;
    variant: "manual" | "fusionedge";
}) {
    const isManual = variant === "manual";
    return (
        <div
            className={`flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm ${isManual
                    ? "border-gray-100"
                    : "border-purple-100 shadow-purple-100/40"
                }`}
        >
            {/* Icon pill */}
            <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isManual ? "bg-gray-100" : "bg-green-50"
                    }`}
            >
                {icon}
            </div>

            <div>
                <span
                    className={`block text-[10px] font-bold ${isManual ? "text-gray-400" : "text-[#6B3FA0]/50"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>
                <p
                    className={`mt-1 text-sm leading-relaxed ${isManual
                            ? "font-medium text-gray-500"
                            : "font-semibold text-gray-800"
                        }`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function FusionEdgeVsManualSection() {
    return (
        <section
            id="fusionedge-vs-manual"
            className="bg-white py-14 sm:py-20 lg:py-24"
            aria-labelledby="fusionedge-vs-manual-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6B3FA0]">
                        Manual vs FusionEdge
                    </span>

                    <h2
                        id="fusionedge-vs-manual-heading"
                        className="mt-5 font-bold leading-tight tracking-tight text-gray-950"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                    >
                        FusionEdge vs Manual Facility Support
                    </h2>

                    <p
                        className="mt-5 leading-8 text-gray-600"
                        style={{ fontSize: "clamp(0.9375rem, 2vw, 1.125rem)" }}
                    >
                        Many organizations still rely on emails, calls, spreadsheets, or
                        paper logs to manage service requests. FusionEdge replaces these
                        fragmented systems with a structured, intelligent helpdesk platform.
                    </p>
                </div>

                {/* Comparison grid */}
                <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">

                    {/* ── Manual column ── */}
                    <div className="rounded-3xl border border-gray-100 bg-gray-50 p-4 shadow-sm sm:p-5 lg:p-6">
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <h3 className="text-xl font-bold text-gray-950">Manual Process</h3>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                                Fragmented
                            </span>
                        </div>
                        <div className="grid gap-3">
                            {COMPARISON_ROWS.map((row, i) => (
                                <ComparisonCard
                                    key={row.manual.text}
                                    index={i}
                                    text={row.manual.text}
                                    icon={row.manual.icon}
                                    variant="manual"
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── FusionEdge column ── */}
                    <div className="rounded-3xl border border-purple-100 bg-purple-50/40 p-4 shadow-sm shadow-purple-100/50 sm:p-5 lg:p-6">
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <h3 className="text-xl font-bold text-gray-950">FusionEdge Helpdesk</h3>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#6B3FA0] shadow-sm">
                                Centralized
                            </span>
                        </div>
                        <div className="grid gap-3">
                            {COMPARISON_ROWS.map((row, i) => (
                                <ComparisonCard
                                    key={row.fusionedge.text}
                                    index={i}
                                    text={row.fusionedge.text}
                                    icon={row.fusionedge.icon}
                                    variant="fusionedge"
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}