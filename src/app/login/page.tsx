import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-sm mx-auto py-16">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Log in</h1>
          <p className="text-muted-foreground mb-8">
            Sign in to vote, save concepts, and manage your profile.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              className="w-full h-11 px-4 rounded-lg border border-border text-sm"
              placeholder="Email"
            />
            <input
              type="password"
              className="w-full h-11 px-4 rounded-lg border border-border text-sm"
              placeholder="Password"
            />
            <button
              type="button"
              className="w-full h-12 bg-primary text-primary-foreground rounded-xl text-base font-medium hover:bg-primary/90"
            >
              Log in
            </button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground text-center">
            New here?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
