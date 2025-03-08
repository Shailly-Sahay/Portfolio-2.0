import React from "react";
import { Link } from "react-router-dom";

const PageLink = ({ text, href, dark = false }) => {
  return (
    <Link
      to={href}
      className="text-white relative body-font before:w-0 before:h-1 before:bg-radial-white before:absolute  before:left-1/2 before:top-full before:translate-x-[-50%] hover:before:w-full before:transition-all before:duration-300"
    >
      {text}
    </Link>
  );
};

export default PageLink;
