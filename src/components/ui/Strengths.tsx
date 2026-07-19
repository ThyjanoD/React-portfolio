import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Strengths() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = ["Stress-resistant", "Curious", "Determined", "Driven", "Detail-oriented"];
    const currentSlideRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (currentSlideRef.current) {
            gsap.fromTo(
                currentSlideRef.current,
                { opacity: 0, y: 40, rotateX: 90 },
                { opacity: 1, y: 0, rotateX: 0, duration: 1 }
            );
        }

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);
    return (
        <div>
            <div ref={currentSlideRef}>
                <div>{slides[currentIndex]}</div>
            </div>
        </div>
    );
}
