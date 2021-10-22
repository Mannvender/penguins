import React from "react";
import { Box, Flex } from "rebass";
import Particles from "react-particles-js";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";

import Header from "components/Header";
import Footer from "components/Footer";
import MintEthSection from "components/mint/MintEth";
// import MintSolanaSection from "components/mint/MintSolana";
const MintEthereumSection = dynamic(() => import("components/mint/MintEth"), {
  ssr: false,
});
import { MINT_DATE, DATE_OPTIONS } from "messages";

const Index = () => {
  const { colors } = useTheme();
  return (
    <>
      <Box position="relative">
        <Header />
        <Box sx={{ position: "absolute" }}>
          <Particles width="100%" height="100vh" params={particlesOptions} />
        </Box>
        <Flex
          height={["100vh"]}
          flexDirection={["column", "row"]}
          backgroundColor={colors.primary}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <MintEthereumSection date={MINT_DATE} dateOptions={DATE_OPTIONS} />
        </Flex>
        <Footer />
      </Box>
    </>
  );
};

export default Index;

const particlesOptions = {
  autoPlay: true,
  duration: 0,
  fpsLimit: 60,
  particles: {
    bounce: {
      horizontal: {
        value: 1,
        random: { enable: false, minimumValue: 0.1 },
      },
      vertical: {
        value: 1,
        random: { enable: false, minimumValue: 0.1 },
      },
    },
    collisions: {
      enable: false,
      mode: "bounce",
      overlap: {
        enable: false,
        retries: 0,
      },
      bounce: {
        horizontal: {
          value: 1,
          random: { enable: false, minimumValue: 0.1 },
        },
        vertical: {
          value: 1,
          random: { enable: false, minimumValue: 0.1 },
        },
      },
    },
    number: {
      value: 160,
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: "bottom",
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: { distance: 200 },
      bubble: {
        distance: 400,
        duration: 0.3,
        mix: false,
        opacity: 1,
        size: 4,
      },
      remove: { quantity: 2 },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
};
