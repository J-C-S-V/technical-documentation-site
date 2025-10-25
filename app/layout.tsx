import type { Metadata } from "next";
import "./globals.css";

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
              <li>Home</li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col h-full flex-grow">{children}</main>
        <footer className="flex w-full bg-red-200">Footer</footer>
      </body>
    </html>
  );
}
