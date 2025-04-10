import React, {FC, Fragment, useEffect} from "react";
import {Box} from "@atlaskit/primitives";
import {Content, Main, TopNavigation,} from "@atlaskit/page-layout";
import {LandingPageLayoutProps} from "@component/Layout/layout";
import Head from "next/head";
import LandingPageNavigation from "@/pages/landing/components/Header";
import {useDispatch, useSelector} from "react-redux";
import {FlagsProvider, useFlags} from "@atlaskit/flag";
import {resetFlag, showFlag as showFlagWithResetBack} from "@store/actions/show-flag";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import {token} from "@atlaskit/tokens";
import {G400, R300} from "@atlaskit/theme/colors";
import Error from "@atlaskit/icon/glyph/error";
import {useRouter} from "next/router";

const LandingPageLayout: FC<LandingPageLayoutProps> = (
    {
        children,
        title,
        description,
    }
) => {

    const router = useRouter()
    const dispatch = useDispatch();
    const {show, title: flagTitle, message, success, goBack} = useSelector((state: any) => state.flag)
    const {showFlag} = useFlags()

    useEffect(() => {
        if (show) {
            if (success == true) {
                if (goBack == true) {
                    router.back()
                    dispatch(showFlagWithResetBack({
                        show: show,
                        title: flagTitle,
                        message: message,
                        success: success,
                        goBack: false
                    }) as any)
                } else {
                    showSuccessFlag()
                }
            } else {
                if (goBack == true) {
                    router.back()
                    dispatch(showFlagWithResetBack({
                        show: show,
                        title: flagTitle,
                        message: message,
                        success: success,
                        goBack: false
                    }) as any)
                } else {
                    showErrorFlag()
                }
            }
        }
    }, [show, message])

    const showSuccessFlag = () => {
        setTimeout(() => {
            showFlag({
                icon: (
                    <SuccessIcon
                        label="Success"
                        primaryColor={token("color.icon.success", G400)}
                    />
                ),
                title: flagTitle,
                description: message,
                isAutoDismiss: true,
            });
            dispatch(resetFlag() as any)
        }, 300)
    };

    const showErrorFlag = () => {
        setTimeout(() => {
            showFlag({
                icon: (
                    <Error
                        label="Error"
                        primaryColor={token("color.icon.danger", R300)}
                    />
                ),
                title: flagTitle,
                description: message,
                isAutoDismiss: true,
            })
            dispatch(resetFlag() as any)
        }, 300)
    }

    return (
        <ContentLayout title={title} description={description}>
            {children}
        </ContentLayout>
    );
};


const ContentLayout: FC<LandingPageLayoutProps> = (
    {
        children,
        title,
        description,
    }
) => {
    return (
        <Box id={"landing-body"}>
            <Head>
                <title>{title || "MediumWebID: Unlocking Access - Medium Paywall Solution!"}</title>
                <meta name="author" content="Haerul Muttaqin"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="title" content="MediumWebID"/>
                <meta name="url" content="https://medium.web.id"/>
                <meta name="description"
                      content="Unlock Premium Knowledge – No Paywall, No Problem."/>
                <meta name="keywords" content="Medium, Read Article Free, Free Article, Bypass Paywall"/>
                <meta name="image" content="https://medium.web.id/medium.webp"/>
                <meta property="og:title" content="MediumWebID"/>
                <meta property="og:url" content="https://medium.web.id"/>
                <meta property="og:description"
                      content="Unlock Premium Knowledge – No Paywall, No Problem."/>
                <meta property="og:keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta property="og:image" content="https://medium.web.id/medium.webp"/>
                <meta itemProp="title" content="MediumWebID"/>
                <meta itemProp="url" content="https://medium.web.id"/>
                <meta itemProp="description"
                      content="Unlock Premium Knowledge – No Paywall, No Problem."/>
                <meta itemProp="keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta itemProp="image" content="https://medium.web.id/medium.webp"/>
                <meta property="twitter:title" content="MediumWebID"/>
                <meta property="twitter:url" content="https://medium.web.id"/>
                <meta property="twitter:description"
                      content="Unlock Premium Knowledge – No Paywall, No Problem."/>
                <meta property="twitter:keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta property="twitter:image" content="https://medium.web.id/medium.webp"/>
                <meta charSet="UTF-8"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta name="theme-color" content="#1D7AFC"/>
            </Head>
            <Fragment>
                <TopNavigation isFixed={true}>
                    <LandingPageNavigation/>
                </TopNavigation>
                <Content>
                    <Main>
                        <br/>
                        <br/>
                        <br/>
                        {children}
                    </Main>
                </Content>
            </Fragment>
        </Box>
    )
}

export default LandingPageLayout
// export default Layout
