import { parseShortcodes } from "../../utils/parseShortCodes";

interface HeroProps {
    hero: {
        about_hero_title: string;
    };
    image: string;
}

export default function Hero({ hero, image }: HeroProps) {
    return (
        <section className="pb-16 pt-24 lg:pb-24">
            <div className="flex justify-between max-md:flex-col">
                <h1 className="mx-4 tracking-[-5%] max-md:pb-6 md:ml-10 whitespace-pre-line">
                    { parseShortcodes(hero.about_hero_title) }
                </h1>
                <img src={ image } className="md:mr-37 rounded-xl max-md:mx-4" alt={ hero.about_hero_title } />
            </div>
        </section>
    )
}
