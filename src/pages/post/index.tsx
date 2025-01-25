import React, {useEffect, useState} from "react";
import Footer from "@component/Footer";
import LandingPageLayout from "@pages/landing/components/Layout";
import {useFetchPost} from "@pages/post/data/remote";
import {useRouter} from "next/router";

export default function PostPage() {
    const router = useRouter()
    const {url} = router.query

    const mediumUrl = url;

    const [content, setContent] = useState("")
    const {
        data: postData,
        isLoading: postIsLoading,
        mutate: mostMutate,
        error: postError
    } = useFetchPost(mediumUrl as string)

    useEffect(() => {

    }, []);

    return (
        <LandingPageLayout title={"Post"}>
            <p dangerouslySetInnerHTML={{__html: postData}}></p>
            <Footer/>
        </LandingPageLayout>
    );
}
