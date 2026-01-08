"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { sva } from "styled-system/css";

const themeSidebarStyles = sva({
    slots: [
        "root",
        "nav",
        "section",
        "sectionTitle",
        "list",
        "link",
        // Mobile-specific slots
        "mobileRoot",
        "mobileTrigger",
        "backdrop",
        "positioner",
        "content",
        "mobileHeader",
        "closeButton",
        "mobileNav",
    ],
    base: {
        root: {
            // Desktop: visible, Mobile: hidden
            display: { base: "none", lg: "block" },
            width: "64",
            flexShrink: 0,
            position: "sticky",
            top: "16",
            height: "calc(100vh - 4rem)",
            overflowY: "auto",
            paddingY: "6",
            paddingLeft: "4",
        },
        // Mobile sidebar trigger container (sticky below header, full width)
        mobileRoot: {
            display: { base: "block", lg: "none" },
            width: "full",
            position: "sticky",
            top: "16", // Header height (64px)
            zIndex: 40,
            paddingY: "2",
            paddingX: "4",
            bg: "bg.canvas/80",
            backdropFilter: "blur(8px)",
        },
        // Mobile menu button
        mobileTrigger: {
            display: "flex",
            alignItems: "center",
            gap: "2",
            paddingX: "4",
            paddingY: "2",
            borderRadius: "md",
            fontSize: "sm",
            fontWeight: "medium",
            color: "fg.default",
            cursor: "pointer",
            bg: "bg.subtle",
            border: "1px solid",
            borderColor: "border.default",
            transition: "colors",
            _hover: { bg: "bg.muted" },
        },
        // Overlay backdrop
        backdrop: {
            position: "fixed",
            inset: 0,
            zIndex: 50,
            bg: "black/50",
            opacity: 0,
            transition: "opacity 0.2s ease-out",
            _open: { opacity: 1 },
            _closed: { opacity: 0 },
        },
        // Dialog positioner
        positioner: {
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
        },
        // Drawer content
        content: {
            position: "relative",
            width: "80%",
            maxWidth: "320px",
            height: "100vh",
            bg: "colorPalette.bg",
            display: "flex",
            flexDirection: "column",
            transform: "translateX(-100%)",
            transition: "transform 0.2s ease-out",
            _open: { transform: "translateX(0)" },
            _closed: { transform: "translateX(-100%)" },
            overflowY: "auto",
        },
        // Mobile drawer header
        mobileHeader: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "4",
            paddingY: "3",
            borderBottom: "1px solid",
            borderColor: "border.default",
        },
        // Close button
        closeButton: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10",
            height: "10",
            borderRadius: "md",
            color: "fg.default",
            cursor: "pointer",
            bg: "transparent",
            border: "none",
            transition: "colors",
            _hover: { bg: "bg.subtle" },
        },
        // Mobile nav container
        mobileNav: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
            padding: "4",
        },
        nav: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
        },
        section: {
            display: "flex",
            flexDirection: "column",
        },
        sectionTitle: {
            fontSize: "xl",
            fontVariationSettings: "'wght'700",
            color: "fg.default",
        },
        list: {
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            padding: 0,
            margin: 0,
        },
        link: {
            display: "block",
            fontSize: "md",
            textDecoration: "none",
            transition: "colors",
            color: "colorPalette.fg.subtle",
        },
    },
    variants: {
        active: {
            true: {
                link: {
                    color: "accent.default",
                    fontWeight: "medium",
                    _hover: {
                        color: "accent.default",
                    },
                },
            },
            false: {
                link: {
                    color: "fg.muted",
                    fontWeight: "normal",
                    _hover: {
                        color: "fg.default",
                    },
                },
            },
        },
    },
    defaultVariants: {
        active: false,
    },
});

interface NavItem {
    title: string;
    href: string;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const navigation: NavSection[] = [
    {
        title: "Reference Token",
        items: [
            { title: "Colors", href: "/theme/reference-tokens/colors" },
            { title: "Radii", href: "/theme/reference-tokens/radii" },
            { title: "Font Weights", href: "/theme/reference-tokens/font-weights" },
            { title: "Line Heights", href: "/theme/reference-tokens/line-heights" },
            { title: "Letter Spacings", href: "/theme/reference-tokens/letter-spacings" },
            { title: "Opacity", href: "/theme/reference-tokens/opacity" },
            { title: "Durations", href: "/theme/reference-tokens/durations" },
            { title: "Easings", href: "/theme/reference-tokens/easings" },
            { title: "Aspect Ratios", href: "/theme/reference-tokens/aspect-ratios" },
            { title: "Border Widths", href: "/theme/reference-tokens/border-widths" },
        ],
    },
    {
        title: "System Token",
        items: [
            { title: "Colors", href: "/theme/system-tokens/colors" },
            { title: "Borders", href: "/theme/system-tokens/borders" },
            { title: "Typography", href: "/theme/system-tokens/typography" },
            { title: "Z-Index", href: "/theme/system-tokens/z-index" },
            { title: "Shadows", href: "/theme/system-tokens/shadows" },
            { title: "Radii", href: "/theme/system-tokens/radii" },
            { title: "Spacing", href: "/theme/system-tokens/spacing" },
            { title: "Animations", href: "/theme/system-tokens/animations" },
        ],
    },
];

// Navigation content shared between desktop and mobile
function NavigationContent({ onLinkClick }: { onLinkClick?: () => void }) {
    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;
    const styles = themeSidebarStyles();
    const activeStyles = themeSidebarStyles({ active: true });

    return (
        <>
            {navigation.map((section) => (
                <div key={section.title} className={styles.section}>
                    <h4 className={styles.sectionTitle}>{section.title}</h4>
                    <ul className={styles.list}>
                        {section.items.map((item) => {
                            const isActive = currentPath === item.href || currentPath === `${item.href}/`;
                            const linkStyles = isActive ? activeStyles : styles;
                            return (
                                <li key={item.href}>
                                    <Link to={item.href} className={linkStyles.link} onClick={onLinkClick}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </>
    );
}

export function ThemeSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const styles = themeSidebarStyles();

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={styles.root}>
                <nav className={styles.nav}>
                    <NavigationContent />
                </nav>
            </aside>

            {/* Mobile Sidebar Trigger + Drawer */}
            <div className={styles.mobileRoot}>
                <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
                    <Dialog.Trigger className={styles.mobileTrigger}>
                        <Menu size={20} />
                        <span>Menu</span>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Backdrop className={styles.backdrop} />
                        <Dialog.Positioner className={styles.positioner}>
                            <Dialog.Content className={styles.content}>
                                <div className={styles.mobileHeader}>
                                    <span style={{ fontWeight: 600 }}>Navigation</span>
                                    <Dialog.CloseTrigger className={styles.closeButton}>
                                        <X size={24} />
                                    </Dialog.CloseTrigger>
                                </div>
                                <nav className={styles.mobileNav}>
                                    <NavigationContent onLinkClick={handleLinkClick} />
                                </nav>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
            </div>
        </>
    );
}
