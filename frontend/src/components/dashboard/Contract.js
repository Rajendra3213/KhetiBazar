import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import News from '../../assets/images/News.png'
import { Link } from 'react-router-dom';
const Contract = () => {
    useEffect(() => {
        const setActive = () => {
            document.getElementById('contractBorder').classList.add('active-border')
        }
        setTimeout(() => {
            setActive();
        }, 100);
    });
    return (
        <div>
            <div className="px-4 container mw-100">
                <div className="fs-3 mb-4 fw-bold">
                    Contract
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="card border border-success rounded-3 overflow-hidden mx-2">
                            <img className='w-100 object-fit-cover' src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3755706.jpg&fm=jpg" alt="" />
                                <Link to='/createcontract' className='my-3 mx-auto'>
                                <button className='outline-button btn btn-success'>
                                    Create Contract Template
                                </button>
                                </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card border border-success rounded-3 overflow-hidden mx-2">
                            <img className='w-100 object-fit-cover ' src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3755706.jpg&fm=jpg" alt="" />
                            <Link to="/proposedcontract" className='my-3 mx-auto'>
                            <button className='outline-button btn btn-success'>
                                Edit Contracts
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0 find-contract p-2">
                            <h2>Find your Contracts</h2>
                            <p className=''>
                                Contracts: Your Path to Growth and Success. Seize the Opportunity, Ink the Deal, Reap the Rewards.Embrace contracts as the foundation of collaboration, trust, and progress. Seize the pen and let it ink your journey towards success, one contract at a time. Your commitment today is the harvest of prosperity tomorrow
                            </p>
                                <Link to='/findcontracts'>
                            <button className="find-contracts-btn btn btn-success w-50 py-3">
                                    Find Contracts
                                    <Icon icon="ph:bag-fill" className='ms-2' />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            <div className="container-fluid news-container mt-5 mw-100" style={{ backgroundColor: "#edf8e8" }}>
                <div className="row">
                    <div className="col-lg-6 p-4">
                        <div className='mx-3'>
                            <h3 className='fw-bold fs-4'>Recent News</h3>
                            <p><span className='fs-5'>“ Draft farm bill envisages starting contract farming “</span> - Kathmandu Post</p>
                            <p>
                                The Nepalese government is considering the adoption of contract farming through the Agribusiness Promotion Bill. This bill is seen as a crucial policy document to address labor shortages and attract private sector investment in the agricultural sector, which has been suffering from low investment and productivity. The proposed legislation, developed with support from the USAID program NEAT and in collaboration with the government and business chambers, aims to ensure market access for farmers and encourage private sector participation in commercial agriculture.
                            </p>
                            <p>
                                A key component of the bill is the inclusion of contract farming provisions, which would provide legal validity to agreements between buyers and producers. This would enable both parties to claim compensation in case of contract breaches, providing greater security and support for commercial agriculture. Additionally, the legislation aims to tackle issues related to leasing land for agricultural purposes, as current laws do not adequately address leasehold farming practices.
                            </p>
                            <p>
                                Experts believe that the implementation of contract farming can lead to specialized agricultural products and higher profits for farmers. It is seen as a way to enhance productivity, increase land utilization, and promote collective bargaining arrangements with multiple small farmers. However, there are concerns that the review process under the federal system of government could potentially delay the implementation of the bill.
                            </p>
                            <p>
                                Overall, the Agribusiness Promotion Bill has the potential to significantly boost the agricultural sector in Nepal by attracting private investment, ensuring market access for farmers, and providing legal frameworks for contract farming.

                            </p>
                            <p id='readmore-extra1' className='collapse'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet nesciunt nam asperiores ea tempore libero, provident perferendis voluptatibus earum magnam quo eum totam facilis, maiores architecto sint quod! Illo?
                            </p>
                            <a data-bs-toggle="collapse" href="#readmore-extra1" role="button" aria-expanded="false" aria-controls="readmore-extra1 ">..... Read More</a>

                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className='mx-3 h-100'>
                            <img className='h-100 w-100 object-fit-cover' src={News} alt="an old man holding newspaper" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract