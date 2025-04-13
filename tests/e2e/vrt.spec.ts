import { expect, test } from "@playwright/test";
import { getStoryInfos } from "../vrt";

const storyInfos = getStoryInfos();
storyInfos.map(({ url, title, name }) => {
    test(`snapshot test ${title}: ${name} `, async ({ page }) => {
        await page.goto(url, {
            waitUntil: "networkidle",
            timeout: 1000 * 10,
        });

        // スクリーンショットを取得し比較
        expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
        await page.close();
    });
});
