import React, {useEffect} from "react";
import LandingPage from "@pages/landing/[url]";
import {useRouter} from "next/router";

export default function Page() {
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}

// const Index = () => {
//     const router = useRouter()
//     const {url} = router.query
//
//     useEffect(() => {
//         console.log(url)
//     }, [url]);
//     return <LandingPage/>
// };