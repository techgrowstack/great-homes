import Image from "next/image";

const FeatureSectionFour = () => {
  return (
    <div className="block-feature-five position-relative z-1 bg-pink pt-100 lg-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-225 xl-mt-200 lg-mt-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto">
            <div className="title-one text-center mb-35 lg-mb-20">
              <h3>
                We’re here to help <br /> you get your{" "}
                <span>
                  dream home
                  <Image
                    src="/images/shape/title_shape_07.svg"
                    alt="Title Shape"
                    width={24}
                    height={24}
                  />
                </span>
              </h3>
              <p className="fs-24 color-dark">
                It’s easy to start with us with these simple steps
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-11 m-auto">
            <div className="row gx-xl-5 justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="card-style-one text-center mt-40">
                  <Image
                    src="/images/icon/icon_07.svg"
                    alt="Create Account Icon"
                    width={220}
                    height={220}
                    className="m-auto icon"
                  />
                  <h5 className="mt-50 lg-mt-30 mb-15">Create Account</h5>
                  <p>
                    It’s very easy to open an account and start your journey.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card-style-one text-center mt-40 arrow position-relative">
                  <Image
                    src="/images/icon/icon_08.svg"
                    alt="Find Home Icon"
                    width={220}
                    height={220}
                    className="m-auto icon"
                  />
                  <h5 className="mt-50 lg-mt-30 mb-15">Find Home</h5>
                  <p>
                    Complete your profile with all the info to get attention of
                    clients.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card-style-one text-center mt-40">
                  <Image
                    src="/images/icon/icon_09.svg"
                    alt="Quick Process Icon"
                    width={220}
                    height={220}
                    className="m-auto icon"
                  />
                  <h5 className="mt-50 lg-mt-30 mb-15">Quick Process</h5>
                  <p>
                    Apply & get your preferable jobs with all the requirements
                    and get it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/shape/shape_07.svg"
        alt="Background Shape 1"
        width={336}
        height={866}
        className="shapes shape_01"
      />
      <Image
        src="/images/shape/shape_08.svg"
        alt="Background Shape 2"
        width={336}
        height={866}
        className="shapes shape_02"
      />
    </div>
  );
};

export default FeatureSectionFour;
