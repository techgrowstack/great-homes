'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'; // This is used to import createPortal.
import { createPortal } from 'react-dom';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const container = document.createElement('div');
    container.id = 'sidebar-root';
    document.body.appendChild(container);
    setPortalContainer(container);

    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  if (!portalContainer) {
    return null;
  }
  return (
    <>
      {createPortal(
        <div
          className="offcanvas offcanvas-end sidebar-nav"
          data-bs-backdrop="static"
          tabIndex={-1}
          id="sideNav"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <div className="logo order-lg-0">
              <Link href="/" className="d-flex align-items-center">
                <img src="/images/logo/logo_02.svg" alt="Logo" />
              </Link>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="wrapper mt-60">
            <div className="d-flex flex-column h-100">
              <div className="property-block">
                <h4 className="title pb-25">Featured Listing</h4>
                <div className="row">
                  <div className="col-12">
                    <div className="listing-card-one shadow-none style-two mb-40">
                      <div className="img-gallery">
                        <div className="position-relative overflow-hidden">
                          <div className="tag bg-white text-dark fw-500">
                            FOR RENT
                          </div>
                          <img
                            src="/images/listing/img_69.jpg"
                            className="w-100"
                            alt="Listing Image"
                          />
                          <div className="img-slider-btn">
                            03 <i className="fa-regular fa-image" />
                            <a
                              href="/images/listing/img_large_01.jpg"
                              className="d-block"
                              data-fancybox="img1"
                              data-caption="Blueberry villa"
                            />
                            <a
                              href="/images/listing/img_large_02.jpg"
                              className="d-block"
                              data-fancybox="img1"
                              data-caption="Blueberry villa"
                            />
                            <a
                              href="/images/listing/img_large_03.jpg"
                              className="d-block"
                              data-fancybox="img1"
                              data-caption="Blueberry villa"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="property-info d-flex justify-content-between align-items-end pt-30">
                        <div>
                          <strong className="price fw-500 color-dark fs-3">
                            $2,210/ <sub>m</sub>
                          </strong>
                          <div className="address pt-5 m0">
                            6391 Elgin St. Celina
                          </div>
                        </div>
                        <a href="#" className="btn-four mb-5">
                          <i className="bi bi-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Repeat the above block for additional listings */}
                  {/* You can map over an array of property data for scalability */}
                </div>
              </div>
              <div className="address-block mt-50">
                <h4 className="title pb-15">Our Address</h4>
                <p>
                  Chowrastar Mirpur- 1210, Sangu <br />
                  River, Dhaka
                </p>
                <p>
                  Urgent issue? call us at <br />
                  <a href="tel:310.841.5500">310.841.5500</a>
                </p>
              </div>
              <ul className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-viber" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>,
        portalContainer
      )}
    </>
  );
};

export default Sidebar;
