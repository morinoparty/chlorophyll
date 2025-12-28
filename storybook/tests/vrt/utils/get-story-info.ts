import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { StoriesJson, StoryInfo } from "./types";

// Storybookのストーリー情報を取得する
export function getStoryInfos(): StoryInfo[] {
    // Storybookのビルド結果からストーリー情報を取得
    const storiesJsonPath = resolve(process.cwd(), "storybook-static", "index.json");
    const stories: StoriesJson = JSON.parse(readFileSync(storiesJsonPath, "utf-8"));

    // ストーリー情報を整形して返す
    return Object.values(stories.entries)
        .filter(({ type }) => type === "story")
        .map((story) => ({
            url: `http://localhost:6006/iframe.html?id=${story.id}`,
            title: story.title,
            name: story.name,
        }));
}
