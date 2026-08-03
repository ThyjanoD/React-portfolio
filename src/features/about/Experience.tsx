import { ExperienceCard } from "../../components/ui/ExperienceCard"

interface ExperienceProps {
    experience: {
        about_experience_title: string;

        download_cv: {
            title: string;
            url: string;
            target: string;
        };

        work_experience: {
            employment_date: string;
            employer_position: string;
            work_tasks: string[];
        }[];
    };
}

export default function Experiences({ experience}: ExperienceProps) {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
                <div className="flex justify-between pb-6">
                    <h2>{experience.about_experience_title}</h2>
                    <a href={experience.download_cv.url} target={experience.download_cv.target || "_self"} className="text-2xl underline duration-300 hover:scale-105 hover:cursor-pointer">
                        {experience.download_cv.title}
                    </a>
                </div>
                {experience.work_experience.map((item, index) => (
                    <ExperienceCard key={index} year={item.employment_date} job={item.employer_position} description={item.work_tasks.join(", ")} />
                ))}
            </div>
        </section>
    )
}
