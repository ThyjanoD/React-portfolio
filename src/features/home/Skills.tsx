import { SkillsCard } from "../../components/ui/SkillsCard";

interface SkillsProps {
    skills: {
        skills_title: string;
        skills_content: string;
        skills_outro: string;
        skills_cv_download: {
            title: string;
            url: string;
            target: string;
        }
        skill: {
            skill_title: string;
            skill_content: string;
        }[];
    };
}



export default function Skills({ skills }: SkillsProps) {
    console.log(skills.skill);
    return (
        <section className="pb-16 md:pt-24 lg:pb-24">
            <div className="container">
                <div className="pb-6">
                    <h2 className="pb-6">{ skills.skills_title }</h2>
                    <div className="text-primary-500">
                        { skills.skills_content }
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pb-6">

                {skills.skill.map((skiller, index) => (
                    <SkillsCard
                    key={index}
                    count={index + 1}
                    skill={skiller.skill_title}
                    text={skiller.skill_content}
                    />
                ))}

                </div>
                <div className="flex justify-between">
                    <div className="text-primary-500 text-xl md:text-4xl">{ skills.skills_outro }</div>
                    <a href={skills.skills_cv_download.url} target={skills.skills_cv_download.target || undefined} className="text-primary-500 text-xl duration-500 hover:cursor-pointer hover:underline md:text-4xl" >{skills.skills_cv_download.title} </a>
                </div>
            </div>
        </section>
    )
}
