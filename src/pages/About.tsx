import Hero from "../features/about/Hero"
import FullWidthText from "../features/about/FullWidthText"
import Motivation from "../features/about/Motivation"
import Experience from "../features/about/Experience"
import Contact from "../features/home/Contact"

export default function About() {
    return (
        <main>
            <Hero />
            <FullWidthText />
            <Motivation />
            <Experience />
            <Contact />
        </main>
    )
}
