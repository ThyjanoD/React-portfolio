type ExperienceCardProps = {
    year: string,
    job: string,
    description: string
}

export const ExperienceCard = ({ year, job, description }: ExperienceCardProps) => {
    return (
        <div className="border-primary-500/40 mb-6 border-b pb-2.5">
            <div className="text-primary-500/40 italic max-md:text-xs">{year}</div>
            <div className="flex items-center justify-between">
                <div className="text-primary-500 text-base font-semibold md:text-4xl">{job}</div>
                <div className="text-primary-500/40 text-end text-sm font-semibold md:text-xl">{description} </div>
            </div>
        </div>
    )
}
