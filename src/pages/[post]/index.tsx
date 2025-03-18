import React, {FC, Fragment, useEffect, useState} from "react";
import "@/styles/landing.module.css"
import "highlight.js/styles/github-dark.css";
import Footer from "@component/Footer";
import LandingPageLayout from "@pages/landing/components/Layout";
import {useFetchBookmark, useFetchPost} from "@pages/[post]/data/remote";
import {usePathname} from "next/navigation";
import {SpinnerWrapper} from "@atlaskit/media-ui/modalSpinner";
import SpinnerLoading from "@component/Spinner";
import {Box, Flex, Grid, Inline, Text, xcss} from "@atlaskit/primitives";
import PostWrapper from "@component/Layout/common/post-wrapper";
import Divider from "@component/Divider";
import {cardAuthorStyle, cardTagsStyle} from "@component/Common/style-util";
import Avatar from "@atlaskit/avatar";
import {SimpleTag} from "@atlaskit/tag";
import {addBookmark, deleteBookmark} from "@api/data/services/bookmark";
import {showFlag} from "@store/actions/show-flag";
import {useDispatch} from "react-redux";
import Button from "@atlaskit/button/new";
import StoryIcon from "@atlaskit/icon/core/story";
import {ButtonGroup} from "@atlaskit/button";
import {responsiveStyles} from "@styles/styles";
import {RWebShare} from "react-web-share";
import ShareIcon from "@atlaskit/icon/core/share";
import {ContentShareButtonProps} from "@pages/[post]/data/props";
import DropdownMenu, {DropdownItem} from "@atlaskit/dropdown-menu";
import {useTranslation} from "next-i18next";
import {FlagsProvider} from "@atlaskit/flag";
import {useIsLoggedIn, useUserData} from "@utils/hooks";
import {useRouter} from "next/router";
import CheckboxCheckedIcon from '@atlaskit/icon/core/checkbox-checked';

