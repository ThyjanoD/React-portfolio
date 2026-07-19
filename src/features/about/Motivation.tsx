import { MotivationCard } from "../../components/ui/MotivationCard"

export default function Motivation() {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
                <h2 className="pb-6">Motivation</h2>
                <div className="flex gap-8 max-md:flex-col">
                    <MotivationCard count={1} title="Curious" content="I’m always exploring new technologies and ideas to keep growing as a developer. Whether it’s a new framework or a better way to solve a problem, I enjoy the process of learning. Staying curious helps me build better and smarter solutions." />
                    <MotivationCard count={2} title="Driven" content="I’m motivated to turn ideas into real, working products that make an impact. I focus on quality, performance, and pushing every project to its full potential. Good enough is not enough." />
                    <MotivationCard count={3} title="Detail - Oriented" content="I care about the small details that make a big difference in the final product. From clean code to smooth user experiences, everything matters. That’s what turns a good project into a great one." />
                </div>
            </div>
        </section>
    )
}
