import { css, sva } from "styled-system/css";
import { parseSemanticTokensByType, type SemanticToken, type SemanticTokenType } from "./semantic-token-parser";

const gridStyles = sva({
    slots: ["grid", "card", "cardPreview", "cardInfo", "cardName", "cardValue"],
    base: {
        grid: {
            display: "grid",
            gridTemplateColumns: { base: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" },
            gap: "6",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            gap: "3",
            alignItems: "center",
        },
        cardPreview: {
            width: "20",
            height: "20",
            backgroundColor: "colorPalette.solid",
            border: "sm",
            borderColor: "border",
        },
        cardInfo: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
            alignItems: "center",
        },
        cardName: {
            fontSize: "sm",
            fontWeight: "medium",
            color: "colorPalette.fg",
        },
        cardValue: {
            fontSize: "xs",
            color: "colorPalette.fg.muted",
            fontFamily: "mono",
        },
    },
});

type PreviewStyle = "radii" | "default";

interface SemanticTokenGridProps {
    type: SemanticTokenType;
    previewStyle?: PreviewStyle;
}

export function SemanticTokenGrid({ type, previewStyle = "default" }: SemanticTokenGridProps) {
    const styles = gridStyles();
    const tokens = parseSemanticTokensByType(type);

    const getPreviewStyle = (token: SemanticToken) => {
        if (previewStyle === "radii") {
            return { borderRadius: token.cssVar };
        }
        return {};
    };

    return (
        <div className={styles.grid}>
            {tokens.map((token) => (
                <div key={token.name} className={styles.card}>
                    <div className={css(gridStyles.raw().cardPreview)} style={getPreviewStyle(token)} />
                    <div className={styles.cardInfo}>
                        <span className={styles.cardName}>{token.name}</span>
                        <span className={styles.cardValue}>{token.reference}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
