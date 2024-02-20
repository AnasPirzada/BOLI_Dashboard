import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const mainPage = () => {
  return (
    <Container className="m-2 mb-4 shadow rounded-3">
      <div className='p-4'>
        <p className='textColor' style={{ fontSize: '22px', fontWeight: '700' }}>
          Settings
        </p>

        <div className='mt-4'>
          <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>
            Your Profile Picture
          </p>
        </div>

        <div className='d-flex flex-column mt-2 justify-content-center align-items-center rounded-4 ' style={{ border: '1px dashed  #4C535F', backgroundColor: '#EDF2F6', width: '132px', height: '130px' }}>
          <img src='/gallery-add.svg' alt='' />
          <p className='text-center pt-2' style={{ color: '#4C535F', fontSize: '15px', fontWeight: '500' }}>
            Upload your <br /> photo
          </p>
        </div>

        <hr style={{ border: '2px solid #E0E4EC' }} />

        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>Full name</p>
            <input type='text' className='rounded-3 p-2 w-100' style={{ backgroundColor: '#EDF2F6', border: '1px solid #E0E4EC', color: '#8D98AA', fontSize: '14px', fontWeight: '500' }} placeholder='Please enter your full name' />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>Email</p>
            <input type='text' className='rounded-3 p-2 w-100' style={{ backgroundColor: '#EDF2F6', border: '1px solid #E0E4EC', color: '#8D98AA', fontSize: '14px', fontWeight: '500' }} placeholder='Please enter your email' />
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} className='mt-4'>
            <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>Username</p>
            <input type='text' className='rounded-3 p-2 w-100' style={{ backgroundColor: '#EDF2F6', border: '1px solid #E0E4EC', color: '#8D98AA', fontSize: '14px', fontWeight: '500' }} placeholder='Please enter your username' />
          </Col>
          <Col sm={12} md={6} className='mt-4'>
            <p style={{ color: '#4C535F', fontSize: '16px', fontWeight: '500' }}>Phone number</p>
            <input type='text' className='rounded-3 p-2 w-100' style={{ backgroundColor: '#EDF2F6', border: '1px solid #E0E4EC', color: '#8D98AA', fontSize: '14px', fontWeight: '500' }} placeholder='+1  Please enter your phone number' />
          </Col>
        </Row>

        <div className='mt-5'>
          <div className='d-flex justify-content-start align-items-center'>
            <button className='rounded-3 p-2 border-0 text-white' style={{ backgroundColor: '#00BF63' }}>
              Update Profile
            </button>
            <p className='ms-3' style={{ fontSize: '18px', fontWeight: '500', color: '#4C535F' }}>
              Reset
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default mainPage;
