import React from "react";
import { IconSearch } from "@tabler/icons-react";

export function NoResults() {
    return (
        <div className="py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                <IconSearch className="h-6 w-6 text-slate-400" />
            </div>
            <p className="text-lg font-medium text-white">No results found</p>
            <p className="mt-1 text-sm text-slate-400">Try searching for a different sneaker model</p>
        </div>
    );
}
