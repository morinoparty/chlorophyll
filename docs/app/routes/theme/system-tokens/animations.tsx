import { createFileRoute } from "@tanstack/react-router";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseSemanticTokensByType } from "./-libs/semantic-token-parser";

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
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const durationTokens = parseSemanticTokensByType("durations");
    const easingTokens = parseSemanticTokensByType("easings");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Animations</h1>
            <p className={pageStyles.description}>
                アニメーション用セマンティックトークン。一貫したモーションデザインを実現します。
            </p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Duration Tokens</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {durationTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>durations.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>{durationDescriptions[token.name] || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Easing Tokens</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {easingTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>easings.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code style={{ fontSize: "0.7rem" }}>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>{easingDescriptions[token.name] || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
