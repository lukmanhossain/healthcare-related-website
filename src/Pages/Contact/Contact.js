import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact">
            <form className="contact-form p-3">
                <h1>Contact With Us</h1>
                <h3>For Taking Our Service. Please Fillup this form.</h3>
                <div className="row mb-3">
                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Name :</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlfor="inputEmail3" className="col-sm-2 col-form-label">Email Address :</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlfor="inputPassword3" className="col-sm-2 col-form-label">Phone Number :</label>
                    <div className="col-sm-10">
                        <input className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <h6 className="p-3"> NB: If you fillup this form, You always get notify and updated with our activitys. </h6>
            </form>
        </div>
    );
};

export default Contact;