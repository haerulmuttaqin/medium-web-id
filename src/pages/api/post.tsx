import {NextResponse} from "next/server";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

// Host the tar-file yourself
// Or use https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar
const chromiumPack = "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";

export default async function handler(req: any, res: any) {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    });

    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'Referer': 'https://t.co/12038712947289341293812839321',
    });
    await page.goto(`https://freedium.cfd/${req.query.url}`, {waitUntil: "networkidle0"});
    const content = await page.evaluate(() => {
        document.querySelector("#problemModal")?.remove()
        document.querySelector("p.text-base")?.remove()
        const container = document.querySelector(".container");
        return container?.innerHTML ?? "<i>post not found</i>"
    });
    res.status(200).json({success: true, message: "Successfully", data: content})
    res.end()
};

// Uncomment if needed, only applicable if your plan allows it
// export const maxDuration = 300; // Seconds
