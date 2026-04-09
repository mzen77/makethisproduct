import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories, concepts } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const filtered = concepts.filter((c) => c.categorySlug === slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link
            href="/categories"
            className="hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{category.name}</span>
        </div>

        {/* Category label */}
        <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary mb-2 block">
          Category
        </span>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {category.name}
            </h1>
            <p className="text-muted-foreground">{category.description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {category.conceptCount} published concept
              {category.conceptCount !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Sort dropdown (visual only) */}
          <div className="flex items-center gap-2 text-sm shrink-0">
            <span className="text-muted-foreground">Sort by:</span>
            <select className="bg-background border border-border text-sm rounded-md px-3 py-1.5 text-foreground focus:ring-primary">
              <option>Newest</option>
              <option>Trending</option>
              <option>Most Votes</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((concept) => (
            <ProductCard key={concept.slug} concept={concept} />
          ))}
        </div>

        {/* Empty state if no matching concepts in our data */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No concepts in this category yet.</p>
            <Link
              href="/categories"
              className="text-primary hover:underline mt-2 inline-block"
            >
              Browse all categories
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
