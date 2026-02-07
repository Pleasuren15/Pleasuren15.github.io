
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

function Navbar() {
    return (
        <div className="mx-auto max-w-7xl auto px-2 sm:px-6 lg:px-8">
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
                <div className='bg-dark-900/50 rounded-lg p-1'>
                    <Drawer>
                        <DrawerTrigger><BorderGradientButton duration={1800000}
                            className="inline-flex h-11 items-center gap-2 rounded-lg bg-white 
                            dark:bg-neutral-900 px-6 text-sm font-semibold text-neutral-900 dark:text-white">
                            Change Log
                        </BorderGradientButton></DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Navbar;