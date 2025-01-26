import Image from "next/image";

const FancyBannerTwo = () => {
  return (
    <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
              <h3 className="text-white m-0">
                Start your{" "}
                <span>
                  Journey
                  <Image
                    src="/images/shape/title_shape_06.svg"
                    alt="Title Shape"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                As a Retailer.
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-wrapper me-auto ms-auto me-lg-0">
              <form action="#">
                <input type="email" placeholder="Email address" />
                <button>Get Started</button>
              </form>
              <div className="fs-16 mt-10 text-white">
                Already an Agent?{" "}
                <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Sign in.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTwo;
