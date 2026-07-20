import React from "react";

export function parseShortcodes(text: string) {
    const parts = text.split(/(\[e\].*?\[\/e\])/g);

    return parts.map((part, index) => {
        const match = part.match(/\[e\](.*?)\[\/e\]/);

        if (match) {
            return (
                <span key={index} className="italic font-extralight leading-[-5%]">
                    {match[1]}
                </span>
            );
        }

        return part;
    });
}