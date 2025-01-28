'use client';

import React, { useState } from 'react';

import Sidebar from './component/Sidebar';

const HeaderComponent2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <header className="theme-main-menu menu-overlay menu-style-two sticky-menu">
        <div className="inner-content gap-one">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <a href="index.html" className="d-flex align-items-center">
                  <img src="images/logo/logo_02.svg" alt="" />
                </a>
              </div>
              {/* logo */}
              <div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-flex align-items-center login-btn-one">
                    <i className="fa-regular fa-lock" />
                    <a
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      className="fw-500 tran3s"
                    >
                      Login{' '}
                      <span className="d-none d-sm-inline-block">
                        / Sign up
                      </span>
                    </a>
                  </li>
                  <li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                    <a
                      href="dashboard/add-property.html"
                      className="btn-two rounded-0"
                      target="_blank"
                    >
                      <span>Add Listing</span>{' '}
                      <i className="fa-thin fa-arrow-up-right" />
                    </a>
                  </li>
                  <li className="d-none d-xl-block">
                    <button
                      className="sidenavbtn rounded-circle tran3s"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#sideNav"
                      aria-controls="sideNav"
                      onClick={prevState => setIsSidebarOpen(!prevState)}
                    >
                      <i className="fa-sharp fa-light fa-bars-filter" />
                    </button>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav align-items-lg-center">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <a href="index.html" className="d-block">
                          <img src="images/logo/logo_02.svg" alt="" />
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dashboard-menu">
                      <a
                        className="nav-link"
                        href="dashboard/dashboard-index.html"
                        target="_blank"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="index.html" className="dropdown-item">
                            <span>Home 01</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html" className="dropdown-item">
                            <span>Home 02</span>
                          </a>
                        </li>
                        {/* Add other home pages */}
                      </ul>
                    </li>
                    <li className="nav-item dropdown mega-dropdown-sm">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Listing
                      </a>
                      <ul className="dropdown-menu">
                        <li className="row gx-1">
                          {/* Add Listing Type Columns */}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown mega-dropdown-sm">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li className="row gx-1">
                          {/* Add Essential, Features, and Other Columns */}
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog_01.html" className="dropdown-item">
                            <span>Blog Grid</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog_02.html" className="dropdown-item">
                            <span>Blog List</span>
                          </a>
                        </li>
                        {/* Add other blog pages */}
                      </ul>
                    </li>
                    <li className="d-md-none ps-2 pe-2 mt-20">
                      <a
                        href="dashboard/add-property.html"
                        className="btn-two w-100 rounded-0"
                        target="_blank"
                      >
                        <span>Add Listing</span>{' '}
                        <i className="fa-thin fa-arrow-up-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
  );
};

export default HeaderComponent2;
