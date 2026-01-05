import { TreePine, Waves } from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

type Theme = "mori" | "umi";

export function ColorPaletteToggle() {
    // hydration errorを防ぐため、マウント後にのみ状態を確定させる
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>("mori");

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("color-palette") as Theme | null;
        if (savedTheme === "mori" || savedTheme === "umi") {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "mori" ? "umi" : "mori";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-color-palette", newTheme);
        localStorage.setItem("color-palette", newTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={css({
                width: "6",
                height: "6",
                bg: "transparent",
                border: "none",
                cursor: "pointer",
                color: "fg.default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "colors",
                _hover: { color: "fg.muted" },
            })}
            aria-label="Toggle theme"
        >
            {/* SSR時は常にTreePineを表示し、hydration後に正しいアイコンに切り替える */}
            {mounted ? theme === "mori" ? <TreePine size={24} /> : <Waves size={24} /> : <TreePine size={24} />}
        </button>
    );
}
