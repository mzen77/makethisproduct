import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Log in
          </h1>
          <p className="text-muted-foreground mb-8">
            Sign in to vote, save concepts, and manage your profile.
          </p>
          <div className="space-y-4">
            <input
              type="email"
              className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm"
              placeholder="Password"
            />
            <button
              type="button"
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Log in
            </button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            New here?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
