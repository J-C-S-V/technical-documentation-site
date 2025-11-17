import type { Metadata } from "next";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-foreground)]">
        <Header />

        <main className="flex-grow py-12">
          <div className="container">
            <div className="card">{children}</div>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
