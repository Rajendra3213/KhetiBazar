import { Icon } from '@iconify/react'
import React from 'react'

// import { useNavigate } from 'react-router-dom'

const ContractDetails = () => {
    // const navigate= useNavigate()
    // const cid = '65057e6aaf10c778e6cf9da4'
    return (
        <div id='contractDetailContainer'>
            <div className="container ms-lg-4 px-md-5 ms-2 px-2">
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Contract Details</h3>
                <h3 className='mt-2 mb-3 fw-bold' style={{ fontSize: "18px" }}>Seeking Buyer for Contract Farming - Wheat Production</h3>
                <p>
                    <strong>Product Details</strong><br />
                    Product: Wheat<br />
                    Quantity: 600<br />
                    Price: 22000<br />
                </p>
                <p>
                    <strong>Delivery and Acceptance</strong><br />
                    Delivery Date: 2024-01-25 <br />
                    Delivery Location: Shantinagar, Kathmandu <br />
                    Acceptance: Accepted <br />
                </p>
                <p>
                    <strong>Payment Terms</strong><br />
                    Payment Amount: 22000 <br />
                    Payment Schedule: 50% on order, and remaining 50% on delivery <br />
                    Payment Method: Bank Transfer <br />
                </p>
                <p>
                    <strong>ESCROW</strong><br/>
                    Escrow Agreement Terms: Funds released on 100% completion of order
                    Assets/Funds Description: Rs 25000
                    Identification and Verification: KYC with citizenship
                </p>
                <p>
                    <strong>Quality Assurance</strong><br />
                    Quality Standards: 50% upon order, 50% upon delivery <br />
                    Refunds and Returns: Full refund if product does not meet quality standards. <br />
                </p>
                <p>
                    <strong>Governing Law</strong><br />
                    This Contract Shall be governed by the <i>Nepal Government</i> <br />
                </p>
                <p>
                    <strong>Termination</strong><br />
                    Either party may terminate this Contract with a 7-day written notice. <br />
                </p>
                <p>
                    <strong>Confidentiality</strong><br />
                    Both Parties shall maintain the confidentiality of transaction details.<br />
                </p>
                <p>
                    <strong>Entire Agreement</strong><br />
                    This Contract constitutes the complete agreement between the parties. <br />
                </p>
                <br />
                <button className="btn outline-button px-3" style={{ fontSize: "16px" }} onClick={()=>{
                    window.print()
                }}>
                    View in PDF <Icon icon='teenyicons:pdf-outline' className='fs-4'></Icon>
                </button>
                <br />
                <br />
                <p>
                    <span className='text-success fw-bold'>Contract With: </span>Kaushal <br />
                    <span className='text-success fw-bold'>Contract Date: </span>2023-05-05<br />
                    <span className='text-success fw-bold'>Contract Status: </span>Accepted<br />
                    <span className='text-success fw-bold'>Contract Remaining Time: </span>105days<br />
                </p>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default ContractDetails;
