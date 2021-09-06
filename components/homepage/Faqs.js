import React, { useState } from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const StyledFlex = styled(Flex)`
  color: ${(props) => props.theme.colors.light1};
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
`;
const FaqsSection = ({ faqs }) => {
  const { colors, fonts } = useTheme();
  const [activeFAQs, setActiveFAQs] = useState([]);

  const handleClick = (id) => {
    console.log("clicked");
    if (activeFAQs.includes(id)) {
      setActiveFAQs(activeFAQs.filter((item) => item !== id));
    } else {
      setActiveFAQs([...activeFAQs, id]);
    }
  };
  return (
    <Flex
      flexDirection="column"
      height={["auto", "auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="FAQs"
      id="faqs"
      backgroundColor={colors.primary}
      sx={{ position: "relative" }}
    >
      <Heading
        fontSize={[4, 6]}
        fontWeight={[600]}
        pt={[6]}
        pb={[4]}
        color={colors.light1}
      >
        FAQs
      </Heading>
      <Flex
        px={[3, 5]}
        flexWrap="wrap"
        justifyContent="space-around"
        width={["100%"]}
        mb={[6]}
      >
        {faqs.map((faq, i) => (
          <Box
            key={i}
            p={[4]}
            width="90%"
            sx={{
              backgroundColor: colors.dark,
              cursor: "pointer",
            }}
            mb={[4]}
            onClick={() => handleClick(i)}
          >
            <StyledFlex justifyContent="space-between">
              <Text mr={[3]} fontSize={[3]}>
                {faq.question}
              </Text>
              {activeFAQs.includes(i) ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </StyledFlex>
            <Box
              height={activeFAQs.includes(i) ? faq.height : "0px"}
              sx={{
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              <Text mt={[3]} color={colors.primary}>
                {faq.answer}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default FaqsSection;
