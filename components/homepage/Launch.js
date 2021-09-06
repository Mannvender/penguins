import React from "react";
import { Heading, Text, Flex, Box } from "rebass";
import { useTheme } from "styled-components";
import Button from "components/Button";
import Link from "next/link";

const LaunchInfoSection = ({ mintDate, dateOptions }) => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      height={["100vh", "100vh"]}
      sx={{ backgroundColor: colors.primary }}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Launch Info"
      id="launch"
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.light}
          textAlign={["center"]}
        >
          Launch
        </Heading>
        <Text px={[5]} mb={[5]} color={colors.light} textAlign="center">
          On <br />
          {mintDate.toLocaleDateString(undefined, dateOptions)}
          <br />
          {mintDate.toLocaleTimeString()}
        </Text>
        <Flex justifyContent="center">
          <Link href="/mint">
            <Button color={colors.light1} bgColor={colors.accent1}>
              Let's mint
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LaunchInfoSection;
