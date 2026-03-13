import { Linkedin, Github, Instagram, MessageCircle, Phone, Mail } from "lucide-react";

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
];

function Footer() {
    return (
        <footer className="relative z-10 w-full sm:px-8 lg:px-30 px-4">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-700 to-transparent mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

                {/* Left — Contact */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">Get In Touch</h2>
                    <div className="flex flex-col gap-3">
                        <a
                            href="tel:+27023982825"
                            className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm">+27 (0) 23 982 825</span>
                        </a>
                        <a
                            href="mailto:Pleasuren15@gmail.com"
                            className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center justify-center w-8 h-8 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 group-hover:border-red-500/50 group-hover:text-red-400 transition-all duration-200">
                                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                            </span>
                            <span className="text-sm">Pleasuren15@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Right — Socials */}
                <div>
                    <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">Socials</h2>
                    <div className="flex items-center gap-2">
                        {socials.map(({ icon, label, href, color, hoverBg, hoverBorder }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="group flex flex-col items-center gap-1.5"
                            >
                                <span
                                    className="flex items-center justify-center w-9 h-9 border border-neutral-700/60 bg-neutral-900/60 transition-all duration-200"
                                    style={{ color: "#737373" }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.color = color;
                                        el.style.borderColor = hoverBorder;
                                        el.style.background = hoverBg;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.color = "#737373";
                                        el.style.borderColor = "rgba(64,64,64,0.6)";
                                        el.style.background = "rgba(10,10,10,0.6)";
                                    }}
                                >
                                    {icon}
                                </span>
                                <span className="text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-200 tracking-wide">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between border-t border-neutral-800 pt-4 pb-6">
                <p className="text-xs text-neutral-600">&copy; 2026 Pleasure Ndhlovu. All rights reserved.</p>
                <p className="text-xs text-neutral-700 tracking-widest uppercase">Portfolio</p>
            </div>
        </footer>
    );
}

export default Footer;
