import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const { modal1} = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Modal Form'
          href='https://mdbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Simple modal login' flexCenter>
          <MDBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login Form
          </MDBBtn>
          <MDBModal isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(1)}
            >
              Sign in
            </MDBModalHeader>
            <MDBModalBody>
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
                  validate
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn onClick={this.toggle(1)}>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
        </MDBContainer>
    );
  }
}

export default ModalFormPage;

