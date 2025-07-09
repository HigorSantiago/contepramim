import styles from "./AppButton.module.css";
import { Link } from "react-router-dom";

export default function AppButton({
    to,
    onClick,
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    fullWidht = false,
    className = "",
    ...props
}) {
    const baseClass = [
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
        fullWidht ? styles.totalWidth : '',
        className
    ].filter(Boolean).join(' ');

    if (to) {
        return (
            <Link to={to} className={baseClass} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button
            onClick={onClick}
            className={baseClass}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}