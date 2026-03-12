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
                <div className={`relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 backdrop-blur-xl shadow-2xl h-full flex flex-col items-center justify-start pt-20 transition-all duration-800 ${isMobileMenuOpen ? 'transform translate-y-0 ease-out' : 'transform -translate-y-full ease-in'}`}>
                    {/* Gradient overlay for visual effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                    {/* Animated gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />

                    <ul className={`flex flex-col space-y-6 relative z-10 text-center transition-all duration-800 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <li className={`transition-all duration-600 ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100 delay-100' : 'opacity-0 translate-x-8 scale-90 delay-0'}`}>
                            <a
                                href="#"
                                className="flex items-center justify-center px-8 py-4 font-medium text-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-red-500/30 transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsHomeIcon className='mr-3' /> Home
                            </a>
                        </li>
                        <li className={`transition-all duration-600 ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100 delay-200' : 'opacity-0 translate-x-8 scale-90 delay-50'}`}>
                            <a
                                href="#"
                                className="flex items-center justify-center px-8 py-4 font-medium text-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-red-500/30 transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsUserIcon className='mr-3' /> About
                            </a>
                        </li>
                        <li className={`transition-all duration-600 ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100 delay-300' : 'opacity-0 translate-x-8 scale-90 delay-100'}`}>
                            <a
                                href="#"
                                className="flex items-center justify-center px-8 py-4 font-medium text-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-red-500/30 transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsHeartIcon className='mr-3' /> Projects
                            </a>
                        </li>
                        <li className={`transition-all duration-600 ${isMobileMenuOpen ? 'opacity-100 translate-x-0 scale-100 delay-400' : 'opacity-0 translate-x-8 scale-90 delay-150'}`}>
                            <a
                                href="#"
                                className="flex items-center justify-center px-8 py-4 font-medium text-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:to-purple-500/10 transition-all duration-200 rounded-lg border-2 border-transparent hover:border-red-500/30 transform hover:scale-105"
                                onClick={toggleMobileMenu}
                            >
                                <HugeiconsMailIcon className='mr-3' /> Contact
                            </a>
                        </li>
                        <li className={`pt-8 transition-all duration-600 w-full flex justify-center ${isMobileMenuOpen ? 'opacity-100 scale-100 delay-500' : 'opacity-0 scale-90 delay-200'}`}>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <button className="w-[90vw] inline-flex h-12 items-center justify-center gap-2 bg-red-500 hover:bg-red-600 px-8 text-base font-semibold text-white cursor-pointer transition-all duration-200 transform hover:scale-105">
                                        Change Log
                                    </button>
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
