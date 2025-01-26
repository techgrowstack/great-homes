import Image from "next/image";
import Link from "next/link";

const FeatureSectionThree = () => {
  return (
    <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex order-lg-last">
            <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100">
              <div className="title-one mb-60 lg-mb-40">
                <div className="upper-title">CB ESTIMATE</div>
                <h3>
                  Get quick <span>estimate</span>
                  <Image
                    src="/images/shape/title_shape_06.svg"
                    alt="Title Shape"
                    width={24}
                    height={24}
                  />{" "}
                  on your home.
                </h3>
                <p className="fs-24 color-dark">
                  Master your property's valuation for a poised entry into the
                  real estate market, armed with self-assurance and insight.
                </p>
              </div>
              <form>
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="form-input"
                />
                <button className="form-button">Find out</button>
              </form>
              <div className="fs-16 mt-10 opacity-75">
                *For accurate info please{" "}
                <Link
                  href="/contact"
                  className="fst-italic color-dark text-decoration-underline"
                >
                  contact us.
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5">
              <div
                className="img-bg"
                style={{
                  backgroundImage: "url(/images/media/img_11.jpg)",
                }}
              ></div>
              <div className="card-one">
                <div className="text text-center z-1">
                  <h6>Your estimate is in!</h6>
                  <h3>$378,30.00</h3>
                </div>
                <Image
                  src="/images/assets/screen_12.png"
                  alt="Estimate Screen"
                  width={384}
                  height={288}
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionThree;
