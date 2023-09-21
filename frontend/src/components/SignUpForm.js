import React, { useState } from 'react'

import axios from 'axios'
import Logo from "../assets/images/Logo.png"
import { backendUrl } from '../Api'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleDropdownChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with form values
        const formData = {
            name,
            email,
            number,
            password,
            role,
        };
        console.log(formData);
        try {
            // Make a POST request to your API
            // fetch('api/signup', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // })
            //     .then(data => {
            //         return data.json()
            //     })
            //     .then(data => {
            //         console.log(data);
            //     })
            //     .catch(err => console.log(err))
            axios.post(`${backendUrl}/signup`, formData)
                .then(data => {
                    console.log(data);
                    navigate('/signIn')
                })
                .catch(err => console.log(err))
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <div className='container'>
                <div className='row align-items-center' style={{ height: "100vh" }}>
                    <div className='col-lg-6 col-sm-12'>
                        <img className='signup-img' src={Logo} alt='Logo' />
                    </div>
                    <div className='col-lg-6 col-sm-12 p-5 bg-light  border border-secondary-subtle rounded-2' >
                        <div className='fs-3'>
                            Welcome !
                        </div>
                        <form id="signupForm" onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label htmlFor="InputName" className="form-label fs-6 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="InputName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="InputEmail" className="form-label fs-6 mb-1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="InputNumber" className="form-label fs-6 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="InputNumber"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="InputPassword" className="form-label fs-6 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputPassword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="InputRole" className="form-label fs-6 mb-1">
                                    User Type
                                </label>
                                <select
                                    className="form-select"
                                    id="InputRole"
                                    value={role}
                                    onChange={handleDropdownChange}
                                >
                                    <option value="">Select</option>
                                    <option value={0}>Farmer</option>
                                    <option value={1}>Buyer</option>
                                    {/* Add more options if needed */}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success rounded-0 form-control">
                                Sign Up
                            </button>
                        </form>
                        <div className='my-3'>
                            Already have an Account? <a href='/signIn' className='text-decoration-none text-success fw-bold'>Sign In</a>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SignUpForm
