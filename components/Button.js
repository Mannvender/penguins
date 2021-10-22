import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 64px;
  border: 1px solid ${(props) => props.theme.colors.dark1};
  height: 40px;
  /* background-color: ${(props) =>
    props.disabled ? props.theme.colors.dark2 : props.bgColor}; */
  color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.4s ease-in-out;
  background-image: radial-gradient(
    ${(props) => props.theme.colors.dark1} 2px,
    ${(props) => props.theme.colors.dark2} 1px
  );
  background-size: calc(2 * 2px) calc(2 * 2px);
  &:hover {
    color: ${(props) => props.hoverColor || props.theme.colors.light};
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
  ${(props) =>
    props.color1 &&
    props.color2 &&
    css`
      background-image: radial-gradient(
        ${props.color1} 2px,
        ${props.color2} 1px
      );
    `}
`;

export default StyledButton;
