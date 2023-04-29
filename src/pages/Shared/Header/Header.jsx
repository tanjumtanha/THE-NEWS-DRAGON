import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 mb-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.......Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;