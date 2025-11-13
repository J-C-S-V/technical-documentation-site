import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Next.js Documentation Starter",
    template: "%s | Next.js Documentation Starter",
    absolute: "Next.js Documentation Starter",
  },
  description:
    "A starter template for technical documentation sites using Next.js and Tailwind CSS.",
};

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-foreground)]">
        <header className="site-header w-full bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/50 sticky top-0 z-40">
          <div className="container flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <span
                aria-hidden
                className="brand-badge"
                style={{ background: "linear-gradient(45deg,#2563eb,#7c3aed)" }}
              />
              <span className="font-semibold text-slate-900 dark:text-white">
                DocsKit
              </span>
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm text-slate-600 dark:text-slate-300"
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center px-3 py-1.5 bg-[color:var(--color-accent)] text-white text-sm rounded-md shadow-sm"
              >
                Get started
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow py-12">
          <div className="container">
            <div className="card">{children}</div>
          </div>
        </main>

        <footer className="w-full border-t border-slate-200/60 dark:border-slate-800/50 py-6">
          <div className="container text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} DocsKit. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
