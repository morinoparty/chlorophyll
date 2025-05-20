import { expect, test } from "@playwright/test";
import { getStoryInfos } from "../vrt";

const storyInfos = getStoryInfos();
storyInfos.map(({ url, title, name }) => {
    test(`snapshot test ${title}: ${name} `, async ({ page }, testInfo) => {
        await page.goto(url, {
            waitUntil: "networkidle",
            timeout: 1000 * 10,
        });

        // スクリーンショットを取得し比較
        const screenshot = await page.screenshot({ fullPage: true });
        expect(screenshot).toMatchSnapshot();
        await page.close();

        // スクリーンショットをテスト結果に添付
        testInfo.attach(`${title}: ${name}`, {
            body: screenshot,
            contentType: "image/png",
        });
    });
});
