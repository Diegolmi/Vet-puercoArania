<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
<<<<<<< HEAD
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';
=======
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
<<<<<<< HEAD
    modal5: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
=======
    modal5: false,
  };

  toggle = (nr) => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
    });
  };

  render() {
<<<<<<< HEAD
    const { modal1} = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Modal Form'
          href='https://mdbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Simple modal login' flexCenter>
=======
    const { modal1 } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title="Modal Form"
          href="https://mdbootstrap.com/docs/react/modals/basic/"
        />

        <SectionContainer header="Simple modal login" flexCenter>
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
          <MDBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login Form
          </MDBBtn>
          <MDBModal isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader
<<<<<<< HEAD
              className='text-center'
              titleClass='w-100 font-weight-bold'
=======
              className="text-center"
              titleClass="w-100 font-weight-bold"
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
              toggle={this.toggle(1)}
            >
              Sign in
            </MDBModalHeader>
            <MDBModalBody>
<<<<<<< HEAD
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Type your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Type your password'
                  icon='lock'
                  group
                  type='password'
=======
              <form className="mx-3 grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
                  validate
                />
              </form>
            </MDBModalBody>
<<<<<<< HEAD
            <MDBModalFooter className='justify-content-center'>
=======
            <MDBModalFooter className="justify-content-center">
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
              <MDBBtn onClick={this.toggle(1)}>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
<<<<<<< HEAD
        </MDBContainer>
=======
      </MDBContainer>
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
    );
  }
}

export default ModalFormPage;
<<<<<<< HEAD

=======
>>>>>>> 9702e523b21e5fecc2debfd609a1a143461ce8f8
