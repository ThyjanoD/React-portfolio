import { SkillsCard } from "../../components/ui/SkillsCard";

export default function Skills() {
    return (
        <section className="pb-16 md:pt-24 lg:pb-24">
            <div className="container">
                <div className="pb-6">
                    <h2 className="pb-6">SKILLS</h2>
                    <div className="text-primary-500">Quick to learn, quick to deliver.
                        <br className="max-md:hidden" />Driven by curiosity and always improving to make a real impact.
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 pb-6">
                    <SkillsCard count={1} skill="HTML" text="Experienced in writing semantic HTML to create accessible and structured websites. Able to translate designs into clean, maintainable code." />
                    <SkillsCard count={2} skill="CSS" text="Strong understanding of CSS for styling responsive and visually appealing interfaces. Able to create clean layouts with attention to detail and user experience." />
                    <SkillsCard count={3} skill="TailwindCSS" text="Experienced with TailwindCSS for building fast and consistent UI designs. Comfortable working with utility-first styling to streamline development." />
                    <SkillsCard count={4} skill="React" text="Skilled in building interactive user interfaces using React. Focused on creating reusable components and maintaining clean, scalable code." />
                    <SkillsCard count={5} skill="JavaScript" text="Solid foundation in JavaScript for adding interactivity and dynamic behavior. Able to write clear, efficient code and solve problems effectively." />
                </div>
                <div className="flex justify-between">
                    <div className="text-primary-500 text-xl md:text-4xl">Many more to come</div>
                    <a href="#Download" className="text-primary-500 text-xl duration-500 hover:cursor-pointer hover:underline md:text-4xl">Download CV</a>
                </div>
            </div>
        </section>
    )
}
