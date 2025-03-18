"use client"
/** @jsxImportSource @emotion/react */
import React from "react";
import type {NextPage} from "next";
import dynamic from "next/dynamic";
import {FlagsProvider} from "@atlaskit/flag";
import {Box, Inline, xcss} from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import ContentWrapper from "@component/Layout/common/content-wrapper";
import {useTranslation} from "next-i18next";

const Layout = dynamic(
    () => import("@component/Layout"),
    {ssr: false}
)

const About: NextPage = () => {
    const {t} = useTranslation(["common"])

    return (
        <FlagsProvider>
            <Layout
                shouldShowBreadcrumbs={false}
                title={t("about")}
                shouldShowPageHeader={false}
            >
                <ContentWrapper>
                    <Box xcss={xcss({paddingTop: "space.400", paddingBottom: "space.400"})}>
                        <Inline spread="space-between" space="space.0">
                            <Heading level="h800" as="h2">
                                {t("about")}
                            </Heading>
                        </Inline>
                        <p>Unlock Premium Knowledge – No Paywall, No Problem.</p>
                    </Box>
                    <Box>
                        <div className="disclaimer">
                            <p><strong>Disclaimer:</strong> Medium.web.id is an independent service and is not
                                affiliated with Medium.com. We aim to provide access to paywalled content for
                                educational and informational purposes only.</p>
                        </div>
                        <p>Welcome to <strong>Medium.web.id</strong>, your gateway to accessing premium Medium articles
                            without a subscription. We understand the value of knowledge and believe that everyone
                            should have access to insightful content, regardless of paywalls.</p>

                        <h3>Who We Are</h3>
                        <p>We are a team of avid readers and tech enthusiasts who believe in the free flow of
                            information. Frustrated by the limitations of paywalls, we
                            created <strong>Medium.web.id</strong> to help users access high-quality Medium articles
                            without the need for a paid subscription.</p>

                        <h3>Our Mission</h3>
                        <p>Our mission is to make knowledge accessible to everyone. We strive to break down barriers to
                            information by providing a simple and effective way to read paywalled Medium articles for
                            free.</p>

                        <h3>How It Works</h3>
                        <ul>
                            <li><strong>Paste the URL</strong>: Simply paste the link of the Medium article you want to
                                read.
                            </li>
                            <li><strong>Bypass the Paywall</strong>: Our tool will process the link and provide you with
                                access to the full article.
                            </li>
                            <li><strong>Enjoy Reading</strong>: Read the article without any restrictions or
                                interruptions.
                            </li>
                        </ul>

                        <h3>Why Use Medium.web.id?</h3>
                        <ul>
                            <li><strong>Free Access</strong>: Read premium Medium articles without paying for a
                                subscription.
                            </li>
                            <li><strong>Easy to Use</strong>: Our tool is simple and user-friendly, requiring no
                                technical knowledge.
                            </li>
                            <li><strong>Fast and Reliable</strong>: Get instant access to articles with just a few
                                clicks.
                            </li>
                        </ul>

                        <h3>Join Our Community</h3>
                        <p>We invite you to explore <strong>Medium.web.id</strong> and experience the freedom of
                            accessing premium content. Share your feedback, suggest improvements, and help us grow!</p>
                        <a href="#" className="cta-button">Start Reading Now</a>

                        <div className="footer">
                            <p>Thank you for choosing <strong>Medium.web.id</strong> – your key to unlocking premium
                                Medium articles.</p>
                        </div>
                        <br/>
                        <br/>
                        <section id="contact">
                            <h3>Get in Touch</h3>
                            <ul>
                                <li>
                                    Email: <a
                                    href="mailto:email.haerulmuttaqin@gmail.com">email.haerulmuttaqin@gmail.com</a> / <a
                                    href="mailto:contact@hae.my.id">contact@hae.my.id</a>
                                </li>
                                <li>
                                    LinkedIn:{" "}
                                    <a href="https://id.linkedin.com/in/haerulmuttaqin" target="_blank"
                                       rel="noreferrer">
                                        Haerul Muttaqin
                                    </a>
                                </li>
                                <li>
                                    GitHub:{" "}
                                    <a href="https://github.com/haerulmuttaqin" target="_blank" rel="noreferrer">
                                        Haerul Muttaqin
                                    </a>
                                </li>
                                <li>
                                    Website:{" "}
                                    <a href="https://hae.my.id" target="_blank" rel="noreferrer">
                                        Haerul Muttaqin (https://hae.my.id)
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <br/><br/>
                    </Box>
                </ContentWrapper>
            </Layout>
        </FlagsProvider>
    );
};

export default About;