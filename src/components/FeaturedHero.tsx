"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, AlertCircle } from "lucide-react";
import type { Concept } from "@/types";

interface FeaturedHeroProps {
  concept: Concept;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function FeaturedHero({ concept }: FeaturedHeroProps) {
  return (
    <section className="mb-16 md:mb-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left — image */}
        <Link
          href={`/concept/${concept.slug}`}
          className="w-full md:w-3/5 group relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-muted"
        >
          <Image
            src={concept.image}
            alt={concept.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Right — content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Breadcrumb row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide text-foreground">
              CONCEPT OF THE DAY
            </span>
            <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              PRODUCT CONCEPT
            </span>
            <span className="text-muted-foreground">&bull;</span>
            <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              HOME OFFICE
            </span>
            <span className="ml-auto flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-full text-xs font-bold">
              <Star className="size-3" fill="currentColor" stroke="none" />
              TRENDING
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-foreground mb-3">
            {concept.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed font-serif italic mb-4">
            {concept.description}
          </p>

          {/* Not for sale notice */}
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-6">
            <AlertCircle className="size-3.5" />
            <span>Not for sale (yet)</span>
          </div>

          {/* Vote section */}
          <div>
            <p className="text-sm font-medium mb-3 text-foreground">
              Would you buy this?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground rounded-xl text-base font-medium group hover:bg-primary/90 transition-colors"
              >
                <span>🔥</span> I&apos;d buy it
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 h-12 bg-muted text-muted-foreground rounded-xl text-base font-medium hover:bg-muted/80 transition-colors"
              >
                Not for me
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
            <span>{formatNumber(concept.totalVotes)} votes today</span>
            <span>{concept.approvalPercent}% said Yes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
