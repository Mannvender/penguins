import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const URLS = ["001", "002", "003", "001", "002", "003", "001", "002", "003"];
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 56vh;
  width: 100%;
  .inner {
    position: absolute;
  }
`;
const AnimatedBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/bg.webp");
  background-size: auto 100%;
  animation: animated-section-move 45s linear infinite;
  @keyframes animated-section-move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: calc(100% - 100vw);
    }
  }
`;
const AnimatedPenguins = styled.div`
  bottom: 6.9%;
  width: max-content;
  transform: translate3d(0, 0, 0);
  animation: slideshow 25s linear infinite;
  @keyframes slideshow {
    100% {
      transform: translateX(-66.6%);
    }
  }
`;
const Slider = () => {
  return (
    <Container>
      <AnimatedBg className="inner" />
      <AnimatedPenguins className="inner">
        {URLS.map((number) => (
          <Image
            height={isMobile ? "200px" : "300px"}
            width={isMobile ? "200px" : "300px"}
            src={`/penguin_${number}.png`}
            alt={`penguin ${number}`}
            quality="70"
            key={number}
          />
        ))}
      </AnimatedPenguins>
    </Container>
  );
};

export default Slider;
