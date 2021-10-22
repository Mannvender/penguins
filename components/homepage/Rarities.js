import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";
import Wave from "components/shapes/Wave";
import Image from "next/image";

const DaddyRetreatSection = () => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Rarities"
      id="rarities"
      sx={{ position: "relative" }}
    >
      <Box my={[6]} width={["100%"]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Rarities
        </Heading>
        <Box px={[3, 6]} mb={[5, 0]}>
          <Flex alignItems="center" flexWrap="wrap">
            <Box
              mb={["-380px"]}
              flexBasis={["100%", "100%", "60%"]}
              sx={{ position: "relative" }}
              height={["550px", "750px"]}
              display={["none", "none", "block"]}
              overflow={["visible"]}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={"/penguin_gif.gif"}
                alt={"penguin gif"}
                quality="70"
              />
            </Box>
            <Box
              flexBasis={["100%", "100%", "40%"]}
              sx={{ position: "relative" }}
              height={["300px", "700px"]}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={"/penguin_stats.png"}
                alt={"penguin_stats"}
                quality="70"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Wave />
    </Flex>
  );
};

export default DaddyRetreatSection;
