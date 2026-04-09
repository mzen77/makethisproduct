import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const interests = [
  "Tech",
  "Home",
  "Lifestyle",
  "Travel",
  "Productivity",
  "Mobility",
  "Furniture",
];

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-16">
        {/* Centered header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Don&apos;t Miss the Future
          </h1>
          <p className="text-lg text-muted-foreground">
            Get the best new concepts delivered to your inbox. No spam, just pure innovation.
          </p>
        </div>

        {/* Form (visual only) */}
        <div className="space-y-8">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-border bg-background shadow-sm h-11 px-3 text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <label className="text-sm font-medium text-foreground">Interests</label>
              <span className="text-xs text-muted-foreground">(select at least one)</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border text-sm cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5"
                >
                  <input
                    type="checkbox"
                    className="accent-primary w-4 h-4"
                    defaultChecked={interest === "Tech" || interest === "Home"}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Frequency
            </label>
            <div className="space-y-2">
              <label className="flex items-start gap-3 p-4 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5">
                <input
                  type="radio"
                  name="frequency"
                  defaultChecked
                  className="accent-primary mt-1"
                />
                <div>
                  <div className="text-sm font-medium">Weekly Digest</div>
                  <div className="text-xs text-muted-foreground">Top concepts of the week</div>
                </div>
              </label>
              <label className="flex items-start gap-3 p-4 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary/40 has-[:checked]:bg-primary/5">
                <input
                  type="radio"
                  name="frequency"
                  className="accent-primary mt-1"
                />
                <div>
                  <div className="text-sm font-medium">Instant Alerts</div>
                  <div className="text-xs text-muted-foreground">As soon as a new concept drops</div>
                </div>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            By subscribing, you agree to our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            . Unsubscribe at any time.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
