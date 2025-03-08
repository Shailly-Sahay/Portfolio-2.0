import tw from "tailwind-styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SectionHeader = ({ text, customClass = "" }) => {
  return (
    <div
      className={`mb-[4rem] flex ${
        customClass ? customClass : "justify-center"
      }`}
    >
      <TagContainer>
        <MotionBackground
          initial={{ x: "-100%" }}
          animate={{ x: "1000%" }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="skew-x-[-20deg]"
        />
        <span className="text-[var(--primary-light-1)] font-bold">{text}</span>
      </TagContainer>
    </div>
  );
};

const TagContainer = tw.div`
  px-8 py-4 rounded-full body-font border-2 border-primary
  bg-[#6919ff24] relative inline-block overflow-hidden
`;

const MotionBackground = tw(
  motion.span
)`h-full w-[20%] bg-[#5414cc67] absolute top-0 left-0`;

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
