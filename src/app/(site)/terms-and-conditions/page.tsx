import Herobanner from "@/app/components/shared/hero-banner";
import TermsAndCondition from "@/app/components/terms-and-condition";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms and Conditions | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/pattern.png"
                heading="Terms and Conditions"
                desc="Understand the <span>visitor guidelines</span> and website terms." />
            <TermsAndCondition />
        </main>
    );
};
