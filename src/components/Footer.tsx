import { Linkedin, Github, Instagram, MessageCircle, Phone, Mail } from "lucide-react";

const HackerRankIcon = () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 16.388c-.24.24-.576.384-.912.384s-.672-.144-.912-.384l-1.68-1.68a.53.53 0 0 0-.384-.144.53.53 0 0 0-.384.144l-.48.48v1.056c0 .72-.576 1.296-1.296 1.296s-1.296-.576-1.296-1.296v-1.056l-.48-.48a.53.53 0 0 0-.384-.144.53.53 0 0 0-.384.144l-1.68 1.68c-.24.24-.576.384-.912.384s-.672-.144-.912-.384a1.274 1.274 0 0 1 0-1.824l1.68-1.68a.53.53 0 0 0 .144-.384.53.53 0 0 0-.144-.384l-1.68-1.68a1.274 1.274 0 0 1 0-1.824c.24-.24.576-.384.912-.384s.672.144.912.384l1.68 1.68c.096.096.24.144.384.144s.288-.048.384-.144l.48-.48V8.76c0-.72.576-1.296 1.296-1.296s1.296.576 1.296 1.296v1.056l.48.48c.096.096.24.144.384.144s.288-.048.384-.144l1.68-1.68c.24-.24.576-.384.912-.384s.672.144.912.384a1.274 1.274 0 0 1 0 1.824l-1.68 1.68a.53.53 0 0 0-.144.384c0 .144.048.288.144.384l1.68 1.68a1.274 1.274 0 0 1 0 1.82z"/>
    </svg>
);

const socials = [
    {
        icon: <Linkedin className="w-4 h-4" strokeWidth={1.5} />,
        label: "LinkedIn",
        href: "#",
        color: "#0A66C2",
        hoverBg: "rgba(10,102,194,0.12)",
        hoverBorder: "rgba(10,102,194,0.5)",
    },
    {
        icon: <Github className="w-4 h-4" strokeWidth={1.5} />,
        label: "GitHub",
        href: "#",
        color: "#e5e5e5",
        hoverBg: "rgba(229,229,229,0.08)",
        hoverBorder: "rgba(229,229,229,0.35)",
    },
    {
        icon: <Instagram className="w-4 h-4" strokeWidth={1.5} />,
        label: "Instagram",
        href: "#",
        color: "#E1306C",
        hoverBg: "rgba(225,48,108,0.12)",
        hoverBorder: "rgba(225,48,108,0.5)",
    },
    {
        icon: <MessageCircle className="w-4 h-4" strokeWidth={1.5} />,
        label: "WhatsApp",
        href: "#",
        color: "#25D366",
        hoverBg: "rgba(37,211,102,0.12)",
        hoverBorder: "rgba(37,211,102,0.5)",
    },
    {
        icon: <HackerRankIcon />,
        label: "HackerRank",
        href: "#",
        color: "#00EA64",
        hoverBg: "rgba(0,234,100,0.12)",
        hoverBorder: "rgba(0,234,100,0.5)",
    },
];

function Footer() {
    return (
        <footer className="relative z-10 w-full sm:px-8 lg:px-30 px-4">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-700 to-transparent mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

                {/* Left — Contact */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Get In Touch</h2>
                    <div className="flex flex-col gap-3">
                        <a
                            href="tel:+27823982825"
                            className="group flex items-center gap-3 text-white hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm font-medium">+27 (8) 23 982 825</span>
                        </a>
                        <a
                            href="mailto:Pleasuren15@gmail.com"
                            className="group flex items-center gap-3 text-white hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm font-medium">Pleasuren15@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Right — Socials */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase mb-4">Socials</h2>
                    <div className="flex items-center justify-between w-full max-w-sm">
                        {socials.map(({ icon, label, href, color, hoverBg, hoverBorder }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="group flex flex-col items-center gap-1.5"
                            >
                                <span
                                    className="flex items-center justify-center w-9 h-9 border transition-all duration-200"
                                    style={{
                                        color,
                                        borderColor: hoverBorder,
                                        background: hoverBg,
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = "translateY(-2px)";
                                        el.style.boxShadow = `0 4px 14px ${hoverBg.replace("0.12", "0.4").replace("0.08", "0.3")}`;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.transform = "translateY(0)";
                                        el.style.boxShadow = "none";
                                    }}
                                >
                                    {icon}
                                </span>
                                <span
                                    className="text-[10px] font-medium tracking-wide"
                                    style={{ color }}
                                >
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between border-t border-neutral-800 pt-4 pb-6">
                <p className="text-xs text-neutral-500">&copy; 2026 Pleasure Ndhlovu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
