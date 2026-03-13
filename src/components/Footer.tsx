import { DevicePhoneMobileIcon } from "./ui/device-phone-mobile";
import { HugeiconsMailIcon } from "./ui/hugeicons-mail";
import { Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

const socials = [
    { icon: <Linkedin className="w-5 h-5" strokeWidth={1.5} />, label: "LinkedIn", href: "#" },
    { icon: <Github className="w-5 h-5" strokeWidth={1.5} />, label: "GitHub", href: "#" },
    { icon: <Instagram className="w-5 h-5" strokeWidth={1.5} />, label: "Instagram", href: "#" },
    { icon: <MessageCircle className="w-5 h-5" strokeWidth={1.5} />, label: "WhatsApp", href: "#" },
];

function Footer() {
    return (
        <footer className="ml-4 mt-auto py-4 relative z-10">
            <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
            <div className="w-[35%] h-1 bg-red-500 mb-3"></div>
            <p className="flex items-center mb-1"><DevicePhoneMobileIcon size={23} /> +27 (0) 23 982 825</p>
            <p className="flex items-center mb-4"><HugeiconsMailIcon size={23} /> Pleasuren15@gmail.com</p>

            <h2 className="text-lg font-semibold mb-2">Socials</h2>
            <div className="w-[25%] h-1 bg-red-500 mb-3"></div>
            <div className="flex items-center gap-2 mb-4">
                {socials.map(({ icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex items-center justify-center w-9 h-9 border border-neutral-700/60 bg-neutral-900/60 text-neutral-400 transition-all duration-200 hover:border-red-500/60 hover:text-white hover:bg-red-500/10 hover:shadow-[0_0_12px_rgba(239,68,68,0.2)]"
                    >
                        {icon}
                    </a>
                ))}
            </div>

            <div className="w-[50%] h-1 bg-red-500 mt-4 mb-2"></div>
            <p className="text-sm mt-2">&copy; 2026 Pleasuren15. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
