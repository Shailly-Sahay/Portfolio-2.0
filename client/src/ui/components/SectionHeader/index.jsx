// // import PropTypes from "proptypes";
// import styled from "styled-components";
// // import tw from "tailwind-styled-components";

// const SectionHeader = ({ text }) => {
//   return (
//     <TagWrapper>
//       <div className="tag">
//         <span className="tag__content">{text}</span>{" "}
//       </div>
//     </TagWrapper>
//   );
// };

// const TagWrapper = styled.div`
//   margin-bottom: rem;
//   display: flex;
//   justify-content: center;
//   /* z-index: 4545454; */
//   .tag {
//     padding: 1rem 2rem;
//     border-radius: 5rem;
//     font-size: 1.6rem;
//     border: 2px solid var(--primary-light-1);
//     background-color: #6919ff24;
//     position: relative;
//     display: inline-block;

//     overflow: hidden;
//   }

//   .tag::before {
//     content: "";
//     height: 100%;
//     width: 40%;
//     background-color: #5414cc67;
//     position: absolute;
//     top: 0;
//     left: -70%;
//     transform: skew(-20deg, 0);
//     animation: tagAnimation 4s infinite;
//   }

//   .tag__content {
//     color: rgba(var(--primary-light-1), 0.8);
//     color: var(--primary-light-1);
//     font-weight: 600;
//   }

//   @keyframes tagAnimation {
//     0% {
//       left: -70%;
//     }

//     100% {
//       left: 1000%;
//     }
//   }
// `;

// export default SectionHeader;

import styled from "styled-components";
import { motion } from "framer-motion";

const SectionHeader = ({ text }) => {
  return (
    <TagWrapper>
      <TagContainer>
        <MotionBackground
          initial={{ x: "-100%" }}
          animate={{ x: "1000%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="skew-x-[-20deg]"
        />
        <span className="text-[var(--primary-light-1)] font-bold">{text}</span>
      </TagContainer>
    </TagWrapper>
  );
};

// Styled Components
const TagWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;

const TagContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 1.6rem;
  border: 2px solid var(--primary-light-1);
  background-color: #6919ff24;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const MotionBackground = styled(motion.span)`
  height: 100%;
  width: 40%;
  background-color: #5414cc67;
  position: absolute;
  top: 0;
  left: 0;
`;

export default SectionHeader;
