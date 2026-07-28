interface FullWidthTextProps {
    text: {
        fw_title: string;
        fw_content: string;
    };
}

export default function FullWidthText({ text }: FullWidthTextProps) {
    return (
        <section className="pb-16 xl:pb-24">
            <div className="container">
                <h2 className="pb-6">{text.fw_title}</h2>
                <div className="text-lg md:text-2xl">
                    {text.fw_content}
                </div>
            </div>
        </section>
    );
}