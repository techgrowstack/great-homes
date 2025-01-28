'use client';


import MainLayout from '@/layouts/MainLayout/MainLayout';

import HeroBanner from './components/HeroBanner';
import FeatureSectionTwo from './components/FeatureSectionTwo';
import FeatureSectionOne from './components/FeatureSectionOne';
import PropertyListing from './components/PropertyListing';
import FancyBanner from './components/FancyBanner';
import FeatureSectionThree from './components/FeatureSectionThree';
import FeatureSectionFour from './components/FeatureSectionFour';
import FancyBannerTwo from './components/FancyBannerTwo';
import FancyBannerThree from './components/FancyBannerThree';

export default function HomeTheme1() {

  return (
    <MainLayout>
      <HeroBanner />
      {/* <FeedbackSection /> */}
      <FeatureSectionOne />
      <FeatureSectionTwo />
      {/* <PropertyLocationSection /> */}
      <PropertyListing />
      <FancyBanner />
      {/* <AgentSection /> */}
      <FeatureSectionThree />
      <FeatureSectionFour />
      <FancyBannerTwo />
      <FancyBannerThree />
    </MainLayout>
  );
}