import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

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


const education = [
    {
        qualification: "Bachelor of Science in Computer Science",
        institution: "University of the Free State",
        period: "2019 - 2022",
        icon: <GraduationCap className="w-4 h-4 text-blue-400" strokeWidth={1.5} />,
        tags: ["Algorithms", "Data Structures", "Software Engineering", "Systems Design", "+ More"],
        color: '#1d4ed8',
    },
    {
        qualification: "National Senior Certificate (Matric)",
        institution: "High School",
        period: "2018",
        icon: <BookOpen className="w-4 h-4 text-red-400" strokeWidth={1.5} />,
        tags: ["Mathematics", "Physical Sciences", "English", "Life Sciences", "+ More"],
        color: '#ef4444',
    },
];

const Education: React.FC = () => {
    return (
        <div className="px-4 sm:px-0 w-full">
            <SectionHeading color="blue">Education</SectionHeading>

            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-neutral-700" />

                <div className="flex flex-col gap-8">
                    {education.map((item, i) => (
                        <div key={i} className="relative flex items-start gap-5 pl-10">
                            {/* Dot */}
                            <div
                                className="absolute left-0 top-1 w-[30px] h-[30px] flex items-center justify-center border bg-neutral-900 z-10"
                                style={{ borderColor: item.color, boxShadow: `0 0 8px ${item.color}55` }}
                            >
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 pt-0.5">
                                <span className="text-sm font-semibold text-white">{item.qualification}</span>
                                <span
                                    className="block text-[10px] font-semibold tracking-widest uppercase mt-0.5 mb-1"
                                    style={{ color: item.color }}
                                >
                                    {item.period}
                                </span>
                                <p className="text-xs text-white mb-2">{item.institution}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[10px] font-medium text-white bg-neutral-800 border border-neutral-700"
                                        >
                                            {tag}
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

export default Education;
