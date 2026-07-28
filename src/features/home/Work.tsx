{/* Haven't made the content of this section dynamic because i don't have ACF Pro, which means i can't use the repeater field. */}

import { WorkCard } from "../../components/ui/WorkCard"

export default function Work() {
    return (
        <section className="pb-16 pt-24 lg:pb-24">
            <div className="container">
                <h2 className="pb-6">WORK</h2>
                <div className="flex flex-col gap-y-8">
                    <WorkCard title="Uitzendbureau Jolanta" content="For this project, I built a staffing agency website based on a provided design, which I recreated pixel-perfectly. I added animations using GSAP to make the site feel more dynamic. I also integrated a custom-built staffing plugin for managing job listings and applications. The result is a modern, user-friendly website that works smoothly across all devices." client="Uitzendbureau Jolanta" task="Webdevelopment, Plugin" date="October 2025" preview="https://uzb-jolanta.eu/" image="img/jolanta.png" reverse={false} />
                    <WorkCard title="Oost Occasions" content="For this project, I developed a website along with a custom-built plugin. This plugin automatically retrieves vehicle data from the RDW and makes it easy to add car listings. The design and branding were created in collaboration with another party. The result is an efficient and user-friendly platform for managing vehicle inventory." client="Oost Occasions" task="Webdevelopment, Plugin Development" date="November 2025" preview="https://oostoccasions.nl/" image="img/oostoccasions.png" reverse />
                </div>
            </div>
        </section>
    )
}
