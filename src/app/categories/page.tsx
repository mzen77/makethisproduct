import Link from "next/link";
import { Check } from "lucide-react";
import { categories } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  const featured = categories.slice(0, 6);
  const remaining = categories.slice(6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <span className="text-xs font-bold uppercase tracking-wide text-primary mb-2 block">
          BROWSE
        </span>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Categories</h1>
        <p className="text-muted-foreground mb-8">
          Every concept, organized by theme. Pick a category to explore.
        </p>

        {/* Featured categories */}
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 block">
          FEATURED
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-serif text-lg">
                {category.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{category.name}</div>
                <div className="text-sm text-muted-foreground">
                  {category.conceptCount} concept{category.conceptCount !== 1 ? "s" : ""}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More categories */}
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-8 mb-4 block">
          MORE CATEGORIES
        </span>
        <div className="space-y-2">
          {remaining.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="flex items-center gap-3 py-2 text-sm hover:text-foreground transition-colors text-muted-foreground"
            >
              <Check className="h-4 w-4" />
              <span className="font-medium">{category.name}</span>
              <span className="text-muted-foreground">
                ({category.conceptCount} concept{category.conceptCount !== 1 ? "s" : ""})
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
