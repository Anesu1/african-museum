import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Visit | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Contact"
                desc="Plan your <span>visit or research</span> with our team." />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
