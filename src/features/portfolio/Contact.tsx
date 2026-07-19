export default function Contact() {
    return (
        <section>
            <div className="mx-4 rounded-xl bg-[#131313] py-16 md:mx-10">
                <div className="text-center">
                    <span className="text-primary-500 block pb-6 text-center text-4xl font-extrabold tracking-[-5%] max-md:px-1 md:text-8xl">Get in touch — Lets talk</span>
                    <div className="flex flex-col items-center justify-center gap-4 md:flex">
                        <a href="#mail" className="border-primary-500 text-primary h-14 rounded-xl border bg-transparent p-4">thyjanodania@gmail.com</a>
                        <img src="img/image-1.webp" alt="" className="w-45 h-45 flex rounded-full object-cover" />
                        <a href="#phone" className="border-primary-500 text-primary h-14 rounded-xl border bg-transparent p-4">+31 6 39013315</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
