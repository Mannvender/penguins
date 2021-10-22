import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";
import Wave from "components/shapes/Wave";
import { FaTshirt } from "react-icons/fa";
import { AiOutlineFileJpg, AiOutlineCar } from "react-icons/ai";
import { GiLifeBar } from "react-icons/gi";
import { SiDcentertainment } from "react-icons/si";
import { MdMovie, MdAttachMoney } from "react-icons/md";
import { WiCloudyWindy } from "react-icons/wi";
import { ImHammer2 } from "react-icons/im";
import { BsBook } from "react-icons/bs";

const DaddyRoadmapSection = ({ roadmap }) => {
  const { colors } = useTheme();

  const renderIcon = (tag) => {
    switch (tag) {
      case "merch":
        return <FaTshirt size={24} />;
      case "jpg":
        return <AiOutlineFileJpg size={24} />;
      case "life":
        return <GiLifeBar size={24} />;
      case "book":
        return <BsBook size={24} />;
      case "dc":
        return <SiDcentertainment size={24} />;
      case "cloud":
        return <WiCloudyWindy size={24} />;
      case "bollywood":
        return <MdMovie size={24} />;
      case "car":
        return <AiOutlineCar size={24} />;
      case "hammer":
        return <ImHammer2 size={24} />;
      case "money":
        return <MdAttachMoney size={24} />;
      default:
        break;
    }
  };
  return (
    <Flex
      flexDirection="column"
      height={["auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Roadmap"
      id="roadmap"
      sx={{ position: "relative" }}
    >
      <Box my={[6]} mb={[0 , 0]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Daddy Roadmap
        </Heading>
        <Box px={[5, 6]} mb={[5, 0]}>
          {roadmap.map((step, i) => (
            <Flex mb={[4, 3]} key={i} alignItems="center">
              <Text
                color={colors.primary}
                sx={{ minWidth: ["72px"], fill: colors.primary }}
              >
                {renderIcon(step.tag)}
              </Text>
              <Text
                color={colors.dark1}
                width={["auto", "auto"]}
                dangerouslySetInnerHTML={{ __html: step.what }}
              ></Text>
            </Flex>
          ))}
        </Box>
      </Box>
      {/* <Wave /> */}
    </Flex>
  );
};

export default DaddyRoadmapSection;
