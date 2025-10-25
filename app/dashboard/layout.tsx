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
      <header>Dashboard Header</header>
      <div>{children}</div>
      <div>{analytics}</div>
      <div>{chat}</div>
      <div>{video}</div>
      <footer>Dashboard Footer</footer>
    </>
  );
};

export default DashboardLayout;
