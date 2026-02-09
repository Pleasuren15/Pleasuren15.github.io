
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

function Navbar() {
    return (
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center gap-12">

                    <TrueFocus
                        sentence="Ps .Devs"
                        separator=' '
                        blurAmount={3}
                        borderColor="#ff0000ff"
                        animationDuration={0.5}
                        pauseBetweenAnimations={3}
                    />

                    <ul className="flex space-x-4">
                        <li><a href="#" className="px-3 py-2 font-medium">Home</a></li>
                        <li><a href="#" className="px-3 py-2 font-medium">About</a></li>
                        <li><a href="#" className="px-3 py-2 font-medium">Projects</a></li>
                        <li><a href="#" className="px-3 py-2 font-medium">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <Drawer>
                        <DrawerTrigger>
                            <BorderGradientButton duration={1800000}
                                className="inline-flex h-11 items-center gap-2 rounded-lg bg-white 
                            dark:bg-neutral-900 px-6 text-sm font-semibold text-neutral-900 dark:text-white">
                                Change Log
                            </BorderGradientButton>
                        </DrawerTrigger>
                        <DrawerContent className="pl-40 pr-40 bg-neutral-900 text-white border-neutral-700 rounded-none text-left">
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
            </div>
    );
}

export default Navbar;