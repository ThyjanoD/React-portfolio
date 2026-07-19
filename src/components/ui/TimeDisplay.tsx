import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const TimeDisplay = () => {
    const cities = [
        { name: "Groningen, Netherlands", timeZone: "Europe/Amsterdam" },
        { name: "Tokyo, Japan", timeZone: "Asia/Tokyo" },
        { name: "New York, America", timeZone: "America/New_York" },
        { name: "Sydney, Australia", timeZone: "Australia/Sydney" },
        { name: "London, England", timeZone: "Europe/London" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState("");
    const timeRef = useRef<HTMLParagraphElement>(null);
    const formatTime = (timeZone: string) => {
        const date = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone,
        });
        return formatter.format(date);
    };

    useEffect(() => {
        const updateTimeAndCity = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
            setCurrentTime(formatTime(cities[currentIndex].timeZone));
        };
        const cityChangeInterval = setInterval(updateTimeAndCity, 5000);
        if (timeRef.current) {
            gsap.fromTo(timeRef.current, { opacity: 0, y: 40, rotateX: 90 }, { opacity: 1, y: 0, rotateX: 0, duration: 1 });
        }
        return () => {
            clearInterval(cityChangeInterval);
        };
    }, [currentIndex]);
    return (
        <div>
            <p ref={timeRef}>
                {cities[currentIndex].name} {currentTime || "--:--"}
            </p>
        </div>
    );
};

export default TimeDisplay;
