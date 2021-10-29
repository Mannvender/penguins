import React from 'react';
import { Heading, Box, Flex, Text, Card } from 'rebass';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import { FaTshirt } from 'react-icons/fa';
import { AiOutlineFileJpg, AiOutlineCar } from 'react-icons/ai';
import { GiLifeBar } from 'react-icons/gi';
import { SiDcentertainment } from 'react-icons/si';
import { MdMovie, MdAttachMoney } from 'react-icons/md';
import { WiCloudyWindy } from 'react-icons/wi';
import { ImHammer2 } from 'react-icons/im';
import { BsBook } from 'react-icons/bs';

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

const DaddyRoadmapSection = ({ roadmap }) => {
  const { colors } = useTheme();

  const renderIcon = (tag) => {
    switch (tag) {
      case 'merch':
        return <FaTshirt size={24} />;
      case 'jpg':
        return <AiOutlineFileJpg size={24} />;
      case 'life':
        return <GiLifeBar size={24} />;
      case 'book':
        return <BsBook size={24} />;
      case 'dc':
        return <SiDcentertainment size={24} />;
      case 'cloud':
        return <WiCloudyWindy size={24} />;
      case 'bollywood':
        return <MdMovie size={24} />;
      case 'car':
        return <AiOutlineCar size={24} />;
      case 'hammer':
        return <ImHammer2 size={24} />;
      case 'money':
        return <MdAttachMoney size={24} />;
      default:
        break;
    }
  };

  const renderImage = (img, msg) => {
    switch (img) {
      case 'hoody':
        return <Hoody text={msg} />;
      case 'companion':
        return <Companion text={msg} />;
      case 'extinction':
        return <Extinction text={msg} />;
      case 'comics':
        return <Comics text={msg} />;
      case 'dc':
        return <DC text={msg} />;
      case 'climate':
        return <Climate text={msg} />;
      case 'movie':
        return <Movie text={msg} />;
      case 'convertible':
        return <Convertible text={msg} />;
      case 'sue':
        return <Sue text={msg} />;
      default:
        return <Default text={msg} />;
    }
  };

  return (
    <Flex
      flexDirection='column'
      height={['auto']}
      alignItems='center'
      justifyContent='center'
      role='region'
      aria-label='Roadmap'
      id='roadmap'
      sx={{ position: 'relative' }}
    >
      <Box my={[6]} mb={[0, 0]} px={[3]}>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
          textAlign={['center']}
        >
          Daddy Roadmap
        </Heading>
        {roadmap.map((step, i) => (
          <Card
            sx={{ backgroundColor: colors.darkGray, borderRadius: '8px' }}
            mb={[3]}
          >
            {renderImage(step.image, step.what)}
          </Card>
        ))}
      </Box>
    </Flex>
  );
};

export default DaddyRoadmapSection;

export const Hoody = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-hoody.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Companion = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-companion.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Extinction = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-extinction.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Comics = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-comics.jpg'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          textAlign={'center'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const DC = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-suicide-squad.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Climate = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-climate-change.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Movie = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-bollywood.jpg'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Convertible = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-covertible.jpg'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Sue = ({ text }) => {
  return (
    <>
      <Box
        height={['30vh', '50vh']}
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Image
          quality='70'
          layout='fill'
          height='100%'
          width='100%'
          objectPosition='50% 30%'
          src='/penguin-sue.png'
        />
      </Box>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '0 0 8px 8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};

export const Default = ({ text }) => {
  return (
    <>
      <Box
        width={['35vh', '50vh']}
        sx={{
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Text
          fontSize={[1, 2]}
          p={[3]}
          mx='auto'
          width={['100%']}
          backgroundColor={'lightBlue'}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </>
  );
};
