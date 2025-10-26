export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex w-full bg-red-200">Blog header</header>
      <main className="flex flex-col h-full flex-grow">{children}</main>
      <footer className="flex w-full bg-green-200">Blog footer</footer>
    </>
  );
}
