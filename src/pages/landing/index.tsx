import React, {useEffect} from "react";
import LandingPageHero from "@/pages/landing/components/Hero";
import LandingHeaderCards from "@pages/landing/components/HeaderCards";
import LandingFeatures from "@pages/landing/components/Features";
import Footer from "@component/Footer";
import LandingTerminal from "@pages/landing/components/Terminal";
import LandingSubFeatures from "@pages/landing/components/SubFeatures";
import LandingPageLayout from "@pages/landing/components/Layout";
import {ArticleDetails, scrapeArticleContent} from "@pages/post/data/article";


export default async function LandingPage() {
    let content: ArticleDetails | { error: string } | null = await scrapeArticleContent("url");

    useEffect(() => {
        console.log(content)
    }, []);
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
