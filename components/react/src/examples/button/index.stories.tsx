import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

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

const input = "Button";
// デフォルトのボタンストーリー
export const Default: StoryObj<typeof Button> = {
    render: (args) => <Button {...args}>{input}</Button>,
};

// 各種ボタンのストーリーを定義
export const Primary: StoryObj<typeof Button> = {
    render: () => <Button intent="primary">{input}</Button>,
};

export const Secondary: StoryObj<typeof Button> = {
    render: () => <Button intent="secondary">{input}</Button>,
};

export const Danger: StoryObj<typeof Button> = {
    render: () => <Button intent="danger">{input}</Button>,
};

export const Warning: StoryObj<typeof Button> = {
    render: () => <Button intent="warning">{input}</Button>,
};

export const Outline: StoryObj<typeof Button> = {
    render: () => <Button intent="outline">{input}</Button>,
};

export const Plain: StoryObj<typeof Button> = {
    render: () => <Button intent="plain">{input}</Button>,
};

export const Circle: StoryObj<typeof Button> = {
    render: () => <Button shape="circle">{input}</Button>,
};

export const Small: StoryObj<typeof Button> = {
    render: () => <Button size="sm">{input}</Button>,
};

export const Large: StoryObj<typeof Button> = {
    render: () => <Button size="lg">{input}</Button>,
};

export const WithIcon: StoryObj<typeof Button> = {
    render: () => (
        <Button>
            {input}
            <ArrowRightIcon />
        </Button>
    ),
};
