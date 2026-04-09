import { notFound } from "next/navigation";
import Image from "next/image";
import { Share2, Bookmark, Check } from "lucide-react";
import { concepts } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return concepts.map((concept) => ({
    slug: concept.slug,
  }));
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = concepts.find((c) => c.slug === slug);

  if (!concept) {
    notFound();
  }

  const galleryImages = (concept.galleryImages?.length ? concept.galleryImages : [concept.image]).filter(Boolean);
  const placeholderCount = Math.max(0, 3 - galleryImages.length);
  const titleWord = concept.title.split(" ").find(w => w.length > 3) ?? concept.title.split(" ")[0];
  const placeholderThumbs = Array.from({ length: placeholderCount }, (_, i) => ({
    label: `${titleWord} Detail ${i + 1}`,
    index: galleryImages.length + i,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Left column */}
          <div className="lg:w-3/5">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
              {concept.image ? (
                <Image
                  src={concept.image}
                  alt={concept.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {concept.title}
                </div>
              )}
            </div>

            {/* Thumbnail row */}
            <div className="flex gap-3 overflow-x-auto">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                    index === 0 ? "border-primary" : "border-border"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${concept.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
              {placeholderThumbs.map((ph) => (
                <button
                  key={ph.index}
                  type="button"
                  className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-border flex-shrink-0 bg-muted flex items-center justify-center"
                >
                  <span className="text-[10px] text-muted-foreground text-center px-1 leading-tight">
                    {ph.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-2/5">
            {/* Category + date row */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                {concept.category}
              </span>
              <span className="text-border">&bull;</span>
              <span className="text-xs text-muted-foreground">
                {concept.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {concept.postedDate}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight mb-3">
              {concept.title}
            </h1>

            {/* Description */}
            <p className="text-base text-muted-foreground font-serif italic leading-relaxed mb-6">
              {concept.description}
            </p>

            {/* Community Verdict */}
            <div className="border border-border rounded-xl p-6 mb-6">
              <h3 className="sr-only">Community Verdict</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-primary">
                  {concept.approvalPercent}%
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  would buy this
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Based on {concept.totalVotes.toLocaleString()} votes
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  className="flex-1 h-11 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-1"
                >
                  🔥 I&apos;d buy it
                </button>
                <button
                  type="button"
                  className="flex-1 h-11 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  Not for me
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-foreground"
              >
                <Bookmark className="h-4 w-4" />
                Saved
              </button>
            </div>

            {/* Following */}
            <div className="flex items-center gap-1.5 text-sm text-primary mt-3">
              <Check className="h-4 w-4" />
              Following this concept
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="max-w-3xl">
          {/* How it works */}
          <section>
            <h2 className="text-lg font-bold mb-3">How it works</h2>
            <p className="text-muted-foreground leading-relaxed">
              {concept.howItWorks}
            </p>
          </section>

          {/* The Problem */}
          <section className="mt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              THE PROBLEM
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {concept.theProblem}
            </p>
          </section>

          {/* The Concept */}
          <section className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              THE CONCEPT
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {concept.theConcept}
            </p>
          </section>

          {/* Technical Specs */}
          <section className="mt-8">
            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                TECHNICAL CONCEPT
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {concept.specs?.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {spec.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
