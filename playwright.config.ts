import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests/e2e",
    /* テストファイルを並行して実行する */
    fullyParallel: true,
    /* CIでtest.onlyを残した場合、ビルドを失敗させる */
    forbidOnly: !!process.env.CI,
    /* CIでのみリトライする */
    retries: process.env.CI ? 2 : 0,
    /* CIでの並行テストをオプトアウトする */
    workers: process.env.CI ? 1 : undefined,
    /* 使用するレポーター。詳細は https://playwright.dev/docs/test-reporters を参照 */
    reporter: "html",
    /* 以下のすべてのプロジェクトに共通の設定。詳細は https://playwright.dev/docs/api/class-testoptions を参照 */
    use: {
        /* `await page.goto('/')` のようなアクションで使用するベースURL */
        // baseURL: 'http://127.0.0.1:3000',

        /* 失敗したテストをリトライする際にトレースを収集する。詳細は https://playwright.dev/docs/trace-viewer を参照 */
        trace: "on-first-retry",
    },

    /* 主要ブラウザ用のプロジェクトを設定する */
    projects: [
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },

        /* モバイルビューポートに対してテストする。 */
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 12'] },
        },
    ],

    /* テストを開始する前にローカル開発サーバーを実行する */
    webServer: {
        command: "pnpm serve",
        url: "http://localhost:6006",
        reuseExistingServer: !process.env.CI,
    },
});
