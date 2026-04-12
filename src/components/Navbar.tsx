import { useState } from 'react';
import { Menu, X, Briefcase, GraduationCap, Zap } from 'lucide-react';
import TrueFocus from './TrueFocus.tsx';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "./ui/drawer.tsx"
import { DocumentTextIcon } from './ui/document-text.tsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from './ui/accordion'
import { HugeiconsHeartIcon } from './ui/hugeicons-heart.tsx';
import { HugeiconsHomeIcon } from './ui/hugeicons-home.tsx';
import { HugeiconsUserIcon } from './ui/hugeicons-user.tsx';
import { HugeiconsMailIcon } from './ui/hugeicons-mail.tsx';

// Section IDs matching App.tsx
const sections = [
    { id: 'home', label: 'Home', icon: HugeiconsHomeIcon },
    { id: 'about', label: 'About Me', icon: HugeiconsUserIcon },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: HugeiconsHeartIcon },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'contact', label: 'Contact', icon: HugeiconsMailIcon },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isChangelogOpen, setIsChangelogOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openChangelog = () => {
        setIsMobileMenuOpen(false);
        setIsChangelogOpen(true);
    };

    return (
        <nav className="relative mt-4">
            <div className="flex h-16 items-center justify-between sm:px-6 ">
                <div className="flex items-center gap-4 md:gap-12 ml-4">
                    <TrueFocus
                        sentence="Ps .Devs"
                        separator=' '
                        blurAmount={3}
                        borderColor="#ff0000ff"
                        animationDuration={0.5}
                        pauseBetweenAnimations={3}
                    />

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-4">
                        {sections.map((section) => (
                            <li key={section.id} className='transition-all duration-100 hover:text-red-400'>
                                <a href={`#${section.id}`} className="flex items-center px-3 py-2 font-medium">
                                    <section.icon className='mr-2' />
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    {/* Change Log Button - Hidden on small screens */}
                    <div className="hidden sm:block">
                        <button
                            onClick={() => setIsChangelogOpen(true)}
                            className="inline-flex h-11 items-center gap-2 rounded-lg bg-white dark:bg-neutral-900 px-4 sm:px-6 text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            <DocumentTextIcon className="w-4 h-4" />
                            Change Log
                        </button>
                    </div>

                    {/* Mobile Menu Button with Enhanced Animation */}
                    <button
                        onClick={toggleMobileMenu}
                        className={`md:hidden p-2 rounded-lg transition-all duration-500 relative overflow-hidden group transform mr-4 ${isMobileMenuOpen ? 'scale-110' : 'scale-100'}`}
                        style={{ zIndex: 10000 }}
                        aria-label="Toggle menu"
                    >
                        <div className={`absolute inset-0 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-0'}`} />
                        <div className="relative">
                            <div className={`absolute inset-0 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 rotate-180 scale-110' : 'opacity-0 rotate-0 scale-90'}`}>
                                <X className="h-6 w-6" />
                            </div>
                            <div className={`transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-90' : 'opacity-100 rotate-0 scale-100'}`}>
                                <Menu className="h-6 w-6" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Enhanced Animated Entrance/Exit */}
            <div
                className={`md:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen transition-all duration-600 ${isMobileMenuOpen
                    ? 'opacity-100 scale-100 ease-out'
                    : 'opacity-0 scale-95 pointer-events-none ease-in-out'
                    }`}
                style={{ zIndex: 9999 }}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                    onClick={toggleMobileMenu}
                />

                <div className={`relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 backdrop-blur-xl shadow-2xl h-full flex flex-col transition-all duration-800 ${isMobileMenuOpen ? 'transform translate-x-0 ease-out' : 'transform -translate-x-full ease-in'}`}>
                    {/* Gradient overlay for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                    {/* Animated gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

                    {/* Navigation Links - Left aligned */}
                    <ul className={`flex flex-col space-y-2 relative z-10 text-left px-4 transition-all duration-800 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {sections.map((section, index) => (
                            <li
                                key={section.id}
                                className={`transition-all duration-600 ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-90'}`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : `${50 + (sections.length - index) * 30}ms` }}
                            >
                                <a
                                    href={`#${section.id}`}
                                    className="flex items-center px-4 py-3 font-medium text-lg hover:bg-red-500/10 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-red-500/30"
                                    onClick={toggleMobileMenu}
                                >
                                    <section.icon className='mr-3' />
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Change Log Button - Bottom of Mobile Menu */}
                    <div className={`mt-auto mb-8 px-4 w-full transition-all duration-800 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}>
                        <button 
                            className="w-full max-w-[300px] inline-flex h-12 items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-8 text-base font-semibold text-white cursor-pointer transition-all duration-200"
                            onClick={openChangelog}
                        >
                            <DocumentTextIcon className="inline-block" />
                            Change Log
                        </button>
                    </div>
                </div>
            </div>

            {/* Standalone Changelog Drawer */}
            <Drawer open={isChangelogOpen} onOpenChange={setIsChangelogOpen}>
                <DrawerContent className="px-4 sm:px-20 md:px-40 bg-neutral-900 text-white border-neutral-700 rounded-none text-left max-h-[80vh] overflow-y-auto">
                    <DrawerHeader className="text-left flex flex-col gap-2">
                        <DrawerTitle className="text-left flex items-center text-xl">
                            <DocumentTextIcon className="inline-block mr-2" />
                            Portfolio Change Log
                        </DrawerTitle>
                        <DrawerDescription className="text-left text-neutral-400">List of all updates and changes made to this portfolio.</DrawerDescription>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Experience Section - Job Cards</AccordionTrigger>
                                <AccordionContent className='text-left text-neutral-300 space-y-2'>
                                    <p>• Made job experience cards uniform height for consistent layout</p>
                                    <p>• Added "Show more/Show less" functionality for long descriptions</p>
                                    <p>• Implemented smooth sliding animation for expand/collapse</p>
                                    <p>• Increased visible lines (7 desktop, 6 mobile) before truncation</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Navigation Improvements</AccordionTrigger>
                                <AccordionContent className='text-left text-neutral-300 space-y-2'>
                                    <p>• Added all site sections: Experience, Education, Projects, Skills</p>
                                    <p>• Implemented proper smooth-scroll navigation with section IDs</p>
                                    <p>• Added close button (X) to mobile menu</p>
                                    <p>• Left-aligned menu items for better readability</p>
                                    <p>• Added backdrop overlay for mobile menu</p>
                                    <p>• Changed log button to bottom of expanded mobile menu</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Socials & Footer</AccordionTrigger>
                                <AccordionContent className='text-left text-neutral-300 space-y-2'>
                                    <p>• Removed Instagram, WhatsApp, Xbox from socials</p>
                                    <p>• Added Gmail and Xbox (Gamepad2 icon) to socials</p>
                                    <p>• LinkedIn now links to profile: pleasure-ndhlovu-n15</p>
                                    <p>• GitHub now links to: github.com/Pleasuren15</p>
                                    <p>• Xbox icon now copies gamer tag "Pleasuren15"</p>
                                    <p>• Phone icon copies number when clicked</p>
                                    <p>• Removed "Get In Touch" section from footer</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>About Me Section</AccordionTrigger>
                                <AccordionContent className='text-left text-neutral-300 space-y-2'>
                                    <p>• Rewrote About Me based on site content</p>
                                    <p>• Highlighted .NET as primary skill</p>
                                    <p>• Positioned React as secondary skill</p>
                                    <p>• Removed specific company and system names</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
        </nav>
    );
}

export default Navbar;
