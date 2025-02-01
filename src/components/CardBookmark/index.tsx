import React, {FC} from "react";
import {Box, Inline, Stack, Text, xcss,} from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import {ImageContainer} from "../ContainerImage";
import {useColorMode} from "@atlaskit/app-provider";
import {cardNoShadowStyle} from "@component/Common/style-util";
import Image from "@atlaskit/image"
import {CardBookmarkProps} from "@component/CardBookmark/card-bookmark";

const CardBookmarkImage: FC<ImageProps> = ({src, name}) => {

    const colorMode = useColorMode()

    return (
        <ImageContainer>
            <Image
                id="image__card-meter"
                style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: 16 / 9,
                    objectFit: "cover",
                    objectPosition: "50% center",
                    borderRadius: 2,
                    opacity: colorMode === "light" ? 1 : 0.8,
                }}
                src={src as string}
                alt={name as string}
                width={0}
                height={0}
                sizes="100vw"
            />
        </ImageContainer>
    )
}

const CardRegion: FC<CardBookmarkProps> = (props) => {
    const {data, onItemClick} = props

    return (
        <Box id={"container__card-meter"} xcss={cardNoShadowStyle} onClick={onItemClick}>
            <Box
                xcss={xcss({
                    padding: "space.150",
                })}
            >
                <Stack space="space.200">
                    <CardBookmarkImage src={data?.thumbnail} name={data?.title} onError={() => {
                    }}/>
                    <Stack space="space.100" grow="fill">
                        <Inline alignBlock="start">
                            <Heading level="h600">{data?.title}</Heading>
                        </Inline>
                        <Text size={"small"}>
                            {data?.title}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
export default CardRegion
