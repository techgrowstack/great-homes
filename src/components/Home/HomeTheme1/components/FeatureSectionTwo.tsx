import Image from "next/image";
import Link from "next/link";

const FeatureSectionTwo = () => {
  return (
    <div className="block-feature-two mt-150 xl-mt-110">
      <div className="wrapper">
        <div className="row gx-xl-5">
          <div className="col-xxl-7 col-md-6 d-flex wow fadeInLeft">
            <div className="block-one w-100 h-100">
              <div className="position-relative z-1 h-100">
                <h3 className="mb-55">Secure your family's dream home.</h3>
                <Link href="https://www.youtube.com/embed/aXFSJTjVjw0" >
                  <div
                    className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle ms-3"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </Link>
                <div className="card-box text-center">
                  <h3 className="main-count fw-500">0<span className="counter">7</span>+</h3>
                  <p className="fs-20">Years Experience <br />with proud.</p>
                </div>
                <Image
                  src="/images/assets/screen_01.png"
                  alt="Screen"
                  width={260}
                  height={150}
                  className="lazy-img shapes screen_01"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-md-6 wow fadeInRight">
            <div className="block-two">
              <div className="bg-wrapper">
                <h4>Who we are?</h4>
                <p className="fs-22 mt-20">
                  Your premier partner in real estate. <br /> Transforming
                  properties into dreams. Let us guide you home with expertise.
                </p>
                <div className="counter-wrapper ps-xl-3 pb-30 mt-45 mb-50">
                  <div className="row">
                    <div className="col-6">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-500 color-dark">
                          <span className="counter">1.7</span>K+
                        </div>
                        <span>Completed Project</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-500 color-dark">
                          <span className="counter">1.3</span>mil+
                        </div>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-style-one fs-22 color-dark style-none">
                  <li>Loan & low Interest facility</li>
                  <li>Over 100k+ property & update regularly</li>
                  <li>Expert agent consultation</li>
                </ul>
                <div className="d-inline-flex flex-wrap align-items-center mt-15 md-mt-10">
                  <Link href="/about_us_01">
                    <div className="btn-two mt-20 me-4">
                      <span>More Details</span>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="btn-three mt-20">
                      <span>Request a Callback</span>{" "}
                      <i className="fa-light fa-arrow-right-long"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionTwo;
