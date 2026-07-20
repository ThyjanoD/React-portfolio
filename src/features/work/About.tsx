import { Link } from "react-router-dom";

interface AboutProps {
    about: {
        work_about_title: string,
        work_about_content: string,
    },
    image: string;
}


export default function About({ about, image}: AboutProps) {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container flex flex-col md:grid md:grid-cols-12">
                    <div className="md:col-span-9">
                        <h2 className="pb-6">
                            { about.work_about_title }
                        </h2>
                        <div className="text-primary-500 text-xl md:text-[32px] pr-24" >
                            { about.work_about_content }
                        </div>
                    </div>
                    <div className="flex justify-end max-md:hidden md:col-span-3">
                        <Link to="/About">
                            <img className="hover:scale-105 duration-300" src={image} alt={about.work_about_title} />
                        </Link>
                    </div>
            </div>
        </section>
    );
}
