"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
    return (
        <ParallaxProvider>
            <Parallax speed={-25}>
                <section className="relative flex items-end text-white bg-black h-full min-h-screen">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/video/banner-video.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10 container text-left">
                        <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
                            <div className="flex items-start gap-2 md:gap-6">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <Image
                                        src={"/images/Icon/primary-leaf.svg"}
                                        alt="icon"
                                        width={44}
                                        height={44}
                                        className="animate-spin"
                                    />
                                </div>
                                <p className="text-white/70 max-w-md">
                                    A continental project dedicated to the liberation of African countries - preserving
                                    memory, honoring sacrifice, and <span className="text-primary">inspiring future generations.</span>
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                                <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-none text-white">
                                    Museum of <br className="hidden md:block" />
                                    <span className="text-primary">African Liberation</span>
                                </h1>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-primary hover:bg-white text-secondary hover:text-primary font-bold py-3 px-6 rounded-full transition-all duration-300">
                                        Plan Your Visit
                                    </button>
                                    <button className="border border-white hover:bg-white hover:text-secondary text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                                        Explore Liberation City
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
        </ParallaxProvider>
    );
}

export default HeroSection;
