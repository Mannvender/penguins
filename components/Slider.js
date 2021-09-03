import React from "react";
import styled from "styled-components";
import Image from "next/image";

const URLS = ["001", "002", "003", "001", "002", "003", "001", "002", "003"];
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
  width: 100%;
  .inner {
    position: absolute;
  }
`;
const AnimatedBg = styled.div`
  width: 100vw;
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
  bottom: 31px;
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
            height="300px"
            width="300px"
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
