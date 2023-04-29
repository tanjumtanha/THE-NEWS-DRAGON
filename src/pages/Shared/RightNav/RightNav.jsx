import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-2'><FaGoogle />Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
            <div className='mt-4 mb-4'>
                <h4 className='mb-2'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary me-2'/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary me-2'/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-primary me-2'/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;