"use client";

import React, { useState } from "react";
import { Header } from "@components/Header";
import { SearchBar } from "@components/SearchBar";
import { LoadingIndicator } from "@components/LoadingIndicator";
import { SneakerGrid } from "@components/SneakerGrid";
import { Sneaker } from "src/interfaces/sneaker";
import { NoResults } from "@components/NoResults";
import { InitialState } from "@components/InitialState";
import { mockSneakers } from "@data/mockSneakers";


const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Sneaker[]>([]);


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        setIsLoading(true);

        setTimeout(() => {
            const filtered = mockSneakers.filter((sneaker) =>
                sneaker.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setResults(filtered);
            setIsLoading(false);
        }, 1000);
    };


    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            {/* Gradient orbs background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
                <div className="absolute top-80 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>
                <div className="absolute bottom-40 right-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl"></div>
            </div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]"></div>
            
            {/* Main content wrapper */}
            <div className="relative z-10">
                <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <Header 
                        title="SNEAKERS HUNTER" 
                        subtitle="The best place to find the best sneakers" 
                    />
                    <SearchBar 
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        isLoading={isLoading}
                        onSearch={handleSearch}
                    />

                    {/* Loading State */}
                    {isLoading && <LoadingIndicator />}

                    {/* Results Grid */}
                    {!isLoading && results.length > 0 && (
                        <SneakerGrid sneakers={results} />
                    )}

                    {/* No Results */}
                    {!isLoading && searchQuery && results.length === 0 && (
                        <NoResults />
                    )}

                    {/* Initial State */} 
                    {!isLoading && !searchQuery && results.length === 0 && (
                        <InitialState />
                    )}

                </main>
            </div>
        </div>
    );
}

export default HomePage;
