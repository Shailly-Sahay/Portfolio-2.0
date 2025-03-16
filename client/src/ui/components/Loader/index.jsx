import { Html } from "@react-three/drei";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Loader = () => {
  return (
    <Html>
      <StyledWrapper>
        <CardWrapper>
          <LoaderWrapper>
            <p>loading</p>
            <Words className="words">
              <Word className="word">Scene</Word>
              <Word className="word">Stage</Word>
              <Word className="word">Beauty</Word>
              <Word className="word">World</Word>
              <Word className="word">Island</Word>
            </Words>
          </LoaderWrapper>
        </CardWrapper>
      </StyledWrapper>
    </Html>
  );
};

const LoaderWrapper = tw.div`text-[#7C7C7C] text-[25px] h-[40px] flex`;
const CardWrapper = tw.div`translate-x-[-50%] translate-y-[-50%] `;
const Words = tw.div`overflow-hidden relative`;
const Word = tw.span`block h-full pl-6 glowing-text text-white font-bold`;

const StyledWrapper = styled.div`
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% {
      -webkit-transform: translateY(-102%);
      transform: translateY(-102%);
    }

    25% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }

    35% {
      -webkit-transform: translateY(-202%);
      transform: translateY(-202%);
    }

    50% {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
    }

    60% {
      -webkit-transform: translateY(-302%);
      transform: translateY(-302%);
    }

    75% {
      -webkit-transform: translateY(-300%);
      transform: translateY(-300%);
    }

    85% {
      -webkit-transform: translateY(-402%);
      transform: translateY(-402%);
    }

    100% {
      -webkit-transform: translateY(-400%);
      transform: translateY(-400%);
    }
  }
`;

export default Loader;
