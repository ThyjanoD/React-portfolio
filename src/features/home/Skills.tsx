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
    };
}

export default function Skills({ skills }: SkillsProps) {
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
                    {/* I would make these skills dynamic but i don't got ACF Pro so hardcoded it is for now! */}
                    <SkillsCard count={1} skill="HTML" text="Experienced in writing semantic HTML to create accessible and structured websites. Able to translate designs into clean, maintainable code." />
                    <SkillsCard count={2} skill="CSS" text="Strong understanding of CSS for styling responsive and visually appealing interfaces. Able to create clean layouts with attention to detail and user experience." />
                    <SkillsCard count={3} skill="TailwindCSS" text="Experienced with TailwindCSS for building fast and consistent UI designs. Comfortable working with utility-first styling to streamline development." />
                    <SkillsCard count={4} skill="React" text="Skilled in building interactive user interfaces using React. Focused on creating reusable components and maintaining clean, scalable code." />
                    <SkillsCard count={5} skill="JavaScript" text="Solid foundation in JavaScript for adding interactivity and dynamic behavior. Able to write clear, efficient code and solve problems effectively." />
                </div>
                <div className="flex justify-between">
                    <div className="text-primary-500 text-xl md:text-4xl">{ skills.skills_outro }</div>
                    <a href={skills.skills_cv_download.url} target={skills.skills_cv_download.target || undefined} className="text-primary-500 text-xl duration-500 hover:cursor-pointer hover:underline md:text-4xl" >{skills.skills_cv_download.title} </a>
                </div>
            </div>
        </section>
    )
}
