"use client";

// ─── Ticket Management Dashboard ────────────────────────────────────────────

const TICKETS = [
    { id: "#1042", title: "HVAC unit failure – Floor 3", priority: "High", status: "Open", initials: "AK", color: "#6B3FA0" },
    { id: "#1041", title: "Elevator inspection overdue", priority: "Med", status: "Assigned", initials: "RJ", color: "#7DA05B" },
    { id: "#1039", title: "Lobby lighting replacement", priority: "Low", status: "Resolved", initials: "SM", color: "#2DD4BF" },
    { id: "#1038", title: "Plumbing leak – Basement B2", priority: "High", status: "Assigned", initials: "PL", color: "#f59e0b" },
];

const PRIORITY_STYLES: Record<string, string> = {
    High: "bg-red-50 text-red-800",
    Med: "bg-amber-50 text-amber-800",
    Low: "bg-green-50 text-green-800",
};

const STATUS_STYLES: Record<string, string> = {
    Open: "bg-amber-50 text-amber-800",
    Assigned: "bg-purple-50 text-purple-800",
    Resolved: "bg-green-50 text-green-800",
};

function TicketManagementDashboard() {
    return (
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm shadow-gray-200/70">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Live Dashboard</p>
                    <p className="mt-0.5 text-sm font-bold text-gray-900">Ticket Overview</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-[10px] font-semibold text-gray-400">Live</span>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2 px-4 py-3 sm:px-5 sm:py-4 w-full min-w-0">
                {[
                    { val: "24", label: "Open", color: "text-amber-500" },
                    { val: "12", label: "Assigned", color: "text-[#6B3FA0]" },
                    { val: "98%", label: "Resolved", color: "text-[#7DA05B]" },
                ].map(({ val, label, color }) => (
                    <div key={label} className="rounded-lg border border-gray-100 bg-gray-50 px-2 py-2 sm:px-3 sm:py-2.5">
                        <p className={`text-lg font-extrabold leading-none sm:text-xl ${color}`}>{val}</p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
                    </div>
                ))}
            </div>

            {/* Ticket rows */}
            <div className="divide-y divide-gray-50 px-4 pb-3 sm:px-5 sm:pb-4">
                {TICKETS.map((t) => (
                    <div key={t.id} className="flex items-center gap-2 py-2.5 overflow-hidden">
                        {/* Ticket ID — hidden on small screens */}
                        <span className="hidden w-9 shrink-0 text-[10px] font-bold text-gray-400 sm:block">
                            {t.id}
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[11.5px] font-medium text-gray-700">
                            {t.title}
                        </span>
                        {/* Priority — hidden on small screens */}
                        <span className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold sm:inline-flex ${PRIORITY_STYLES[t.priority]}`}>
                            {t.priority}
                        </span>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${STATUS_STYLES[t.status]}`}>
                            {t.status}
                        </span>
                        <div
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-black text-white"
                            style={{ background: t.color }}
                        >
                            {t.initials}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Smart Assignment Dashboard ──────────────────────────────────────────────

const TECHNICIANS = [
    { initials: "AK", name: "Arjun K.", role: "Electrician", tasks: 3, load: 30, loadColor: "bg-[#7DA05B]", textColor: "text-[#7DA05B]", bg: "#6B3FA0" },
    { initials: "SM", name: "Sara M.", role: "HVAC Tech", tasks: 7, load: 65, loadColor: "bg-amber-400", textColor: "text-amber-500", bg: "#2DD4BF" },
    { initials: "RJ", name: "Ravi J.", role: "Plumber", tasks: 9, load: 88, loadColor: "bg-red-400", textColor: "text-red-500", bg: "#f59e0b" },
];

function SmartAssignmentDashboard() {
    return (
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm shadow-gray-200/70">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Assignment Engine</p>
                    <p className="mt-0.5 text-sm font-bold text-gray-900">Routing Workflow</p>
                </div>
                <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-800">
                    Auto-assign ON
                </span>
            </div>

            {/* Flow diagram:
                mobile  → 3 cards stacked vertically (no connector lines)
                sm+     → original 3-col grid with connector lines */}
            <div className="px-4 py-3 sm:px-5 sm:py-4">
                {/* Mobile layout */}
                <div className="flex flex-col gap-2 sm:hidden">
                    {[
                        { bg: "border-purple-100 bg-purple-50", tag: "Incoming", tagColor: "text-purple-400", title: "Ticket #1043", sub: "Electrical · Bldg A", subColor: "text-purple-600" },
                        { bg: "border-amber-100 bg-amber-50", tag: "Rule Matched", tagColor: "text-amber-500", title: "Elec + Priority", sub: "", subColor: "" },
                        { bg: "border-green-100 bg-green-50", tag: "Assigned To", tagColor: "text-green-500", title: "Arjun K.", sub: "Electrician · Free", subColor: "text-green-600" },
                    ].map(({ bg, tag, tagColor, title, sub, subColor }) => (
                        <div key={tag} className={`rounded-lg border p-2.5 ${bg}`}>
                            <p className={`text-[9px] font-bold uppercase tracking-wider ${tagColor}`}>{tag}</p>
                            <p className="mt-1 text-[11px] font-bold text-gray-900">{title}</p>
                            {sub && <p className={`mt-0.5 text-[9.5px] ${subColor}`}>{sub}</p>}
                        </div>
                    ))}
                </div>

                {/* Desktop layout (original) */}
                <div className="hidden grid-cols-3 items-center gap-1.5 sm:grid">
                    <div className="rounded-lg border border-purple-100 bg-purple-50 p-2.5">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-purple-400">Incoming</p>
                        <p className="mt-1 text-[11px] font-bold text-purple-900">Ticket #1043</p>
                        <p className="mt-0.5 text-[9.5px] text-purple-600">Electrical · Bldg A</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="h-0.5 w-full bg-gray-200" />
                        <div className="w-full rounded-lg border border-amber-100 bg-amber-50 p-2.5">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-amber-500">Rule Matched</p>
                            <p className="mt-1 text-[10px] font-bold text-amber-900">Elec + Priority</p>
                        </div>
                        <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="rounded-lg border border-green-100 bg-green-50 p-2.5">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-green-500">Assigned To</p>
                        <p className="mt-1 text-[11px] font-bold text-green-900">Arjun K.</p>
                        <p className="mt-0.5 text-[9.5px] text-green-600">Electrician · Free</p>
                    </div>
                </div>
            </div>

            {/* Team workload */}
            <div className="border-t border-gray-100 px-4 pb-3 pt-3 sm:px-5 sm:pb-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">Team Workload</p>
                <div className="space-y-2.5">
                    {TECHNICIANS.map((t) => (
                        <div key={t.name} className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                            <div
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-black text-white"
                                style={{ background: t.bg }}
                            >
                                {t.initials}
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-[11.5px] font-semibold text-gray-700">{t.name}</p>
                                <p className="text-[10px] text-gray-400">{t.role}</p>
                            </div>
                            {/* Load bar — hidden on mobile to avoid overflow */}
                            <div className="hidden h-1.5 w-16 shrink-0 rounded-full bg-gray-200 sm:block">
                                <div className={`h-full rounded-full ${t.loadColor}`} style={{ width: `${t.load}%` }} />
                            </div>
                            <span className={`shrink-0 text-[10px] font-bold ${t.textColor}`}>{t.tasks} tasks</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── SLA Monitoring Dashboard ────────────────────────────────────────────────

const SLA_ROWS = [
    { label: "Critical Tickets", pct: 98, color: "bg-[#7DA05B]", textColor: "text-[#7DA05B]" },
    { label: "High Priority", pct: 94, color: "bg-[#7DA05B]", textColor: "text-[#7DA05B]" },
    { label: "Medium Priority", pct: 81, color: "bg-amber-400", textColor: "text-amber-500" },
    { label: "Low Priority", pct: 67, color: "bg-red-400", textColor: "text-red-500" },
];

function SLAMonitoringDashboard() {
    return (
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm shadow-gray-200/70">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Real-Time Compliance</p>
                    <p className="mt-0.5 text-sm font-bold text-gray-900">SLA Tracker</p>
                </div>
                <span className="text-[11px] font-bold text-[#7DA05B]">↑ 2.1% vs last week</span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2 px-4 py-3 sm:px-5 sm:py-4 w-full min-w-0">
                {[
                    { val: "1.4h", label: "Avg Response", color: "text-[#6B3FA0]" },
                    { val: "3.2h", label: "Avg Due Time", color: "text-amber-500" },
                    { val: "96%", label: "Compliance", color: "text-[#7DA05B]" },
                ].map(({ val, label, color }) => (
                    <div key={label} className="rounded-lg border border-gray-100 bg-gray-50 p-2 text-center sm:p-2.5">
                        <p className={`text-lg font-extrabold leading-none sm:text-xl ${color}`}>{val}</p>
                        <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-wide text-gray-400">{label}</p>
                    </div>
                ))}
            </div>

            {/* SLA bars */}
            <div className="space-y-3 px-4 pb-4 sm:px-5 sm:pb-5">
                {SLA_ROWS.map(({ label, pct, color, textColor }) => (
                    <div key={label}>
                        <div className="mb-1.5 flex items-center justify-between">
                            <span className="text-[11.5px] font-semibold text-gray-600">{label}</span>
                            <span className={`text-[11px] font-bold ${textColor}`}>{pct}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-gray-100">
                            <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Ticket Lifecycle Dashboard ──────────────────────────────────────────────

const LIFECYCLE_STEPS = [
    { stage: "Raised", meta: "Today, 09:14 AM · by Building Manager", done: true, active: false },
    { stage: "Auto-Assigned", meta: "Today, 09:15 AM · Arjun K. (HVAC Specialist)", done: true, active: false },
    { stage: "In Progress", meta: "Today, 10:02 AM · On-site inspection started", done: false, active: true },
    { stage: "Under Review", meta: "Pending verification by supervisor", done: false, active: false },
    { stage: "Closed", meta: "SLA target: Today, 5:00 PM", done: false, active: false },
];

function TicketTrackingDashboard() {
    return (
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm shadow-gray-200/70">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        Ticket #1042 · HVAC Failure
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-gray-900">Full Lifecycle View</p>
                </div>
                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-800">
                    In Progress
                </span>
            </div>

            {/* Timeline */}
            <div className="relative px-4 py-3 sm:px-5 sm:py-4">
                <div className="absolute bottom-6 left-[26px] top-6 w-0.5 bg-gray-100" />

                <div className="space-y-3">
                    {LIFECYCLE_STEPS.map(({ stage, meta, done, active }) => {
                        const dotBg = done ? "#7DA05B" : active ? "#6B3FA0" : "#e5e7eb";
                        return (
                            <div key={stage} className="relative flex items-start gap-4">
                                <div
                                    className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-white"
                                    style={{ background: dotBg, boxShadow: `0 0 0 2px ${dotBg}22` }}
                                >
                                    {done && (
                                        <svg className="h-2 w-2" fill="none" viewBox="0 0 8 8">
                                            <path
                                                d="M1 4l2 2 4-4"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div
                                    className={`flex-1 rounded-lg border px-3 py-2 transition-colors ${active
                                            ? "border-purple-100 bg-purple-50"
                                            : done
                                                ? "border-gray-100 bg-gray-50"
                                                : "border-gray-100 bg-gray-50 opacity-45"
                                        }`}
                                >
                                    <p className={`text-[11.5px] font-bold ${active ? "text-[#6B3FA0]" : "text-gray-800"}`}>
                                        {stage}{active && " ← Current"}
                                    </p>
                                    <p className="mt-0.5 text-[10px] text-gray-400">{meta}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

// ─── Feature data ────────────────────────────────────────────────────────────

const HELPDESK_FEATURES = [
    {
        title: "Ticket Management",
        description: "Log, categorize, and track every issue from a centralized dashboard.",
        cta: "View Ticket Dashboard",
        href: "#ticket-management",
        dashboard: <TicketManagementDashboard />,
    },
    {
        title: "Smart Request Assignment",
        description:
            "Automatically route tickets to the right technician, vendor, or team based on category, location, or priority.",
        cta: "See Smart Assignment",
        href: "#smart-assignment",
        dashboard: <SmartAssignmentDashboard />,
    },
    {
        title: "SLA Monitoring",
        description: "Set response timelines and track SLA compliance in real time.",
        cta: "View SLA Tracking",
        href: "#sla-monitoring",
        dashboard: <SLAMonitoringDashboard />,
    },
    {
        title: "Real-Time Ticket Tracking",
        description: "Track the full lifecycle of every request — from creation to resolution.",
        cta: "Track Request Status",
        href: "#ticket-tracking",
        dashboard: <TicketTrackingDashboard />,
    },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export default function DiscoverHelpdeskSection() {
    return (
        <section
            id="features"
            className="bg-white py-10 sm:py-16 lg:py-24 overflow-x-hidden"
            aria-labelledby="discover-helpdesk-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden">

                {/* ── Header ── */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#6B3FA0]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1DBDA0]" aria-hidden="true" />
                        Helpdesk Features
                    </span>
                    <h2
                        id="discover-helpdesk-heading"
                        className="mt-5 font-bold leading-tight tracking-tight text-gray-950"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                    >
                        Discover the FusionEdge Helpdesk
                    </h2>
                    <p
                        className="mt-5 leading-8 text-gray-600"
                        style={{ fontSize: "clamp(0.9375rem, 2vw, 1.125rem)" }}
                    >
                        Explore how FusionEdge simplifies service request management and
                        helps facility teams stay in control of everyday operations.
                    </p>
                </div>

                {/* ── Feature pairs ── */}
                <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14 lg:mt-16 lg:space-y-20">
                    {HELPDESK_FEATURES.map((feature, index) => {
                        const isReversed = index % 2 === 1;
                        return (
                            <article
                                key={feature.title}
                                id={feature.href.replace("#", "")}
                                className="grid items-center gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14"
                            >
                                {/* Dashboard panel — always stacks above text on mobile */}
                                <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                                    {feature.dashboard}
                                </div>

                                {/* Copy */}
                                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-[#1DBDA0]">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <h3
                                        className="mt-2 font-bold tracking-tight text-gray-950 sm:mt-3"
                                        style={{ fontSize: "clamp(1.375rem, 3vw, 1.875rem)" }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-8 text-gray-600 sm:mt-4">
                                        {feature.description}
                                    </p>
                                    <a
                                        href={feature.href}
                                        className="
                                            mt-5 inline-flex min-h-[44px] items-center justify-center gap-2
                                            rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                                            transition-all duration-200 sm:mt-6
                                            bg-gradient-to-r from-[#5B1A8B] to-[#1DBDA0]
                                            hover:shadow-md hover:scale-[1.02]
                                            active:scale-[0.98]
                                            focus-visible:outline-none focus-visible:ring-2
                                            focus-visible:ring-[#5B1A8B] focus-visible:ring-offset-2
                                        "
                                    >
                                        {feature.cta}
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}