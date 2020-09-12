import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    }

    const formSmt = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My email is ${data.email}. My phone no. is ${data.phone}. My message is${data.message}`);

    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSmt}>

                            <div className="form-group input-group ">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-user"></i>
                                    </span>

                                </div>
                                <input type="text" className="form-control" placeholder="Enter Name" id="name"
                                    name="name" value={data.name} onChange={InputEvent} aria-describedby="emailHelp" autocomplete="off" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>


                            <div className="form-group input-group mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope"></i>
                                    </span>

                                </div>
                                <input type="email" className="form-control" placeholder="Enter Email" id="email"
                                    name="email" value={data.email} onChange={InputEvent} aria-describedby="emailHelp" autocomplete="off" />
                                <small id="emailHelp" className="form-text text-muted"></small>
                            </div>


                            <div className="form-group input-group mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-phone"></i>
                                    </span>
                                </div>
                                <select className="custom-select" style={{ maxWidth: '70px' }}>
                                    <option>+91</option>
                                    <option>+92</option>
                                    <option>+93</option>
                                </select>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone" id="phone" />
                            </div>

                            <div className="form-group input-group mt-3">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope"></i>
                                    </span>

                                </div>
                                <textarea className="form-control " name="message" value={data.message} onChange={InputEvent} id="message" placeholder="Message" row="5"
                                />
                                <small id="message" className="form-text text-muted"></small>
                            </div>

                            <div class="col-12 text-center mb-5">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit Form
                                </button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </>
    );
};
export default Contact;