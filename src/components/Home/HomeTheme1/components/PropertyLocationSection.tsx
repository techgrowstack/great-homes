import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const PropertyLocationSection = () => {
  const settings = {
    infinite: true, // Set to true to enable infinite scrolling
    speed: 500,
    slidesToShow: 4, // Show 4 items by default
    slidesToScroll: 1,
    arrows: true, // Enable default arrows
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1200, // For screens larger than 1200px, display 4 items
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For screens smaller than 1200px but larger than 992px
        settings: {
          slidesToShow: 3, // Show 3 items
        },
      },
      {
        breakpoint: 768, // For screens smaller than 992px but larger than 768px
        settings: {
          slidesToShow: 2, // Show 2 items
        },
      },
      {
        breakpoint: 480, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 item
        },
      },
    ],
    centerMode: false, // Prevent center mode, which can cause alignment issues
    focusOnSelect: true, // Makes the slider focus on the selected slide
  };

  return (
    <div className="block-feature-three mt-150 xl-mt-120">
      <div className="container">
        <div className="position-relative z-1">
          <div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
            <h3>
              Explore Popular <span>
                Location <Image src="/images/shape/title_shape_02.svg" alt="Title Shape" width={262} height={20} />
              </span>
            </h3>
            <p className="fs-22">Explore the latest listings & projects in diverse areas</p>
          </div>

          <Slider {...settings} className="property-location-slider-one">
            {/* Slider items */}
            {['img_05.jpg', 'img_06.jpg', 'img_07.jpg', 'img_08.jpg', 'img_09.jpg'].map((img, index) => (
              <div className="item" key={index}>
                <div className="location-card-wrap">
                  <div
                    className="location-card-one position-relative z-1 d-flex align-items-end"
                    style={{ backgroundImage: `url(/images/media/${img})` }}
                  >
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">{`Location ${index + 1}`}</h5>
                      <p className="text-white fw-light">{`${(index + 1) * 100} Properties`}</p>
                    </div>
                    <Link href="/listing_01" passHref>
                      <div className="stretched-link" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Component
const CustomArrow = ({ direction, onClick }: { direction: 'next' | 'prev'; onClick: () => void }) => {
  return (
    <button
    className={`slick-arrow ${direction === 'next' ? 'next-arrow end-0' : 'prev-arrow start-0'} 
    position-absolute top-50 translate-middle-y rounded-circle bg-white shadow border-0 d-flex justify-content-center align-items-center`}
    aria-label={direction === 'next' ? 'Next' : 'Previous'}
    onClick={onClick} // Trigger slider action
    style={{
      height: '50px',
      width: '50px',
      zIndex: 10,
    }}
  >
    <i
      className={`fa-sharp fa-light fa-angle-${direction === 'next' ? 'right' : 'left'}`}
      style={{ fontSize: '20px', color: '#333' }}
    />
  </button>
  );
};

export default PropertyLocationSection;
