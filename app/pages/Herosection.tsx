"use client";

const WHY_ITEMS = [
    "Centralized Request Management",
    "Faster Response & Resolution",
    "Complete Visibility & Accountability",
];

const TICKETS = [
    { title: "AC maintenance", priority: "High", status: "Assigned", variant: "high" },
    { title: "Lobby cleaning", priority: "Medium", status: "In Review", variant: "medium" },
    { title: "Network issue", priority: "Urgent", status: "Tech Sent", variant: "urgent" },
    { title: "Lighting repair", priority: "Low", status: "Scheduled", variant: "low" },
] as const;

export default function HeroSection() {
    return (
        <>
            {/* Add once globally in layout.tsx */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

            <section
                id="home"
                className="hs-section"
                aria-labelledby="hero-heading"
            >
                {/* Background blobs */}
                <div className="hs-blob hs-blob-1" aria-hidden="true" />
                <div className="hs-blob hs-blob-2" aria-hidden="true" />
                <div className="hs-blob hs-blob-3" aria-hidden="true" />

                <div className="hs-inner">

                    {/* ── LEFT col ── */}
                    <div className="hs-left">
                        <div className="hs-tag">
                            <span className="hs-tag-dot" aria-hidden="true" />
                            FusionEdge Helpdesk
                        </div>

                        <h1 id="hero-heading" className="hs-h1">
                            Handle Facility Support{" "}
                            <em>Smarter</em> — Not Harder
                        </h1>

                        <div className="hs-body">
                            <p>
                                Facility operations generate hundreds of service requests every
                                day — maintenance issues, cleaning requests, IT problems,
                                infrastructure concerns, and more.
                            </p>
                            <p>
                                When these are managed through emails, calls, or spreadsheets,
                                things get missed, delayed, or lost.
                            </p>
                            <p className="hs-body-strong">
                                FusionEdge Helpdesk centralizes every request into one
                                intelligent platform.
                            </p>
                        </div>

                        <div className="hs-ctas">
                            <a href="#contact" className="hs-btn-primary">
                                Get a Free Demo
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                            <a href="#contact" className="hs-btn-secondary">
                                Contact Us
                            </a>
                        </div>

                        <div className="hs-why">
                            <p className="hs-why-label">
                                Why Teams Choose FusionEdge Helpdesk
                            </p>
                            <div className="hs-why-grid">
                                {WHY_ITEMS.map((item) => (
                                    <div key={item} className="hs-why-pill">
                                        <span className="hs-why-bar" aria-hidden="true" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT col – Dashboard mockup ── */}
                    <div className="hs-mockup-wrap">
                        {/* Floating badges */}
                        <div className="hs-float hs-float-tr" aria-label="Missed Requests: 0">
                            <p className="hs-float-label">Missed Requests</p>
                            <p className="hs-float-val hs-float-val--green">0</p>
                        </div>

                        <div className="hs-mockup-outer">
                            <div className="hs-mockup-inner">
                                {/* Dash header */}
                                <div className="hs-dash-header">
                                    <div>
                                        <p className="hs-dash-label">Live Dashboard</p>
                                        <p className="hs-dash-title">Facility Requests</p>
                                    </div>
                                    <span className="hs-sla-badge">98% SLA</span>
                                </div>

                                {/* Stats */}
                                <div className="hs-stat-grid">
                                    {([["128", "Open Tickets"], ["42", "In Progress"], ["316", "Resolved"]] as const).map(
                                        ([val, lbl]) => (
                                            <div key={lbl} className="hs-stat-card">
                                                <p className="hs-stat-val">{val}</p>
                                                <p className="hs-stat-lbl">{lbl}</p>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* Ticket rows */}
                                <div className="hs-ticket-list">
                                    {TICKETS.map(({ title, priority, status, variant }) => (
                                        <div key={title} className="hs-ticket">
                                            <div className="hs-ticket-info">
                                                <p className="hs-ticket-title">{title}</p>
                                                <p className="hs-ticket-pri">Priority: {priority}</p>
                                            </div>
                                            <span className={`hs-ticket-badge hs-ticket-badge--${variant}`}>
                                                {status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hs-float hs-float-bl" aria-label="Auto Assignment: 24 sec">
                            <p className="hs-float-label">Auto Assignment</p>
                            <p className="hs-float-val">24 sec</p>
                        </div>
                    </div>

                </div>

                <style>{`
          /* ── Section ── */
          .hs-section {
            font-family: 'DM Sans', sans-serif;
            position: relative;
            overflow: hidden;
            background: #fff;
            padding: clamp(3rem, 6vw, 5rem) 1rem clamp(4rem, 8vw, 6rem);
          }

          /* Background blobs */
          .hs-blob {
            position: absolute; border-radius: 50%;
            filter: blur(72px); pointer-events: none; z-index: 0;
          }
          .hs-blob-1 { top: -60px; left: -80px;  width: 420px; height: 420px; background: rgba(91,26,139,0.08); }
          .hs-blob-2 { top: 60px;  right: -80px; width: 320px; height: 320px; background: rgba(29,189,160,0.1); }
          .hs-blob-3 { bottom: -40px; left: 30%; width: 260px; height: 260px; background: rgba(91,26,139,0.05); }

          /* ── Layout grid ── */
          .hs-inner {
            position: relative; z-index: 1;
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 clamp(0.5rem, 3vw, 2rem);
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
          }
          @media (min-width: 1024px) {
            .hs-inner { grid-template-columns: 1.05fr 0.95fr; gap: 4rem; }
          }

          /* ── Left column ── */
          .hs-left { max-width: 580px; }

          .hs-tag {
            display: inline-flex; align-items: center; gap: 0.4rem;
            padding: 0.35rem 1rem; border-radius: 20px;
            border: 1px solid #e0d4f5; background: #f7f3fd;
            font-size: 0.72rem; font-weight: 600;
            letter-spacing: 0.1em; text-transform: uppercase; color: #5B1A8B;
            margin-bottom: 1.25rem;
          }
          .hs-tag-dot { width: 6px; height: 6px; border-radius: 50%; background: #1DBDA0; display: block; }

          .hs-h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 5vw, 3.2rem);
            line-height: 1.12; color: #0f0820; max-width: 540px;
          }
          .hs-h1 em { font-style: italic; color: #5B1A8B; }

          .hs-body { margin-top: 1.4rem; display: flex; flex-direction: column; gap: 0.85rem; max-width: 500px; }
          .hs-body p { font-size: 0.95rem; line-height: 1.75; color: #5a5470; }
          .hs-body-strong { font-weight: 600 !important; color: #0f0820 !important; font-size: 1rem !important; }

          .hs-ctas { margin-top: 1.75rem; display: flex; flex-wrap: wrap; gap: 0.75rem; }

          .hs-btn-primary {
            display: inline-flex; align-items: center; gap: 0.4rem;
            padding: 0.75rem 1.6rem; min-height: 44px; border-radius: 12px;
            background: linear-gradient(135deg, #5B1A8B, #1DBDA0);
            color: #fff; text-decoration: none;
            font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 600;
            transition: transform 0.15s, box-shadow 0.15s;
          }
          .hs-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(91,26,139,0.3); }
          .hs-btn-primary:active { transform: scale(0.98); }
          .hs-btn-primary svg {
            width: 14px; height: 14px; fill: none;
            stroke: #fff; stroke-width: 2.5;
            stroke-linecap: round; stroke-linejoin: round;
          }

          .hs-btn-secondary {
            display: inline-flex; align-items: center;
            padding: 0.75rem 1.6rem; min-height: 44px; border-radius: 12px;
            border: 1.5px solid #e0d4f5; background: #fff;
            color: #0f0820; text-decoration: none;
            font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 600;
            transition: border-color 0.2s, color 0.2s;
          }
          .hs-btn-secondary:hover { border-color: #5B1A8B; color: #5B1A8B; }

          .hs-why { margin-top: 2rem; }
          .hs-why-label {
            font-size: 0.68rem; font-weight: 600;
            letter-spacing: 0.1em; text-transform: uppercase;
            color: #9b92b0; margin-bottom: 0.75rem;
          }
          .hs-why-grid {
            display: grid; grid-template-columns: 1fr; gap: 0.5rem;
          }
          @media (min-width: 480px) {
            .hs-why-grid { grid-template-columns: repeat(3, 1fr); }
          }
          .hs-why-pill {
            background: #fff; border: 1px solid #ede8f5; border-radius: 12px;
            padding: 0.75rem 0.85rem;
            font-size: 0.8rem; font-weight: 600; color: #0f0820; line-height: 1.4;
          }
          .hs-why-bar {
            display: block; height: 3px; width: 28px; border-radius: 2px;
            background: linear-gradient(90deg, #5B1A8B, #1DBDA0);
            margin-bottom: 0.6rem;
          }

          /* ── Right column – Mockup ── */
          .hs-mockup-wrap {
            position: relative;
            margin: 0 auto;
            max-width: 480px; width: 100%;
          }

          /* Floating badges */
          .hs-float {
            position: absolute;
            background: #fff; border: 1px solid #ede8f5; border-radius: 14px;
            padding: 0.65rem 0.9rem;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            z-index: 2;
            display: none;
          }
          @media (min-width: 540px) { .hs-float { display: block; } }
          .hs-float-tr { top: -18px; right: -14px; }
          .hs-float-bl { bottom: -18px; left: -14px; }
          .hs-float-label { font-size: 0.65rem; font-weight: 600; color: #9b92b0; }
          .hs-float-val { font-size: 1.1rem; font-weight: 700; color: #0f0820; margin-top: 0.1rem; }
          .hs-float-val--green { color: #0f6e56; }

          /* Mockup shell */
          .hs-mockup-outer {
            border-radius: 24px; border: 1px solid #ede8f5;
            background: #fff; padding: 1rem;
            box-shadow: 0 24px 64px rgba(91,26,139,0.12);
          }
          .hs-mockup-inner {
            border-radius: 18px; background: #faf9fc;
            border: 1px solid #ede8f5; padding: 1.1rem;
          }

          /* Dashboard header */
          .hs-dash-header {
            display: flex; align-items: flex-start; justify-content: space-between;
            margin-bottom: 1rem;
          }
          .hs-dash-label {
            font-size: 0.65rem; font-weight: 600;
            text-transform: uppercase; letter-spacing: 0.08em; color: #9b92b0;
          }
          .hs-dash-title { font-size: 1rem; font-weight: 700; color: #0f0820; margin-top: 0.1rem; }
          .hs-sla-badge {
            padding: 0.25rem 0.75rem; border-radius: 20px;
            background: #e6f9f6; font-size: 0.72rem; font-weight: 700;
            color: #0f6e56; white-space: nowrap;
          }

          /* Stat grid */
          .hs-stat-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 0.6rem; margin-bottom: 0.9rem;
          }
          .hs-stat-card {
            background: #fff; border: 1px solid #ede8f5;
            border-radius: 14px; padding: 0.8rem 0.7rem;
          }
          .hs-stat-val { font-size: 1.35rem; font-weight: 700; color: #0f0820; }
          .hs-stat-lbl { font-size: 0.65rem; font-weight: 500; color: #9b92b0; margin-top: 0.1rem; }

          /* Ticket rows */
          .hs-ticket-list { display: flex; flex-direction: column; gap: 0.5rem; }
          .hs-ticket {
            background: #fff; border: 1px solid #ede8f5; border-radius: 12px;
            padding: 0.7rem 0.85rem;
            display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;
          }
          .hs-ticket-title { font-size: 0.8rem; font-weight: 600; color: #0f0820; }
          .hs-ticket-pri   { font-size: 0.68rem; color: #9b92b0; margin-top: 2px; }
          .hs-ticket-badge {
            font-size: 0.65rem; font-weight: 600;
            padding: 0.22rem 0.65rem; border-radius: 20px;
            white-space: nowrap; flex-shrink: 0;
          }
          .hs-ticket-badge--high   { background: #fff3e6; color: #c05c00; }
          .hs-ticket-badge--medium { background: #fffbe6; color: #856000; }
          .hs-ticket-badge--urgent { background: #ffeaea; color: #a32d2d; }
          .hs-ticket-badge--low    { background: #f0ecfb; color: #5B1A8B;  }
        `}</style>
            </section>
        </>
    );
}