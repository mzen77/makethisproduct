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
        {/* Page header with border-b */}
        <div className="mb-12 border-b border-border pb-8">
          <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary mb-3 block">
            Browse
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontSize: 36 }}>
            Categories
          </h1>
          <p className="text-lg text-muted-foreground">
            Every concept, organized by theme. Pick a category to explore.
          </p>
        </div>

        {/* Featured section */}
        <h3 className="text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground mb-5">
          Featured
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-5 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-serif">
                    {category.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-base">{category.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {category.conceptCount} concept{category.conceptCount !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Categories section */}
        <h3 className="text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground mt-12 mb-5">
          More Categories
        </h3>
        <div className="space-y-2">
          {remaining.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
