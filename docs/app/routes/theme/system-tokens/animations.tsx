import { createFileRoute } from "@tanstack/react-router";
import { parseSemanticTokensByType } from "./-libs/semantic-token-parser";
import { tablePageStyles } from "./-style/page-styles";

// 説明マッピング
const durationDescriptions: Record<string, string> = {
    "transition.fast": "マイクロインタラクション（ホバー、フォーカス）",
    "transition.normal": "標準トランジション",
    "transition.slow": "強調アニメーション",
};

const easingDescriptions: Record<string, string> = {
    transition: "デフォルトイージング",
    "transition.enter": "要素の入場アニメーション",
    "transition.exit": "要素の退場アニメーション",
    "transition.emphasized": "強調されたモーション",
};

export const Route = createFileRoute("/theme/system-tokens/animations")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = tablePageStyles();
    const durationTokens = parseSemanticTokensByType("durations");
    const easingTokens = parseSemanticTokensByType("easings");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Animations</h1>
            <p className={styles.description}>
                アニメーション用セマンティックトークン。一貫したモーションデザインを実現します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Duration Tokens</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {durationTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>durations.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>{durationDescriptions[token.name] || ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Easing Tokens</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {easingTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>easings.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code style={{ fontSize: "0.7rem" }}>{token.value}</code>
                                </td>
                                <td className={styles.td}>{easingDescriptions[token.name] || ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
