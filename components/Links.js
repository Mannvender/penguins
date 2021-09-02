import styled from "styled-components";
import { Link as LinkBase } from "rebass";

export const LinkExternal = styled(LinkBase)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.4rem;
  font-family: inherit;
`;
