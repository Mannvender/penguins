import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { useSprings, animated } from "react-spring";

const StyledFlex = styled(Flex)`
  border-bottom: 8px solid ${(props) => props.theme.colors[props.borderColor]};
  position: relative;
  &:hover {
    img {
      display: none;
    }
  }
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
  console.log(props);
  return (
    <Flex
      flexDirection="column"
      height={["auto", "100%"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Team"
      id="team"
      sx={{ position: "relative" }}
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          mt={[4, 0]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Team
        </Heading>
        <Flex px={[5]} mb={[5, 0]} flexWrap="wrap">
          {team.map((member, index) => (
            <Box flexBasis={["100%", "50%", "25%"]} p={[4]}>
              <Box height="100px">
                <Text color={colors[member.color]} fontSize={[3]} mb={[3]}>
                  {member.name}
                </Text>
                <Text fontSize={[1, 2]}>{member.description}</Text>
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
                  backgroundColor={colors.light2}
                >
                  <animated.div style={{ opacity: props[index].opacity }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: ["-10px"],
                        left: ["8px"],
                      }}
                      style={{}}
                      height={["80px"]}
                      width={["50px"]}
                    >
                      <Image
                        layout="fill"
                        src={"/pin_02.png"}
                        alt={`band-aid`}
                        quality="70"
                      />
                    </Box>
                  </animated.div>
                  <Image
                    height="300px"
                    width="300px"
                    src={member.image.src}
                    alt={`scholar penguin`}
                    quality="70"
                  />
                </StyledFlex>
              </animated.div>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default TeamSection;
