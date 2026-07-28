import { useEffect, useState } from "react";

import Hero from "../features/about/Hero";
import FullWidthText from "../features/about/FullWidthText";
import Motivation from "../features/about/Motivation";
import Experience from "../features/about/Experience";
import Contact from "../components/layout/Contact";

import { getAboutPage } from "../services/api/pages";
import type { AboutPage } from "../services/api/types";
import { getMedia } from "../services/api/media";

export default function About() {
    const [page, setPage] = useState<AboutPage | null>(null);
    const [heroImage, setHeroImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const about = await getAboutPage();

            setPage(about);

            if (about.acf.about_hero.about_hero_image) {
                const image = await getMedia(
                    about.acf.about_hero.about_hero_image
                );

                setHeroImage(image.source_url);
            }
        }

        fetchData();
    }, []);

    if (!page) {
        return <p>Loading...</p>;
    }

    console.log(page.acf.about_motivation);
    console.log(page.acf.about_experience);
    return (
        <main>
            <Hero hero={page.acf.about_hero} image={heroImage ?? ""} />
            <FullWidthText text={page.acf.full_width_text} />
            <Motivation motivation={page.acf.about_motivation} />
            <Experience experience={page.acf.about_experience} />
            <Contact />
        </main>
    );
}