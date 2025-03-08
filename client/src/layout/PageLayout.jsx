import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { Navigation } from "../ui";

const BackgroundWrapper = tw(motion.div)`
  fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <BackgroundWrapper
        className="bg-gradient-to-b from-black via-black to-black bg-opacity-20 bg-blend-overlay bg-[url('../assets/images/pageBg.jpg')] bg-cover bg-center"
        animate={{
          backgroundPosition: ["0% 0%", "10% 10%"],

          backgroundSize: ["150%", "150%"],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <Navigation />

      <div className="section-pd">{children}</div>
    </>
  );
};

export default PageLayout;
