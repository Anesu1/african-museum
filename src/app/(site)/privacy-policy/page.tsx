import PrivacyPolicy from "@/app/components/privacy-policy";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Privacy Policy | Museum of African Liberation",
};

export default function Page() {
    return (
        <main>
             <Herobanner
                bannerimage="/images/privacy-policy/privacy-policy.png"
                heading="Privacy Policy"
                desc="Learn how we <span>protect your information</span> and respect your privacy." />
            <PrivacyPolicy/>
        </main>
    );
};
