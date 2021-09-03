import React from "react";
import { Box } from "rebass";
import { isMobile } from "react-device-detect";

import Header from "components/Header";
import BannerSection from "components/homepage/Banner";
import CarouselSection from "components/homepage/Carousel";
import FeatureSection from "components/homepage/Feature";
import RoadmapSection from "components/homepage/Roadmap";
import LaunchInfoSection from "components/homepage/Launch";
import Footer from "components/Footer";
import { FEATURES, ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";

const sections = [
  <BannerSection />,
  <CarouselSection />,
  <FeatureSection features={FEATURES} />,
  <RoadmapSection roadmap={ROADMAP} />,
  <LaunchInfoSection mintDate={MINT_DATE} dateOptions={DATE_OPTIONS} />,
  <Footer />,
];
const Index = () => {
  return (
    <>
      <Box
        sx={{
          height: ["auto", "100vh"],
          display: ["block", "grid"],
          gridTemplateRows: ["auto auto", "auto 1fr"],
          gridAutoColumns: "1fr",
          scrollBehavior: "smooth",
        }}
        position="relative"
      >
        <Header />
        <Box overflowY="auto">{sections}</Box>
      </Box>
    </>
  );
};

export default Index;
