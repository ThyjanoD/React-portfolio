import { parseShortcodes } from "../../utils/parseShortCodes";

interface HeroProps {
    hero: {
        work_hero_title: string;
    };
}

export default function Hero({ hero }: HeroProps) {
    return (
        <section className="mx-4 lg:mx-10 pb-16 pt-24 lg:pb-24">
            <h1 className="tracking-[-5%] whitespace-pre-line">
                { parseShortcodes(hero.work_hero_title) }
            </h1>
        </section>
    )
}
