import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = ({
  text,
  href,
  newPage = false,
  customClass = "",
  children,
}) => {
  return (
    <Link
      to={href}
      className={`text-white relative body-font before:w-0 before:h-1 before:bg-radial-white before:absolute  before:left-1/2 before:top-full before:translate-x-[-50%] hover:before:w-full before:transition-all before:duration-300 ${customClass}`}
      target={newPage ? "_blank" : null}
    >
      {text} {children && children}
    </Link>
  );
};

PageLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  newPage: PropTypes.boolean,
  customClass: PropTypes.string,
  children: PropTypes.node,
};

export default PageLink;
