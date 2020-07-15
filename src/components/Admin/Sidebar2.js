import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
=======
import {
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8

class Sidebar2 extends Component {
  state = {
    sideNavLeft: false,
<<<<<<< HEAD
  }

sidenavToggle = sidenavId => () => {
  const sidenavNr = `sideNav${sidenavId}`
  this.setState({
    [sidenavNr]: !this.state[sidenavNr]
  });
};

render() {
=======
  };

  sidenavToggle = (sidenavId) => () => {
    const sidenavNr = `sideNav${sidenavId}`;
    this.setState({
      [sidenavNr]: !this.state[sidenavNr],
    });
  };

  render() {
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
    return (
      <Router>
        <MDBContainer>
          <MDBBtn onClick={this.sidenavToggle("Left")}>
            <MDBIcon size="lg" icon="bars" />
          </MDBBtn>
<<<<<<< HEAD
          <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
            className="sn-bg-1">
            <li>
              <div className="logo-wrapper sn-ad-avatar-wrapper">
                <a href="#!">
                  <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
=======
          <MDBSideNav
            slim
            fixed
            mask="rgba-blue-strong"
            triggerOpening={this.state.sideNavLeft}
            breakWidth={1300}
            className="sn-bg-1"
          >
            <li>
              <div className="logo-wrapper sn-ad-avatar-wrapper">
                <a href="#!">
                  <img
                    alt=""
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    className="rounded-circle"
                  />
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
                  <span>Anna Deynah</span>
                </a>
              </div>
            </li>

            <MDBSideNavNav>
              <MDBSideNavLink to="/other-page" topLevel>
<<<<<<< HEAD
                <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
              <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
=======
                <MDBIcon icon="pencil-alt" className="mr-2" />
                Submit listing
              </MDBSideNavLink>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog"
                icon="chevron-right"
              >
                <MDBSideNavLink>Submit listing</MDBSideNavLink>
                <MDBSideNavLink>Registration form</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Instruction"
                id="instruction"
                icon="hand-pointer"
                href="#"
              >
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
                <MDBSideNavLink>For bloggers</MDBSideNavLink>
                <MDBSideNavLink>For authors</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about" icon="eye">
                <MDBSideNavLink>Instruction</MDBSideNavLink>
                <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
              </MDBSideNavCat>
              <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                <MDBSideNavLink>FAQ</MDBSideNavLink>
                <MDBSideNavLink>Write a message</MDBSideNavLink>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
        </MDBContainer>
      </Router>
    );
  }
}

<<<<<<< HEAD
export default Sidebar2;
=======
export default Sidebar2;
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
