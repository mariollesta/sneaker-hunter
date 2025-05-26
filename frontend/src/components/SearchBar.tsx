"use client";

import React from "react";
import { IconSearch, IconLoader } from "@tabler/icons-react";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    isLoading: boolean;
    onSearch: (e: React.FormEvent) => void;
}

export function SearchBar({
    searchQuery,
    setSearchQuery,
    isLoading,
    onSearch,
}: SearchBarProps) {
    return (
        <div className="mx-auto mb-16 max-w-2xl">
            <form onSubmit={onSearch} className="relative">
                <div className="relative rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                        <IconSearch size={20} stroke={1.5} className="text-slate-400" />
                    </div>
                    <Input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Search sneakers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <IconLoader size={16} stroke={1.5} className="animate-spin" />
                        ) : (
                            "Search"
                        )}
                    </Button>

                </div>
            </form>
        </div>
    );
}
