/**
 * Storybookのストーリー情報の型定義
 */
export interface StoriesJson {
    entries: {
        [key: string]: {
            id: string;
            title: string;
            name: string;
            type: string;
        };
    };
}

/**
 * ストーリー情報の型定義
 */
export interface StoryInfo {
    url: string;
    title: string;
    name: string;
}
