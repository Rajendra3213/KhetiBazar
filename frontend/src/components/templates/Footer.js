import React from 'react'

import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div>
            <div className='footer-section'>
                <div className='container'>
                    {/* team members */}
                    <div className='row g-5'>
                        <div className='col-lg-4 col-sm-12'>
                            <div className='fw-bold footer-title'>
                                Team Members
                            </div>
                            <div className='footer-details'>
                                <div className='hover-green'>
                                    Rajendra Acharya
                                </div>
                                <div className='hover-green'>
                                    Benup Ghimire
                                </div>
                                <div className='hover-green'>
                                    Aaryash Shakya
                                </div>
                                <div className='hover-green'>
                                    Kaushal Kishor Mishra
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <div className='fw-bold footer-title'>
                                Contact Us
                            </div>
                            <div className='footer-details'>
                                <div className='hover-green'>
                                    rajendraacharya1ls@gmail.com
                                </div>
                                <div className='hover-green'>
                                    benup211@gmail.com
                                </div>
                                <div className='hover-green'>
                                    aaryashshakya31@gmail.com
                                </div>
                                <div className='hover-green'>
                                    km645195@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12'>
                            <div className='footer-details d-flex fs-3 justify-content-evenly'>
                                <div className='hover-green'>
                                    <Icon icon="akar-icons:facebook-fill" />
                                </div>
                                <div className='hover-green'>
                                    <Icon icon="teenyicons:twitter-outline" />
                                </div>
                                <div className='hover-green'>
                                    <Icon icon="basil:instagram-outline" />
                                </div>
                                <div className='hover-green'>
                                    <Icon icon="line-md:reddit-loop" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer