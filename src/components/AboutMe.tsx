import React from 'react';
import { ShieldCheck, TrendingUp, Star, Users } from 'lucide-react';

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

const values = [
    {
        label: "Integrity",
        description: "Transparent, honest communication — in code and collaboration.",
        icon: <ShieldCheck className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
    },
    {
        label: "Growth",
        description: "Continuously learning and adapting to emerging technologies.",
        icon: <TrendingUp className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
    },
    {
        label: "Excellence",
        description: "High standards for quality, performance, and reliability.",
        icon: <Star className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
    },
    {
        label: "Collaboration",
        description: "Building the best outcomes through shared knowledge and trust.",
        icon: <Users className="w-6 h-6 text-blue-400" strokeWidth={1.5} />,
    },
];

const AboutMe: React.FC = () => {
    return (
        <div className="px-4 sm:px-0 w-full">
            <SectionHeading color="blue">About Me</SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Left — bio + stats */}
                <div className="flex flex-col gap-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-neutral-300">
                        I'm an Intermediate Software Engineer with over 4 years of experience building
                        globally-used software in the iGaming industry. My core strength is .NET development —
                        building scalable backend systems and APIs. I also have solid React skills for
                        crafting responsive frontend interfaces and real-time features. Beyond that, I
                        bring strong DevOps practices with CI/CD pipelines, cloud infrastructure on Azure,
                        PostgreSQL databases, and a focus on test automation. Passionate about clean
                        architecture and continuously learning new technologies.
                    </p>

                </div>

                {/* Right — values grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map((value) => (
                        <div
                            key={value.label}
                            className="relative flex flex-col gap-3 p-5 border border-neutral-700/60 bg-neutral-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)] group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="text-base font-bold text-white">{value.label}</h4>
                            </div>

                            <p className="text-sm text-neutral-400 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
