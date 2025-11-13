import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-grow py-12">
        <div className="container">
          <div className="card">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
