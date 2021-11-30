import React from 'react';
import { BiEnvelopeOpen, BiMap, BiPhoneCall } from "react-icons/bi";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="container m-5">
            <div className="d-flex align-items-center row mx-1 " style={{ marginTop: '150px' }}>
                <div className="col-sm-12 col-lg-7 d-flex align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '64px' }} />
                        <p style={{ transform: 'rotate(90deg)', marginTop: '58px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>CONTACT</p>
                    </div>
                    <div>
                        <div className="d-flex align-items-start">
                            <BiEnvelopeOpen style={{ color: 'aqua', fontSize: '25px' }} className="me-3" />
                            <p>rasel.nurhossain4@gmail.com</p>
                        </div>
                        <div className="d-flex align-items-start">
                            <BiPhoneCall style={{ color: 'aqua', fontSize: '25px' }} className="me-3" />
                            <p>+8801842753828</p>
                        </div>
                        <div className="d-flex align-items-start">
                            <BiMap style={{ color: 'aqua', fontSize: '25px' }} className="me-3" />
                            <p>Chattogram, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-5">
                    <form>
                        <input name="name" type="text" class="feedback-input" placeholder="Name" />
                        <input name="email" type="text" class="feedback-input" placeholder="Email" />
                        <textarea name="text" class="feedback-input" placeholder="Message"></textarea>
                        <input type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;