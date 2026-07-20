import { useEffect, useState } from "react";

import Hero from "../features/work/Hero.tsx";
import Portfolio from "../features/work/Work.tsx"
import About from "../features/work/About.tsx"
import Contact from "../components/layout/Contact.tsx"

import { getWorkPage } from "../services/api/pages.ts";
import type { WorkPage } from "../services/api/types.ts";
import { getMedia } from "../services/api/media.ts";

export default function Work() {
    const [page, setPage] = useState<WorkPage | null>(null);
    const [aboutImage, setAboutImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const work = await getWorkPage();

            setPage(work);

            if (work.acf.work_about.work_about_image) {
                const image = await getMedia(work.acf.work_about.work_about_image);

                setAboutImage(image.source_url);
            }
        }

        fetchData();
    }, []);

    if (!page) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <Hero hero={page.acf.work_hero}/>
            <Portfolio />
            <About about={page.acf.work_about} image={aboutImage ?? ""} />
            <Contact />
        </main>
    );
}
