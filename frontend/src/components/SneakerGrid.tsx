import React from "react";
import { SneakerCard } from "./SneakerCard";

interface Sneaker {
    id: string;
    name: string;
    image: string;
    lowestPrice: number;
    store: string;
    storeUrl: string;
}

interface SneakerGridProps {
    sneakers: Sneaker[];
}

export function SneakerGrid({ sneakers }: SneakerGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sneakers.map((sneaker, index) => (
            <div
                key={sneaker.id}
                className="animate-pop-in"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <SneakerCard {...sneaker} />
            </div>
            ))}
        </div>
    );
}
