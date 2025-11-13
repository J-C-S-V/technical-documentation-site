import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const DashboardLayout = ({
  children,
  analytics,
  chat,
  video,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  chat: React.ReactNode;
  video: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      <main className="flex-grow py-12">
        <div className="container">
          <div className="card">{children}</div>
        </div>
      </main>

      <div className="container mt-6">{analytics}</div>
      <div className="container mt-4">{chat}</div>
      <div className="container mt-4">{video}</div>

      <Footer />
    </>
  );
};

export default DashboardLayout;
