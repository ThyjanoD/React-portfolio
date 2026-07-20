export default function Contact() {
    return (
        <section>
            <div className="mx-4 rounded-xl bg-[#131313] py-32 md:mx-10">
                <div className="text-center">
                    <span className="text-primary-500 block pb-6 text-center text-4xl max-md:px-1 md:text-[64px] italic font-extrathin">Looking for a front-end developer?</span>
                    <div className="flex items-center justify-center gap-4 md:flex text-center">
                        <a href="#mail" className="text-primary underline hover:translate-x-1 duration-300">thyjanodania@gmail.com</a>/
                        <a href="#phone" className="text-primary underline hover:-translate-x-1 duration-300">Book a call</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
