import type { Metadata } from "next";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex w-full bg-red-200">
          <nav>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/login">Login</Link>
              <Link href="/password">Password</Link>
              <Link href="/sign-up">Sign Up</Link>
              <Link href="/products">Products</Link>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col h-full flex-grow">{children}</main>
        <footer className="flex w-full bg-red-200">Footer</footer>
      </body>
    </html>
  );
}
