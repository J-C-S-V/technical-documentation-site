export const DashboardItemStyle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const style = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px 20px",
  };
  return (
    <>
      <div style={style}>{children}</div>
    </>
  );
};
