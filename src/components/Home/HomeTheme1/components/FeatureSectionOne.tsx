import Image from "next/image";

const FeatureSectionOne = () => {
  return (
    <div className="block-feature-one mt-150 xl-mt-120">
      <div className="container">
        <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
          <h3>
            Unlock Homy's <span>advantages 
              <Image 
                src="/images/shape/title_shape_01.svg" 
                alt="" 
                width={345} 
                height={23} 
                className="lazy-img"
              />
            </span>
          </h3>
          <p className="fs-24">Your trusted real estate partner in every transaction.</p>
        </div>
        <div className="row gx-xl-5">
          <div className="col-md-4">
            <div className="card-style-one text-center wow fadeInUp mt-40">
              <Image 
                src="/images/icon/icon_01.svg" 
                alt="Buy a home" 
                width={220} 
                height={220} 
                className="lazy-img m-auto icon" 
              />
              <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Buy a home</div>
              <p className="fs-24 ps-xxl-4 pe-xxl-4">
                Explore Homy's 2 million+ homes and uncover your ideal living space.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
              <Image 
                src="/images/icon/icon_02.svg" 
                alt="Rent a home" 
                width={220} 
                height={220} 
                className="lazy-img m-auto icon" 
              />
              <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Rent a home</div>
              <p className="fs-24 ps-xxl-3 pe-xxl-3">
                Discover a rental you'll love on Homy, thanks to 35+ filters and tailored keywords.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
              <Image 
                src="/images/icon/icon_03.svg" 
                alt="Sell property" 
                width={220} 
                height={220} 
                className="lazy-img m-auto icon" 
              />
              <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Sell property</div>
              <p className="fs-24 ps-xxl-4 pe-xxl-4">
                List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionOne;
