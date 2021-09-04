import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Box } from "rebass";
import { isMobile } from "react-device-detect";

const URLS = [
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "012",
  "013",
  "014",
  "015",
  "016",
  "017",
  "018",
  "019",
  "020",
  "021",
  "022",
  "023",
  "024",
  "025",
  "026",
  "027",
  "028",
  "029",
  "030",
  "031",
  "032",
  "033",
  "034",
  "035",
  "036",
  "037",
  "038",
  "039",
];
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
  height: 52%;
  bottom: 18%;
  width: max-content;
  transform: translate3d(0, 0, 0);
  animation: slideshow 25s linear infinite;
  @keyframes slideshow {
    100% {
      transform: translateX(-66.6%);
    }
  }
  @media (min-width: 1024px) {
    bottom: 31%;
  }
  @media (min-width: 1281px) {
    bottom: 22%;
  }
`;
const AnimatedFood = styled.div`
  bottom: 7%;
  width: 100vw;
  height: 40%;
  background-image: url("/food.png");
  background-size: auto 100%;
  animation: animated-section-move 2.07s linear infinite;
  @keyframes animated-section-move {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: calc(100% - 100vw);
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
      <AnimatedFood className="inner" />
    </Container>
  );
};

export default Slider;
