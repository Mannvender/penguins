import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { isMobile, MobileView, BrowserView } from "react-device-detect";
import Image from "next/image";
import Split from "components/shapes/Split";

const Grid = styled(Box)`
  display: none;
  @media (min-width: 1024px) {
    display: grid;
  }
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr 5fr;
  grid-template-columns: 0.7fr 1.6fr 0.7fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0 0;
  grid-template-areas: "area10 iceberg1 ." ". iceberg2 area20" "area40 iceberg3 ." ". iceberg4 area60" "area80 iceberg5 ." ". iceberg6 area100";
`;
const FloatingBox = styled(Box)`
  position: relative;
  min-height: 150px;
  animation: floatberg 5s ease-in-out infinite;
  filter: drop-shadow(0 0 6px ${(props) => props.theme.colors.dark1});
  animation-delay: ${(props) => props.delay}s;
  @keyframes floatberg {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5%);
    }
    to {
      transform: translateY(0);
    }
  }
`;
const TextContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    bottom: auto;
    right: -130%;
    width: 230%;
    height: 2px;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark1};
    z-index: -1;
  }
`;
const RoadmapSection = ({ roadmap }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      height={["auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Roadmap"
      id="roadmap"
      sx={{ position: "relative" }}
    >
      <Split />
      <Box my={[6]} px={[5]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Roadmap
        </Heading>
        <Grid>
          {roadmap.map((step, i) => (
            <FloatingBox
              key={i}
              sx={{ gridArea: `iceberg${i + 1}`, justifySelf: "center" }}
              delay={0.4 * i}
              width={step.icebergWidth}
            >
              <Image
                layout="fill"
                src={`/iceberg_00${i + 1}.png`}
                alt={`iceberg ${i + 1}`}
                quality="70"
              />
            </FloatingBox>
          ))}
          {roadmap.map((step, i) => (
            <TextContainer
              sx={{ gridArea: `area${step.when}` }}
              key={step.when}
              mx={[4]}
              textAlign={i % 2 === 0 ? "left" : "right"}
            >
              <Heading color={colors.primary} fontWeight={600} mb={[2]}>
                {step.when}%
              </Heading>
              <Text color={colors.dark1}>{step.what}</Text>
            </TextContainer>
          ))}
        </Grid>
        <MobileView>
          {roadmap.map((step, i) => (
            <Flex mb={[4, 3]} key={i} alignItems="center">
              <Text
                color={colors.primary}
                sx={{ minWidth: ["72px"] }}
                fontWeight={600}
              >
                {step.when}%
              </Text>
              <Text color={colors.dark1} width={["auto", "280px"]}>
                {step.what}
              </Text>
            </Flex>
          ))}
        </MobileView>
      </Box>
      <Split inverted />
    </Flex>
  );
};

export default RoadmapSection;
