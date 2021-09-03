import React from "react";
import styled, { useTheme } from "styled-components";
import { Heading, Flex } from "rebass";
import WaveOpacityShape from "components/shapes/WaveOpacity";

const Banner = styled(Flex)`
  background-image: linear-gradient(black, black), url("/banner.jpg");
  background-blend-mode: saturation;
  background-size: 300px 300px;
  position: relative;
  height: calc(100vh -80px);
`;
export const StyledHeading = styled(Heading)`
  text-shadow: 3px 3px ${(props) => props.theme.colors.accent2};
  @media (min-width: 1024px) {
    text-shadow: 5px 5px ${(props) => props.theme.colors.accent2};
  }
`;

const BannerSection = () => {
  const { colors } = useTheme();
  return (
    <>
      <Banner
        height={["calc(100vh - 80px)", "100%"]}
        width={["100%"]}
        alignItems="center"
        justifyContent="center"
        role="region"
        aria-label="Banner"
      >
        <StyledHeading
          fontSize={[6, 8]}
          fontWeight={[600]}
          color={[colors.primary]}
          mb={[5]}
          textAlign="center"
        >
          Polar Penguins
        </StyledHeading>
        <WaveOpacityShape />
      </Banner>
    </>
  );
};

export default BannerSection;
