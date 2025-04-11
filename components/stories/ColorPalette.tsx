import { css } from "@ss/css";

const variable = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

// 共通のスタイルを定義するためのオブジェクト
const commonStyle = css({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
});

const titleStyle = css({
    margin: "4px",
    padding: "4px",
    flex: "1",
    minWidth: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const getContrastColor = (color: string) => {
    // CSS変数の値を取得
    const element = document.createElement("div");
    element.style.backgroundColor = color;
    document.body.appendChild(element);
    const computedColor = window.getComputedStyle(element).backgroundColor;
    document.body.removeChild(element);

    // RGB値を取得
    const rgb = computedColor.match(/\d+/g)?.map(Number);
    if (!rgb) return "#000000";

    const [r, g, b] = rgb.map((v) => v / 255);

    // 最大値と最小値を取得
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // 明度を計算
    const lightness = (max + min) / 2;
    return lightness > 0.5 ? "#000000" : "#ffffff";
};

export const ColorGrid = ({
    colors,
}: {
    colors: string[];
}) => {
    return (
        <div>
            <Variable variable={variable} />
            {colors.map((color) => (
                <ColorPalette key={color} color={color} />
            ))}
        </div>
    );
};

export const ColorPalette = ({
    color,
}: {
    color: string;
}) => {
    return (
        <div className={commonStyle}>
            <div className={titleStyle}>{color}</div>
            {variable.map((varValue) => (
                <div
                    style={{
                        backgroundColor: `var(--colors-${color}-${varValue})`,
                        margin: "8px 0",
                        padding: "20px",
                        flex: "1",
                    }}
                    key={varValue}
                />
            ))}
        </div>
    );
};

const Variable = ({
    variable,
}: {
    variable: number[];
}) => {
    return (
        <div className={commonStyle}>
            <div className={titleStyle}>Variable</div>
            {variable.map((varValue) => (
                <div
                    style={{
                        margin: "2px",
                        padding: "10px 20px",
                        flex: "1",
                        display: "flex", // 横方向に配置するためにflexを追加
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    key={varValue}
                >
                    {varValue}
                </div>
            ))}
        </div>
    );
};

const semanticTokens = {
    accent: [
        {
            name: "fg",
            tokens: ["default", "muted", "subtle", "disabled", "error"],
        },
        {
            name: "palette",
            tokens: ["default", "emphasized", "fg", "text"],
        },
    ],
    base: [
        {
            name: "bg",
            tokens: ["canvas", "default", "subtle", "muted", "emphasized", "disabled"],
        },
        {
            name: "border",
            tokens: ["default", "muted", "subtle", "disabled", "outline", "error"],
        },
    ],
};

export const SemanticTokenPalette = () => {
    return (
        <div>
            {Object.entries(semanticTokens).map(([key, semanticToken]) => (
                <div key={key}>
                    <div
                        className={css({
                            fontSize: "1.5rem",
                            margin: "16px 0",
                        })}
                    >
                        {key}
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                            gap: "1rem",
                        }}
                    >
                        {semanticToken.map((v) => (
                            <div
                                key={v.name}
                                style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}
                            >
                                <div style={{ padding: "0.5rem 1rem", fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                    {v.name}
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                                    {v.tokens.map((token) => (
                                        <div
                                            style={{
                                                backgroundColor: `var(--colors-${v.name}-${token})`,
                                                padding: "1rem",
                                                display: "flex",
                                                justifyContent: "center",
                                                color: getContrastColor(`var(--colors-${v.name}-${token})`),
                                            }}
                                            key={token}
                                        >
                                            {token}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
