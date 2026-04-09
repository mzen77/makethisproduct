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

  const galleryImages = (
    concept.galleryImages?.length ? concept.galleryImages : [concept.image]
  ).filter(Boolean);
  const placeholderCount = Math.max(0, 3 - galleryImages.length);
  const titleWord =
    concept.title.split(" ").find((w) => w.length > 3) ??
    concept.title.split(" ")[0];
  const placeholderThumbs = Array.from(
    { length: placeholderCount },
    (_, i) => ({
      label: `${titleWord} Detail ${i + 1}`,
      index: galleryImages.length + i,
    })
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-sm">
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
                  className={`relative aspect-square w-20 rounded-lg overflow-hidden bg-muted border-2 transition-all ${
                    index === 0
                      ? "border-primary"
                      : "border-transparent hover:border-border"
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
                  className="relative aspect-square w-20 rounded-lg overflow-hidden bg-muted border-2 border-transparent hover:border-border transition-all flex items-center justify-center"
                >
                  <span className="text-[10px] text-muted-foreground text-center px-1 leading-tight">
                    {ph.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Content sections BELOW thumbnails (inside left column) */}
            <div className="space-y-3 pt-2 border-t border-border">
              <h3 className="font-bold text-lg text-foreground">How it works</h3>
              <p className="text-muted-foreground leading-relaxed">
                {concept.howItWorks}
              </p>
            </div>

            <div className="space-y-6 pt-2 border-t border-border">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  The Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.theProblem}
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  The Concept
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {concept.theConcept}
                </p>
              </div>
            </div>

            {/* Technical specs box */}
            <div className="border border-border rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                Technical Concept
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {concept.specs?.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {spec.label}
                    </div>
                    <div className="text-sm font-medium text-foreground mt-1">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column (STICKY) */}
          <div className="w-full lg:w-2/5 relative">
            <div className="sticky top-24 space-y-8">
              {/* Category + date row */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wide bg-orange-600/10 text-orange-600 px-2 py-1 rounded-full">
                  Concept
                </span>
                <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded">
                  {concept.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {concept.postedDate}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground">
                  {concept.title}
                </h1>
                <p className="text-lg text-muted-foreground font-serif italic leading-relaxed mt-3">
                  {concept.description}
                </p>
              </div>

              {/* Community Verdict box */}
              <div className="bg-background border border-border rounded-xl p-6 shadow-sm space-y-5">
                <h3 className="font-bold text-lg text-foreground">
                  Community Verdict
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">
                    {concept.approvalPercent}%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    would buy this
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on {concept.totalVotes.toLocaleString()} votes
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <span>🔥</span> I&apos;d buy it
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 h-12 border border-border rounded-lg font-medium text-muted-foreground hover:bg-muted transition-colors"
                  >
                    Not for me
                  </button>
                </div>
              </div>

              {/* Action row */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <span className="text-border">&middot;</span>
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-xs text-foreground transition-colors"
                >
                  <Bookmark className="h-4 w-4" />
                  Saved
                </button>
              </div>

              {/* Following line */}
              <div className="flex items-center gap-1.5 text-sm text-primary">
                <Check className="h-4 w-4" />
                Following this concept
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
