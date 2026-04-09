import { concepts, categoryFilterOptions } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedHero from "@/components/FeaturedHero";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <FeaturedHero concept={concepts[0]} />

        {/* Section header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Latest Concepts
          </h2>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categoryFilterOptions.map((option, index) => (
              <button
                key={option}
                type="button"
                className={
                  index === 0
                    ? "px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap bg-foreground text-background shadow-sm"
                    : "px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap text-muted-foreground hover:bg-muted"
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12">
          {concepts.slice(1).map((concept) => (
            <ProductCard key={concept.slug} concept={concept} />
          ))}
        </div>

        {/* Load more */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            Load more concepts
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
