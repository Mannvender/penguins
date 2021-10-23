import styled from "styled-components";

const SquareButton = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #404144;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border: none;
  margin-top: 12px;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
  }
`;

export default SquareButton;
