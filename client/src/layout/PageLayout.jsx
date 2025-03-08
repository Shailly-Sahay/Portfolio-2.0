import { Navigation, StarsBG } from "../ui";

const PageLayout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 w-full h-screen pointer-events-none">
        <StarsBG />
      </div>
      <Navigation />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
};

export default PageLayout;
