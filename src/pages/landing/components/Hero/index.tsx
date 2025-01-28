/** @jsxImportSource @emotion/react */

import {Box, Flex, Text, xcss} from "@atlaskit/primitives"
import LandingWrapper from "@pages/landing/components/Layout/landing-wrapper";
import FormInput from "@pages/[post]/form-input";
import {cardTagsStyle} from "@component/Common/style-util";
import {SimpleTag} from "@atlaskit/tag";
import React from "react";

const LandingPageHero = () => {
    return (
        <>
            <Box xcss={xcss({
                paddingTop: "space.1000",
                paddingBottom: "space.1000",
                backgroundSize: "cover",
                backgroundImage: 'url("./assets/images/bg-hero.svg")'
            })}>
                <LandingWrapper>
                    <Box xcss={xcss({
                        paddingTop: "space.300",
                        paddingBottom: "space.1000",
                        textAlign: "center"
                    })}>
                        <div className={"heading"}
                             style={{fontSize: "35px", fontWeight: "500", letterSpacing: "-0.03em"}}>
                            Unlocking Access: Medium Paywall Solution!
                        </div>
                        <Box xcss={xcss({paddingTop: "space.100"})}>
                            <Text size={"large"}>
                                Unlock unlimited access to Medium&apos;s premium content. Enjoy seamless reading from top
                                writers with our paywall solution.
                            </Text>
                        </Box>
                        <Box xcss={xcss({paddingTop: "space.400", textAlign: "center", marginBottom: "space.1000"})}>
                            <FormInput />
                        </Box>
                    </Box>
                </LandingWrapper>
            </Box>
        </>
    )
}

export default LandingPageHero