type WorkCardProps = {
    title: string;
    content: string;
    client: string;
    task: string;
    date: string;
    preview: string;
    image: string;
    reverse: boolean;
};

export const WorkCard = ({ title, content, client, task, date, preview, image, reverse }: WorkCardProps) => {
    return (
        <div className="flex flex-col gap-8 md:grid md:grid-cols-12">
            <div className={`col-span-4 ${reverse ? "md:order-2" : "md:order-1"}`}>
                <div className="text-primary-500 flex h-full flex-col rounded-xl bg-[#131313] p-8">
                    <div>
                        <h3 className="pb-6">{title}</h3>
                        {content}
                    </div>
                    <div className="mt-auto pt-6">
                        <div className="border-primary-500 mb-3 flex justify-between border-b pb-1.5">
                            <h4>Client:</h4>
                            <div>{client}</div>
                        </div>
                        <div className="border-primary-500 mb-3 flex justify-between border-b pb-1.5">
                            <h4>Task:</h4>
                            <div>{task}</div>
                        </div>
                        <div className="border-primary-500 mb-3 flex justify-between border-b pb-1.5">
                            <h4>Date:</h4>
                            <div>{date}</div>
                        </div>
                        <div className="border-primary-500 mb-3 flex justify-between border-b pb-1.5">
                            <h4>Preview:</h4>
                            <a href={preview} className="duration-300 hover:scale-105">{preview}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`col-span-8 ${reverse ? "md:order-1" : "md:order-2"}`}>
                <div className="h-full rounded-xl bg-[#131313] p-2.5">
                    <img src={image} alt={title} className="h-full w-full rounded-xl object-cover" />
                </div>
            </div>
        </div>
    )
}
