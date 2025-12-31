import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

export function ModeToggle() {
    // hydration errorを防ぐため、マウント後にのみ状態を確定させる
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
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
            type="button"
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
            {/* SSR時は常にMoonを表示し、hydration後に正しいアイコンに切り替える */}
            {mounted ? isDark ? <Sun size={24} /> : <Moon size={24} /> : <Moon size={24} />}
        </button>
    );
}
