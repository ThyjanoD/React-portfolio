interface MotivationProps {
    motivation: {
        about_motivation_title: string;

        motivations: {
            motivation_title: string;
            motivation_content: string;
        }[];
    };
}

import { MotivationCard } from "../../components/ui/MotivationCard"

export default function Motivation({motivation}: MotivationProps) {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
            <h2 className="pb-6">
                {motivation.about_motivation_title}
            </h2>

            <div className="flex gap-8 max-md:flex-col">
                {motivation.motivations.map((item, index) => (
                    <MotivationCard key={index} count={index + 1} title={item.motivation_title} content={item.motivation_content} />
                ))}
            </div>
            </div>
        </section>
    )
}
