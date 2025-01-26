import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const AgentSection = () => {
  const agents = [
    {
      name: "Mark Filo",
      title: "CEO & Founder",
      img: "/images/agent/img_01.jpg",
      link: "/agent_details",
    },
    {
      name: "Chris Matial",
      title: "Retailer",
      img: "/images/agent/img_02.jpg",
      link: "/agent_details",
    },
    {
      name: "Jubayer Al Hasan",
      title: "Marketing Expert",
      img: "/images/agent/img_03.jpg",
      link: "/agent_details",
    },
    {
      name: "Jannatul Ferdaus",
      title: "Broker",
      img: "/images/agent/img_04.jpg",
      link: "/agent_details",
    },
    {
      name: "Chris Matial",
      title: "Broker",
      img: "/images/agent/img_05.jpg",
      link: "/agent_details",
    },
  ];

  // Slider settings for responsiveness
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="agent-section-one position-relative z-1 mt-150 xl-mt-120">
      <div className="container">
        <div className="position-relative">
          <div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
            <h3>
              Our <span>Agents</span>
              <Image
                src="/images/shape/title_shape_05.svg"
                alt="Title Shape"
                width={24}
                height={24}
              />
            </h3>
            <p className="fs-22 mt-xs">
              Lorem is placeholder text commonly used graphic
            </p>
          </div>

          <div className="wrapper position-relative z-1">
            <Slider {...sliderSettings}>
              {agents.map((agent, index) => (
                <div key={index}>
                  <div className="agent-card-one position-relative p-4">
                    <div className="img border-20">
                      <Image
                        src={agent.img}
                        alt={agent.name}
                        width={330}
                        height={400}
                        className="w-100 tran5s"
                      />
                    </div>
                    <div className="text-center">
                      <h6>{agent.name}</h6>
                      <Link href={agent.link}>{agent.title}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="section-btn text-center md-mt-60">
            <Link href="/agent" className="btn-one fw-normal">
              Meet Entire Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSection;
