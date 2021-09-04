import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

const StyledBox = styled(Box)`
  border-bottom: 8px solid ${(props) => props.theme.colors[props.borderColor]};
  position: relative;
`;
const TeamSection = ({ team }) => {
  const { colors } = useTheme();
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
              <StyledBox
                key={index}
                p={[2]}
                pb={0}
                borderColor={member.color}
                backgroundColor={colors.light2}
              >
                {true && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: ["-10px"],
                      left: ["8px"],
                    }}
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
                )}
                <Image
                  height="300px"
                  width="300px"
                  src={member.image.src}
                  alt={`scholar penguin`}
                  quality="70"
                />
                {false && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: ["-20px"],
                      left: ["200px"],
                    }}
                    height={["80px"]}
                    width={["80px"]}
                  >
                    <Image
                      layout="fill"
                      src={"/bandaid.png"}
                      alt={`band-aid`}
                      quality="70"
                    />
                  </Box>
                )}
              </StyledBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default TeamSection;
