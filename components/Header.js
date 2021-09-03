import React from "react";
import { Box, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import { GiPenguin as GiPenguinBase } from "react-icons/gi";
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
      <Flex alignItems="center" justifyContent="center" flexBasis="20%">
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
        justifyContent="center"
        alignItems="center"
      >
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
