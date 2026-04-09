"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Concept } from "@/types";

interface ProductCardProps {
  concept: Concept;
}

export default function ProductCard({ concept }: ProductCardProps) {
  return (
    <article>
      {/* Image container */}
      <Link
        href={`/concept/${concept.slug}`}
        className="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-3 block"
      >
        {concept.image ? (
          <Image
            src={concept.image}
            alt={concept.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
            No image available
          </div>
        )}

        {/* Bookmark button */}
        <button
          type="button"
          className="absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm bg-black/40 text-white hover:bg-black/60 hover:text-primary transition-all duration-200"
          aria-label="Save to favorites"
        >
          <Heart className="size-[15px]" />
        </button>
      </Link>

      {/* Category badge */}
      <p className="uppercase text-xs font-bold tracking-wide text-primary mb-1">
        {concept.category}
      </p>

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2">
        <Link
          href={`/concept/${concept.slug}`}
          className="hover:text-primary transition-colors"
        >
          {concept.title}
        </Link>
      </h3>

      {/* Vote buttons row */}
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 flex items-center justify-center gap-1"
        >
          <span>🔥</span> I&apos;d buy it
        </button>
        <button
          type="button"
          className="h-9 px-3 rounded-lg border border-border bg-background text-muted-foreground text-xs font-medium hover:bg-muted"
        >
          Not for me
        </button>
      </div>

      {/* Approval */}
      <p className="text-xs text-muted-foreground">
        {concept.approvalPercent}% approval
      </p>
    </article>
  );
}
