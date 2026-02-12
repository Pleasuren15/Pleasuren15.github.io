import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BorderGradientButton } from './border-gradient.tsx'
import TrueFocus from './TrueFocus.tsx';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer.tsx"
import { Button } from './ui/button.tsx';
import { DocumentTextIcon } from './ui/document-text.tsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from './ui/accordion'
import { HugeiconsHeartIcon } from './ui/hugeicons-heart.tsx';
import { HugeiconsHomeIcon } from './ui/hugeicons-home.tsx';
import { HugeiconsUserIcon } from './ui/hugeicons-user.tsx';
import { HugeiconsMailIcon } from './ui/hugeicons-mail.tsx';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="relative">
            <div className="flex h-16 items-center justify-between sm:px-6">
                <div className="flex items-center gap-4 md:gap-12">
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
                        <li className='transition-all duration-100 hover:text-red-400'>
                            <a href="#" className="flex items-center px-3 py-2 font-medium">
                                <HugeiconsHomeIcon className='mr-2' /> Home
                            </a>
                        </li>
                        <li className='transition-all duration-100 hover:text-red-400'>
                            <a href="#" className="flex items-center px-3 py-2 font-medium">
                                <HugeiconsUserIcon className='mr-2' /> About
                            </a>
                        </li>
                        <li className='transition-all duration-100 hover:text-red-400'>
                            <a href="#" className="flex items-center px-3 py-2 font-medium">
                                <HugeiconsHeartIcon className='mr-2' /> Projects
                            </a>
                        </li>
                        <li className='transition-all duration-100 hover:text-red-400'>
                            <a href="#" className="flex items-center px-3 py-2 font-medium">
                                <HugeiconsMailIcon className='mr-2' /> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    {/* Change Log Button - Hidden on small screens */}
                    <div className="hidden sm:block">
                        <Drawer>
                            <DrawerTrigger>
                                <BorderGradientButton duration={1800000}
                                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-white
                                dark:bg-neutral-900 px-4 sm:px-6 text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer">
                                    Change Log
                                </BorderGradientButton>
                            </DrawerTrigger>
                            <DrawerContent className="px-4 sm:px-20 md:px-40 bg-neutral-900 text-white border-neutral-700 rounded-none text-left">
                                <DrawerHeader className="text-left flex flex-col gap-2">
                                    <DrawerTitle className="text-left flex items-center">
                                        <DocumentTextIcon className="inline-block mr-2" />
                                        <>Portfolio Change Log</>
                                    </DrawerTitle>
                                    <DrawerDescription className="text-left">List of recent updates and changes to the portfolio.</DrawerDescription>
                                    <Accordion type="single" collapsible className="">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>1. Version 1.0</AccordionTrigger>
                                            <AccordionContent className='text-left'>
                                                Initial release of the portfolio website with core structure and styling. Established the foundation for showcasing projects and professional information.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>2. Add Navigation bar & review color schemes</AccordionTrigger>
                                            <AccordionContent className='text-left'>
                                                Added a responsive navigation bar with smooth transitions and links to Home, About, Projects, and Contact sections. Reviewed and refined the color scheme to improve visual hierarchy and user experience across all pages.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>3. Design & implement landing page</AccordionTrigger>
                                            <AccordionContent className='text-left'>
                                                Added a responsive landing page featuring a hero section with compelling call-to-action, showcase of key features, and strategic call-to-action buttons. Optimized for mobile and desktop viewing with engaging animations.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </DrawerHeader>
                                <DrawerFooter className="justify-start w-full">
                                    <DrawerClose asChild>
                                        <Button variant="secondary" className='bg-red-500 text-white hover:bg-red-700 w-fit'>Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>

                    {/* Mobile Menu Button with Animation */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg hover:bg-gradient-to-r hover:from-red-500/20 hover:to-purple-500/20 transition-all duration-300 relative overflow-hidden group"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 transition-all duration-300 rotate-90" />
                            ) : (
                                <Menu className="h-6 w-6 transition-all duration-300" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Animated Entrance */}
            <div
                className={`md:hidden fixed top-16 left-0 right-0 w-screen z-50 transition-all duration-300 ease-out ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="relative bg-gradient-to-br from-neutral-900/98 via-neutral-800/98 to-neutral-900/98 backdrop-blur-xl border-t border-neutral-700/50 shadow-2xl min-h-screen">
                    {/* Gradient overlay for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                    {/* Animated gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

                    <ul className="flex flex-col py-4 relative z-10">
                        <li>
                            <a
                                href="#"
                                    className="flex items-center px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 hover:pl-8 border-l-2 border-transparent hover:border-red-500"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsHomeIcon className='mr-2' /> Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 hover:pl-8 border-l-2 border-transparent hover:border-red-500"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsUserIcon className='mr-2' /> About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 hover:pl-8 border-l-2 border-transparent hover:border-red-500"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsHeartIcon className='mr-2' /> Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center px-6 py-3 font-medium hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 hover:pl-8 border-l-2 border-transparent hover:border-red-500"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsMailIcon className='mr-2' /> Contact
                            </a>
                        </li>
                        <li className="px-6 py-3 pt-4 sm:hidden border-t border-neutral-700/50 mt-2">
                            <Drawer>
                                <DrawerTrigger className="w-full">
                                    <BorderGradientButton duration={1800000}
                                        className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white
                                    dark:bg-neutral-900 px-6 text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer">
                                        Change Log
                                    </BorderGradientButton>
                                </DrawerTrigger>
                                <DrawerContent className="px-4 bg-neutral-900 text-white border-neutral-700 rounded-none text-left">
                                    <DrawerHeader className="text-left flex flex-col gap-2">
                                        <DrawerTitle className="text-left flex items-center">
                                            <DocumentTextIcon className="inline-block mr-2" />
                                            <>Portfolio Change Log</>
                                        </DrawerTitle>
                                        <DrawerDescription className="text-left">List of recent updates and changes to the portfolio.</DrawerDescription>
                                        <Accordion type="single" collapsible className="">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>1. Version 1.0</AccordionTrigger>
                                                <AccordionContent className='text-left'>
                                                    Initial release of the portfolio website with core structure and styling. Established the foundation for showcasing projects and professional information.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-2">
                                                <AccordionTrigger>2. Add Navigation bar & review color schemes</AccordionTrigger>
                                                <AccordionContent className='text-left'>
                                                    Added a responsive navigation bar with smooth transitions and links to Home, About, Projects, and Contact sections. Reviewed and refined the color scheme to improve visual hierarchy and user experience across all pages.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem value="item-3">
                                                <AccordionTrigger>3. Design & implement landing page</AccordionTrigger>
                                                <AccordionContent className='text-left'>
                                                    Added a responsive landing page featuring a hero section with compelling call-to-action, showcase of key features, and strategic call-to-action buttons. Optimized for mobile and desktop viewing with engaging animations.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </DrawerHeader>
                                    <DrawerFooter className="justify-start w-full">
                                        <DrawerClose asChild>
                                            <Button variant="secondary" className='bg-red-500 text-white hover:bg-red-700 w-fit'>Cancel</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
