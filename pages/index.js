import React from "react";
import { Box } from "rebass";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import Header from "components/Header";
import SecondarySection from "components/SecondarySection";
import BannerSection from "components/homepage/Banner";
import CarouselSection from "components/homepage/Carousel";
import FeatureSection from "components/homepage/Feature";
import RoadmapSection from "components/homepage/Roadmap";
import LaunchInfoSection from "components/homepage/Launch";
const Swiper = dynamic(() => import("components/homepage/Swiper"));
import { FEATURES, ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";
import theme from "styles/theme";

const sections = [
  <BannerSection />,
  <CarouselSection />,
  <FeatureSection features={FEATURES} />,
  <RoadmapSection roadmap={ROADMAP} />,
  <LaunchInfoSection mintDate={MINT_DATE} dateOptions={DATE_OPTIONS} />,
];
const Index = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: ["auto 1fr"],
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
