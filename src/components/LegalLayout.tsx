import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Affiliate Disclosure", href: "/affiliate" },
];

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Legal nav */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {legalLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-muted-foreground/40">&middot;</span>
                )}
                {link.label === title ? (
                  <span className="text-xs font-bold text-primary">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {lastUpdated}
          </p>

          {/* Prose content */}
          <div className="prose prose-neutral max-w-none [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-border [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:space-y-1 [&_ul]:mb-4 [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:hover:underline">
            {children}
          </div>

          {/* Also read */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Also read:</span>
            {legalLinks
              .filter((link) => link.label !== title)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
