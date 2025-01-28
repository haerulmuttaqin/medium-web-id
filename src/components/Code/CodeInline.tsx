import Code from "@atlaskit/code/inline";
import React from "react";

export default function CodeInline({children}: { children: any }) {
    return <Code onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{children}</Code>
}