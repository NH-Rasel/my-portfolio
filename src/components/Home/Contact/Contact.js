import React from 'react';
import { BiEnvelopeOpen, BiMap, BiPhoneCall } from "react-icons/bi";
import { useForm } from "react-hook-form";
import './Contact.css';


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        alert(`Thank you for your message from ${data.email}`);
        const templateId = 'template_jbe4f3c';
        const serviceID = 'service_k8y6lsc';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        e.target.reset();
    }
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occur:', err))
    }
    return (
        <div id="contact" className="container m-5">
            <div className="d-flex align-items-center row mx-1 " style={{ marginTop: '150px' }}>
                <div className="col-sm-12 col-lg-7 d-flex align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <hr style={{ transform: 'rotate(90deg)', width: '100px', marginTop: '64px' }} />
                        <p style={{ transform: 'rotate(-90deg)', marginTop: '58px', border: '1px solid aqua', borderRadius: '8px', padding: '8px', color: 'aqua' }}>CONTACT</p>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            name="name"
                            class="feedback-input"
                            placeholder="Name"
                            {...register("name", {
                                required: true
                            })
                            }
                        /><br />
                        {errors.name?.type === 'required' && errors.name.message}<br />
                        <input
                            name="email"
                            class="feedback-input"
                            placeholder="Email"
                            {...register("email", {
                                required: true
                            })
                            }
                        /><br />
                        {errors.email?.type === 'required' && errors.email.message}<br />
                        <textarea
                            name="text"
                            class="feedback-input"
                            placeholder="Message"
                            {...register("text", {
                                required: true
                            })
                            }
                        /><br />
                        {errors.comment?.type === 'required' && "oops, you forgot your message!"}<br />
                        <input type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;