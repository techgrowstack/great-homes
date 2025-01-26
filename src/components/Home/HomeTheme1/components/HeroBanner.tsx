import Image from 'next/image';
import { Select } from '@mantine/core';

const HeroBanner = () => {
  return (
    <div className="hero-banner-one bg-pink z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
      <div className="container position-relative">
        <div className="row">
          <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto">
            <h1 className="hero-heading text-center wow fadeInUp">
              Get the ideal home for your{' '}
              <span className="d-inline-block position-relative">
                family{' '}
                <Image
                  src="/images/shape/shape_01.svg"
                  alt=""
                  className="lazy-img"
                  width={50}
                  height={50}
                />
              </span>
            </h1>
            <p className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">
              We’ve more than 745,000 apartments, place & plot.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-10 m-auto">
            <div className="search-wrapper-one layout-one bg position-relative">
              <div className="bg-wrapper">
                <form action="/listing_01.html">
                  <div className="row gx-0 align-items-center">
                    <div className="col-xl-3 col-lg-4">
                      <div className="input-box-one border-left">
                        <Select
                            variant="unstyled"
                            label="I’m looking to..."
                            placeholder="Select placeholder"
                            data={['Buy Apartments', 'Rent Condos', 'Sell Houses', 'Rent Industrial','Sell Villas']}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="input-box-one border-left">
                        <Select
                            variant="unstyled"
                            label="Location"
                            placeholder="Select placeholder"
                            data={['Dhanmondi, Dhaka', 'Acapulco, Mexico', 'Berlin, Germany', 'Cannes, France','Delhi, India', 'Giza, Egypt', 'Havana, Cuba']}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                      <div className="input-box-one border-left border-lg-0">
                      <Select
                            variant="unstyled"
                            label="Location"
                            placeholder="Price Range"
                            data={['$10,000 - $200,000', '$200,000 - $300,000', '$300,000 - $400,000']}
                        />
                      </div>
                    </div>
                    <div className="col-xl-2">
                      <div className="input-box-one lg-mt-10">
                        <button type="submit" className="fw-500 text-uppercase tran3s search-btn">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/assets/ils_01.svg"
        alt=""
        className="lazy-img shapes w-100 illustration"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default HeroBanner;
