import React, { useRef } from 'react';

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        period: "2023 - Present",
        description:
            "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
        technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
        title: "Full Stack Developer",
        company: "Digital Innovations Inc",
        period: "2021 - 2023",
        description:
            "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
        technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
    },
    {
        title: "Junior Developer",
        company: "Startup Hub",
        period: "2020 - 2021",
        description:
            "Built internal tools and contributed to frontend development using React and vanilla JS, collaborating in an agile team environment.",
        technologies: ["React", "JavaScript", "CSS", "REST APIs"],
    },
    {
        title: "Intern Developer",
        company: "CodeBase Agency",
        period: "2019 - 2020",
        description:
            "Assisted in building client websites, fixed bugs across a variety of stacks, and wrote unit tests to improve code coverage.",
        technologies: ["HTML", "CSS", "jQuery", "PHP"],
    },
];

const AboutMe: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className='px-4 sm:px-0 w-full'>
            <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold">
                About Me
            </h3>
            <div className="w-[25%] h-1 bg-red-500 mb-3"></div>
            <p className='mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed mb-10'>
                I have over 4 years of experience developing globally used software, with hands-on experience in the iGaming industry. I'm a strong advocate for test automation and build performance-driven, scalable systems designed for reliability and growth.
            </p>

            {/* Horizontal timeline */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="overflow-x-auto pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Connector row — completely independent of card heights */}
                    <div className="flex min-w-max items-center mb-4">
                        {experiences.map((_, index) => (
                            <div key={index} className="flex items-center" style={{ width: "280px" }}>
                                <div className="shrink-0 w-3 h-3 rounded-full bg-red-500 z-10" />
                                {index < experiences.length - 1 && (
                                    <div className="flex-1 h-0.5 bg-red-500" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Cards row — all same width, height can vary freely */}
                    <div className="flex min-w-max">
                        {experiences.map((exp, index) => (
                            <div key={index} style={{ width: "280px", paddingRight: "24px" }}>
                                <div className="bg-neutral-800 border border-neutral-700 p-4 h-full">
                                    <p className="text-xs text-red-400 font-semibold mb-1">{exp.period}</p>
                                    <h4 className="text-sm font-bold text-white mb-0.5">{exp.title}</h4>
                                    <p className="text-xs text-neutral-400 mb-2">{exp.company}</p>
                                    <p className="text-xs text-neutral-300 mb-3 leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-0.5 text-xs bg-neutral-900 text-neutral-400 border border-neutral-700"
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
        </div>
    );
};

export default AboutMe;
