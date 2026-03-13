import { useState } from "react";
import { Linkedin, Github, Instagram, MessageCircle, Phone, Mail, ClipboardCheck, Axe } from "lucide-react";


const socials = [
    {
        icon: <Linkedin className="w-4 h-4" strokeWidth={1.5} />,
        label: "LinkedIn",
        href: "#",
        color: "#0A66C2",
        hoverBorder: "rgba(10,102,194,0.6)",
    },
    {
        icon: <Github className="w-4 h-4" strokeWidth={1.5} />,
        label: "GitHub",
        href: "#",
        color: "#e5e5e5",
        hoverBorder: "rgba(229,229,229,0.5)",
    },
    {
        icon: <Instagram className="w-4 h-4" strokeWidth={1.5} />,
        label: "Instagram",
        href: "#",
        color: "#E1306C",
        hoverBorder: "rgba(225,48,108,0.6)",
    },
    {
        icon: <MessageCircle className="w-4 h-4" strokeWidth={1.5} />,
        label: "WhatsApp",
        href: "#",
        color: "#25D366",
        hoverBorder: "rgba(37,211,102,0.6)",
    },
    {
        icon: <Axe className="w-4 h-4" strokeWidth={1.5} />,
        label: "Xbox",
        href: "#",
        color: "#107C10",
        hoverBorder: "rgba(16,124,16,0.6)",
    },
];

const PHONE = "+27823982825";
const PHONE_DISPLAY = "+27 (0) 823 982 825";

function Footer() {
    const [toast, setToast] = useState(false);

    const handleCopyPhone = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(PHONE).then(() => {
            setToast(true);
            setTimeout(() => setToast(false), 2500);
        });
    };

    return (
        <footer className="relative z-10 w-full sm:px-8 lg:px-30 px-4">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-700 to-transparent mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

                {/* Left — Contact */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
                    <div className="flex flex-col gap-3">
                        {/* Phone — click to copy */}
                        <button
                            onClick={handleCopyPhone}
                            className="group flex items-center gap-3 text-white cursor-pointer text-left"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors duration-200">
                                {PHONE_DISPLAY}
                            </span>
                        </button>

                        {/* Email */}
                        <a
                            href="mailto:Pleasuren15@gmail.com"
                            className="group flex items-center gap-3 text-white hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors duration-200">
                                Pleasuren15@gmail.com
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right — Socials */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Socials</h2>
                    <div className="flex items-center gap-3">
                        {socials.map(({ icon, label, href, color, hoverBorder }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex items-center justify-center w-10 h-10 transition-all duration-200"
                                style={{
                                    color,
                                    borderRadius: '50%',
                                    border: `1px solid ${hoverBorder}`,
                                    background: 'transparent',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = "translateY(-2px)";
                                    el.style.boxShadow = `0 0 12px ${hoverBorder}`;
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.transform = "translateY(0)";
                                    el.style.boxShadow = "none";
                                }}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between border-t border-neutral-800 pt-4 pb-6">
                <p className="text-xs text-neutral-500">&copy; 2026 Pleasure Ndhlovu. All rights reserved.</p>
            </div>

            {/* Copy toast */}
            <div
                className="fixed bottom-6 left-1/2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-300 z-50"
                style={{
                    opacity: toast ? 1 : 0,
                    transform: `translateX(-50%) translateY(${toast ? '0' : '10px'})`,
                    pointerEvents: 'none',
                    color: '#4ade80',
                    background: '#0a0a0a',
                    border: '1px solid rgba(74,222,128,0.5)',
                    borderRadius: '8px',
                }}
            >
                <ClipboardCheck className="w-4 h-4" strokeWidth={1.5} />
                <span>Copied</span>
            </div>
        </footer>
    );
}

export default Footer;
