import React, { useRef, useState, useEffect, useCallback } from 'react';

const SectionHeading: React.FC<{ children: string; color?: 'red' | 'blue' }> = ({ children, color = 'blue' }) => (
    <>
        <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold mb-2">
            {children}
        </h3>
        <div className={`w-[25%] h-1 mb-8 ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
    </>
);

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        period: "2023 - Present",
        current: true,
        description:
            "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
        technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
        title: "Full Stack Developer",
        company: "Digital Innovations Inc",
        period: "2021 - 2023",
        current: false,
        description:
            "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
        technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    },
    {
        title: "Junior Developer",
        company: "Startup Hub",
        period: "2020 - 2021",
        current: false,
        description:
            "Built internal tools and contributed to frontend development using React and vanilla JS, collaborating in an agile team environment.",
        technologies: ["React", "JavaScript", "CSS", "REST APIs"],
    },
    {
        title: "Intern Developer",
        company: "CodeBase Agency",
        period: "2019 - 2020",
        current: false,
        description:
            "Assisted in building client websites, fixed bugs across a variety of stacks, and wrote unit tests to improve code coverage.",
        technologies: ["HTML", "CSS", "jQuery", "PHP"],
    },
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const ExperienceCard: React.FC<{ exp: typeof experiences[0] }> = ({ exp }) => (
    <div className="shrink-0 flex flex-col" style={{ width: `${CARD_WIDTH}px` }}>
        <div className="relative flex flex-col h-full rounded-xl border border-neutral-700/60 bg-neutral-900/80 backdrop-blur-sm p-5 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-500/50 hover:shadow-[0_8px_32px_rgba(239,68,68,0.15)] group">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-t-xl" />

            {/* Period + current badge */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">
                    {exp.period}
                </span>
                {exp.current && (
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                    </span>
                )}
            </div>

            {/* Title */}
            <h4 className="text-sm font-bold text-white leading-snug mb-1">
                {exp.title}
            </h4>

            {/* Company */}
            <p className="text-xs font-medium text-neutral-400 mb-3">
                {exp.company}
            </p>

            {/* Divider */}
            <div className="h-px bg-neutral-700/60 mb-3" />

            {/* Description */}
            <p className="text-xs text-neutral-400 leading-relaxed flex-1 mb-4">
                {exp.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/80 transition-colors duration-200 group-hover:border-red-500/30 group-hover:text-neutral-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Experience: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        const ro = new ResizeObserver(updateScrollState);
        ro.observe(el);
        return () => {
            el.removeEventListener('scroll', updateScrollState);
            ro.disconnect();
        };
    }, [updateScrollState]);

    const scrollBy = (dir: 'left' | 'right') => {
        scrollRef.current?.scrollBy({
            left: dir === 'right' ? SCROLL_STEP : -SCROLL_STEP,
            behavior: 'smooth',
        });
    };

    return (
        <div className="px-4 sm:px-0 w-full">
            <SectionHeading color="red">Experience</SectionHeading>

            {/* ── DESKTOP: horizontal scrolling timeline ── */}
            <div className="hidden sm:block relative">
                {/* Left fade + arrow */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(to right, rgb(10,10,10) 0%, transparent 100%)',
                        opacity: canScrollLeft ? 1 : 0,
                    }}
                />
                <button
                    onClick={() => scrollBy('left')}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 shadow-lg transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)] disabled:opacity-0 disabled:pointer-events-none"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Right fade + arrow */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(to left, rgb(10,10,10) 0%, transparent 100%)',
                        opacity: canScrollRight ? 1 : 0,
                    }}
                />
                <button
                    onClick={() => scrollBy('right')}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 shadow-lg transition-all duration-200 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)] disabled:opacity-0 disabled:pointer-events-none"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Scrollable area */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto pb-4 px-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Connector row — single continuous line with dots on top */}
                    <div className="relative flex min-w-max items-center mb-5" style={{ gap: `${CARD_GAP}px` }}>
                        {/* Full-width continuous line behind everything */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-red-500 via-red-500/60 to-red-500/10 pointer-events-none"
                            style={{ left: 6, right: 6 }}
                        />
                        {experiences.map((_, index) => (
                            <div
                                key={index}
                                className="shrink-0 flex items-center justify-start"
                                style={{ width: `${CARD_WIDTH}px` }}
                            >
                                <div className="shrink-0 w-3 h-3 rounded-full bg-red-500 z-10 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                            </div>
                        ))}
                    </div>

                    {/* Cards row */}
                    <div className="flex min-w-max items-stretch" style={{ gap: `${CARD_GAP}px` }}>
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── MOBILE: vertical stacked timeline ── */}
            <div className="sm:hidden relative pl-6">
                {/* Vertical line — uses 100% height of the flex container */}
                <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-red-500 via-red-500/40 to-transparent" />

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Dot on the vertical line */}
                            <div className="absolute -left-[25px] top-4 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] z-10" />

                            <div className="relative flex flex-col rounded-xl border border-neutral-700/60 bg-neutral-900/80 backdrop-blur-sm p-5 overflow-hidden transition-all duration-300 group">
                                {/* Top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-t-xl" />

                                {/* Period + current badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">
                                        {exp.period}
                                    </span>
                                    {exp.current && (
                                        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            Current
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h4 className="text-sm font-bold text-white leading-snug mb-1">
                                    {exp.title}
                                </h4>

                                {/* Company */}
                                <p className="text-xs font-medium text-neutral-400 mb-3">
                                    {exp.company}
                                </p>

                                {/* Divider */}
                                <div className="h-px bg-neutral-700/60 mb-3" />

                                {/* Description */}
                                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Tech pills */}
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
