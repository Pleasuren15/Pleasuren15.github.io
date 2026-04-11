import { useState } from "react";
import { Linkedin, Github, Phone, Mail, ClipboardCheck, Gamepad2 } from "lucide-react";


const PHONE = "+27823982825";

type SocialItem = {
    icon: React.ReactNode;
    label: string;
    href?: string;
    color: string;
    hoverBorder: string;
    copyOnClick?: string;
};

const socials: SocialItem[] = [
    {
        icon: <Linkedin className="w-4 h-4" strokeWidth={1.5} />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pleasure-ndhlovu-n15/",
        color: "#0A66C2",
        hoverBorder: "rgba(10,102,194,0.6)",
    },
    {
        icon: <Github className="w-4 h-4" strokeWidth={1.5} />,
        label: "GitHub",
        href: "https://github.com/Pleasuren15",
        color: "#e5e5e5",
        hoverBorder: "rgba(229,229,229,0.5)",
    },
    {
        icon: <Phone className="w-4 h-4" strokeWidth={1.5} />,
        label: "Phone",
        color: "#10B981",
        hoverBorder: "rgba(16,185,129,0.6)",
        copyOnClick: PHONE,
    },
    {
        icon: <Mail className="w-4 h-4" strokeWidth={1.5} />,
        label: "Gmail",
        href: "mailto:Pleasuren15@gmail.com",
        color: "#EA4335",
        hoverBorder: "rgba(234,67,53,0.6)",
    },
    {
        icon: <Gamepad2 className="w-4 h-4" strokeWidth={1.5} />,
        label: "Xbox",
        color: "#107C10",
        hoverBorder: "rgba(16,124,16,0.6)",
        copyOnClick: "Pleasuren15",
    },
];

function Footer() {
    const [toast, setToast] = useState(false);

    const handleCopy = (e: React.MouseEvent, text: string) => {
        e.preventDefault();
        navigator.clipboard.writeText(text).then(() => {
            setToast(true);
            setTimeout(() => setToast(false), 2500);
        });
    };

    return (
        <footer className="relative z-10 w-full sm:px-8 lg:px-30 px-4">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-700 to-transparent mb-10" />

            {/* Socials */}
            <div className="mb-10">
                <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Socials</h2>
                <div className="flex items-center gap-3">
                    {socials.map(({ icon, label, href, color, hoverBorder, copyOnClick }) => (
                        copyOnClick ? (
                            <button
                                key={label}
                                onClick={(e) => handleCopy(e, copyOnClick)}
                                aria-label={label}
                                className="flex items-center justify-center w-10 h-10 transition-all duration-200 cursor-pointer"
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
                            </button>
                        ) : (
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
                        )
                    ))}
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
