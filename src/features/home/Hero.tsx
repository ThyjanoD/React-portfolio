export default function Home() {
    return (
        <section className="pb-16 lg:pb-24">
            <div className="container">
                <div className="relative flex justify-center pt-20">
                    <img src="img/image-1.webp" alt="hero" className="rounded-4xl relative mt-6 lg:mt-24" />
                    <div className="rounded-4xl absolute bottom-0 left-0 h-full w-full bg-black/20" />
                </div>

                <div className="lg:top-111 top-78 absolute left-0 w-full">
                    <div className="mx-4 lg:mx-10">
                        <h1 className="text-primary-500 text-center tracking-[-5%]">
                            Thyjano Dania — Software Developer
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
