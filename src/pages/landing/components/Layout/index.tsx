import React, {FC, Fragment} from 'react';
import {Box} from '@atlaskit/primitives';
import {Content, Main, PageLayout, TopNavigation,} from '@atlaskit/page-layout';
import {LandingPageLayoutProps} from "@component/Layout/layout";
import Head from "next/head";
import LandingPageNavigation from "@/pages/landing/components/Header";

const LandingPageLayout: FC<LandingPageLayoutProps> = (
    {
        children,
        title,
        description,
    }
) => {
    return (
        <Box id={'landing-body'}>
            <Head>
                <title>{title || "MediumWebID: Unlocking Access - Medium Paywall Solution!"}</title>
                <meta name="author" content="Haerul Muttaqin"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="title" content="MediumWebID"/>
                <meta name="url" content="https://orify.me"/>
                <meta name="description"
                      content="Streamline your development workflow! Our platform offers instant Resume  creation, real-time testing, and seamless integration"/>
                <meta name="keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta name="image" content="https://orify.me/orify.webp"/>
                <meta property="og:title" content="MediumWebID"/>
                <meta property="og:url" content="https://orify.me"/>
                <meta property="og:description"
                      content="Streamline your development workflow! Our platform offers instant Resume  creation, real-time testing, and seamless integration"/>
                <meta property="og:keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta property="og:image" content="https://orify.me/orify.webp"/>
                <meta itemProp="title" content="MediumWebID"/>
                <meta itemProp="url" content="https://orify.me"/>
                <meta itemProp="description"
                      content="Streamline your development workflow! Our platform offers instant Resume  creation, real-time testing, and seamless integration"/>
                <meta itemProp="keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta itemProp="image" content="https://orify.me/orify.webp"/>
                <meta property="twitter:title" content="MediumWebID"/>
                <meta property="twitter:url" content="https://orify.me"/>
                <meta property="twitter:description"
                      content="Streamline your development workflow! Our platform offers instant Resume  creation, real-time testing, and seamless integration"/>
                <meta property="twitter:keywords" content="Resume , API Builder FREE, Free Resume "/>
                <meta property="twitter:image" content="https://orify.me/orify.webp"/>
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
    );
};

export default LandingPageLayout
// export default Layout
