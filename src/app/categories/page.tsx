import Link from "next/link";
import { categories } from "@/lib/data";
import { categoryIconMap } from "@/components/category-icons";
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
          <h1 className="text-4xl font-bold tracking-tight mb-2">
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
          {featured.map((category) => {
            const IconComponent = categoryIconMap[category.slug];
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-5 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center justify-center shrink-0 text-foreground/60 group-hover:text-primary transition-colors">
                      {IconComponent ? (
                        <IconComponent size={30} />
                      ) : (
                        <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-serif">
                          {category.name.charAt(0)}
                        </span>
                      )}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-base">
                      {category.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {category.conceptCount} concept
                      {category.conceptCount !== 1 ? "s" : ""}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* More Categories section */}
        {remaining.length > 0 && (
          <>
            <h3 className="text-xs font-bold uppercase tracking-[1.2px] text-muted-foreground mt-12 mb-5">
              More Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {remaining.map((category) => {
                const IconComponent = categoryIconMap[category.slug];
                return (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center shrink-0 text-foreground/50 group-hover:text-primary transition-colors w-5 h-5">
                      {IconComponent && <IconComponent size={20} />}
                    </span>
                    <span>{category.name}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors">
                      {category.conceptCount}
                    </span>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
