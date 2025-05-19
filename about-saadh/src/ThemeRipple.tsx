import React from "react";

interface ThemeRippleProps {
    x: number;
    y: number;
    onAnimationEnd: () => void;
    theme: "dark" | "light";
}

const ThemeRipple: React.FC<ThemeRippleProps> = ({ x, y, onAnimationEnd, theme }) => {
    return (
        <div
            className={`theme-ripple theme-ripple--${theme}`}
            style={{
                left: x,
                top: y,
            }}
            onAnimationEnd={onAnimationEnd}
        />
    );
};

export default ThemeRipple;