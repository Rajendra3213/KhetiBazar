import React from 'react'


// import of images
import Logo from '../assets/images/Logo.png'

import { workFlowDetails } from '../details/Details'
import Navbar from '../components/templates/Navbar'
import Footer from '../components/templates/Footer'


const LandingPage = () => {




    return (
        <div className='back-img'>
            <div className='container' >
                <div >
                    <Navbar />
                    <div className='row mt-4 mb-6 land-hero-section'>
                        <div className='col-lg-6 col-sm-12'>
                            <img src={Logo} alt='Logo of Kheti Bajar' className='landing-img' />
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <div className='d-flex flex-column h-100 justify-content-center'>
                                <div className='text-dark fs-2 fw-bold mb-5'>
                                    Cultivating Connections, Harvesting Prosperity: Join the Contract Farming Revolution!
                                </div>
                                <div className='text-dark fs-5 mb-5'>
                                    Creating a Nepal where farmers have a guaranteed market for their produce and buyers have a reliable source of high-quality produce. That's the Nepal we're working towards with our contract farming system.
                                </div>
                                <div className='sign_in-sign_up-btn w-25 d-flex  justify-content-start w-100 mt-4  align-items-start'>
                                    <a href='/signIn' className='sign_in-btn btn contained-button me-5 px-5'>
                                        Sign In
                                    </a>
                                    <a href='/signUp' className='sign_up-btn btn outline-button px-5'>
                                        Sign Up
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='fs-2 fw-bold text-center' id='workflow'>
                    What we offer
                </div>
                {workFlowDetails.map((item, index) => {
                    return (
                        <div className=' my-5' key={index} >
                            {
                                index % 2 === 0 ?
                                    <div className='landing-bg-color'>
                                        <div className='row container mx-auto py-3'>
                                            <div className='col-lg-6 col-sm-12'>
                                                <img src={item.src} alt={item.title} className='img-fluid' />
                                            </div>
                                            <div className='col-lg-4 col-sm-12 d-flex flex-column justify-content-center ms-4'>
                                                <div className='fs-5 fw-bold mb-5'>
                                                    {item.title}
                                                </div>
                                                <p className='fs-6 w-100'>
                                                    {item.description}
                                                </p>
                                                <p className='fs-6 w-100'>
                                                    {item.more_description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='d-flex container mx-auto'>
                                        <div className=' d-flex flex-column justify-content-center ms-4 align-items-start'>
                                            <div className='fs-5 fw-bold'>
                                                {item.title}
                                            </div>
                                            <div className='w-100'>
                                                <p className='fs-6 w-75'>
                                                    {item.description}
                                                </p>
                                                <p className='fs-6 w-75'>
                                                    {item.more_description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-sm-12'>
                                            <img src={item.src} alt={item.title} className='img-fluid' />
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                })
                }
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage