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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

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
            <div className={titleStyle}></div>
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

const semanticTokens = [
    {
        name: "bg",
        tokens: ["canvas", "default", "subtle", "muted", "emphasized", "disabled"],
    },
    {
        name: "fg",
        tokens: ["default", "muted", "subtle", "disabled", "error"],
    },
    {
        name: "palette",
        tokens: ["default", "emphasized", "foreground", "text"],
    },
];

export const SemanticTokens = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
            {semanticTokens.map((v) => (
                <div key={v.name} style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
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
    );
};
