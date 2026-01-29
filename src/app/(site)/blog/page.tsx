import BlogList from "@/app/components/blog/blog-list";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "News | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/blog/banner/blog_banner.png"
                heading="News"
                desc="Updates, <span>exhibitions, and programs</span> from the Museum of African Liberation." />
            <BlogList/>
        </main>
    );
};
