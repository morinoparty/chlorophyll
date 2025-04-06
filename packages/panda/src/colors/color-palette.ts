import { defineTokens } from "@pandacss/dev";

// 基本的な色パレットを定義
export const colors = defineTokens.colors({
    // 緑系統のカラーパレット
    green: {
        50: { value: "#EFFFEF" },
        100: { value: "#DEFFDD" },
        200: { value: "#BAFCBA" },
        300: { value: "#94F894" },
        400: { value: "#6EF16E" },
        500: { value: "#46E346" },
        600: { value: "#29B829" },
        700: { value: "#208A20" },
        800: { value: "#196019" },
        900: { value: "#133913" },
    },
    // 青系統のカラーパレット
    blue: {
        50: { value: "#EFF6FF" },
        100: { value: "#DBEAFE" },
        200: { value: "#BFDBFE" },
        300: { value: "#93C5FD" },
        400: { value: "#60A5FA" },
        500: { value: "#3B82F6" },
        600: { value: "#2563EB" },
        700: { value: "#1D4ED8" },
        800: { value: "#1E40AF" },
        900: { value: "#1E3A8A" },
    },
    // グレー系統のカラーパレット
    gray: {
        50: { value: "#F9FAFB" },
        100: { value: "#F3F4F6" },
        200: { value: "#E5E7EB" },
        300: { value: "#D1D5DB" },
        400: { value: "#9CA3AF" },
        500: { value: "#6B7280" },
        600: { value: "#4B5563" },
        700: { value: "#374151" },
        800: { value: "#1F2937" },
        900: { value: "#111827" },
    },
    // 赤系統のカラーパレット
    red: {
        50: { value: "#FEF2F2" },
        100: { value: "#FEE2E2" },
        200: { value: "#FECACA" },
        300: { value: "#FCA5A5" },
        400: { value: "#F87171" },
        500: { value: "#EF4444" },
        600: { value: "#DC2626" },
        700: { value: "#B91C1C" },
        800: { value: "#991B1B" },
        900: { value: "#7F1D1D" },
    },
    // 黄系統のカラーパレット
    yellow: {
        50: { value: "#FEFCE8" },
        100: { value: "#FEF9C3" },
        200: { value: "#FEF08A" },
        300: { value: "#FDE047" },
        400: { value: "#FACC15" },
        500: { value: "#EAB308" },
        600: { value: "#CA8A04" },
        700: { value: "#A16207" },
        800: { value: "#854D0E" },
        900: { value: "#713F12" },
    },
    // 基本色
    white: { value: "#FFFFFF" },
    black: { value: "#000000" },
});

export default colors;
