type SkillsCardProps = {
    count: number;
    skill: string;
    text: string;
};

export const SkillsCard = ({ count, skill, text }: SkillsCardProps) => {
    return (
        <div className="py-7.5 items-center rounded-xl bg-[#131313] px-10 text-white/40">
            <div className="flex max-md:flex-col md:justify-between">
                <div className="flex items-center gap-4 max-md:pb-6">
                    <div className="text-sm">_00{count}</div>
                    <h4 className="text-white/40">{skill}</h4>
                </div>
                <div className="font-semibold md:w-1/4">{text}</div>
            </div>
        </div>
    );
};
