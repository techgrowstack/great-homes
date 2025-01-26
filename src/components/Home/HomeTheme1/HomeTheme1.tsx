"use client";
import { useState, useEffect } from 'react';
import Posts from '@/components/Posts';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { Button, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '@/redux/slices/authSlice';
import Link from 'next/link';
import HeroBanner from './components/HeroBanner';
import FeedbackSection from './components/FeedbackSection';
import FeatureSectionTwo from './components/FeatureSectionTwo';
import FeatureSectionOne from './components/FeatureSectionOne';
import PropertyLocationSection from './components/PropertyLocationSection';
import PropertyListing from './components/PropertyListing';
import FancyBanner from './components/FancyBanner';
import AgentSection from './components/AgentSection';
import FeatureSectionThree from './components/FeatureSectionThree';
import FeatureSectionFour from './components/FeatureSectionFour';
import FancyBannerTwo from './components/FancyBannerTwo';
import FancyBannerThree from './components/FancyBannerThree';

export default function HomeTheme1() {
  const { isLoggedIn, displayName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(SET_ACTIVE_USER({ displayName: 'John Doe' }));
  };

  const handleLogout = () => {
    dispatch(REMOVE_ACTIVE_USER());
  };

  return (
    <MainLayout>
      <HeroBanner />
      <FeedbackSection />
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <PropertyLocationSection />
      <PropertyListing />
      <FancyBanner />
      <AgentSection />
      <FeatureSectionThree />
      <FeatureSectionFour />
      <FancyBannerTwo />
      <FancyBannerThree />
    </MainLayout>
  );
}
