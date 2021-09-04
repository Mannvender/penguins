import React from "react";
import { Box, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import { isMobile } from "react-device-detect";
import { LINKS } from "messages";
import {
  GiPenguin as GiPenguinBase,
  GiRoad,
  GiThorHammer,
} from "react-icons/gi";
import { AiOutlineQuestion } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import NavLink from "next/link";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";
import useScroll from "hooks/scroll";

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
const BottomNav = styled(Flex)`
  z-index: 9;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light2};
`;
const Header = () => {
  const { colors } = useTheme();
  const { scrollDirection } = useScroll();

  const renderIcon = (label) => {
    switch (label) {
      case LINKS[0].label:
        return <GiPenguin size={24} />;
      // case LINKS[1].label:
      //   return <GiInfo size={24} />;
      case LINKS[3].label:
        return <GiRoad size={24} />;
      case LINKS[4].label:
        return <AiOutlineQuestion size={24} />;
      // case LINKS[4].label:
      //   return <RiRocket2Line size={24} />;
      default:
        break;
    }
  };
  return (
    <>
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
          <Box display={["none", "initial"]}>
            <NavLink href="/mint#mint">
              <Button bgColor={colors.dark1} color={colors.light1}>
                Mint
              </Button>
            </NavLink>
          </Box>
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
      <BottomNav
        px={[3]}
        pb={[1]}
        pt={[2]}
        justifyContent="space-between"
        style={{ opacity: scrollDirection === "down" && isMobile ? 1 : 0 }}
      >
        {LINKS.filter((link) => link.showOnMobile).map((link) => (
          <NavLink href={link.href} py={[1]} key={link.label}>
            <Flex
              flexDirection="column"
              alignItems="center"
              sx={{ boxShadow: "none" }}
            >
              {renderIcon(link.label)}
              {link.label}
            </Flex>
          </NavLink>
        ))}
        <NavLink href="/mint" py={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{ boxShadow: "none" }}
          >
            <GiThorHammer size={24} />
            Mint
          </Flex>
        </NavLink>
      </BottomNav>
    </>
  );
};

export default Header;
