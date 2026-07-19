import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container flex flex-col md:grid md:grid-cols-12">
                <div className="md:col-span-9">
                    <h2 className="pb-6">
                        What powers the growth
                    </h2>
                    <div className="text-primary-500 text-xl md:text-[32px]" >
                        A carefully crafted stack of modern technologies<br className="max-md:hidden" />
                        and tools sits at the core of everything I build.<br className="max-md:hidden" />
                        Each piece is chosen to balance performance,<br className="max-md:hidden" />
                        scalability, and long-term reliability. By blending<br className="max-md:hidden" />
                        the right frameworks, languages, and workflows, I<br className="max-md:hidden" />
                        shape seamless and engaging digital experiences.<br className="max-md:hidden" />
                        All designed with one goal in mind: sustainable<br className="max-md:hidden" />
                        growth.
                    </div>
                </div>
                <div className="flex justify-end max-md:hidden md:col-span-3">
                    <Link to="/About">
                        <img src="img/stack.png" alt="Tech stack" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
