import { useEffect, useState } from "react";
import { getSiteOptions, type SiteOptions } from "../../services/api/options";

export default function ContactDetails() {
    const [options, setOptions] = useState<SiteOptions | null>(null);

    useEffect(() => {
        async function fetchData() {
            const siteOptions = await getSiteOptions();
            setOptions(siteOptions);
        }
    
        fetchData();
    }, []);

    if (!options) {
        return <footer>Loading...</footer>;
    }

    return (
        <section className="pb-6">
            <div className="container">
                <div className="flex flex-col md:grid md:grid-cols-12">
                    <div className="md:col-span-7">
                        Lorem Ipsum
                    </div>
                    <div className="md:col-span-4 md:col-start-9">
                        <div>
                            <div className="pb-6">
                                <span className="text-primary-500/40 block pb-6 text-sm italic">CONTACT DETAILS</span>
                                <div className="flex flex-col gap-6 text-2xl tracking-[-5%]">
                                <a href={options.email.url} target={options.email.target || "_self"} rel={options.email.target === "_blank" ? "noopener noreferrer" : undefined} className="cursor-pointer duration-300 hover:underline">
                                    {options.email.title}
                                </a>
                                <a href={options.phone_number.url} target={options.phone_number.target || "_self"} rel={options.phone_number.target === "_blank" ? "noopener noreferrer" : undefined} className="cursor-pointer duration-300 hover:underline">
                                    {options.phone_number.title}
                                </a>
                                </div>
                            </div>
                            <span className="text-primary-500/40 block pb-6 text-sm italic">SOCIALS</span>
                            <div className="flex gap-4 pb-6">
                            <a href={options.linkedin.url} target={options.linkedin.target || "_self"} rel={options.linkedin.target === "_blank" ? "noopener noreferrer" : undefined} className="cursor-pointer duration-300 hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_113_241)">
                                        <path d="M5.4165 6.66675C6.10686 6.66675 6.6665 6.10711 6.6665 5.41675C6.6665 4.72639 6.10686 4.16675 5.4165 4.16675C4.72615 4.16675 4.1665 4.72639 4.1665 5.41675C4.1665 6.10711 4.72615 6.66675 5.4165 6.66675Z" fill="#E1D8C4" />
                                        <path d="M4.1665 8.33333C4.1665 7.8731 4.5396 7.5 4.99984 7.5H5.83317C6.2934 7.5 6.6665 7.87309 6.6665 8.33333V15C6.6665 15.4602 6.2934 15.8333 5.83317 15.8333H4.99984C4.5396 15.8333 4.1665 15.4602 4.1665 15V8.33333Z" fill="#E1D8C4" />
                                        <path d="M9.16683 15.8333H10.0002C10.4604 15.8333 10.8335 15.4602 10.8335 15V11.25C10.8335 10 13.3335 9.16667 13.3335 10.8333V15.0003C13.3335 15.4606 13.7066 15.8333 14.1668 15.8333H15.0002C15.4604 15.8333 15.8335 15.4602 15.8335 15V10C15.8335 8.33333 14.5835 7.5 12.9168 7.5C11.2502 7.5 10.8335 8.75 10.8335 8.75V8.33333C10.8335 7.87309 10.4604 7.5 10.0002 7.5H9.16683C8.70658 7.5 8.3335 7.8731 8.3335 8.33333V15C8.3335 15.4602 8.70658 15.8333 9.16683 15.8333Z" fill="#E1D8C4" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6668 0.833252C18.0476 0.833252 19.1668 1.95254 19.1668 3.33325V16.6666C19.1668 18.0473 18.0476 19.1666 16.6668 19.1666H3.3335C1.95279 19.1666 0.833496 18.0473 0.833496 16.6666V3.33325C0.833496 1.95254 1.95279 0.833252 3.3335 0.833252H16.6668ZM16.6668 2.49992C17.1271 2.49992 17.5002 2.87302 17.5002 3.33325V16.6666C17.5002 17.1268 17.1271 17.4999 16.6668 17.4999H3.3335C2.87326 17.4999 2.50016 17.1268 2.50016 16.6666V3.33325C2.50016 2.87302 2.87326 2.49992 3.3335 2.49992H16.6668Z" fill="#E1D8C4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_113_241">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                                <a href={options.instagram.url} target={options.instagram.target || "_self"} rel={options.instagram.target === "_blank" ? "noopener noreferrer" : undefined} className="cursor-pointer duration-300 hover:scale-110">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_113_247)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23857 12.7614 5 10 5C7.23857 5 5 7.23857 5 10C5 12.7614 7.23857 15 10 15ZM10 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 10C13.3333 8.15905 11.8409 6.66667 10 6.66667C8.15905 6.66667 6.66667 8.15905 6.66667 10C6.66667 11.8409 8.15905 13.3333 10 13.3333Z" fill="#E1D8C4" />
                                        <path d="M14.9998 4.16675C14.5396 4.16675 14.1665 4.53985 14.1665 5.00008C14.1665 5.46031 14.5396 5.83341 14.9998 5.83341C15.4601 5.83341 15.8332 5.46031 15.8332 5.00008C15.8332 4.53985 15.4601 4.16675 14.9998 4.16675Z" fill="#E1D8C4" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37846 3.5633C0.833496 4.63286 0.833496 6.03299 0.833496 8.83325V11.1666C0.833496 13.9668 0.833496 15.367 1.37846 16.4365C1.85783 17.3773 2.62273 18.1423 3.56355 18.6216C4.6331 19.1666 6.03324 19.1666 8.8335 19.1666H11.1668C13.9671 19.1666 15.3672 19.1666 16.4367 18.6216C17.3776 18.1423 18.1425 17.3773 18.6218 16.4365C19.1668 15.367 19.1668 13.9668 19.1668 11.1666V8.83325C19.1668 6.03299 19.1668 4.63286 18.6218 3.5633C18.1425 2.62249 17.3776 1.85759 16.4367 1.37822C15.3672 0.833252 13.9671 0.833252 11.1668 0.833252H8.8335C6.03324 0.833252 4.6331 0.833252 3.56355 1.37822C2.62273 1.85759 1.85783 2.62249 1.37846 3.5633ZM11.1668 2.49992H8.8335C7.40586 2.49992 6.43537 2.50122 5.68523 2.5625C4.95453 2.6222 4.58086 2.73041 4.3202 2.86323C3.69299 3.18281 3.18305 3.69274 2.86347 4.31995C2.73065 4.58062 2.62245 4.95429 2.56275 5.68499C2.50146 6.43513 2.50016 7.40562 2.50016 8.83325V11.1666C2.50016 12.5943 2.50146 13.5647 2.56275 14.3148C2.62245 15.0456 2.73065 15.4193 2.86347 15.6799C3.18305 16.3071 3.69299 16.817 4.3202 17.1366C4.58086 17.2694 4.95453 17.3777 5.68523 17.4373C6.43537 17.4986 7.40586 17.4999 8.8335 17.4999H11.1668C12.5945 17.4999 13.5649 17.4986 14.3151 17.4373C15.0458 17.3777 15.4195 17.2694 15.6802 17.1366C16.3073 16.817 16.8172 16.3071 17.1368 15.6799C17.2697 15.4193 17.3779 15.0456 17.4376 14.3148C17.4988 13.5647 17.5002 12.5943 17.5002 11.1666V8.83325C17.5002 7.40562 17.4988 6.43513 17.4376 5.68499C17.3779 4.95429 17.2697 4.58062 17.1368 4.31995C16.8172 3.69274 16.3073 3.18281 15.6802 2.86323C15.4195 2.73041 15.0458 2.6222 14.3151 2.5625C13.5649 2.50122 12.5945 2.49992 11.1668 2.49992Z" fill="#E1D8C4" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_113_247">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                            </div>
                            <div className="relative">
                                <img src="img/image-4.webp" alt="Groningen" className="relative w-full rounded-xl" />
                                <div className="absolute bottom-0 left-0 h-full w-full bg-black/40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
