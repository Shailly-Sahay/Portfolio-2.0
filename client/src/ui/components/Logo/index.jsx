import { Link } from "react-router-dom";
import DisorganizedText from "../DisorganizedText";

const Logo = () => {
  return (
    <Link to="/">
      <DisorganizedText
        text="SS"
        customClass="text-white tracking-tighter glowing-text"
        as="h2"
      />
    </Link>
  );
};

export default Logo;
