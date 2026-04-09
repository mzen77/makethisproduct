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
      <main className="flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-lg mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold tracking-tight font-serif italic mb-2">
            Don&apos;t Miss the Future
          </h1>
          <p className="text-muted-foreground mb-8">
            Get the best new concepts delivered to your inbox. No spam, just pure
            innovation.
          </p>

          <div className="text-left space-y-6">
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground mb-1.5 block"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground"
                placeholder="you@example.com"
              />
            </div>

            {/* Interests */}
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Interests{" "}
                <span className="text-xs text-muted-foreground">
                  (select at least one)
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm cursor-pointer hover:bg-muted transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="accent-primary"
                      defaultChecked={
                        interest === "Tech" || interest === "Home"
                      }
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Frequency
              </label>
              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted transition-colors">
                  <input
                    type="radio"
                    name="frequency"
                    defaultChecked
                    className="mt-0.5"
                  />
                  <div>
                    <div className="text-sm font-medium">Weekly Digest</div>
                    <div className="text-xs text-muted-foreground">
                      Top concepts of the week
                    </div>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted transition-colors">
                  <input
                    type="radio"
                    name="frequency"
                    className="mt-0.5"
                  />
                  <div>
                    <div className="text-sm font-medium">Instant Alerts</div>
                    <div className="text-xs text-muted-foreground">
                      As soon as a new concept drops
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="button"
              className="w-full h-12 bg-primary text-primary-foreground rounded-xl text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>

            {/* Fine print */}
            <p className="text-xs text-center text-muted-foreground mt-4">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              . Unsubscribe at any time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
