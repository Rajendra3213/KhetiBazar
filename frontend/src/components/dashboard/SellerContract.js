import React from 'react'

import { Icon } from '@iconify/react';

const SellerContract = () => {
    return (
        <div className='container seller-contract rounded-2 px-5 py-3'>
            <div className='fs-3 mb-4 fw-bold'>
                Details
            </div>
            <div className='position-relative'>
                <div className='title mb-3 fs-4  '>
                    Seeking Seller for Contract Farming - Wheat Production
                </div>

                <div className='mb-3'>
                    <div className='sub-title fw-bold text-success'>
                        Requirements
                    </div>
                    <ul>
                        <li>Crop Type: { }</li>
                        <li>Quantity Needed: { }</li>
                        <li>Quantity Requirements: { }</li>
                        <li>Deliver Timeframe: { }</li>
                        <li>Location: { }</li>
                    </ul>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold text-success'>
                        Support We Provide
                    </div>
                    <ul>
                        <li>Loans and Advances</li>
                        <li>Interest Subsidies</li>
                        <li>Agronomic Support</li>
                        <li>Pest and Diseases Management</li>
                        <li>Seed Procurement</li>
                        <li>Fertilizers and Nutrients</li>
                        <li>Workshops and Training Sessions</li>
                        <li>Risk Management</li>
                        <li>Crop Insurance</li>
                    </ul>
                </div>
                <div className='mb-2'>
                    <div className='sub-title fw-bold text-success'>
                        Contract Policy
                    </div>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Product Details
                    </div>
                    <p>
                        Product:
                    </p>
                    <p>
                        Quantity:
                    </p>
                    <p>
                        Price:
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Delivery and Acceptance
                    </div>
                    <p>
                        Delivery Date:
                    </p>
                    <p>
                        Delivery Location:
                    </p>
                    <p>
                        Acceptance:
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Payment Terms
                    </div>
                    <p>
                        Payment Amount:
                    </p>
                    <p>
                        Payment Schedule:
                    </p>
                    <p>
                        Payment Method:
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Quality Assurance
                    </div>
                    <p>
                        Quality Standards:
                    </p>
                    <p>
                        Returns and Refunds:
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Governing Law
                    </div>
                    <p>
                        This Contract shall be governed by the laws of [State/Country].
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Termination
                    </div>
                    <p>
                        Either party may terminate this Contract with a 7-day written notice.
                    </p>
                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Confidentiality
                    </div>
                    <p>
                        Both Parties shall maintain the confidentiality of transaction details.
                    </p>

                </div>
                <div className='mb-3'>
                    <div className='sub-title fw-bold'>
                        Entire Agreement
                    </div>
                    <p>
                        This Contract constitutes the complete agreement between the Parties.
                    </p>

                </div>
                <div className='mb-3'>
                    <button className='btn outline-button rounded'>
                        View In PDF
                        <Icon icon="codicon:file-pdf" />
                    </button>
                </div>

                <div className="position-absolute top-0 end-0 pe-0 pt-0">
                    <a href="/profile">
                        <button class="btn outline-button btn-success btn-sm rounded-circle fs-5" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-placement="bottom" data-bs-title="Profile">
                            <Icon icon="basil:image-solid" />
                        </button>
                    </a>
                </div>

                <div className='mb-3 d-flex justify-content-end'>
                    <a href='/appointmentForm' className='btn outline-button me-5' >
                        Ask for Appointment
                    </a>
                    <a href='/proposedContract' className='btn contained-button' >
                        Propose Contract
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SellerContract
