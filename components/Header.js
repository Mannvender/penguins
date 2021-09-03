import React from "react";
import { Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { GiPenguin as GiPenguinBase } from "react-icons/gi";
import { useRouter } from "next/router";
import Image from "next/image";
import NavLink from "next/link";
import Button from "components/Button";

const GiPenguin = styled(GiPenguinBase)`
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.dark};
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
const LINKS = [
  { href: "/#penguins", label: "Penguins" },
  { href: "/#stats", label: "Stats" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#faqs", label: "FAQs" },
];
const Header = () => {
  const { colors } = useTheme();
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <Flex alignItems="center" justifyContent="center" flexBasis="20%">
        <NavLink href="/">
          <GiPenguin size="40px" color={colors.dark1} />
        </NavLink>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexBasis="60%">
        {LINKS.map((link) => (
          <Box mr={[3]} key={link.label}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </Box>
        ))}
      </Flex>
      <Flex flexBasis="20%" justifyContent="center" alignItems="center">
        <NavLink href="/mint#mint">
          <Button bgColor={colors.dark1} color={colors.light1}>
            Mint
          </Button>
        </NavLink>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
