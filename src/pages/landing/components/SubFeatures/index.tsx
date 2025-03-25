/** @jsxImportSource @emotion/react */

import {Box, Stack, xcss, Text, Flex} from "@atlaskit/primitives"
import Heading from "@atlaskit/heading";
import ContainerGrid from "@components/ContainerGrid";
import {Col, Hidden, Row} from "react-grid-system";
import Image from "@atlaskit/image";
import LandingWrapper from "@pages/landing/components/Layout/landing-wrapper";
import Button from "@atlaskit/button/new";
import {useRouter} from "next/router";


const LandingSubFeatures = () => {
    const router = useRouter()
    return (
        <div id={"sub-features"} style={
            {
                marginTop: "-2px",
                paddingTop: "50px",
                backgroundSize: "cover",
                backgroundImage: "url('./assets/images/bg-hero-2.svg')"
            }}>
            <LandingWrapper>
                <Box xcss={xcss({
                    paddingTop: "space.300",
                    paddingBottom: "space.1000",
                    textAlign: "center"
                })}>
                    <Image src={"./assets/images/DevOpsHealth_Icon.svg"} alt={"Catalog Icon"}/>
                    <br/>
                    <div className={"heading"}
                         style={{fontSize: "31px", fontWeight: "500", letterSpacing: "-0.03em"}}>
                        Enjoy and Manage Premium Medium Articles for Free
                    </div>
                    <Box xcss={xcss({paddingTop: "space.100"})}>
                        <Text size={"large"}>
                            A free tool to access premium Medium articles, bypass paywalls, and manage your reading
                            across devices.
                        </Text>
                    </Box>
                    <br/>
                    <br/>
                    <Button onClick={() => router.push("/bookmarks")} appearance="primary">Manage Bookmark</Button>
                </Box>
            </LandingWrapper>
        </div>
    )
}

export default LandingSubFeatures