export default function PostPage({url}: { url: string }) {
    const paths = usePathname()
    const dispatch = useDispatch();
    const {t} = useTranslation(["common"])
    const [wSize, setSize] = React.useState(0);
    const [mediumUrl, setMediumUrl] = useState(url || paths)
    const [onCopied, setOnCopied] = useState<boolean>(false)
    const [isLoadingBookmark, setIsLoadingBookmark] = useState<boolean>(false)
    const isLoggedIn = useIsLoggedIn()
    const user = useUserData()
    const router = useRouter()

    const updateWindowDimensions = () => {
        setSize(window.innerWidth);
    }

    const handleOnCopiedURL = () => {
        setOnCopied(true)
    }

    useEffect(() => {
        if (onCopied) {
            dispatch(
                showFlag({
                    success: true,
                    title: "Link copied",
                }) as any
            )
            setTimeout(() => setOnCopied(false), 1000)
        }
    }, [onCopied]);

    useEffect(() => {
        if (window.innerWidth !== wSize) {
            setSize(window?.innerWidth);
        }
        window.addEventListener("resize", updateWindowDimensions);
        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    });

    const {
        data: postData,
        isLoading: postIsLoading,
        mutate: mostMutate,
        error: postError
    } = useFetchPost(mediumUrl as string)

    const {
        data: bookmarkData,
        isLoading: bookmarkDataIsLoading,
        mutate: bookmarkMutate,
        error: bookmarkError,
    } = useFetchBookmark(user.project as string, mediumUrl as string)

    const postBookmarkData = async () => {
        setIsLoadingBookmark(true)
        const params = {
            author: postData?.author,
            title: postData?.title,
            thumbnail: postData?.thumbnail,
            summary: postData?.summary,
            content: postData?.content,
            tags: postData?.tags,
            url: paths,
        }
        await addBookmark(params)
            .then((res) => {
                setIsLoadingBookmark(false)
                if (!res.success) {
                    dispatch(
                        showFlag({
                            success: false,
                            title: "Add Failed, Please try again!",
                            message: res.message
                        }) as any
                    );
                } else {
                    dispatch(
                        showFlag({
                            success: true,
                            title: "Successfully saved",
                            message: "The bookmark has been successfully added!",
                        }) as any
                    )
                    setTimeout(() => bookmarkMutate(), 300)
                }
            })
            .catch((err) => {
                setIsLoadingBookmark(false)
                dispatch(
                    showFlag({
                        success: false,
                        title: "Add Failed, Please try again!",
                        message: err.message
                    }) as any
                );
            })
    }

    const deleteBookmarkData = async () => {
        setIsLoadingBookmark(true)
        await deleteBookmark(user.project as string, bookmarkData?.xid)
            .then((res) => {
                setIsLoadingBookmark(false)
                if (!res.success) {
                    dispatch(
                        showFlag({
                            success: false,
                            title: "Add Failed, Please try again!",
                            message: res.message
                        }) as any
                    );
                } else {
                    dispatch(
                        showFlag({
                            success: true,
                            title: "Successfully deleted",
                            message: "The bookmark has been successfully deleted!",
                        }) as any
                    )
                    setTimeout(() => bookmarkMutate(), 300)
                }
            })
            .catch((err) => {
                setIsLoadingBookmark(false)
                dispatch(
                    showFlag({
                        success: false,
                        title: "Add Failed, Please try again!",
                        message: err.message
                    }) as any
                );
            })
    }

    const navigateToLogin = () => {
        router.push("/auth?redirect=" + paths)
    }

    useEffect(() => {
        if (url == null && paths != "") {
            setMediumUrl(paths)
        }
    }, [paths]);

    useEffect(() => {
        if (postData?.content == null) {
            router.back()
            dispatch(
                showFlag({
                    success: false,
                    title: "Fetch Failed, Please try again!",
                }) as any
            );
        }
    }, [postData]);

    return (
        <FlagsProvider>
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
                                        <Grid
                                            xcss={responsiveStyles} gap="space.200" alignItems="center"
                                            templateAreas={wSize < 700 ? [
                                                "content content content",
                                                "action action action",
                                            ] : [
                                                "content content content  action action",
                                            ]}>
                                            <Box style={{gridArea: "content", marginBottom: "auto"}}>
                                                <Inline alignBlock="center" space={"space.100"}>
                                                    <Flex gap="space.200" alignItems="center">
                                                        <Avatar src={postData?.author?.avatar}/>
                                                        <Text size={"large"} weight={"bold"}>
                                                            {postData?.author?.name}
                                                        </Text>
                                                    </Flex>
                                                </Inline>
                                            </Box>
                                            <Box style={{gridArea: "action", marginBottom: "auto"}}>
                                                <Inline alignBlock="center">
                                                    <ButtonGroup label="Action">
                                                        {
                                                            wSize < 800 ?
                                                                <RWebShare
                                                                    data={{
                                                                        url: `https://medium.web.id/${paths}`,
                                                                        title: postData?.title,
                                                                        text: "shared from: https://medium.web.id/",
                                                                    } as ShareData}
                                                                    onClick={() => console.log("shared successfully!")}
                                                                >
                                                                    <Button iconBefore={(props) =>
                                                                        <ShareIcon size="small" {...props}/>}
                                                                    >
                                                                        {t("share")}
                                                                    </Button>
                                                                </RWebShare>
                                                                :
                                                                <ShareButtonWeb onCopiedURL={handleOnCopiedURL}
                                                                                shareData={{
                                                                                    url: `https://medium.web.id/${paths}`,
                                                                                    title: postData?.title,
                                                                                    text: "shared from: https://medium.web.id/",
                                                                                } as ShareData}/>
                                                        }
                                                        <Button isLoading={isLoadingBookmark}
                                                                isDisabled={isLoadingBookmark}
                                                                appearance="primary"
                                                                onClick={
                                                                    isLoggedIn ? (bookmarkData ? deleteBookmarkData : postBookmarkData) : navigateToLogin
                                                                }
                                                                iconBefore={(props) =>
                                                                    bookmarkData ?
                                                                        <CheckboxCheckedIcon size="small" {...props}/>
                                                                        :
                                                                        <StoryIcon
                                                                            size="small" {...props}/>}>{bookmarkData?.content ? t("un_bookmark") : t("bookmark")}</Button>
                                                    </ButtonGroup>
                                                </Inline>
                                            </Box>
                                        </Grid>
                                    </Box>
                                    <p dangerouslySetInnerHTML={{__html: postData?.content}}></p>
                                    <Box xcss={xcss({marginBlock: "space.200"})}>
                                        <Box xcss={cardTagsStyle}>
                                            <Flex>
                                                {
                                                    postData?.tags?.map((tag: any) => (
                                                        <SimpleTag key={tag} text={tag}/>
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
        </FlagsProvider>
    );
}


const ShareButtonWeb: FC<ContentShareButtonProps> = (props) => {
    const {onCopiedURL, shareData} = props
    const {t} = useTranslation(["common"])
    const handleCopyURL = () => {
        navigator.clipboard
            .writeText(shareData?.url as string || window?.location?.href)
            .then(() => {
                if (onCopiedURL) {
                    onCopiedURL()
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleShareWhatsapp = () => {
        window.location.href = `https://web.whatsapp.com/send?text=${shareData?.url as string || window?.location?.href}%0a${shareData?.title}%0a${shareData?.text}`
    }

    const handleShareX = () => {
        window.location.href = `https://x.com/intent/post?url=${shareData?.url as string || window?.location?.href}&text=${shareData?.title}%0a${shareData?.text}`
    }

    const handleShareFb = () => {
        window.location.href = `https://www.facebook.com/share_channel/?link=${shareData?.url as string || window?.location?.href}&app_id=966242223397117&source_surface=external_reshare&display&hashtag`
    }

    const handleShareLinkedIn = () => {
        window.location.href = `https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3D${shareData?.url as string || window?.location?.href}%26mini%3Dtrue`
    }


    return (<DropdownMenu<HTMLButtonElement>
        trigger={({triggerRef, ...props}) => (
            <Button ref={triggerRef} {...props} iconBefore={(props) =>
                <ShareIcon size="small" {...props}/>}
            >
                {t("share")}
            </Button>
        )}
        shouldRenderToParent
    >
        <DropdownItem description="Save url to clipboard" onClick={handleCopyURL}>
            Copy link
        </DropdownItem>
        <Divider/>
        <DropdownItem onClick={handleShareWhatsapp}>Share on WhatsApp</DropdownItem>
        <DropdownItem onClick={handleShareX}>Share on X</DropdownItem>
        <DropdownItem onClick={handleShareFb}>Share on Facebook</DropdownItem>
        <DropdownItem onClick={handleShareLinkedIn}>Share on Linkedin</DropdownItem>
    </DropdownMenu>);
}