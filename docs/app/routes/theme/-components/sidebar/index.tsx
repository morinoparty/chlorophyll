import { Link, useRouterState } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const themeSidebarStyles = sva({
    slots: ["root", "nav", "section", "sectionTitle", "list", "link"],
    base: {
        root: {
            display: "block",
            width: "64",
            flexShrink: 0,
            position: "sticky",
            top: "16",
            height: "calc(100vh - 4rem)",
            overflowY: "auto",
            paddingY: "6",
            paddingLeft: "4",
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

export function ThemeSidebar() {
    const routerState = useRouterState();
    const currentPath = routerState.location.pathname;
    const styles = themeSidebarStyles();
    const activeStyles = themeSidebarStyles({ active: true });

    return (
        <aside className={styles.root}>
            <nav className={styles.nav}>
                {navigation.map((section) => (
                    <div key={section.title} className={styles.section}>
                        <h4 className={styles.sectionTitle}>{section.title}</h4>
                        <ul className={styles.list}>
                            {section.items.map((item) => {
                                const isActive = currentPath === item.href || currentPath === `${item.href}/`;
                                const linkStyles = isActive ? activeStyles : styles;
                                return (
                                    <li key={item.href}>
                                        <Link to={item.href} className={linkStyles.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
