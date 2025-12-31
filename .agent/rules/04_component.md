# コンポーネントについて

## コンポーネントの命名規則

- コンポーネントの命名規則は、kebab-caseを使用してください。(例: app/components/player-car/index.tsx)

## コンポーネントの設計パターン

- Compound Component パターンに従って設計してください。
  - 参考: [Compound Component パターン](https://www.patterns.dev/react/compound-pattern/)
- Chakra UIのbase tokenおよびsemantic tokenを活用して設計してください。
  - 参考: theme/**
    - ex ) `var(--mpc-colors-color-palette-500)`
    - ex ) `var(--mpc-colors-color-palette-bg-subtle)`
- Storybookを活用して、コンポーネントの動作確認およびドキュメント化を行ってください。
  - 参考: [Storybook公式ドキュメント](https://storybook.js.org/docs/react/get-started/introduction)

## コンポーネントのディレクトリ構成

- **全体で利用するコンポーネント（グローバルコンポーネント）**は、`src/components/`ディレクトリ配下に**フラットに**配置してください。
  - サブディレクトリを作成して配置してください。(例: `src/components/player-card/index.tsx`)
- **Chakra UIのコンポーネント**は、`src/components/ui/`ディレクトリ配下に**フラットに**配置してください。
- **各ページごとに利用するコンポーネント（ページ固有のコンポーネント）**は、該当ページの近くに配置してください。
  - 配置場所: `src/routes/**/-components/`ディレクトリ配下に配置してください。
  - 例: 
    - `src/routes/aaa/bbb/ccc/-components/record-card/index.tsx`
    - `src/routes/aaa/bbb/ccc/-components/record-card/recipes.ts`
    - `src/routes/aaa/bbb/ccc/-components/record-card/index.stories.tsx`
  - グローバルで利用するもの以外は、必ず`/routes`にある各ページの付近に配置してください。
