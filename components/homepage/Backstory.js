import React from "react";
import { Heading, Flex, Box } from "rebass";
import { useTheme } from "styled-components";

const Backstory = ({ backStory }) => {
  const { colors } = useTheme();
  return (
    <Flex
      height={["auto", "auto", "100%"]}
      sx={{ backgroundColor: colors.primary }}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="back story"
      id="back-story"
    >
      <Box>
        <Heading
          fontSize={[4, 5]}
          fontWeight={[600]}
          px={[4, 6]}
          pb={[4]}
          mt={[6, 6, 0]}
          color={colors.light}
          textAlign={["center"]}
        >
          {backStory}
        </Heading>
      </Box>
    </Flex>
  );
};

export default Backstory;
