import { css } from "styled-system/css";
import { flex, hstack, stack } from "styled-system/patterns";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={css({
                borderTop: "1px solid",
                borderColor: "border.default",
                bg: "bg.default",
                marginTop: "auto",
            })}
        >
            <div
                className={flex({
                    maxWidth: "7xl",
                    marginX: "auto",
                    paddingX: { base: "4", md: "6" },
                    paddingY: "8",
                    flexDirection: { base: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { base: "start", md: "center" },
                    gap: "6",
                })}
            >
                {/* Left Section */}
                <div className={stack({ gap: "2" })}>
                    <div className={hstack({ gap: "2" })}>
                        <img src="/chlorophyll.svg" alt="Chlorophyll" className={css({ width: "5", height: "5" })} />
                        <span
                            className={css({
                                fontWeight: "semibold",
                                color: "fg.default",
                            })}
                        >
                            Chlorophyll
                        </span>
                    </div>
                    <p className={css({ fontSize: "sm", color: "fg.muted" })}>
                        A design system for Morinoparty projects.
                    </p>
                </div>

                {/* Links */}
                <div className={hstack({ gap: "6", fontSize: "sm" })}>
                    <a
                        href="/docs"
                        className={css({
                            color: "fg.muted",
                            textDecoration: "none",
                            _hover: { color: "fg.default" },
                        })}
                    >
                        Docs
                    </a>
                    <a
                        href="/components"
                        className={css({
                            color: "fg.muted",
                            textDecoration: "none",
                            _hover: { color: "fg.default" },
                        })}
                    >
                        Components
                    </a>
                    <a
                        href="https://github.com/morinoparty/chlorophyll"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css({
                            color: "fg.muted",
                            textDecoration: "none",
                            _hover: { color: "fg.default" },
                        })}
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div
                className={css({
                    maxWidth: "7xl",
                    marginX: "auto",
                    paddingX: { base: "4", md: "6" },
                    paddingY: "4",
                    borderTop: "1px solid",
                    borderColor: "border.default",
                })}
            >
                <p className={css({ fontSize: "sm", color: "fg.muted" })}>
                    &copy; {currentYear} Morinoparty. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
