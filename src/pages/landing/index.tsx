import React from "react";
import '@/styles/landing.module.css'
import LandingPageHero from "@/pages/landing/components/Hero";
import LandingHeaderCards from "@pages/landing/components/HeaderCards";
import LandingFeatures from "@pages/landing/components/Features";
import Footer from "@component/Footer";
import LandingSubFeatures from "@pages/landing/components/SubFeatures";
import LandingPageLayout from "@pages/landing/components/Layout";

export default function LandingPage() {
    return (
        <LandingPageLayout title={process.env.title || ""}>
            <LandingPageHero/>
            <LandingFeatures/>
            {/*<LandingHeaderCards/>*/}
            <LandingSubFeatures/>
            <Footer/>
        </LandingPageLayout>
    );
}
