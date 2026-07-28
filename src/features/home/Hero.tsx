interface HeroProps {
    hero: {
        hero_title: string;
    };
    image: string;
}

export default function Hero({ hero, image }: HeroProps) {
    return (
        <section className="pb-8 lg:pb-16">
            <div className="container">
                <div className="relative flex justify-center">
                    <img src={image} alt={hero.hero_title} className="relative mt-6 rounded-4xl lg:mt-24 max-w-96" />
                    <div className="absolute bottom-0 left-0 h-full w-full rounded-4xl bg-black/35" />
                </div>

                <div className="absolute top-78 left-0 w-full lg:top-111">
                    <div className="mx-4 lg:mx-10">
                        <h1 className="text-primary-500 text-center tracking-[-5%]">
                            {hero.hero_title}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}