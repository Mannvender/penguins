import React from "react";
import styled, { useTheme } from "styled-components";
import { Heading, Flex } from "rebass";
import WaveOpacityShape from "components/shapes/WaveOpacity";

const Banner = styled(Flex)`
  background-image: url("/banner.png");
  background-size: cover;
  background-position: 0% 25%;
  position: relative;
  @media (min-width: 1024px) {
    background-position: 50% 100%;
  }
`;
export const StyledHeading = styled(Heading)`
  text-shadow: 3px 3px ${(props) => props.theme.colors.accent2};
  @media (min-width: 1024px) {
    text-shadow: 4px 4px ${(props) => props.theme.colors.accent2};
  }
`;

const BannerSection = () => {
  const { colors } = useTheme();
  return (
    <>
      <Banner
        height={["calc(100vh - 80px)", "107vh"]}
        width={["100%"]}
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
          mt={["30vh", "40vh", "50vh"]}
          width={["300px", "auto"]}
        >
          Polar Penguins
        </StyledHeading>
        <WaveOpacityShape height="110" />
      </Banner>
    </>
  );
};

export default BannerSection;
