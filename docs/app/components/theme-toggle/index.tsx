import { TreePine, Waves } from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

type Theme = "mori" | "umi";

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("mori");

    useEffect(() => {
        const savedTheme = localStorage.getItem("color-theme") as Theme | null;
        if (savedTheme === "mori" || savedTheme === "umi") {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "mori" ? "umi" : "mori";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-color-theme", newTheme);
        localStorage.setItem("color-theme", newTheme);
    };

    return (
        <button
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
            {theme === "mori" ? <TreePine size={24} /> : <Waves size={24} />}
        </button>
    );
}
