import React from "react";
import { Heading, Text, Flex, Box } from "rebass";
import { useTheme } from "styled-components";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";
import Image from "next/image";
import Button from "components/Button";
import SplitShape from "components/shapes/Split";
import styled from "styled-components";
import { useFlags } from "@happykit/flags/client";

const StyledBox = styled(Box)`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`;
const LaunchInfoSection = ({ mintDate, dateOptions, isMintLinkVisible }) => {
  const { flags } = useFlags();
  const { colors, fonts } = useTheme();
  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (flags?.presale) {
      return (
        <Heading fontSize={[6]} color={colors.light}>
          Presale is live!!
        </Heading>
      );
    } else if (!completed) {
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

  const countdownRendererEth = ({ completed }) => {
    if (!completed && !flags?.presale) {
      // Render a not completed state
      return <></>;
    } else {
      // Render a completed state
      return (
        <Link href="/minteth">
          <Button
            color={colors.light1}
            bgColor={colors.accent1}
            color1={colors.accent4}
            color2={colors.accent5}
          >
            Mint with Eth
          </Button>
        </Link>
      );
    }
  };
  const countdownRendererSol = ({ completed }) => {
    if (!completed && !flags?.presale) {
      // Render a not completed state
      return <></>;
    } else {
      // Render a completed state
      return (
        <Link href="/mintsol">
          <Button
            color={colors.light1}
            bgColor={colors.accent1}
            color1={colors.accent1}
            color2={colors.accent3}
          >
            Mint with Sol
          </Button>
        </Link>
      );
    }
  };
  return (
    <Flex
      flexWrap="wrap"
      height={["auto"]}
      sx={{ backgroundColor: colors.primary, position: "relative" }}
      alignItems="flex-end"
      justifyContent="space-between"
      role="region"
      aria-label="Launch Info"
      id="launch"
    >
      <SplitShape fill="light1" />
      <Flex
        p={[0]}
        sx={{ position: "relative" }}
        height={["600px"]}
        flexBasis={["100%", "30%"]}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          layout="fill"
          src={"/sol_penguin.png"}
          alt={"sol penguin"}
          quality="70"
          objectFit="cover"
          objectPosition="100% 50%"
        />
        <Box mr={[4]} sx={{ zIndex: 1 }}>
          <Countdown date={mintDate} renderer={countdownRendererSol} />
        </Box>
      </Flex>
      <Box mt={[6]} flexBasis={["100%", "40%"]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.light}
          textAlign={["center"]}
        >
          Mint your penguins
        </Heading>
        <Text px={[5]} mb={[3]} color={colors.light} textAlign="center">
          On <br />
          {mintDate.toLocaleDateString(undefined, dateOptions)}
          <br />
          {mintDate.toLocaleTimeString()}
        </Text>
        <Flex justifyContent="center">
          <Countdown date={mintDate} renderer={countdownRenderer} />
        </Flex>
        <StyledBox
          sx={{ position: "relative" }}
          height={["436px"]}
          width="100%"
        >
          <Image
            layout="fill"
            src={"/eth_sol_penguin.png"}
            alt={"penguin"}
            quality="70"
            objectFit="contain"
            objectPosition="50% 100%"
          />
        </StyledBox>
      </Box>
      <Flex
        sx={{ position: "relative" }}
        height={["600px"]}
        flexBasis={["100%", "30%"]}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Image
          layout="fill"
          src={"/eth_penguin.png"}
          alt={"eth penguin"}
          quality="70"
          objectFit="cover"
          objectPosition="0% 50%"
        />
        <Box ml={[4]} sx={{ zIndex: 1 }}>
          <Countdown date={mintDate} renderer={countdownRendererEth} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default LaunchInfoSection;
