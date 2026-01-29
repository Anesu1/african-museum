import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research Resources | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Research Resources"
                desc="Access <span>archives and guides</span> for scholars, students, and community partners." />
            <section className="py-16 md:py-24 dark:bg-darkblack">
                <div className="container">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <h2 className="text-3xl md:text-4xl font-semibold">Working with the Archive</h2>
                        <p className="text-secondary/70 dark:text-white/70">
                            The museum maintains oral histories, photographs, letters, and material culture documenting
                            liberation movements across Africa. Researchers may request access by contacting our
                            archives team with a project summary and desired dates.
                        </p>
                        <p className="text-secondary/70 dark:text-white/70">
                            Educational groups and community organizations can schedule guided sessions that connect
                            exhibitions to curriculum, civic leadership, and local history.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};
