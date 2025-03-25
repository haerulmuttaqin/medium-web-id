/** @jsxImportSource @emotion/react */

import {Box, Stack, Text, Flex} from "@atlaskit/primitives"
import ContainerGrid from "@components/ContainerGrid";
import {Col, Hidden, Row} from "react-grid-system";
import Image from "@atlaskit/image";
import LandingWrapper from "@pages/landing/components/Layout/landing-wrapper";
import React from "react";
import Button from "@atlaskit/button/new";


const LandingFeatures = () => {

    const handleDownloadExtension = () => {
        window.open("https://github.com/haerulmuttaqin/medium-web-id-extension/releases", "_blank")
    }

    return (
        <div id={"features"} style={{marginTop: "-150px"}}>
            <LandingWrapper>
                <ContainerGrid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Hidden xs sm>
                                <br/><br/>
                            </Hidden>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Box paddingInlineStart={"space.100"} paddingInlineEnd={"space.300"}>
                                <br/>
                                <br/>
                                <div className={"heading"}
                                     style={{fontSize: "28px", fontWeight: "500", letterSpacing: "-0.03em"}}>
                                    Unlocking Access: Medium Paywall Solution!
                                </div>
                                <br/>
                                <Stack space="space.100" grow="fill">
                                    <Text size={"large"}>
                                        Simply Replace the Medium Article&apos;s Domain (TLD) with <code
                                        style={{backgroundColor: "var(--backgroud-code)"}}><strong>medium.web.id</strong></code> or
                                        full domain if article with custom domain, and got the magic!
                                    </Text>
                                </Stack>
                                <br/>
                                ...........
                                <br/>
                                <br/>
                                <br/>
                                <div className={"heading"}
                                     style={{fontSize: "22px", fontWeight: "400", letterSpacing: "-0.03em"}}>
                                    Available for Browser Extensions
                                </div>
                                <br/>
                                <Flex gap="space.200" alignItems="center">
                                    <Image
                                        src={"/assets/images/chrome.png"}
                                        alt={"chrome"}
                                        height={35}
                                        width={35}
                                    />
                                    <Image
                                        src={"/assets/images/firefox.png"}
                                        alt={"firefox"}
                                        height={35}
                                        width={35}
                                    />
                                    <Image
                                        src={"/assets/images/edge.png"}
                                        alt={"edge"}
                                        height={35}
                                        width={35}
                                    />
                                    <Button onClick={handleDownloadExtension} appearance="primary">Download
                                        Extension</Button>
                                </Flex>
                                <br/>
                                <Stack space="space.100" grow="fill">
                                    <Text size={"large"}>
                                        See how install the extension <a
                                        href={"https://github.com/haerulmuttaqin/medium-web-id-extension?tab=readme-ov-file#-installation-via-github-releases"}
                                        about={"_blank"}>here</a>, and do not forget to give a star, thanks!
                                    </Text>
                                </Stack>
                            </Box>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <Image src={"./assets/images/create-endpoint.png"} alt={"Custom Endpoint"}/>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col sm={12} lg={12}>*/}
                    {/*        <Hidden xs sm>*/}
                    {/*            <Box paddingBlock={"space.600"}></Box>*/}
                    {/*        </Hidden>*/}
                    {/*    </Col>*/}
                    {/*    <Col sm={12} md={8} lg={8}>*/}
                    {/*        <Hidden xs sm>*/}
                    {/*            <Image src={"./assets/images/create-project.png"} alt={"Custom Endpoint"}/>*/}
                    {/*        </Hidden>*/}
                    {/*    </Col>*/}
                    {/*    <Col sm={12} md={4} lg={4}>*/}
                    {/*        <Box paddingInlineStart={"space.100"} paddingInlineEnd={"space.300"}>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*            <Heading level={"h800"}>*/}
                    {/*                Manage Unlimited Project*/}
                    {/*            </Heading>*/}
                    {/*            <br/>*/}
                    {/*            <Stack space="space.100" grow="fill">*/}
                    {/*                <Text size={"large"}>*/}
                    {/*                    Effortlessly manage unlimited bookmarks with precision and ease. Our intuitive*/}
                    {/*                    platform enables seamless task delegation, real-time collaboration, and in-depth*/}
                    {/*                    progress tracking, ensuring unparalleled productivity and success.*/}
                    {/*                </Text>*/}
                    {/*            </Stack>*/}
                    {/*            <br/>*/}
                    {/*            <br/>*/}
                    {/*        </Box>*/}
                    {/*    </Col>*/}
                    {/*    <Col sm={12} md={8} lg={8}>*/}
                    {/*        <Hidden md lg xl xxl xxxl>*/}
                    {/*            <Image src={"./assets/images/create-project.png"} alt={"Custom Endpoint"}/>*/}
                    {/*        </Hidden>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </ContainerGrid>
            </LandingWrapper>
            <div className={"gradient-bottom"}></div>
        </div>
    )
}

export default LandingFeatures