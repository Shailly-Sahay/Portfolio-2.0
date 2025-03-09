import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  text,
  variant = "primary", // "primary" or "secondary"
  shape = "square", // "square" or "round"
  type = "button", // "submit", "reset", "button"
  href, // Only needed for links
  onClick,
  customClass,
}) => {
  return href ? (
    <StyledLink
      className={customClass}
      to={href}
      $variant={variant}
      $shape={shape}
      onClick={onClick}
      rel="noopener noreferrer"
    >
      {text}
    </StyledLink>
  ) : (
    <StyledButton
      className={customClass}
      type={type}
      $variant={variant}
      $shape={shape}
    >
      {text}
    </StyledButton>
  );
};

// 🎨 Styled Components
const BaseStyles = `
  display: inline-block;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  padding: 10px 24px;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
`;

const StyledButton = styled.button`
  ${BaseStyles}
  border-radius: ${({ $shape }) => ($shape === "round" ? "50px" : "0")};

  background-image: ${({ $variant }) =>
    $variant === "primary"
      ? "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)"
      : "linear-gradient(120deg, white 0%, white 50%, transparent 50%)"};
  background-size: 240%;
  color: ${({ $variant }) => ($variant === "primary" ? "white" : "#6919ff")};

  &:hover {
    background-position: 100%;
    color: ${({ $variant }) => ($variant === "primary" ? "#6919ff" : "white")};
    transform: scale(1.05);
  }
`;

const StyledLink = styled(Link)`
  ${BaseStyles}
  text-decoration: none;
  border-radius: ${({ $shape }) => ($shape === "round" ? "50px" : "0px")};

  background-image: ${({ $variant }) =>
    $variant === "primary"
      ? "linear-gradient(120deg, transparent 0%, transparent 50%, white 50%)"
      : "linear-gradient(120deg, white 0%, white 50%, transparent 50%)"};
  background-size: 220%;
  color: ${({ $variant }) => ($variant === "primary" ? "white" : "#6919ff")};

  &:hover {
    background-position: 100%;
    color: ${({ $variant }) => ($variant === "primary" ? "#6919ff" : "white")};
    transform: scale(1.05);
  }
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  shape: PropTypes.oneOf(["square", "round"]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
};

export default Button;
