import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom'

import Logo from "../assets/images/Logo.png"
import axios from 'axios';

import { backendUrl } from '../Api';

const SignInForm = () => {

    const navigate = useNavigate()

    const [role, setRole] = useState(''); // State to store the selected value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleDropdownChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with form values
        const formData = {
            role,
            email,
            password,
            rememberMe,
        };

        try {
            axios.post(`${backendUrl}/signin`, formData)
                .then(data => {
                    navigate('/profile')
                    localStorage.setItem('uid', data.data.user._id)
                    localStorage.setItem('urole', data.data.user.role)
                })
                .catch(err => console.log(err))

        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    }


    return (
        <div className='container'>
            <div className='row align-items-center' style={{ height: "100vh" }}>
                <div className='col-lg-6 col-sm-12'>
                    <img className='signup-img' src={Logo} alt='logo' />
                </div>
                <div className='col-lg-5 col-sm-12 bg-light p-5 border border-secondary-subtle rounded-2' >
                    <div className='fs-3'>
                        Welcome !
                    </div>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="my-2">
                            <label htmlFor="InputRole" className="form-label fs-6 mb-1">
                                Type
                            </label>
                            <select
                                className=" outline-dropdown form-select fs-6"
                                value={role}
                                onChange={handleDropdownChange}
                            >
                                <option value="" disabled selected>Select</option>
                                <option value={0}>Farmer</option>
                                <option value={1}>Buyer</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label htmlFor="InputEmail1" className="form-label fs-6 mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="InputEmail1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="my-3 d-flex align-items-center justify-content-between">
                            <div>
                                <input
                                    type="checkbox"
                                    className="me-2 checkmark"
                                    id="RememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="RememberMe" className="form-label fs-6 my-3">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="/forgotPassword" className="text-decoration-none fs-6 text-success">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success rounded-0 form-control">
                            Login
                        </button>
                    </form>
                    <div className='my-3'>
                        Don't have an Account? <a href='/signUp' className='text-decoration-none text-success fw-bold'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignInForm
