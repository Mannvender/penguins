import styled from "styled-components";

export default styled.input`
  text-align: center;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.dark1};
  font-size: inherit;
  font-family: inherit;
  outline: none;
  appearance: textfield;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
