import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCol,
} from "mdbreact";
import "./Tienda.css";

const carouseltienda = () => {
  return (
    <MDBContainer  className="d-flex">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="carrouseltienda"
      >
        <MDBCarouselInner >
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="img1 d-block w-100 h-200"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-comederos_slide-web.png"
                alt="First slide"
              />
              <MDBMask  />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Tienda Online</h3>
              <p>Mira nuestras mejores promos</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="img1 d-block w-100"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-transportadoras_slide-web.png"
                alt="Second slide"
              />
              <MDBMask  />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className=" img1 d-block w-100"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/slide_vitalmas3-unik.png"
                alt="Third slide"
              />
              <MDBMask/>
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBCol >
      <MDBCard className="imgperro">
        <MDBCardBody >
          <MDBBtn className="boton" href="#">Whatsapp</MDBBtn>
          </MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default carouseltienda;
