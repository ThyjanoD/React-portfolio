import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../layout/Menu";
import MenuButton from "../ui/MenuButton";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 z-[100] w-full bg-black">
                <div className="mx-4 flex items-center justify-between py-6 text-white lg:mx-10">
                    <Link to="/" className="text-primary-500 text-sm font-bold tracking-[-5%] md:text-2xl">
                        Code with Thyjano
                    </Link>
                    <div className="flex animate-pulse items-center gap-2 text-[#52EEB8] max-md:text-sm">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.5" cy="4.5" r="4.5" fill="currentColor" />
                        </svg>
                        Looking for a job
                    </div>
                    <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </header>
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
