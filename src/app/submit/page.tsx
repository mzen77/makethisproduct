import Link from "next/link";
import { Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SubmitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-sm mx-auto py-16 text-center">
          <div className="mx-auto mb-6 w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold mb-2">
            Sign in to submit an idea
          </h1>
          <p className="text-muted-foreground mb-8">
            You need an account to pitch a concept. It takes 30 seconds.
          </p>
          <Link
            href="/login"
            className="block w-full h-12 bg-foreground text-background rounded-xl text-base font-medium hover:bg-foreground/90 flex items-center justify-center"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="block mt-3 text-sm text-muted-foreground hover:text-foreground"
          >
            Create account
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
