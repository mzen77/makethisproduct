import Image from "next/image";
import { CheckCircle, Link2, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Section 1 — Hero / Manifesto */}
        <section className="relative border-b border-border overflow-hidden bg-muted/30 py-24 px-6 md:px-12 lg:px-24">
          <span className="text-xs font-bold uppercase tracking-wide text-primary mb-6 block">
            MANIFESTO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl font-serif italic">
            We design the future so you can decide if it&apos;s worth building.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            MakeThisProduct is a digital concept lab — a place where product
            ideas are fully designed, rendered, and tested against real demand
            before anyone builds a prototype.
          </p>
        </section>

        {/* Section 2 — How It Works */}
        <section className="py-24 bg-background px-6 md:px-12 lg:px-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                From sketch to signal in three steps.
              </p>
            </div>
            <span className="text-xs text-muted-foreground tracking-wider uppercase mt-4 sm:mt-0">
              EST. 2023 // CONCEPT LAB
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 — The Spark */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-muted relative">
                <Image
                  src="/images/about-spark-ideation.png"
                  alt="Ideation and spark phase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary mb-2 block">
                  01
                </span>
                <h3 className="text-lg font-semibold mb-2">The Spark</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We monitor emerging tech, shifting cultural habits, and
                  community threads to identify gaps in the market. Then we
                  sketch solutions that solve real pain points.
                </p>
              </div>
            </div>

            {/* Card 2 — The Blueprint */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-muted relative">
                <Image
                  src="/images/about-blueprint-render.png"
                  alt="Blueprint and render phase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary mb-2 block">
                  02
                </span>
                <h3 className="text-lg font-semibold mb-2">The Blueprint</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team of industrial designers creates full-fidelity renders
                  and specs. We treat every concept like a real product launch —
                  complete with branding, pricing, and technical detail.
                </p>
              </div>
            </div>

            {/* Card 3 — The Signal */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-muted relative">
                <Image
                  src="/images/about-signal-community.png"
                  alt="Community signal phase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary mb-2 block">
                  03
                </span>
                <h3 className="text-lg font-semibold mb-2">The Signal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We publish the concept and track the signal: votes, shares, and
                  follows. If a concept hits Critical Mass (80%+ approval), we
                  pitch it directly to manufacturing partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Team */}
        <section className="py-24 border-y border-border bg-muted/30 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — The Lab image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-foreground">
              <Image
                src="/images/team-studio-scene.png"
                alt="The Lab — studio scene"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider block mb-1">
                  The Lab
                </span>
                <h3 className="text-xl font-bold">
                  Where the future is drafted.
                </h3>
              </div>
            </div>

            {/* Right — From the Team */}
            <div>
              <h2 className="text-2xl font-bold mb-4">From the Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started MakeThisProduct because we were tired of beautiful
                product ideas that never made it past a mood board. We wanted to
                flip the script: validate demand first, then build.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team is a collective of industrial designers, engineers, and
                researchers obsessed with the &ldquo;what if.&rdquo; We
                don&apos;t just draw pretty pictures — we design for
                manufacturability, sustainability, and real utility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every vote you cast is a signal that helps shape the future of
                consumer products. Thank you for being part of the experiment.
              </p>
              <p className="font-semibold mt-4">— The MTP Team</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Our Promise */}
        <section className="py-24 bg-background px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl font-bold tracking-tight text-center mb-12 font-serif">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">Clearly Labeled</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every concept is marked as exactly that — a concept. If a real
                product exists, we link to it directly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Link2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Affiliate Links Disclosed
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use affiliate links on real alternative products to support
                our work. We always say so, clearly and upfront.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Your Vote, Your Data
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We never sell your data. Your votes exist solely to prove demand
                — and potentially get a great product made.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
