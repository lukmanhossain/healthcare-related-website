import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=" footer mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 pt-5 pb-5">
                    <div className="cols">
                        <h3>Contact Us:</h3>
                        <h5>122/2 Rajnogor Area, Habiganj, Bangladesh</h5>
                        <h5>Phone Number: 01700000001</h5>
                    </div>
                    <div className="cols">
                        <h3>Our Branches:</h3>
                        <h5>MohaKhali DOH, Dhaka</h5>
                        <h5>Habiganj Town, Habiganj</h5>
                        <h5>Jalalabad Cantonment, Sylhet</h5>
                    </div>
                    <div className="cols">
                        <h3>Services:</h3>
                        <h5>Diagnostics, Treatment,</h5>
                        <h5>Surgery, Emergency,</h5>
                        <h5>Vaccine, Doctor Checkup.</h5>
                    </div>
                </div>
                <footer className="pb-5">
                    © 2021 Health Care Hospital. All rights reserved
                </footer>
            </div>
        </div>
    );
};

export default Footer;