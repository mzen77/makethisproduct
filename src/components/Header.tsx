"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Feed", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Search", href: "/search" },
  { label: "Subscribe", href: "/subscribe" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center justify-between h-14 px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-serif text-xl font-bold text-background">
            M
          </span>
          <span className="hidden sm:inline">MakeThisProduct</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                pathname === link.href
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden md:inline-flex text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/login"
            className="hidden sm:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Log in
          </Link>

          <Link
            href="/subscribe"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Subscribe
          </Link>

          <button
            type="button"
            className="md:hidden p-1 text-muted-foreground hover:text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-[22px] w-[22px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
