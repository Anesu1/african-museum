"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";

function Aboutus() {
    const [avatarList, setAvatarList] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setAvatarList(data?.avatarList)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="py-20 md:py-40 dark:bg-darkblack">
            <div className="container">
                <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-28">
                    <div className="flex flex-col gap-5 2xl:gap-7 w-full 2xl:max-w-2xl 2xl:w-full">
                        <div className="flex items-center gap-4 md:gap-8">
                            <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                                04
                            </span>
                            <div className="h-px w-16 bg-secondary/12 dark:bg-white/12" />
                            <p className="text-base font-medium text-white bg-secondary dark:bg-white/10 py-1.5 px-4 rounded-full">
                                About The Museum
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <h2 className="2xl:max-w-3xl text-secondary dark:text-white">Preserving Our Legacy</h2>
                            <p className="2xl:max-w-sm text-secondary/70 dark:text-white/70">
                                The Museum of African Liberation documents the liberation of African countries. Anchored
                                at Liberation City in Harare, we preserve artifacts, stories, and lived experiences that
                                shaped Africa's freedom.
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 2xl:gap-7">
                        <div className="relative bg-primary p-4 2xl:p-7 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10 flex flex-col gap-2 lg:gap-4">
                                <div>
                                    <StarRating count={5} color='#1F2A2E' />
                                </div>
                                <p className="dark:text-secondary">"A transformative experience connecting us to our roots."</p>
                            </div>
                            <div className="relative z-10">
                                <div className="relative border-b border-secondary/12 pb-5">
                                    <h2 className="dark:text-secondary">54</h2>
                                    <p className="text-base text-secondary/70">African Nations</p>
                                </div>
                                <div className="flex items-center gap-2 lg:gap-5 pt-5">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-semibold">AL</span>
                                    </div>
                                    <div>
                                        <p className="font-medium dark:text-secondary">Pan-African</p>
                                        <p className="text-base text-secondary/70">Heritage</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0">
                                <Image src={"/images/home/aboutusIndex/bg-ellipse.svg"} alt="image" width={200} height={200} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 2xl:gap-7">
                            <div className="w-full h-full relative">
                                <Image src={"/images/home/services/services_2.png"} alt="Museum exhibit" width={340} height={215} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="bg-secondary dark:bg-lightgray/10 p-5 2xl:p-7 flex flex-col justify-between gap-8">
                                <div>
                                    <h2 className="text-white">1000s</h2>
                                    <p className="text-base text-white/70">Stories Preserved</p>
                                </div>
                                <div>
                                    <ul className='avatar flex flex-row items-center'>
                                        {avatarList?.map((items: any, index: any) => (
                                            <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                                                <Image src={items.image} alt='Image' width={44} height={44} quality={100} className='rounded-full border-2 border-secondary' />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden p-5 2xl:p-7 border border-secondary/12 dark:border-white/30 flex flex-col justify-between gap-8 md:gap-0">
                            <div className="relative z-10">
                                <h2>Oral</h2>
                                <p>Histories Recorded</p>
                            </div>
                            <div className="flex flex-col gap-4 relative z-10">
                                <h3 className="text-2xl font-bold text-secondary dark:text-white">AFRICA</h3>
                                <p>
                                    Our research archive preserves testimonies, photographs, and letters that bring liberation
                                    journeys to life across the continent.
                                </p>
                            </div>
                            <div className="absolute -top-72 right-0 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                            <div className="absolute -bottom-36 -right-14 border border-secondary/12 dark:border-white/30 rounded-full w-[489px] h-[489px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Aboutus;
