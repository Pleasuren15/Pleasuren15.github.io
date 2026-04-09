import React, { useState, useRef, useCallback } from 'react';

const SectionHeading: React.FC<{ children: string; color?: 'red' | 'blue' }> = ({ children, color = 'blue' }) => (
    <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2">
            {color === 'blue' ? '— Personal' : '— Career'}
        </p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            {children}
        </h3>
    </div>
);

const experiences = [
    {
        title: "Intermediate Software Engineer",
        company: "Derivco",
        period: "Apr 2023 - Present",
        current: true,
        description:
            "I Contributed across the full stack of a real-time, blockchain-based gaming platform, delivering features spanning financial systems, game mechanics, and user experience. Built and maintained the infrastructure pipelines that automated deployment across multiple environments, ensuring reliable and secure releases. Designed and implemented core backend systems  including wallet management, transaction processing, and configurable fee handling, while also contributing to the frontend with UI improvements and real-time interaction features. Established automated testing practices to improve code quality and release confidence throughout the development lifecycle",
        technologies: ["C#", "React", "PostgreSQL", "SignalR", "Terraform", "+ More"],
    },
    {
        title: "Junior Software Engineer",
        company: "Derivco",
        period: "Feb 2023 - Mar 2024",
        current: false,
        description:
            "Played a key role in the initial development of a real-time AI-driven messaging product, built to replace a legacy messaging system. Contributed to scaffolding the core API architecture and delivering foundational features from the ground up. Led the design and implementation of continuous integration pipelines across all APIs, navigating the complexities of integrating new technologies to deliver an automated, fast, and reliable feedback loop that freed the team to focus on product development.",
        technologies: ["C#", "MVC", "Docker", "NUnit", "Dapper", "+ More"],
    },
    {
        title: "Graduate Developer",
        company: "Derivco",
        period: "2020 - 2021",
        current: false,
        description:
            "Worked on a high-volume iGaming platform responsible for prize distribution, implementing, testing, and deploying assigned features while contributing to technical documentation.  Progressed from manual testing to leading automated testing efforts — covering unit, integration, and regression — on an established promotional and customer messaging product, resulting in a measurable reduction in bugs. Also contributed to feature development across both products, gaining a strong practical understanding of the full software development lifecycle in a production environment.",
        technologies: ["C#", "YAML", "MsSQL", "LGTM", "EFC", "+ More"],
    },
    {
        title: "Vacation Student",
        company: "Psybergate",
        period: "2021 - 7 Days",
        current: false,
        description:
            "Completed vacation work that served as an early introduction to the professional technology industry, gaining exposure to real-world software development practices and team collaboration. Worked alongside fellow students on a tax calculation project, building foundational experience in collaborative development.",
        technologies: ["Java", "Spring Boot", "MySQL", "Git", "Excel"],
    },
];

const DRAG_THRESHOLD = 60;

function useDragNav(onNext: () => void, onPrev: () => void) {
    const startX = useRef<number | null>(null);
    const dragging = useRef(false);

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        startX.current = e.clientX;
        dragging.current = true;
    }, []);

    const onPointerUp = useCallback((e: React.PointerEvent) => {
        if (!dragging.current || startX.current === null) return;
        const delta = startX.current - e.clientX;
        if (delta > DRAG_THRESHOLD) onNext();
        else if (delta < -DRAG_THRESHOLD) onPrev();
        startX.current = null;
        dragging.current = false;
    }, [onNext, onPrev]);

    const onPointerLeave = useCallback(() => {
        startX.current = null;
        dragging.current = false;
    }, []);

    return { onPointerDown, onPointerUp, onPointerLeave };
}

const ExperienceCard: React.FC<{
    exp: typeof experiences[0];
    animKey: number;
    size: 'lg' | 'sm';
}> = ({ exp, animKey, size }) => {
    const p = size === 'lg' ? 'p-6' : 'p-5';
    const titleSize = size === 'lg' ? 'text-lg' : 'text-sm';
    const companySize = size === 'lg' ? 'text-sm' : 'text-xs';
    const descSize = size === 'lg' ? 'text-sm' : 'text-xs';
    const mb = size === 'lg' ? 'mb-4' : 'mb-3';

    return (
        <div
            key={animKey}
            className="exp-fade p-px"
            style={{ background: 'linear-gradient(135deg, #ef4444 0%, #1d4ed8 50%, #ef4444 100%)' }}
        >
            <div className={`bg-neutral-900 ${p}`}>
                <div className={`flex items-start justify-between ${mb}`}>
                    <div>
                        <h4 className={`${titleSize} font-bold text-white leading-snug`}>{exp.title}</h4>
                        <p className={`${companySize} font-medium text-neutral-400 mt-0.5`}>{exp.company}</p>
                    </div>
                    {exp.current && (
                        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-full shrink-0 ml-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                        </span>
                    )}
                </div>

                {size === 'sm' && (
                    <span className="text-[10px] font-semibold text-red-400 tracking-wide uppercase">{exp.period}</span>
                )}

                <div className={`h-px bg-neutral-700/60 ${size === 'sm' ? 'my-3' : 'mb-4'}`} />
                <p className={`${descSize} text-neutral-400 leading-relaxed mb-4`}>{exp.description}</p>

                <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-medium bg-neutral-800 text-neutral-300 border border-neutral-700/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Breadcrumbs: React.FC<{ active: number; total: number; onSelect: (i: number) => void }> = ({ active, total, onSelect }) => (
    <div className="flex items-center justify-center gap-2 mt-5">
        {Array.from({ length: total }).map((_, i) => (
            <button
                key={i}
                onClick={() => onSelect(i)}
                aria-label={`Go to ${experiences[i].title}`}
                className="transition-all duration-300"
                style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: i === active ? '4px' : '50%',
                    background: i === active ? '#ef4444' : '#404040',
                }}
            />
        ))}
    </div>
);

