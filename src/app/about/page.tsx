import Image from "next/image";
import { CheckCircle, Link2, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Section 1: Manifesto Hero */}
        <section className="relative border-b border-border overflow-hidden bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 py-20 md:py-32 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-[1.2px] mb-6">
              Manifesto
            </span>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "normal" }}
            >
              We design the future{" "}
              <br className="hidden md:block" />
              so you can decide if it&apos;s worth building.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MakeThisProduct is a digital concept lab. We visualize products
              that solve real problems, then let the internet vote on whether
              they should exist. Every concept is clearly labeled — just honest
              validation.
            </p>
          </div>
        </section>

        {/* Section 2: How It Works */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            {/* Header row with bottom border */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-border pb-8">
              <div>
                <h2
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  How It Works
                </h2>
                <p className="text-muted-foreground">
                  From sketch to signal in three steps.
                </p>
              </div>
              <div className="hidden md:block text-sm font-mono text-muted-foreground">
                EST. 2023 // CONCEPT LAB
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="group">
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-lg relative border border-border">
                  <Image
                    src="/images/about-spark-ideation.png"
                    alt="Design studio desk with sketches and coffee"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/50 rounded-full px-2 py-0.5">
                    01
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Spark
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We monitor emerging tech, shifting cultural habits, and
                  community threads to identify gaps in the market. Then we
                  sketch solutions that solve real pain points.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group">
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-lg relative border border-border">
                  <Image
                    src="/images/about-blueprint-render.png"
                    alt="Designer working on 3D product render"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/50 rounded-full px-2 py-0.5">
                    02
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Blueprint
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of industrial designers creates full-fidelity renders
                  and specs. We treat every concept like a real product launch —
                  complete with branding, pricing, and technical detail.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group">
                <div className="aspect-[4/3] bg-muted mb-6 overflow-hidden rounded-lg relative border border-border">
                  <Image
                    src="/images/about-signal-community.png"
                    alt="Community votes forming an upward signal"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/50 rounded-full px-2 py-0.5">
                    03
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  The Signal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We publish the concept and track the signal: votes, shares, and
                  follows. If a concept hits Critical Mass (80%+ approval), we
                  pitch it directly to manufacturing partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Team (The Lab + From the Team) */}
        <section className="py-24 border-y border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Lab Image */}
              <div className="relative h-64 md:h-auto bg-neutral-900 min-h-[320px]">
                <Image
                  src="/images/team-studio-scene.png"
                  alt="Design team at work"
                  fill
                  className="object-cover opacity-75 hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1">
                    The Lab
                  </p>
                  <p className="text-xl md:text-2xl font-bold">
                    Where the future is drafted.
                  </p>
                </div>
              </div>

              {/* Right: Team Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-6">From the Team</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started MakeThisProduct because we were tired of beautiful
                    product ideas that never made it past a mood board. We wanted
                    to flip the script: validate demand first, then build.
                  </p>
                  <p>
                    Our team is a collective of industrial designers, engineers,
                    and researchers obsessed with the &ldquo;what if.&rdquo; We
                    don&apos;t just draw pretty pictures — we design for
                    manufacturability, sustainability, and real utility.
                  </p>
                  <p>
                    Every vote you cast is a signal that helps shape the future
                    of consumer products. Thank you for being part of the
                    experiment.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
                  {/* Avatar images */}
                  <div className="flex -space-x-2">
                    <Image
                      src="/images/team-avatar-1.png"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-background"
                    />
                    <Image
                      src="/images/team-avatar-2.png"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-background"
                    />
                    <Image
                      src="/images/team-avatar-3.png"
                      alt="Team member"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-background"
                    />
                  </div>
                  <span className="font-medium text-foreground">
                    — The MTP Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Promise */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2
              className="text-3xl font-bold mb-12"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Promise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 rounded-xl border border-border bg-muted/10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <CheckCircle size={20} />
                </div>
                <h3 className="font-semibold mb-2">Clearly Labeled</h3>
                <p className="text-sm text-muted-foreground">
                  Every concept is marked as exactly that — a concept. If a real
                  product exists, we link to it directly.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-xl border border-border bg-muted/10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Link2 size={20} />
                </div>
                <h3 className="font-semibold mb-2">
                  Affiliate Links Disclosed
                </h3>
                <p className="text-sm text-muted-foreground">
                  We use affiliate links on real alternative products to support
                  our work. We always say so, clearly and upfront.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-xl border border-border bg-muted/10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold mb-2">Your Vote, Your Data</h3>
                <p className="text-sm text-muted-foreground">
                  We never sell your data. Your votes exist solely to prove
                  demand — and potentially get a great product made.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
