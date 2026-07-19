import { ExperienceCard } from "../../components/ui/ExperienceCard"

export default function Experiences() {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
                <div className="flex justify-between pb-6">
                    <h2>Experience</h2>
                    <a href="#DownloadCV" className="text-2xl underline duration-300 hover:scale-105 hover:cursor-pointer">Download CV</a>
                </div>
                <ExperienceCard year="2025-2026" job="Front-End Developer, Flexsoftware" description="Recruitmentsoftware & Recruitment sites" />
                <ExperienceCard year="2025-2025" job="Intern Front-End Developer, Flexsoftware" description="Recruitmentsoftware & Recruitment sites" />
                <ExperienceCard year="2025-2025" job="Intern Front-End Developer, Reclame Reus" description="Webdesign & Websupport" />
            </div>
        </section>
    )
}
