import Image from "next/image";
import Slider from "react-slick";

const FeedbackSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const feedbackData = [
    {
      name: "Jonathan Harry",
      location: "Milan, Italy",
      image: "/images/media/img_01.jpg",
      ratingImage: "/images/assets/rating_01.png",
      ratingText: "13k rating",
      ratingValue: "4.7 Rating",
      feedback:
        "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
    },
    {
      name: "Sofia Rena",
      location: "New York, USA",
      image: "/images/media/img_02.jpg",
      ratingImage: "/images/assets/rating_01.png",
      ratingText: "10k rating",
      ratingValue: "4.5 Rating",
      feedback:
        "People who are sentinels are definitely the working very hard now, so that they can enjoy the fruits.",
    },
    {
      name: "Rashed Kabir",
      location: "Dhaka, BD",
      image: "/images/media/img_03.jpg",
      ratingImage: "/images/assets/rating_01.png",
      ratingText: "11k rating",
      ratingValue: "4.8 Rating",
      feedback:
        "They are very strict about themselves and their work, and do not have a carefree attitude",
    },
  ];

  return (
    <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
      <div className="main-content m-auto">
        <Slider {...settings}>
          {feedbackData.map((item, index) => (
            <div key={index} className="item">
              <div className="feedback-block-one text-center">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-circle m-auto avatar"
                    />
                    <h6 className="fs-20 m0 pt-10">{item.name}</h6>
                    <span className="fs-16">{item.location}</span>
                  </div>
                  <div className="col-md-6">
                    <blockquote>{item.feedback}</blockquote>
                  </div>
                  <div className="col-md-3">
                    <Image
                      src={item.ratingImage}
                      alt="Rating"
                      width={50}
                      height={50}
                      className="m-auto"
                    />
                    <p className="text-center m0 pt-10">
                      <span className="fw-500 color-dark">{item.ratingText}</span>{" "}
                      ({item.ratingValue})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeedbackSection;
