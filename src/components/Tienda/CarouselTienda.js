import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
} from "mdbreact";
import "./Tienda.css";

const carouseltienda = () => {
  return (
    <MDBContainer className="carousel-container-tienda">
      <MDBCarousel
        activeItem={1}
        length={3}
        // showControls={true}
        // showIndicators={true}

        className="carrouseltienda"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="img1 d-block w-100 h-200"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-comederos_slide-web.png"
                alt="First slide"
              />
              <MDBMask />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="img1 d-block w-100"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-transportadoras_slide-web.png"
                alt="Second slide"
              />
              <MDBMask />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className=" img1 d-block w-100"
                src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/slide_vitalmas3-unik.png"
                alt="Third slide"
              />
              <MDBMask />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBCol>
        <MDBCard className="imgperro">
          <MDBCardBody className="perro">
            <h5 className="veterinaria">Veterinaria Puerco Araña</h5>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
    // <MDBContainer fluid>
    //   <MDBCarousel
    //     activeItem={1}
    //     length={3}
    //     showControls={false}
    //     showIndicators={false}
    //     className="z-depth-1 d-flex mt-5"
    //     slide
    //   >
    //     <MDBCarouselInner>
    //       <MDBCarouselItem itemId="1">
    //         <MDBView>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-comederos_slide-web.png"
    //             alt="First slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //       <MDBCarouselItem itemId="2">
    //         <MDBView>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/promo-transportadoras_slide-web.png"
    //             alt="Second slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //       <MDBCarouselItem itemId="3">
    //         <MDBView>
    //           <img
    //             className="d-block w-100"
    //             src="https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/leoslideshow/slide_vitalmas3-unik.png"
    //             alt="Third slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //     </MDBCarouselInner>
    //   </MDBCarousel>
    // </MDBContainer>
  );
};

export default carouseltienda;
