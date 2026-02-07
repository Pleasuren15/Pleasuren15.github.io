
import { BorderGradientButton } from './border-gradient.tsx'
import { Separator } from './ui/separator.tsx';

function Navbar() {
    return (
        <div className="mx-auto max-w-7xl auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center gap-12">
                    <h1 className="">
                        ps.dev
                    </h1>
                    <Separator orientation="vertical" className="hidden md:block" />
                    <ul className="flex space-x-4">
                        <li><a href="#" className=" px-3 py-2 font-medium">Home</a></li>
                        <li><a href="#" className=" px-3 py-2 font-medium">About</a></li>
                        <li><a href="#" className=" px-3 py-2 font-medium">Projects</a></li>
                        <li><a href="#" className=" px-3 py-2 font-medium">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <BorderGradientButton duration={1800000}
                        className="inline-flex h-11 items-center gap-2 rounded-lg bg-white 
                            dark:bg-neutral-900 px-6 text-sm font-semibold text-neutral-900 dark:text-white">
                        Change Log
                    </BorderGradientButton>
                </div>
            </div>
        </div>
    );
}

export default Navbar;