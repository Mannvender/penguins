import React from "react";
import { Box, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import { GiPenguin as GiPenguinBase } from "react-icons/gi";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import NavLink from "next/link";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";

const GiPenguin = styled(GiPenguinBase)`
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.dark};
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 80px;
  @media (min-width: 1024px) {
    height: 100px;
  }
`;
const StyledFlex = styled(Flex)`
  visibility: hidden;
  @media (min-width: 1024px) {
    visibility: unset;
  }
`;
const CircularBg = styled(Flex)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.dark1};
`;
const LINKS = [
  { href: "/#penguins", label: "Penguins" },
  { href: "/#stats", label: "Stats" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/#launch", label: "Launch" },
];
const Header = () => {
  const { colors } = useTheme();
  return (
    <StyledHeader>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        flexBasis="20%"
        px={[3]}
      >
        <NavLink href="/">
          <GiPenguin size="40px" color={colors.dark1} />
        </NavLink>
      </Flex>
      <StyledFlex
        justifyContent="center"
        alignItems="center"
        flexBasis={["40%", "60%"]}
      >
        {LINKS.map((link) => (
          <Box mr={[3]} key={link.label}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </Box>
        ))}
      </StyledFlex>
      <Flex
        flexBasis={["40%", "20%"]}
        justifyContent="flex-end"
        alignItems="center"
        px={[3]}
      >
        <NavLink href="/mint#mint">
          <Button bgColor={colors.dark1} color={colors.light1}>
            Mint
          </Button>
        </NavLink>
        <Link
          href="https://twitter.com/PolarPenguinNFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CircularBg justifyContent="center" alignItems="center" ml={[3]}>
            <FaTwitter fill={colors.light1} />
          </CircularBg>
        </Link>
        <Link target="_blank" rel="noopener noreferrer">
          <CircularBg justifyContent="center" alignItems="center" ml={[1]}>
            <SiDiscord fill={colors.light1} />
          </CircularBg>
        </Link>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
