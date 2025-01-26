"use client"
import { useState } from 'react';
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
  // Menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, displayName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(SET_ACTIVE_USER({ displayName: 'John Doe' }));
  };

  const handleLogout = () => {
    dispatch(REMOVE_ACTIVE_USER());
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <MainLayout>
      <header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
        <div className="alert-wrapper text-center">
          <p className="fs-16 m0 text-white">
            The <Link href="/listing_01" className="fw-500">flash sale</Link> goes on. The offer will end in — <span>This Sunday</span>
          </p>
        </div>
        <div className="inner-content gap-one">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <img src="/images/logo/logo_01.svg" alt="Logo" />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one">
                      <i className="fa-regular fa-lock"></i> <span>Login</span>
                    </a>
                  </li>
                  <li className="d-none d-md-inline-block ms-3">
                    <Link href="/dashboard/add-property" className="btn-two" target="_blank">
                      <span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className={`navbar-toggler d-block d-lg-none ${isMenuOpen ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded={isMenuOpen ? 'true' : 'false'}
                  onClick={toggleMenu}
                >
                  <span></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                  <ul className="navbar-nav align-items-lg-center">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <img src="/images/logo/logo_01.svg" alt="Logo" />
                        </Link>
                      </div>
                    </li>
                    <li className="nav-item dashboard-menu">
                      <Link href="/dashboard/dashboard-index" className="nav-link" target="_blank">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/index" className="dropdown-item">
                            <span>Home 01</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-2" className="dropdown-item">
                            <span>Home 02</span>
                          </Link>
                        </li>
                        {/* More dropdown items */}
                      </ul>
                    </li>
                    {/* More menu items */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

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
