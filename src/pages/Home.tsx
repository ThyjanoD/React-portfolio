import Hero from "../features/home/Hero";
import About from "../features/home/About";
import Skills from "../features/home/Skills";
import Work from "../features/home/Work";
import Contact from "../features/home/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Work />
            <Contact />
        </main>
    );
}
