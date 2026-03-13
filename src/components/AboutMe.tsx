import React from 'react';
import { ShieldCheck, TrendingUp, Star, Users } from 'lucide-react';

const SectionHeading: React.FC<{ children: string; color?: 'red' | 'blue' }> = ({ children, color = 'blue' }) => (
    <>
        <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold mb-2">
            {children}
        </h3>
        <div className={`w-[25%] h-1 mb-8 ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
    </>
);

const AboutMe: React.FC = () => {
    const values = [
        { label: "Integrity", icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-blue-400" strokeWidth={1.5} /> },
        { label: "Growth", icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-blue-400" strokeWidth={1.5} /> },
        { label: "Excellence", icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-blue-400" strokeWidth={1.5} /> },
        { label: "Collaboration", icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-400" strokeWidth={1.5} /> },
    ];

    return (
        <div className='px-4 sm:px-0 w-full'>
            <SectionHeading color="blue">About Me</SectionHeading>

            {/* Bio text - MOVED TO TOP */}
            <div className="mb-16 max-w-2xl">
                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-neutral-200'>
                    I have over 4 years of experience developing globally used software, with hands-on experience in the iGaming industry. I'm a strong advocate for test automation and build performance-driven, scalable systems designed for reliability and growth.
                </p>
            </div>
            
            {/* Large circular stats that overflow - AFTER TEXT */}
            <div className="relative h-96 md:h-[600px] w-screen -ml-4 sm:-ml-8 lg:-ml-30 flex items-center justify-center overflow-hidden mb-16">
                <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
                    {/* Animated gradient orbs */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-400/30 rounded-full blur-3xl animate-pulse" />
                    
                    {/* Central glow circle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 via-transparent to-blue-500/40" />
                    
                    {/* Stats grid in circle - NO BACKGROUND */}
                    <div className="absolute inset-0 border-2 border-blue-500/30 shadow-[0_0_32px_rgba(59,130,246,0.3)] flex items-center justify-center amoeba-shape">
                        <div className="grid grid-cols-2 gap-4 md:gap-6 p-6 md:p-8">
                            {values.map((value, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-neutral-900/60 border border-blue-500/20 backdrop-blur hover:border-blue-500/50 transition-all duration-300 electric-border"
                                >
                                    <span className="mb-3">{value.icon}</span>
                                    <p className="text-lg md:text-xl font-bold text-blue-400">{value.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Corner accent lights */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500/40 rounded-full blur-xl" />
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-cyan-500/40 rounded-full blur-xl" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
