import { DevicePhoneMobileIcon } from "./ui/device-phone-mobile";
import { HugeiconsMailIcon } from "./ui/hugeicons-mail";

function Footer() {
    return (
        <footer className="ml-4 mt-auto py-4 relative z-10">
            <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
            <div className="w-[35%] h-1 bg-red-500 mb-3"></div>
            <p className="flex items-center mb-1"><DevicePhoneMobileIcon size={23} /> +27 (0) 23 982 825</p>
            <p className="flex items-center mb-4"><HugeiconsMailIcon size={23} /> Pleasuren15@gmail.com</p>

            <h2 className="text-lg font-semibold mb-2">Socials</h2>
            <div className="w-[25%] h-1 bg-red-500 mb-3"></div>
            <div className="flex items-center gap-3 mb-4">
                <div><img width="35" height="35" src="https://img.icons8.com/nolan/64/linkedin-circled.png" alt="linkedin-circled" /></div>
                <div><img width="35" height="35" src="https://img.icons8.com/nolan/64/github.png" alt="github" /></div>
                <div><img width="35" height="35" src="https://img.icons8.com/nolan/64/instagram-new.png" alt="instagram-new" /></div>
                <div><img width="35" height="35" src="https://img.icons8.com/nolan/64/whatsapp.png" alt="whatsapp" /></div>
            </div>

            <div className="w-[50%] h-1 bg-red-500 mt-4 mb-2"></div>
            <p className="text-sm mt-2">&copy; 2026 Pleasuren15. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
