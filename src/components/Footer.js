import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className="footer bg-gray-600  pb-0">
            <div className="footer-content">
                <p className='text-center pt-5'>© 2024 ProFoods. All rights reserved.</p>
                <p className="flex justify-center items-center ml-2 mr-3 pb-5">Follow us on:
                    <a className="px-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a> |
                    <a className="px-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-facebook"></i></a> |
                    <a className="px-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-instagram"></i></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
