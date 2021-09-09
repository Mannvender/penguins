import React from "react";
import { Heading, Text, Flex, Box } from "rebass";
import { useTheme } from "styled-components";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";
import Button from "components/Button";
import SplitShape from "components/shapes/Split";

const LaunchInfoSection = ({ mintDate, dateOptions, isMintLinkVisible }) => {
  const { colors, fonts } = useTheme();
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      // Render a completed state
      return (
        <Flex flexDirection="column" alignItems="center" pb={[5, 0]}>
          <Flex
            flexDirection="row"
            mx={[3]}
            sx={{ color: colors.light1 }}
            width={["auto", "450px"]}
          >
            <Box mr={[2, 5]}>
              <Heading fontSize={[6, 8]} mb={[0]} ml={[2, 0]}>
                {days}
              </Heading>
              <Text mb={[2, 4]}>Days</Text>
            </Box>
            <Box mr={[2, 5]}>
              <Heading fontSize={[6, 8]} mb={[0]} ml={[2, 0]}>
                {zeroPad(hours)}
              </Heading>
              <Text mb={[2, 4]}>Hours</Text>
            </Box>
            <Box mr={[2, 5]}>
              <Heading fontSize={[6, 8]} mb={[0]} ml={[2, 0]}>
                {zeroPad(minutes)}
              </Heading>
              <Text mb={[2, 4]}>Minutes</Text>
            </Box>
            <Box>
              <Heading fontSize={[6, 8]} mb={[0]} ml={[2, 0]}>
                {zeroPad(seconds)}
              </Heading>
              <Text mb={[2, 4]}>Seconds</Text>
            </Box>
          </Flex>
        </Flex>
      );
    } else {
      return <> </>;
    }
  };
  return (
    <Flex
      height={["auto"]}
      sx={{ backgroundColor: colors.primary, position: "relative" }}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Launch Info"
      id="launch"
    >
      <SplitShape fill="light1" />
      <Box my={[6]}>
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
        <Text px={[5]} mb={[3]} color={colors.light} textAlign="center">
          On <br />
          {mintDate.toLocaleDateString(undefined, dateOptions)}
          <br />
          {mintDate.toLocaleTimeString()}
        </Text>
        <Flex justifyContent="center">
          <Countdown date={mintDate} renderer={countdownRenderer} />
          {isMintLinkVisible && (
            <Link href="/mint">
              <Button color={colors.light1} bgColor={colors.accent1}>
                Let's mint
              </Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default LaunchInfoSection;
