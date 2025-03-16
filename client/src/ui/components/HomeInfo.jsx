import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";
import DisorganizedText from "./DisorganizedText";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="flex flex-col gap-12">
        <div className="info-box">
          <DisorganizedText
            className="text-end text-white"
            text="Hi, I'm Shailly Sahay"
            as="h3"
          />
          <DisorganizedText
            className="text-end text-white"
            text="Full-stack developer with a focus on frontend and a growing interest in 3D web."
            as="h3"
          />

          <Link
            to="/portfolio"
            rel="noopener noreferrer"
            className="neo-brutalism-white neo-btn"
          >
            my portfolio lies here
          </Link>
        </div>

        {/* Animated Text */}
        <motion.p
          className="text-black text-center font-bold body-font"
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Scroll sideways
        </motion.p>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="Snag my resume and let's build something awesome together!"
          className="text-end text-white"
          as="h3"
        />
        <Link
          to="https://drive.google.com/file/d/1nQXbnDy5mbyFUJOn6Hl46__UDby0wJ4p/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutalism-white neo-btn"
        >
          grab it
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="My GitHub is a masterpiece—clean, creative, and full of cool projects!"
          className="text-end text-white"
          as="h3"
        />
        <Link
          to="https://github.com/Shailly-Sahay"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutalism-white neo-btn"
        >
          see for yourself
          <Github className="w-8 h-8 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="Here's my LinkedIn—where professionalism meets personality"
          className="text-end text-white"
          as="h3"
        />
        <Link
          to="https://www.linkedin.com/in/shailly-sahay/"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutalism-white neo-btn"
        >
          check it out
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};
HomeInfo.propTypes = {
  currentStage: PropTypes.number.isRequired,
};

export default HomeInfo;
