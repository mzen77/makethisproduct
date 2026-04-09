import Link from "next/link";
import { Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SubmitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-md mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-6">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          Sign in to submit an idea
        </h1>
        <p className="text-sm text-muted-foreground max-w-xs mb-8">
          You need an account to pitch a concept. It takes 30 seconds.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center w-full h-11 px-6 bg-foreground text-background text-sm font-bold rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="block mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Create account
        </Link>
      </main>
      <Footer />
    </div>
  );
}
