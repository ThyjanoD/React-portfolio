import { useEffect, useState } from "react";

import { getSiteOptions, type SiteOptions } from "../services/api/options";
import Hero from "../features/home/Hero";
import About from "../features/home/About";
import Skills from "../features/home/Skills";
import Portfolio from "../components/layout/Work";
import Contact from "../components/layout/Contact";

import { getHomePage } from "../services/api/pages";
import type { HomePage } from "../services/api/types";
import { getMedia } from "../services/api/media";

export default function Home() {
    const [page, setPage] = useState<HomePage | null>(null);
    const [heroImage, setHeroImage] = useState<string | null>(null);
    const [aboutImage, setAboutImage] = useState<string | null>(null);
    const [options, setOptions] = useState<SiteOptions | null>(null);

    useEffect(() => {
        async function fetchData() {
            const [home, siteOptions] = await Promise.all([
                getHomePage(),
                getSiteOptions(),
            ]);
            
            setPage(home);
            setOptions(siteOptions);

            const image = await getMedia(
                home.acf.hero.hero_image
            );

            setHeroImage(image.source_url);

            const aboutImage = await getMedia(
                home.acf.about.image
            );
            
            setAboutImage(aboutImage.source_url);
            
        }

        fetchData();
    }, []);

    if (!page || !heroImage || !aboutImage) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <Hero hero={page.acf.hero} image={heroImage}/>
            <About about={page.acf.about} image={aboutImage} />
            <Skills  skills={page.acf.skills}/>
            <Portfolio jobs={options.job} />
            <Contact />
        </main>
    );
}