import styled, { css } from "styled-components";

const ShapeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  ${(props) =>
    props.inverted &&
    css`
      transform: rotate(180deg);
      bottom: 0;
    `}
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
    @media (min-width: 1024px) {
      height: 295px;
    }
  }
  .shape-fill {
    fill: ${(props) => props.theme.colors[props.fill]};
  }
`;

const SplitShape = ({ inverted, fill = "primary" }) => {
  return (
    <ShapeContainer inverted={inverted} fill={fill}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path
          d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </ShapeContainer>
  );
};

export default SplitShape;
