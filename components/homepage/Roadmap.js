import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";
import Wave from "components/shapes/Wave";

const RoadmapSection = ({ roadmap }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      height={["100vh", "100%"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Roadmap"
      id="roadmap"
      sx={{ position: "relative" }}
    >
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
            <Flex mb={[3]} key={i}>
              <Text color={colors.primary} sx={{ minWidth: ["72px"] }}>
                {step.when}
              </Text>
              <Text color={colors.dark1}>{step.what}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
      <Wave />
    </Flex>
  );
};

export default RoadmapSection;
