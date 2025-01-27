import React, {useEffect, useState} from "react";
import Footer from "@component/Footer";
import LandingPageLayout from "@pages/landing/components/Layout";
import {useFetchPost} from "@pages/[post]/data/remote";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

export default function PostPage({url}: { url: string }) {
    const router = useRouter()
    const paths = usePathname()
    const {post} = router.query
    const [mediumUrl, setMediumUrl] = useState(url)
    const [content, setContent] = useState("")
    const {
        data: postData,
        isLoading: postIsLoading,
        mutate: mostMutate,
        error: postError
    } = useFetchPost(mediumUrl as string)

    return (
        <LandingPageLayout title={"Post"}>
            <p dangerouslySetInnerHTML={{__html: postData}}></p>
            <Footer/>
        </LandingPageLayout>
    );
}
