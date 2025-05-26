import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-12 text-center">
        <h1 className="mb-2 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {title}
        </h1>
        <p className="text-sm text-slate-400">{subtitle}</p>
        </div>
    );
};
