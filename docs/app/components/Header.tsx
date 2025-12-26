import { Github, Search } from "lucide-react";
import { css } from "styled-system/css";
import { flex, hstack } from "styled-system/patterns";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header
            className={css({
                position: "sticky",
                top: 0,
                zIndex: 50,
                borderBottom: "1px solid",
                borderColor: "border.default",
                bg: "bg.canvas/80",
                backdropFilter: "blur(8px)",
            })}
        >
            <div
                className={flex({
                    maxWidth: "7xl",
                    marginX: "auto",
                    paddingX: { base: "4", md: "6" },
                    height: "16",
                    alignItems: "center",
                    justifyContent: "space-between",
                })}
            >
                {/* Logo */}
                <a
                    href="/"
                    className={hstack({
                        gap: "2",
                        textDecoration: "none",
                        color: "fg.default",
                        fontWeight: "semibold",
                        fontSize: "lg",
                    })}
                >
                    <img src="/chlorophyll.svg" alt="Chlorophyll" className={css({ width: "6", height: "6" })} />
                    <span>Chlorophyll</span>
                </a>

                {/* Navigation */}
                <nav className={hstack({ gap: "1" })}>
                    <a
                        href="/docs"
                        className={css({
                            paddingX: "3",
                            paddingY: "2",
                            borderRadius: "md",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "fg.muted",
                            textDecoration: "none",
                            transition: "colors",
                            _hover: { color: "fg.default", bg: "bg.subtle" },
                        })}
                    >
                        Docs
                    </a>
                    <a
                        href="/components"
                        className={css({
                            paddingX: "3",
                            paddingY: "2",
                            borderRadius: "md",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "fg.muted",
                            textDecoration: "none",
                            transition: "colors",
                            _hover: { color: "fg.default", bg: "bg.subtle" },
                        })}
                    >
                        Components
                    </a>
                </nav>

                {/* Right Actions */}
                <div className={hstack({ gap: "1" })}>
                    {/* Search Button */}
                    <button
                        className={hstack({
                            gap: "2",
                            paddingX: "3",
                            paddingY: "1.5",
                            borderRadius: "md",
                            border: "1px solid",
                            borderColor: "border.default",
                            bg: "bg.default",
                            color: "fg.muted",
                            fontSize: "sm",
                            cursor: "pointer",
                            transition: "colors",
                            _hover: { borderColor: "border.emphasized", color: "fg.default" },
                        })}
                    >
                        <Search size={16} />
                        <span className={css({ display: { base: "none", md: "inline" } })}>Search...</span>
                        <kbd
                            className={css({
                                display: { base: "none", md: "inline-flex" },
                                alignItems: "center",
                                gap: "0.5",
                                paddingX: "1.5",
                                paddingY: "0.5",
                                borderRadius: "sm",
                                border: "1px solid",
                                borderColor: "border.default",
                                bg: "bg.subtle",
                                fontSize: "xs",
                                fontFamily: "mono",
                            })}
                        >
                            K
                        </kbd>
                    </button>

                    {/* GitHub */}
                    <a
                        href="https://github.com/morinoparty/chlorophyll"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "9",
                            height: "9",
                            borderRadius: "md",
                            color: "fg.muted",
                            transition: "colors",
                            _hover: { color: "fg.default", bg: "bg.subtle" },
                        })}
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
