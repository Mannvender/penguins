import React from "react";
import styled from "styled-components";
import Image from "next/image";

const URLS = ["001", "002"];
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
  width: 100%;
  div {
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
  bottom: 24.9%;
  width: max-content;
  height: 52%;
  img {
    height: 100%;
    margin-right: 2vh;
    padding-right: 0.6vh;
  }
`;
const Slider = () => {
  return (
    <Container>
      <AnimatedBg />
      <AnimatedPenguins>
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
