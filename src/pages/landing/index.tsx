import React from "react";
import "@/styles/landing.module.css"
import LandingPageHero from "@/pages/landing/components/Hero";
import LandingFeatures from "@pages/landing/components/Features";
import Footer from "@component/Footer";
import LandingSubFeatures from "@pages/landing/components/SubFeatures";
import LandingPageLayout from "@pages/landing/components/Layout";
import {FlagsProvider} from "@atlaskit/flag";

export default function LandingPage() {
    return (
        <FlagsProvider>
            <LandingPageLayout title={process.env.title || ""}>
                <LandingPageHero/>
                <LandingFeatures/>
                {/*<LandingHeaderCards/>*/}
                <LandingSubFeatures/>
                <Footer/>
            </LandingPageLayout>
        </FlagsProvider>
    );
}
