import Image from "next/image";
import Link from "next/link";

const FancyBannerThree = () => {
  return (
    <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-md-8 m-auto">
            <div className="title-one mb-45 md-mb-30">
              <h2>
                Any Inquiry?{" "}
                <span>
                  Feel free
                  <Image
                    src="/images/shape/title_shape_08.svg"
                    alt="Title Shape"
                    width={24}
                    height={24}
                  />
                </span>{" "}
                To contact Us.
              </h2>
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="btn-five text-uppercase">SEND MESSAGE</a>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/assets/ils_02.svg"
        alt="Illustration"
        width={1200}
        height={500}
        className="shapes w-100 illustration"
      />
    </div>
  );
};

export default FancyBannerThree;
