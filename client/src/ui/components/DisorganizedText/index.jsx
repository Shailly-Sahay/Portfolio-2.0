import { motion } from "framer-motion";
import PropTypes from "prop-types";

const DisorganizedText = ({ text, className, as: Tag = "h1" }) => {
  return (
    <motion.span whileHover="hover" className={className}>
      <Tag className="inline-block">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                className="inline-block"
                variants={{
                  hover: letter.trim()
                    ? {
                        x: Math.random() * 12 - 6,
                        y: Math.random() * 10 - 5,
                        rotate: Math.random() * 15 - 7.5,
                        scale: 1.2,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }
                    : {},
                }}
              >
                {letter}
              </motion.span>
            ))}
            &nbsp;
          </span>
        ))}
      </Tag>
    </motion.span>
  );
};

DisorganizedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
};

export default DisorganizedText;
