import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";
import Wave from "components/shapes/Wave";
import Split from "components/shapes/Split";

const RoadmapSection = ({ roadmap }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      height={["100vh", "100vh"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Roadmap"
      id="roadmap"
      sx={{ position: "relative" }}
    >
      <Split />
      <Box>
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
        <Box px={[5]} mb={[5, 0]}>
          {roadmap.map((step, i) => (
            <Flex mb={[3]} key={i} alignItems="center">
              <Text
                color={colors.primary}
                sx={{ minWidth: ["72px"] }}
                fontWeight={600}
              >
                {step.when}
              </Text>
              <Text color={colors.dark1} width={["auto", "280px"]}>
                {step.what}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
      <Split inverted />
    </Flex>
  );
};

export default RoadmapSection;
