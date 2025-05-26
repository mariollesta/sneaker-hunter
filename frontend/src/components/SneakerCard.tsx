import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

interface SneakerCardProps {
    id: string;
    name: string;
    image: string;
    lowestPrice: number;
    store: string;
    storeUrl: string;
}

export function SneakerCard({ name, image, lowestPrice, store, storeUrl }: SneakerCardProps) {
    return (
        <div className="group overflow-hidden rounded-xl border border-border bg-slate-900 transition-all hover:shadow-lg">
            <div className="relative aspect-square bg-slate-800">
                <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="object-contain p-6 w-full h-full transition-all duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">{name}</h3>
                <div className="mb-4 flex items-baseline">
                    <span className="text-xl font-semibold text-card-foreground">${lowestPrice.toFixed(2)}</span>
                    <span className="ml-2 text-xs text-muted-foreground">at {store}</span>
                </div>
                <a
                    href={storeUrl}
                    className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-500"
                    >
                    Buy for ${lowestPrice.toFixed(2)}
                    <IconArrowUpRight className="ml-2 h-4 w-4" />
                </a>
            </div>
        </div>
    );
}
