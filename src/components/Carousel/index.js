import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";

//styles
import './style.css'

//Images
import {
  img1,
  img2,
  img3,
  banner,
} from "../../assets/img/index";

const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={4}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block image-carousel w-100"
                src={img1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block image-carousel w-100"
                src={img2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block image-carousel w-100"
                src={img3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block image-carousel w-100"
                src={banner}
                alt="banner"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}


export default CarouselPage;
