import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Exhibitions | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Exhibitions"
                desc="Explore <span>featured galleries</span> and permanent collections." />
            <ProjectList />
        </main>
    );
};
