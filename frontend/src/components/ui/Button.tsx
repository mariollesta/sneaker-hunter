// components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

export function Button({
    type = "button",
    disabled = false,
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type} 
            disabled={disabled}
            className={`
                absolute right-2 top-2 h-10 px-5 text-md font-medium text-white
                bg-blue-600 rounded-lg transition-all hover:bg-blue-500
                inline-flex items-center justify-center
                disabled:opacity-50 disabled:cursor-not-allowed
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
