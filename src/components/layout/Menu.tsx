import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import TimeDisplay from "../ui/TimeDisplay";
import Strengths from "../ui/Strengths";

type MenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Menu({ isOpen, onClose }: MenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);
    const setLinkRef = (el: HTMLAnchorElement | null, index: number) => {
        if (el) linksRef.current[index] = el;
    };

    useEffect(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            gsap.to(menuRef.current, {
                y: 0,
                duration: 0.6,
                ease: "power4.out",
                pointerEvents: "auto",
            });

            gsap.fromTo(
                linksRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.08,
                    ease: "power4.out",
                    delay: 0.1,
                }
            );
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                duration: 0.5,
                ease: "power4.inOut",
                pointerEvents: "none",
            });
        }
    }, [isOpen]);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative transition duration-300 hover:text-primary-500/40 ${isActive ? "text-primary-500/40" : "text-primary-500"
        }`;

    return (
        <div ref={menuRef} className="fixed left-0 top-0 z-[90] h-screen w-full overflow-y-hidden overscroll-contain bg-black" style={{ transform: "translateY(-100%)" }}>
            <div className="flex h-full flex-col items-center justify-center gap-10 text-center text-7xl font-extrabold tracking-[-2%] md:text-8xl">
                <NavLink to="/portfolio" onClick={onClose} className={linkClass} ref={(el) => setLinkRef(el, 0)} >WORK</NavLink>
                <NavLink to="/about" onClick={onClose} className={linkClass} ref={(el) => setLinkRef(el, 1)} >ABOUT</NavLink>
                <NavLink to="/contact" onClick={onClose} className={linkClass} ref={(el) => setLinkRef(el, 2)} >CONTACT</NavLink>
            </div>
            <div className="text-primary-500 absolute bottom-0 left-0 right-0 flex justify-between px-10 py-4 italic">
                <div className="flex items-center justify-end">
                    <Strengths />
                </div>
                <div className="flex items-center justify-start">
                    <TimeDisplay />
                </div>
            </div>
        </div>
    );
}
