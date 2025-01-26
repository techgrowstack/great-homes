import React from 'react';

const PropertyListing: React.FC = () => {
  const listings = [
    {
      id: 1,
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: '1370 sqft',
      beds: '03 bed',
      baths: '02 bath',
      price: '$3,280/m',
      tag: 'FOR RENT',
      images: ['images/listing/img_01.jpg', 'images/listing/img_01.jpg', 'images/listing/img_01.jpg'],
      link: 'listing_details_01.html',
    },
    {
      id: 2,
      title: 'White House villa',
      address: 'Muza link road, ca, usa',
      sqft: '1270 sqft',
      beds: '02 bed',
      baths: '02 bath',
      price: '$28,100.00',
      tag: 'FOR SELL',
      images: ['images/listing/img_02.jpg', 'images/listing/img_03.jpg', 'images/listing/img_01.jpg'],
      link: 'listing_details_01.html',
    },
    {
      id: 3,
      title: 'Luxury villa in Dal lake.',
      address: 'Mirpur 10, Stadium',
      sqft: '1270 sqft',
      beds: '02 bed',
      baths: '02 bath',
      price: '$42,500.00',
      tag: 'FOR SELL',
      images: ['images/listing/img_03.jpg', 'images/listing/img_02.jpg', 'images/listing/img_01.jpg'],
      link: 'listing_details_01.html',
    },
    {
      id: 4,
      title: 'Blueberry villa',
      address: 'Mirpur 10, Stadium dhaka 1208',
      sqft: '1370 sqft',
      beds: '03 bed',
      baths: '02 bath',
      price: '$3,280/m',
      tag: 'FOR RENT',
      images: ['images/listing/img_04.jpg', 'images/listing/img_01.jpg', 'images/listing/img_02.jpg'],
      link: 'listing_details_01.html',
    }
  ];

  return (
    <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
      <div className="container">
        <div className="position-relative">
          <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3>New <span>Listings <img src="images/lazy.svg" data-src="images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span></h3>
            <p className="fs-22 mt-xs">Explore latest & featured properties for sale.</p>
          </div>
          <div className="row gx-xxl-5">
            {listings.map((listing) => (
              <div key={listing.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className={`tag ${listing.tag === 'FOR RENT' ? 'border-25' : 'sale border-25'}`}>{listing.tag}</div>
                      <div id={`carousel${listing.id}`} className="carousel slide">
                        <div className="carousel-indicators">
                          {listing.images.map((_, index) => (
                            <button
                              key={index}
                              type="button"
                              data-bs-target={`#carousel${listing.id}`}
                              data-bs-slide-to={index}
                              className={index === 0 ? 'active' : ''}
                              aria-current={index === 0 ? 'true' : undefined}
                              aria-label={`Slide ${index + 1}`}
                            />
                          ))}
                        </div>
                        <div className="carousel-inner">
                          {listing.images.map((image, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1000000">
                              <a href={listing.link} className="d-block"><img src={image} className="w-100" alt="..." /></a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a href={listing.link} className="title tran3s">{listing.title}</a>
                    <div className="address">{listing.address}</div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img src="images/lazy.svg" data-src="images/icon/icon_04.svg" alt="" className="lazy-img icon me-2" />
                        <span className="fs-16">{listing.sqft}</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img src="images/lazy.svg" data-src="images/icon/icon_05.svg" alt="" className="lazy-img icon me-2" />
                        <span className="fs-16">{listing.beds}</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img src="images/lazy.svg" data-src="images/icon/icon_06.svg" alt="" className="lazy-img icon me-2" />
                        <span className="fs-16">{listing.baths}</span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">{listing.price}</strong>
                      <a href={listing.link} className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
