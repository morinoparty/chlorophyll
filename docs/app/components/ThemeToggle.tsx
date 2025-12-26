import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle("dark", newIsDark);
        document.documentElement.setAttribute("data-theme", newIsDark ? "dark" : "light");
        localStorage.setItem("theme", newIsDark ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className={css({
                width: "9",
                height: "9",
                borderRadius: "md",
                bg: "transparent",
                border: "none",
                cursor: "pointer",
                color: "fg.muted",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "colors",
                _hover: { bg: "bg.subtle", color: "fg.default" },
            })}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
