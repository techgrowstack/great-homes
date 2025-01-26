import Image from "next/image";
import Link from "next/link";

const FooterComponent1 = () => {
  return (
    <div className="footer-one">
      <div className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="footer-intro">
                <div className="bg-wrapper">
                  <div className="logo mb-20">
                    <Link href="/">
                      <Image
                        src="/images/logo/logo_01.svg"
                        alt="Logo"
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div>
                  <p className="mb-60 lg-mb-40 md-mb-20">
                    11910 Clyde Rapid Suite 70, Willyand, Virginia, United States
                  </p>
                  <h6>CONTACT</h6>
                  <Link
                    href="mailto:homyreal@demo.com"
                    className="email fs-24 text-decoration-underline tran3s mb-70 lg-mb-50"
                  >
                    homyreal@demo.com
                  </Link>
                  <ul className="style-none d-flex align-items-center social-icon">
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-square-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-square-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex flex-wrap">
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-50">
                  <h5 className="footer-title">Links</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/membership" target="_blank">
                        Membership
                      </Link>
                    </li>
                    <li>
                      <Link href="/about_us_01">About Company</Link>
                    </li>
                    <li>
                      <Link href="/blog_01">Blog</Link>
                    </li>
                    <li>
                      <Link href="/blog_02">Explore Careers</Link>
                    </li>
                    <li>
                      <Link href="/pricing_02">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/dashboard-index" target="_blank">
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-30">
                  <h5 className="footer-title">Legal</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/faq">Terms & conditions</Link>
                    </li>
                    <li>
                      <Link href="/faq">Cookie</Link>
                    </li>
                    <li>
                      <Link href="/faq">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq’s</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav mt-100 lg-mt-80 xs-mt-30">
                  <h5 className="footer-title">New Listing</h5>
                  <ul className="footer-nav-link style-none">
                    <li>
                      <Link href="/listing_01">Buy Apartments</Link>
                    </li>
                    <li>
                      <Link href="/listing_02">Buy Condos</Link>
                    </li>
                    <li>
                      <Link href="/listing_03">Rent Houses</Link>
                    </li>
                    <li>
                      <Link href="/listing_04">Rent Industrial</Link>
                    </li>
                    <li>
                      <Link href="/listing_05">Buy Villas</Link>
                    </li>
                    <li>
                      <Link href="/listing_06">Rent Office</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent1;