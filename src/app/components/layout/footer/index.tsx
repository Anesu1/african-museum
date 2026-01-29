import Image from "next/image"

const Footer = () => {
    const footerData = {
        name: "Museum of African Liberation",
        tagline: "Preserving Memory, Inspiring Generations.",
        info: [
            {
                icon: "/images/footer/email-arrow.svg",
                link: "info@africanrecords.africa",
                href: "mailto:info@africanrecords.africa"
            },
            {
                icon: "/images/footer/Location.svg",
                link: "Liberation City, Harare, Zimbabwe",
                href: "https://maps.google.com/?q=Liberation+City+Harare"
            },
            {
                icon: "/images/footer/phone.svg",
                link: "078 657 9814",
                href: "tel:0786579814"
            }
        ],
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Exhibitions", href: "/projects" },
            { name: "News", href: "/blog" },
            { name: "Plan Your Visit", href: "/contact" },
        ],
        socialLinks: [
            { name: "Facebook", href: "https://www.facebook.com/" },
            { name: "Twitter", href: "https://x.com/" },
            { name: "Instagram", href: "https://www.instagram.com/" }
        ],
        copyright: "Copyright 2025 Museum of African Liberation"
    };

    return (
        <footer>
            <div className="bg-secondary py-10 md:py-20 xl:py-40">
                <div className="container">
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-0">

                        <div className="flex flex-col gap-10 xl:max-w-2xl w-full">
                            {footerData?.tagline &&
                                <h2 className="text-white xl:max-w-xl">{footerData?.tagline}</h2>
                            }
                            <div className='flex flex-col gap-2'>
                                {footerData && footerData?.info?.map((value: any, index: any) => {
                                    return (
                                        <div key={index}>
                                            <a href={value.href} className='flex gap-4'>
                                                <Image src={value.icon} alt="icon" width={24} height={24} />
                                                <span className='text-white hover:text-primary text-lg'>{value.link}</span>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 w-full gap-10 md:gap-0">
                            <ul className='flex flex-col gap-1.5'>
                                {footerData && footerData?.links?.map((value: any, index: any) => {
                                    return (
                                        <li key={index}>
                                            <a href={value.href} className='text-lg text-white hover:text-primary'>{value.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className='flex flex-col gap-1.5'>
                                {footerData && footerData?.socialLinks?.map((value: any, index: any) => {
                                    return (
                                        <li key={index}>
                                            <a href={value.href} className='text-lg text-white hover:text-primary'>{value.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className='flex md:justify-end xl:col-span-2'>
                                <p className='text-white/70 text-base max-w-96'>{footerData && footerData?.copyright}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
