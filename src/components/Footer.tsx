import Link from "next/link";
import { footerColumns } from "@/lib/data";

interface IconProps {
  size?: number;
  className?: string;
}

function Twitter({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

function Instagram({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="px-6 md:px-12 lg:px-24 py-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Col 1: Logo column */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-serif text-xl font-bold text-background">
                M
              </span>
              <span>MakeThisProduct</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              Ideas are free. Building them is the hard part.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Cols 2-4: Link columns from footerColumns data */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {column.heading}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 MakeThisProduct. All concepts are hypothetical.
          </p>
          <p className="text-xs text-muted-foreground">
            All concepts are fictional and not for sale.
          </p>
        </div>
      </div>
    </footer>
  );
}
