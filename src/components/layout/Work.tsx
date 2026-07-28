import type { SiteOptions } from "../../services/api/options";
import { WorkCard } from "../ui/WorkCard";

interface WorkProps {
    jobs: SiteOptions["job"];
}

export default function Work({ jobs }: WorkProps) {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
                <div className="flex flex-col gap-y-8">
                    {jobs.map((job, index) => (
                        <WorkCard
                            key={index}
                            title={job.company_name}
                            content={job.company_content}
                            client={job.company_name}
                            task={job.tasks.map(task => task.label).join(", ")}
                            date={job.date}
                            preview={job.preview}
                            image={job.image.url}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}