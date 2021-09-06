import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import SplitShape from "components/shapes/Split";

const StyledBox = styled(Box)`
  background-image: url("/stat_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const StatContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.light1};
`;
const FeatureSection = ({ features }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      height={["auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Features"
      id="stats"
      sx={{ position: "relative" }}
    >
      <SplitShape />
      <Flex
        px={[5]}
        flexWrap="wrap"
        justifyContent="space-around"
        width={["100%"]}
        mt={[6]}
        mb={[5, 0]}
      >
        {features.map((feature, i) => (
          <StyledBox
            p={[3]}
            height={["183px", "264px"]}
            flexBasis={["75%", "40%", "20%"]}
            mb={[5, 6]}
          >
            <StatContainer
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Heading color={colors.dark1} mb={[3]} fontSize={[4]}>
                {feature.title}
              </Heading>
              <Text sx={{ color: colors.dark1 }} textAlign="center" p={[2]}>
                {feature.text}
              </Text>
            </StatContainer>
          </StyledBox>
        ))}
      </Flex>
      <SplitShape inverted />
    </Flex>
  );
};

export default FeatureSection;
