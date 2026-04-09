import { Search } from "lucide-react";
import { concepts, trendingTopics } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  const conceptsWithImages = concepts.filter((c) => c.image);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          Search
        </h1>

        {/* Search input container (visual only) */}
        <div className="flex items-center gap-3 h-14 border border-border rounded-xl bg-background px-4 shadow-sm mb-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            placeholder="Search concepts, categories, or tags..."
          />
        </div>
        <p className="text-xs text-muted-foreground pl-1 mb-10">
          Press &#x21B5; to search
        </p>

        {/* Trending Topics */}
        <h3 className="text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground mb-4">
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2 mb-12">
          {trendingTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 rounded-full transition-colors"
            >
              #{topic}
            </button>
          ))}
        </div>

        {/* Popular Concepts */}
        <h3 className="text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground mb-6">
          Popular Concepts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {conceptsWithImages.map((concept) => (
            <ProductCard key={concept.slug} concept={concept} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
