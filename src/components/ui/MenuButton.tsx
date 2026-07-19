import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MenuButton({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const topRef = useRef<SVGLineElement>(null);
    const midRef = useRef<SVGLineElement>(null);
    const botRef = useRef<SVGLineElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(topRef.current, {
                y: 7,
                rotate: 45,
                transformOrigin: "center",
                duration: 0.3,
            });

            gsap.to(midRef.current, {
                opacity: 0,
                duration: 0.2,
            });

            gsap.to(botRef.current, {
                y: -7,
                rotate: -45,
                transformOrigin: "center",
                duration: 0.3,
            });
        } else {
            gsap.to([topRef.current, midRef.current, botRef.current], {
                y: 0,
                x: 0,
                rotate: 0,
                opacity: 1,
                duration: 0.3,
            });
        }
    }, [isOpen]);


    const handleHoverIn = () => {
        if (isOpen) return;
        gsap.to(topRef.current, { x: -3, duration: 0.2 });
        gsap.to(midRef.current, { x: 2, duration: 0.2 });
        gsap.to(botRef.current, { x: -2, duration: 0.2 });
    };

    const handleHoverOut = () => {
        if (isOpen) return;
        gsap.to([topRef.current, midRef.current, botRef.current], {
            x: 0,
            duration: 0.2,
        });
    };

    const handleXHoverIn = () => {
        if (!isOpen) return;
        gsap.to([topRef.current, botRef.current], {
            scale: 1.12,
            rotate: (i) => (i === 0 ? 45 : -45),
            transformOrigin: "center",
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleXHoverOut = () => {
        if (!isOpen) return;
        gsap.to([topRef.current, botRef.current], {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    return (
        <button
            ref={btnRef}
            className="cursor-pointer"
            onClick={() => setIsOpen(prev => !prev)}
            onMouseEnter={isOpen ? handleXHoverIn : handleHoverIn}
            onMouseLeave={isOpen ? handleXHoverOut : handleHoverOut}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line ref={topRef} x1="4" y1="6" x2="20" y2="6" stroke="#E1D8C4" strokeWidth="2" strokeLinecap="round" />
                <line ref={midRef} x1="4" y1="12" x2="20" y2="12" stroke="#E1D8C4" strokeWidth="2" strokeLinecap="round" />
                <line ref={botRef} x1="4" y1="18" x2="20" y2="18" stroke="#E1D8C4" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </button>
    );
}
