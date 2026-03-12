import React from 'react';

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

const ExperienceCard: React.FC<{ exp: typeof experiences[0] }> = ({ exp }) => (
    <div
        className="group relative flex flex-col"
        style={{ width: "300px", paddingRight: "24px" }}
    >
        <div className="relative flex flex-col h-full rounded-xl border border-neutral-700/60 bg-neutral-900/80 backdrop-blur-sm p-5 overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-red-500/50 group-hover:shadow-[0_8px_32px_rgba(239,68,68,0.15)]">
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

const Experience: React.FC = () => (
    <div className="px-4 sm:px-0 w-full">
        <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold">
            Experience
        </h3>
        <div className="w-[25%] h-1 bg-red-500 mb-8" />

        <div className="relative">
            <div
                className="overflow-x-auto pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {/* Connector row */}
                <div className="flex min-w-max items-center mb-5">
                    {experiences.map((_, index) => (
                        <div key={index} className="flex items-center" style={{ width: "300px" }}>
                            <div className="shrink-0 w-3 h-3 rounded-full bg-red-500 z-10 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                            {index < experiences.length - 1 && (
                                <div className="flex-1 h-px bg-gradient-to-r from-red-500 to-red-500/30" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Cards row */}
                <div className="flex min-w-max items-stretch">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Experience;
