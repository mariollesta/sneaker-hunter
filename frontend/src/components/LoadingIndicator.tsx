// components/LoadingIndicator.tsx
import React from "react";

interface LoadingIndicatorProps {
    message?: string;
}

export function LoadingIndicator({ message = "Searching for the best prices..." }: LoadingIndicatorProps) {
    return (
        <div className="flex justify-center py-16">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="h-12 w-12 rounded-full border-2 border-slate-700 opacity-20"></div>
                    <div className="absolute left-0 top-0 h-12 w-12 animate-spin rounded-full border-2 border-transparent border-t-blue-500"></div>
                </div>
                <p className="mt-4 text-sm text-slate-400">{message}</p>
            </div>
        </div>
    );
}
