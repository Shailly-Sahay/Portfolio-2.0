import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";
import DisorganizedText from "./DisorganizedText";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="info-box">
        <DisorganizedText
          className="text-end text-white"
          text="Hi, I'm Shailly"
          as="h3"
        />
        <DisorganizedText
          className="text-end text-white"
          text="Full-stack developer with a focus on frontend and a growing interest in 3D web."
          as="h3"
        />
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="Snag my resume and let's build something awesome together!"
          className=" text-end text-white"
          as="h3"
        />
        <Link to="/projects" className="neo-brutalism-white neo-btn">
          GRAB THE RESUME
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="Led multiple projects to success over the years. Curious about the impact?"
          className=" text-center body-font "
        />

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <DisorganizedText
          text="Need a project done or looking for a dev? I'm just a few keystrokes away"
          className="body-font  text-center"
        />

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Lets talk
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
