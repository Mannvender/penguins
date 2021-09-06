import React from "react";
import { Heading, Box, Flex } from "rebass";
import { useTheme } from "styled-components";

import Slider from "../Slider";

const CarouselSection = () => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      height={["auto"]}
      id="penguins"
      role="region"
      aria-label="Carousel"
      alignItems="center"
      justifyContent="center"
      textAlign={["center"]}
      backgroundColor={[colors.primary]}
    >
      <Box width={["100%"]} mb={[6]}>
        <Slider />
      </Box>
    </Flex>
  );
};

export default CarouselSection;
