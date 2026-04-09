import { Search } from "lucide-react";
import { concepts, trendingTopics } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Search</h1>

        {/* Search input */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border bg-background text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Search concepts, categories, or tags..."
          />
          <p className="text-xs text-muted-foreground mt-2">
            Press &#x21B5; to search
          </p>
        </div>

        {/* Trending Topics */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 block">
            TRENDING TOPICS
          </span>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                className="px-3 py-1.5 text-sm font-medium rounded-full border border-border hover:bg-muted transition-colors text-foreground"
              >
                # {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Concepts */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6 block">
            POPULAR CONCEPTS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {concepts.map((concept) => (
              <ProductCard key={concept.slug} concept={concept} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
