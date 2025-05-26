// components/ui/Input.tsx
import React from "react";

interface InputProps {
    label?: string;
    type?: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    name?: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
}

export function Input({
    label,
    type = "text",
    value,
    onChange,
    id,
    name,
    required = false,
    placeholder = "",
    className = "",
}: InputProps) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`
                h-14 w-full rounded-md border-0 bg-transparent pl-12 pr-4 text-base text-white
                placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0
                ${className}
            `}
        />
    );
}
