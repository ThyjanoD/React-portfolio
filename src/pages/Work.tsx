import { useEffect, useState } from "react";

import Hero from "../features/work/Hero";
import Portfolio from "../components/layout/Work";
import About from "../features/work/About";
import Contact from "../components/layout/Contact";

import { getWorkPage } from "../services/api/pages";
import type { WorkPage } from "../services/api/types";
import { getMedia } from "../services/api/media";

import { getSiteOptions } from "../services/api/options";
import type { SiteOptions } from "../services/api/options";

export default function Work() {
    const [page, setPage] = useState<WorkPage | null>(null);
    const [options, setOptions] = useState<SiteOptions | null>(null);
    const [aboutImage, setAboutImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const [work, siteOptions] = await Promise.all([
                getWorkPage(),
                getSiteOptions(),
            ]);

            setPage(work);
            setOptions(siteOptions);

            if (work.acf.work_about.work_about_image) {
                const image = await getMedia(
                    work.acf.work_about.work_about_image
                );

                setAboutImage(image.source_url);
            }
        }

        fetchData();
    }, []);

    if (!page || !options) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <Hero hero={page.acf.work_hero} />
            <Portfolio jobs={options?.job ?? []} />
            <About about={page.acf.work_about} image={aboutImage ?? ""} />
            <Contact />
        </main>
    );
}