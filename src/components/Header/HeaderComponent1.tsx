'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeaderComponent1 = () => {
  // Menu open state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Track the sticky state

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Add event listener for scroll to handle sticky menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Add the sticky class when scrolled down
      } else {
        setIsSticky(false); // Remove the sticky class when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${isSticky ? 'fixed' : ''}`}
    >
      <div className="alert-wrapper text-center">
        <p className="fs-16 m0 text-white">
          The{' '}
          <Link href="/listing_01" className="fw-500">
            flash sale
          </Link>{' '}
          goes on. The offer will end in — <span>This Sunday</span>
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
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="btn-one"
                  >
                    <i className="fa-regular fa-lock" /> <span>Login</span>
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-3">
                  <Link
                    href="/dashboard/add-property"
                    className="btn-two"
                    target="_blank"
                  >
                    <span>Add Listing</span>{' '}
                    <i className="fa-thin fa-arrow-up-right" />
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
                <span />
              </button>
              <div
                className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                id="navbarNav"
              >
                <ul className="navbar-nav align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <Link href="/" className="d-block">
                        <img src="/images/logo/logo_01.svg" alt="Logo" />
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dashboard-menu">
                    <Link
                      href="/dashboard/dashboard-index"
                      className="nav-link"
                      target="_blank"
                    >
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
                        <Link href="/" className="dropdown-item">
                          <span>Home 01</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home2" className="dropdown-item">
                          <span>Home 02</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home3" className="dropdown-item">
                          <span>Home 03</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home4" className="dropdown-item">
                          <span>Home 04</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home5" className="dropdown-item">
                          <span>Home 05</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home6" className="dropdown-item">
                          <span>Home 06</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/home7" className="dropdown-item">
                          <span>Home 07</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-sm">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Listing
                    </a>
                    <ul className="dropdown-menu">
                      <li className="row gx-1">
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Listing Type</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <Link
                                  href="/listing_01"
                                  className="dropdown-item"
                                >
                                  <span>Grid Sidebar-1</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/listing_05"
                                  className="dropdown-item"
                                >
                                  <span>Grid Sidebar-2</span>
                                </Link>
                              </li>
                              {/* More listing items */}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown mega-dropdown-sm">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="row gx-1">
                        <div className="col-lg-4">
                          <div className="menu-column">
                            <h6 className="mega-menu-title">Essential</h6>
                            <ul className="style-none mega-dropdown-list">
                              <li>
                                <Link
                                  href="/about_us_01"
                                  className="dropdown-item"
                                >
                                  <span>About us -1</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/about_us_02"
                                  className="dropdown-item"
                                >
                                  <span>About us -2</span>
                                </Link>
                              </li>
                              {/* More pages */}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent1;
