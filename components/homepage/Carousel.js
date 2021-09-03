import React from "react";
import { Heading, Box, Flex } from "rebass";
import { useTheme } from "styled-components";

import Slider from "../Slider";

const CarouselSection = () => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      height={["100vh", "100%"]}
      id="penguins"
      role="region"
      aria-label="Carousel"
      alignItems="center"
      justifyContent="center"
      textAlign={["center"]}
      backgroundColor={[colors.primary]}
    >
      <Box width={["100%"]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.light1}
        >
          My Precious
        </Heading>
        <Slider />
      </Box>
    </Flex>
  );
};

export default CarouselSection;
