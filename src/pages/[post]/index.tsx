import React, {Fragment, useEffect, useState} from "react";
import '@/styles/landing.module.css'
import 'highlight.js/styles/github-dark.css';
import Footer from "@component/Footer";
import LandingPageLayout from "@pages/landing/components/Layout";
import {useFetchPost} from "@pages/[post]/data/remote";
import {usePathname} from "next/navigation";
import {SpinnerWrapper} from "@atlaskit/media-ui/modalSpinner";
import SpinnerLoading from "@component/Spinner";
import {Box, Flex, Text, xcss} from "@atlaskit/primitives";
import PostWrapper from "@component/Layout/common/post-wrapper";
import Divider from "@component/Divider";
import {cardAuthorStyle, cardTagsStyle} from "@component/Common/style-util";
import Avatar from '@atlaskit/avatar';
import {SimpleTag} from '@atlaskit/tag';

export default function PostPage({url}: { url: string }) {
    const paths = usePathname()
    const [mediumUrl, setMediumUrl] = useState(url || paths)
    const {
        data: postData,
        isLoading: postIsLoading,
        mutate: mostMutate,
        error: postError
    } = useFetchPost(mediumUrl as string)

    useEffect(() => {
        if (url == null && paths != "") {
            setMediumUrl(paths)
        }
    }, [paths]);

    return (
        <LandingPageLayout title={postData?.title}>
            <PostWrapper>
                {
                    postIsLoading ?
                        <Box xcss={xcss({minHeight: "90vh"})}>
                            <SpinnerWrapper>
                                <SpinnerLoading size={"large"}/>
                            </SpinnerWrapper>
                        </Box>
                        :
                        postData ?
                            <Fragment>
                                <h1>
                                    {postData?.title || "Loading..."}
                                </h1>
                                <br/>
                                <Divider/>
                                <br/>
                                <Box xcss={cardAuthorStyle}>
                                    <Flex gap="space.200" alignItems="center">
                                        <Avatar src={postData?.author?.avatar}/>
                                        <Text size={"large"} weight={"bold"}>
                                            {postData?.author?.name}
                                        </Text>
                                    </Flex>
                                </Box>
                                <p dangerouslySetInnerHTML={{__html: postData?.content}}></p>
                                <Box xcss={xcss({marginBlock: "space.200"})}>
                                    <Box xcss={cardTagsStyle}>
                                        <Flex>
                                            {
                                                postData?.tags.map((tag: any) => (
                                                    <SimpleTag text={tag}/>
                                                ))
                                            }
                                        </Flex>
                                    </Box>
                                </Box>
                            </Fragment>
                            : null
                }
            </PostWrapper>
            <Footer/>
        </LandingPageLayout>
    );
}
