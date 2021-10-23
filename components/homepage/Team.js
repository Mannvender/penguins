import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { useSprings, animated } from "react-spring";
import { IceCss } from "components/mint/MintEth";

const StyledFlex = styled(Flex)`
  border-bottom: 8px solid ${(props) => props.theme.colors[props.borderColor]};
  position: relative;
  background-image: url(${(props) => props.backgroundUrl});
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${(props) => props.bgColor};
  &:hover {
    img {
      display: none;
    }
  }
`;
const IceFlex = styled(Flex)`
  ${IceCss}
`;
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const TeamSection = ({ team }) => {
  const { colors } = useTheme();
  const [props, set] = useSprings(4, () => ({
    xys: [0, 0, 1],
    opacity: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <IceFlex
      flexDirection="column"
      height={["auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Team"
      id="team"
      backgroundColor={colors.primary}
    >
      <Box width="100%" my={[6]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[3]}
          color={colors.light}
          textAlign={["center"]}
        >
          Team
        </Heading>
        <Flex px={[5]} flexWrap="wrap">
          {team.map((member, index) => (
            <Box flexBasis={["100%", "50%", "25%"]} p={[4]} key={index}>
              <Box height="100px">
                <Text
                  color={colors[member.color]}
                  fontSize={[3]}
                  mb={[3]}
                  textAlign={["center", "left"]}
                >
                  {member.name}
                </Text>
                <Text
                  fontSize={[1, 2]}
                  color={colors.light2}
                  textAlign={["center", "left"]}
                >
                  {member.description}
                </Text>
              </Box>
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set((i) => {
                    if (i === index) return { xys: calc(x, y), opacity: 0 };
                  })
                }
                onMouseLeave={() =>
                  set((i) => {
                    if (i === index) return { xys: [0, 0, 1], opacity: 1 };
                  })
                }
                style={{ transform: props[index].xys.interpolate(trans) }}
              >
                <StyledFlex
                  key={index}
                  p={[2]}
                  pb={0}
                  borderColor={member.color}
                  backgroundUrl={member.image.src}
                  bgColor={member.image.bgColor}
                  height={["185px", "264px"]}
                  flexBasis="100%"
                >
                  <animated.div style={{ opacity: props[index].opacity }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: ["-10px"],
                        left: ["8px"],
                        zIndex: 1,
                      }}
                      style={{}}
                      height={["80px"]}
                      width={["50px"]}
                    >
                      <Image
                        layout="fill"
                        src={"/pin_02.png"}
                        alt={"pin"}
                        quality="70"
                      />
                    </Box>
                  </animated.div>
                </StyledFlex>
              </animated.div>
            </Box>
          ))}
        </Flex>
      </Box>
    </IceFlex>
  );
};

export default TeamSection;
