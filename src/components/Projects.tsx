import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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

type Status = 'Completed' | 'In Progress';

const STATUS_STYLES: Record<Status, { text: string; bg: string; border: string }> = {
    'Completed':   { text: '#4ade80', bg: '#4ade8012', border: '#4ade8040' },
    'In Progress': { text: '#fbbf24', bg: '#fbbf2412', border: '#fbbf2440' },
};

const projects = [
    {
        name: "Currenly",
        description: "A real-time currency conversion web application featuring live exchange rates, interactive charts, and email notifications for daily updates. Built with ASP.NET Core API and React with TypeScript.",
        stack: ["React", "TypeScript", "ASP.NET Core", "Vercel", "Resend", "ShadCN"],
        status: "Completed" as Status,
        github: "https://github.com/Pleasuren15/currenly",
        live: "https://currenly.vercel.app/",
        year: "2026",
    },
    {
        name: "Optometrists Website",
        description: "A professional optometry practice website with appointment booking, service listings, testimonials, and contact functionality. Deployed on Azure Static Web Apps.",
        stack: ["React", "JavaScript", "Azure Static Web Apps", "CSS"],
        status: "In Progress" as Status,
        github: "https://github.com/Pleasuren15/Given.Ndhlovu.Optometrists",
        live: "https://given-ndhlovu-optometrists.vercel.app/",
        year: "2026",
    },
    {
        name: "One-for-All",
        description: "A personal project tracking application to monitor completed and in-progress projects. Features include project status management, login authentication, and contact functionality.",
        stack: ["React", "TypeScript", "ASP.NET Core", "ShadCN", "Azure"],
        status: "Completed" as Status,
        github: "https://github.com/Pleasuren15/one-for-all",
        live: "https://one-for-all-six.vercel.app",
        year: "2026",
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and experience with a modern dark theme design and responsive layout.",
        stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        status: "Completed" as Status,
        github: "https://github.com/Pleasuren15/Pleasuren15.github.io",
        live: "https://pleasuren15-github-io.vercel.app/",
        year: "2026",
    },
];

const FILTERS: Status[] = ['Completed', 'In Progress'];

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
    const s = STATUS_STYLES[project.status];
    return (
        <div
            className="p-px flex flex-col h-full"
            style={{ background: 'linear-gradient(135deg, #ef4444 0%, #1d4ed8 50%, #ef4444 100%)' }}
        >
            <div className="bg-neutral-900 p-5 flex flex-col h-full gap-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-white leading-snug">{project.name}</h4>
                    <span
                        className="text-[10px] font-semibold px-2 py-0.5 shrink-0"
                        style={{ color: s.text, background: s.bg, border: `1px solid ${s.border}` }}
                    >
                        {project.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed flex-1">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-medium text-neutral-300 bg-neutral-800 border border-neutral-700/80"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-1 border-t border-neutral-800">
                    <span className="text-[10px] text-neutral-600">{project.year}</span>
                    <div className="flex items-center gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 hover:text-white transition-colors duration-200"
                                aria-label="Live site"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PAGE_SIZE = 2;

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<Status>('Completed');
    const [page, setPage] = useState(0);

    const filtered = projects.filter(p => p.status === filter);
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    const handleFilter = (f: Status) => {
        setFilter(f);
        setPage(0);
    };

    return (
        <div className="px-4 sm:px-0 w-full">
            <SectionHeading color="red">Projects</SectionHeading>

            {/* Filter tabs */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        onClick={() => handleFilter(f)}
                        className="text-xs font-semibold px-3 py-1 transition-colors duration-200"
                        style={
                            filter === f
                                ? { color: '#fff', background: '#ef4444', border: '1px solid #ef4444' }
                                : { color: '#737373', background: 'transparent', border: '1px solid #404040' }
                        }
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visible.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
                    <button
                        onClick={() => setPage(p => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="w-8 h-8 flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        style={page === 0
                            ? { color: '#404040', border: '1px solid #2a2a2a', background: 'transparent' }
                            : { color: '#a3a3a3', border: '1px solid #404040', background: 'transparent' }
                        }
                        aria-label="Previous page"
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className="w-2 h-2 transition-all duration-200"
                            style={{
                                background: i === page ? '#ef4444' : '#404040',
                                transform: i === page ? 'scale(1.3)' : 'scale(1)',
                            }}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}

                    <button
                        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={page === totalPages - 1}
                        className="w-8 h-8 flex items-center justify-center text-xs font-bold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        style={page === totalPages - 1
                            ? { color: '#404040', border: '1px solid #2a2a2a', background: 'transparent' }
                            : { color: '#a3a3a3', border: '1px solid #404040', background: 'transparent' }
                        }
                        aria-label="Next page"
                    >
                        ›
                    </button>
                </div>
        </div>
    );
};

export default Projects;
