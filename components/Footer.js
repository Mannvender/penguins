import React from "react";
import styled from "styled-components";
import { Text } from "rebass";

const StyledFooter = styled.footer`
  display: flex;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.dark};
  justify-content: center;
  align-items: center;
  height: 64px;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Text>©2021 Polar Penguins NFT</Text>
    </StyledFooter>
  );
};

export default Footer;
