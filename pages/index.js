import React from "react";
import { Box } from "rebass";

import Header from "components/Header";
import BannerSection from "components/homepage/Banner";
import CarouselSection from "components/homepage/Carousel";
import FeatureSection from "components/homepage/Feature";
import RoadmapSection from "components/homepage/Roadmap";
import DaddyRoadmapSection from "components/homepage/DaddyRoadmap";
import LaunchInfoSection from "components/homepage/Launch";
import TeamSection from "components/homepage/Team";
import FaqsSection from "components/homepage/Faqs";
import BackstorySection from "components/homepage/Backstory";
import Footer from "components/Footer";
import {
  FEATURES,
  ROADMAP,
  MINT_DATE,
  DATE_OPTIONS,
  TEAM,
  FAQS,
  BACK_STORY,
  DADDY_ROADMAP,
} from "messages";

const sections = [
  <BannerSection />,
  <BackstorySection backStory={BACK_STORY} />,
  <CarouselSection />,
  <FeatureSection features={FEATURES} />,
  <TeamSection team={TEAM} />,
  <RoadmapSection roadmap={ROADMAP} />,
  <DaddyRoadmapSection roadmap={DADDY_ROADMAP} />,
  <FaqsSection faqs={FAQS} />,
  <LaunchInfoSection mintDate={MINT_DATE} dateOptions={DATE_OPTIONS} />,
  <Footer />,
];
const Index = () => {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          display: "block",
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
