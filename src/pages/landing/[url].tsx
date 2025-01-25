import React, {useEffect} from "react";
import LandingPageHero from "@/pages/landing/components/Hero";
import LandingHeaderCards from "@pages/landing/components/HeaderCards";
import LandingFeatures from "@pages/landing/components/Features";
import Footer from "@component/Footer";
import LandingTerminal from "@pages/landing/components/Terminal";
import LandingSubFeatures from "@pages/landing/components/SubFeatures";
import LandingPageLayout from "@pages/landing/components/Layout";
import {useRouter} from "next/router";

export default function LandingPage() {
    const router = useRouter()
    const {url} = router.query

    useEffect(() => {
        console.log(url)
    }, [url]);

    return (
        <LandingPageLayout title={"Untitled"}>
            <LandingPageHero/>
            <LandingHeaderCards/>
            <LandingTerminal/>
            <LandingFeatures/>
            <LandingSubFeatures/>
            <Footer/>
        </LandingPageLayout>
    );
}
