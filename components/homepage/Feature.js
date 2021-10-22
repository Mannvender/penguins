import React from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
import styled, { useTheme } from 'styled-components';
import SplitShape from 'components/shapes/Split';
import Particles from 'react-particles-js';

const StyledBox = styled(Box)`
  background-image: url('/stat_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;
const StatContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.light1};
`;
//https://1000logos.net/wp-content/uploads/2018/04/Ethereum-Logo.png
const particlesOptions = {
  particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: '#fff' },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 10,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'bubble' },
      onclick: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

// const particlesOptions = {
//   autoPlay: true,
//   duration: 0,
//   fpsLimit: 60,
//   particles: {
//     // shape: {
//     //   type: 'images',
//     //   image: [
//     //     {
//     //       src: 'https://1000logos.net/wp-content/uploads/2018/04/Ethereum-Logo.png',
//     //       height: 50,
//     //       width: 50,
//     //     },
//     //   ],
//     // }
//     bounce: {
//       horizontal: {
//         value: 1,
//         random: { enable: false, minimumValue: 0.1 },
//       },
//       vertical: {
//         value: 1,
//         random: { enable: false, minimumValue: 0.1 },
//       },
//     },
//     collisions: {
//       enable: false,
//       mode: 'bounce',
//       overlap: {
//         enable: false,
//         retries: 0,
//       },
//       bounce: {
//         horizontal: {
//           value: 1,
//           random: { enable: false, minimumValue: 0.1 },
//         },
//         vertical: {
//           value: 1,
//           random: { enable: false, minimumValue: 0.1 },
//         },
//       },
//     },
//     number: {
//       value: 160,
//       density: {
//         enable: true,
//         area: 800,
//         factor: 1000,
//       },
//     },
//     size: {
//       value: 10,
//       random: true,
//     },
//     move: {
//       direction: 'bottom',
//       outModes: {
//         default: 'out',
//         bottom: 'out',
//         left: 'out',
//         right: 'out',
//         top: 'out',
//       },
//     },
//     line_linked: {
//       enable: false,
//     },
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: 'bubble',
//       },
//       onclick: { enable: false },
//       resize: true,
//     },
//     modes: {
//       attract: {
//         distance: 200,
//         duration: 0.4,
//         easing: 'ease-out-quad',
//         factor: 1,
//         maxSpeed: 50,
//         speed: 1,
//       },
//       bounce: { distance: 200 },
//       bubble: {
//         distance: 400,
//         duration: 0.3,
//         mix: false,
//         opacity: 1,
//         size: 4,
//       },
//       remove: { quantity: 2 },
//     },
//   },
//   pauseOnBlur: true,
//   pauseOnOutsideViewport: true,
// };

const FeatureSection = ({ features }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection='column'
      height={['auto']}
      alignItems='center'
      justifyContent='center'
      role='region'
      aria-label='Features'
      id='stats'
      sx={{ position: 'relative' }}
    >
      <SplitShape />
      <Flex
        px={[5]}
        flexWrap='wrap'
        justifyContent='space-around'
        width={['100%']}
        mt={[6]}
        mb={[5, 0]}
      >
        {features.map((feature, i) => (
          <StyledBox
            p={[3]}
            height={['183px', '264px']}
            flexBasis={['75%', '40%', '20%']}
            mb={[5, 6]}
          >
            <Box sx={{ position: 'absolute' }}>
              <Particles
                width='100%'
                height='100vh'
                params={particlesOptions}
              />
            </Box>

            <StatContainer
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Heading
                color={colors.dark1}
                mb={[3]}
                fontSize={[4]}
                textAlign='center'
              >
                {feature.title}
              </Heading>
              <Text sx={{ color: colors.dark1 }} textAlign='center' p={[2]}>
                {feature.text}
              </Text>
            </StatContainer>
          </StyledBox>
        ))}
      </Flex>
      <SplitShape inverted />
    </Flex>
  );
};

export default FeatureSection;
