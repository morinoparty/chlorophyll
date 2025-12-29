import { sva } from "styled-system/css";

const semanticColorDisplayStyles = sva({
    slots: ["root", "swatchContainer", "swatch", "info", "name", "values", "valueRow", "label", "value"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "2",
            width: "full",
        },
        swatchContainer: {
            display: "flex",
            height: "20",
            width: "full",
            borderRadius: "lg",
            overflow: "hidden",
        },
        swatch: {
            flex: 1,
            height: "full",
        },
        info: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
            width: "full",
        },
        name: {
            fontSize: "sm",
            fontWeight: "medium",
            color: "mori.fg",
        },
        values: {
            display: "flex",
            flexDirection: "column",
            gap: "0.5",
        },
        valueRow: {
            display: "flex",
            alignItems: "center",
            gap: "2",
        },
        label: {
            fontSize: "xs",
            color: "mori.fg.muted",
            width: "10",
        },
        value: {
            fontSize: "xs",
            color: "mori.fg.subtle",
            fontFamily: "mono",
        },
    },
});

interface SemanticColorDisplayProps {
    tokenKey: string;
    lightValue: string;
    darkValue: string;
}

function tokenToCssVar(tokenKey: string): string {
    const cssVarName = tokenKey.replace(/\./g, "-");
    return `var(--ma-colors-${cssVarName})`;
}

export function SemanticColorDisplay({ tokenKey, lightValue, darkValue }: SemanticColorDisplayProps) {
    const styles = semanticColorDisplayStyles();
    const cssVar = tokenToCssVar(tokenKey);

    return (
        <div className={styles.root}>
            <div className={styles.swatchContainer}>
                <div className={styles.swatch} style={{ backgroundColor: cssVar }} />
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{tokenKey}</p>
                <div className={styles.values}>
                    <div className={styles.valueRow}>
                        <span className={styles.label}>light</span>
                        <span className={styles.value}>{lightValue}</span>
                    </div>
                    <div className={styles.valueRow}>
                        <span className={styles.label}>dark</span>
                        <span className={styles.value}>{darkValue}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
