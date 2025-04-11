import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../components/button";

// メタデータを定義する
const meta: Meta<typeof Button> = {
    title: "COMPONENTS/Button", // ストーリーのタイトル
    component: Button, // 使用するコンポーネント
    parameters: {
        layout: "centered", // レイアウトの設定
    },
    tags: ["autodocs"], // 自動ドキュメント生成のためのタグ
    argTypes: {
        intent: {
            control: "select", // intentの選択肢を制御する
            options: ["primary", "secondary", "danger", "warning", "outline", "plain"], // 利用可能なオプション
        },
        size: {
            control: "select", // sizeの選択肢を制御する
            options: ["xs", "sm", "md", "lg", "xl"], // 利用可能なオプション
        },
        shape: {
            control: "select", // shapeの選択肢を制御する
            options: ["square", "circle"], // 利用可能なオプション
        },
    },
};

export default meta; // メタデータをエクスポート

// デフォルトのボタンストーリー
export const Default: StoryObj<typeof Button> = {
    render: (args) => <Button {...args}>Button</Button>,
};

// 各種ボタンのストーリーを定義
export const Primary: StoryObj<typeof Button> = {
    render: () => <Button intent="primary">Button</Button>,
};

export const Secondary: StoryObj<typeof Button> = {
    render: () => <Button intent="secondary">Button</Button>,
};

export const Danger: StoryObj<typeof Button> = {
    render: () => <Button intent="danger">Button</Button>,
};

export const Warning: StoryObj<typeof Button> = {
    render: () => <Button intent="warning">Button</Button>,
};

export const Outline: StoryObj<typeof Button> = {
    render: () => <Button intent="outline">Button</Button>,
};

export const Plain: StoryObj<typeof Button> = {
    render: () => <Button intent="plain">Button</Button>,
};

export const Circle: StoryObj<typeof Button> = {
    render: () => <Button shape="circle">Button</Button>,
};

export const Small: StoryObj<typeof Button> = {
    render: () => <Button size="sm">Button</Button>,
};

export const Large: StoryObj<typeof Button> = {
    render: () => <Button size="lg">Button</Button>,
};

export const WithIcon: StoryObj<typeof Button> = {
    render: () => (
        <Button>
            Button
            <ArrowRightIcon  />
        </Button>
    ),
};
