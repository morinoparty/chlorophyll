import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

export function ModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleMode = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle("dark", newIsDark);
        document.documentElement.setAttribute("data-mode", newIsDark ? "dark" : "light");
        localStorage.setItem("mode", newIsDark ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleMode}
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
            aria-label="Toggle mode"
        >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
