import { Link } from "react-router-dom";

interface AboutProps {
    about: {
        title: string;
        content: string;
    };
    image: string;
}

export default function About({ about, image }: AboutProps) {
    return (
        <section className="pb-16 pt-24 lg:pb-24">
            <div className="container flex flex-col md:grid md:grid-cols-12">
                <div className="md:col-span-9">
                    <h2 className="pb-6">
                        {about.title}
                    </h2>

                    <div className="text-primary-500 text-xl md:text-[32px]">
                        {about.content}
                    </div>
                </div>

                <div className="flex justify-end max-md:hidden md:col-span-3">
                    <Link to="/About">
                    <img src={image} alt={about.title} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
