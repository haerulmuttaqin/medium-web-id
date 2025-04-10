import React from "react";
import {Box, xcss} from "@atlaskit/primitives";
import {media} from "@atlaskit/primitives/responsive";
import {useTranslation} from "next-i18next";
import {Col, Row} from "react-grid-system";
import ContainerGrid from "@components/ContainerGrid";
import {useRouter} from "next/router";

const footerNavStyles = xcss({
    msWrapMargin: undefined,
    display: "flex",
    justifyContent: "center",
    color: "color.text.subtlest",
    font: "font.body",
    paddingBlockStart: "space.300",
    paddingBlockEnd: "space.300",
    paddingInlineStart: "space.400",
    paddingInlineEnd: "space.400",
    [media.above.xxs]: {
        flexWrap: "wrap",
        gap: "space.200",
    },
});

const navLinksStyles = xcss({
    marginBlockStart: "space.200",
    marginBlockEnd: "space.200",
    marginInlineStart: "space.negative.050",
    marginInlineEnd: "space.200",
    padding: "space.0",
    gap: "space.400",
    listStyle: "none",
});

const navLinkStyles = xcss({
    textDecoration: "none",
    cursor: "pointer",
    color: "color.text.subtlest",
    ":hover": {
        color: "color.text.subtle",
        textDecoration: "underline",
    },
    ":active": {
        color: "color.text",
    },
});

const footerStyles = xcss({
    backgroundColor: "color.background.neutral",
    gridArea: "footer",
    maxHeight: "50%",
    [media.above.xs]: {
        maxHeight: "30%",
    },
});

const FooterNavigation = () => {
    const {t} = useTranslation(["common"])
    const router = useRouter()
    const navigate = (args: string, isNewTab: boolean = false) => {
        if (isNewTab) {
            window?.open(args);
        } else {
            router.push(args)
        }
    }
    return (
        <Box xcss={footerStyles}>
            <Box xcss={footerNavStyles}>
                <ContainerGrid>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h3>📖 MediumWebID</h3>
                            <p>Medium Paywall Solution! - Unlock unlimited access to Medium premium content.</p>
                            <br/>
                            <br/>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <h5>Other Tools</h5>
                            <Box as={"ul"} xcss={navLinksStyles}>
                                <Box as={"li"}>
                                    <Box as={"button"} onClick={() => navigate("https://mocknroll.me/", true)}
                                         xcss={navLinkStyles}>
                                        Mock N Roll (Mock API Generator) <b>↗</b>
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate(`/`)}
                                         xcss={navLinkStyles}>
                                        MediumWebID
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate(`https://github.com/haerulmuttaqin/medium-web-id-extension/releases`, true)}
                                         xcss={navLinkStyles}>
                                        MediumWebID Extension <b>↗</b>
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"} onClick={() => navigate("https://cctv.hae.my.id/", true)}
                                         xcss={navLinkStyles}>
                                        CCTV Indonesia <b>↗</b>
                                    </Box>
                                </Box>
                            </Box>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <h5>Sitemap</h5>
                            <Box as={"ul"} xcss={navLinksStyles}>
                                <Box as={"li"}>
                                    <Box as={"button"} onClick={() => navigate("/about")} xcss={navLinkStyles}>
                                        {t("about")}
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate(`/privacy-policy`)}
                                         xcss={navLinkStyles}>
                                        {t("privacy_policy")}
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate(`/bookmarks`)}
                                         xcss={navLinkStyles}>
                                        {t("bookmarks")}
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate("https://github.com/haerulmuttaqin/medium-web-id", true)}
                                         xcss={navLinkStyles}>
                                        Github <b>↗</b>
                                    </Box>
                                </Box>
                                <Box as={"li"}>
                                    <Box as={"button"}
                                         onClick={() => navigate("https://github.com/haerulmuttaqin/medium-web-id/issues", true)}
                                         xcss={navLinkStyles}>
                                        Report Issue <b>↗</b>
                                    </Box>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </ContainerGrid>
            </Box>
        </Box>
    )
}

export default FooterNavigation