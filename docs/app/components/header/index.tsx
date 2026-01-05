import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { sva } from "styled-system/css";
import { ColorPaletteToggle } from "../color-palette-toggle";
import { MobileNav } from "../mobile-nav";
import { ThemeToggle } from "../theme-toggle";

const headerStyles = sva({
    slots: ["root", "container", "logo", "logoIcon", "logoText", "rightSection", "nav", "navLink", "icons", "iconLink"],
    base: {
        root: {
            position: "sticky",
            top: 0,
            zIndex: 50,
            bg: "bg.canvas/80",
            backdropFilter: "blur(8px)",
        },
        container: {
            display: "flex",
            maxWidth: "7xl",
            marginX: "auto",
            paddingX: { base: "4" },
            height: "16",
            alignItems: "center",
            justifyContent: "space-between",
        },
        logo: {
            display: "flex",
            alignItems: "center",
            gap: "4",
            textDecoration: "none",
            color: "fg.default",
        },
        logoIcon: {
            width: "10",
            height: "37px",
        },
        logoText: {
            fontWeight: "bold",
            fontSize: "xl",
        },
        rightSection: {
            display: "flex",
            alignItems: "center",
            gap: { base: "16px", md: "64px" },
        },
        nav: {
            display: { base: "none", md: "flex" },
            alignItems: "center",
            gap: "32px",
        },
        navLink: {
            fontSize: "md",
            fontWeight: "medium",
            color: "fg.default",
            textDecoration: "none",
            transition: "colors",
            _hover: { color: "fg.muted" },
        },
        icons: {
            display: { base: "none", md: "flex" },
            alignItems: "center",
            gap: "16px",
        },
        iconLink: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "6",
            height: "6",
            color: "fg.default",
            transition: "colors",
            _hover: { color: "fg.muted" },
        },
    },
});

export function Header() {
    const styles = headerStyles();

    return (
        <header className={styles.root}>
            <div className={styles.container}>
                {/* Logo */}
                <Link to="/" className={styles.logo}>
                    <img src="/chlorophyll.svg" alt="Chlorophyll" className={styles.logoIcon} />
                    <span className={styles.logoText}>Chlorophyll</span>
                </Link>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    {/* Navigation - hidden on mobile */}
                    <nav className={styles.nav}>
                        <Link to="/docs" className={styles.navLink}>
                            Docs
                        </Link>
                        <Link to="/components" className={styles.navLink}>
                            Components
                        </Link>
                        <Link to="/theme" className={styles.navLink}>
                            Theme
                        </Link>
                    </nav>

                    {/* Icons - hidden on mobile */}
                    <div className={styles.icons}>
                        <a
                            href="https://github.com/morinoparty/chlorophyll"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <ThemeToggle />
                        <ColorPaletteToggle />
                    </div>

                    {/* Mobile Navigation - visible only on mobile */}
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