const Experience: React.FC = () => {
    const [active, setActive] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    const navigate = useCallback((next: number) => {
        if (next < 0 || next >= experiences.length || next === active) return;
        setAnimKey(k => k + 1);
        setActive(next);
    }, [active]);

    const goNext = useCallback(() => navigate(active + 1), [active, navigate]);
    const goPrev = useCallback(() => navigate(active - 1), [active, navigate]);

    const drag = useDragNav(goNext, goPrev);
    const exp = experiences[active];
    const next = active < experiences.length - 1 ? experiences[active + 1] : null;

    return (
        <div className="px-4 sm:px-0 w-full">
            <SectionHeading color="red">Experience</SectionHeading>

            {/* ── DESKTOP ── */}
            <div className="hidden sm:block">
                <div className="relative flex items-center mb-8">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-neutral-700" />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-red-500 transition-all duration-500"
                        style={{ width: `${(active / (experiences.length - 1)) * 100}%` }}
                    />
                    {experiences.map((e, i) => (
                        <button
                            key={i}
                            onClick={() => navigate(i)}
                            className="relative z-10 flex flex-col items-center"
                            style={{ flex: 1 }}
                            aria-label={e.title}
                        >
                            <div
                                className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                                style={{
                                    background: i <= active ? '#ef4444' : '#262626',
                                    borderColor: i <= active ? '#ef4444' : '#525252',
                                    boxShadow: i === active ? '0 0 10px rgba(239,68,68,0.7)' : 'none',
                                }}
                            />
                            <span
                                className="absolute top-5 text-[10px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
                                style={{ color: i === active ? '#ef4444' : '#737373' }}
                            >
                                {e.period}
                            </span>
                        </button>
                    ))}
                </div>

                <div
                    className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
                    {...drag}
                >
                    {next && (
                        <div
                            className="absolute top-0 right-0 w-[30%] pointer-events-none p-px"
                            style={{
                                background: 'linear-gradient(135deg, #ef4444 0%, #1d4ed8 50%, #ef4444 100%)',
                                opacity: 0.22,
                                transform: 'translateX(60%)',
                            }}
                        >
                            <div className="bg-neutral-900 p-4">
                                <p className="text-[10px] font-semibold text-red-400 tracking-wide uppercase mb-1">{next.period}</p>
                                <p className="text-xs font-bold text-white truncate">{next.title}</p>
                                <p className="text-[10px] text-neutral-400 truncate">{next.company}</p>
                            </div>
                        </div>
                    )}
                    <ExperienceCard key={animKey} exp={exp} animKey={animKey} size="lg" />
                </div>

                <Breadcrumbs active={active} total={experiences.length} onSelect={navigate} />
            </div>

            {/* ── MOBILE ── */}
            <div className="sm:hidden">
                <div
                    className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
                    {...drag}
                >
                    {next && (
                        <div
                            className="absolute top-0 right-0 w-[40%] pointer-events-none p-px"
                            style={{
                                background: 'linear-gradient(135deg, #ef4444 0%, #1d4ed8 50%, #ef4444 100%)',
                                opacity: 0.22,
                                transform: 'translateX(55%)',
                            }}
                        >
                            <div className="bg-neutral-900 p-3">
                                <p className="text-[9px] font-semibold text-red-400 tracking-wide uppercase mb-1">{next.period}</p>
                                <p className="text-[10px] font-bold text-white truncate">{next.title}</p>
                                <p className="text-[9px] text-neutral-400 truncate">{next.company}</p>
                            </div>
                        </div>
                    )}
                    <ExperienceCard key={animKey} exp={exp} animKey={animKey} size="sm" />
                </div>
                <Breadcrumbs active={active} total={experiences.length} onSelect={navigate} />
            </div>

            <style>{`
                @keyframes expFade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                .exp-fade { animation: expFade 0.25s ease both; }
            `}</style>
        </div>
    );
};

export default Experience;
