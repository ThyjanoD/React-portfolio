type MotivationCardProps = {
    count: number,
    title: string,
    content: string
}

export const MotivationCard = ({ count, title, content }: MotivationCardProps) => {
    return (
        <div className="text-primary-500/40 w-full items-center rounded-xl bg-[#131313] px-5 py-10">
            <div className="flex items-center gap-2 pb-6">
                <div className="text-sm">_00{count}</div>
                <h4>{title}</h4>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}
