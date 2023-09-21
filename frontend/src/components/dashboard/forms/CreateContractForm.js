import React, { useState } from 'react'
import axios from 'axios';

import { backendUrl } from '../../../Api'
import { useNavigate } from 'react-router-dom'

const CreateContractForm = () => {

    const navigate = useNavigate()
    // Define state variables for form fields
    const [contractorName, setContractorName] = useState('');
    const [itemNeeded, setItemNeeded] = useState('');
    const [itemQuality, setItemQuality] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [perPrice, setPerPrice] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [terms, setTerms] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with form values
        const formData = {
            contractorName,
            itemNeeded,
            itemQuality,
            itemQuantity,
            perPrice,
            totalPrice,
            issueDate,
            terms,
        };

        console.log(formData)

        try {
            // Make a POST request to your API
            axios.post(`${backendUrl}/postcontract`, formData)
                .then(res => {
                    console.log(res);
                    navigate('/dashboard')
                }
                )
                .catch(err => console.log(err))
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    }
    return (
        <div className='container ms-lg-4 px-md-5 ms-2 px-2'>
            <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Create Contract Template</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="contractorName" className='form-label text-secondary' required>
                                    Enter Contractor Name <span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='contractorName'
                                    value={contractorName}
                                    onChange={(e) => setContractorName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="itemNeeded" className='form-label text-secondary' required>
                                    Item Needed<span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='itemNeeded'
                                    value={itemNeeded}
                                    onChange={(e) => setItemNeeded(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="itemQuality" className='form-label text-secondary' required>
                                    Quality <span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='itemQuality'
                                    value={itemQuality}
                                    onChange={(e) => setItemQuality(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="itemQuantity" className='form-label text-secondary' required>
                                    Quantity <span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='itemQuantity'
                                    value={itemQuantity}
                                    onChange={(e) => setItemQuantity(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="perPrice" className='form-label text-secondary' required>
                                    Price for Each <span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='perPrice'
                                    value={perPrice}
                                    onChange={(e) => setPerPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <label htmlFor="totalPrice" className='form-label text-secondary' required>
                                    Total Price <span className='text-danger ms-1'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control w-75"
                                    id='totalPrice'
                                    value={totalPrice}
                                    onChange={(e) => setTotalPrice(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="issueDate" className='form-label text-secondary' required>
                            Issue Date <span className='text-danger ms-1'>*</span>
                        </label>
                        <input
                            type="date"
                            className="form-control w-25"
                            id='issueDate'
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="terms" className='form-label text-secondary' required>
                            Terms
                        </label>
                        <input
                            type="text"
                            className="form-control w-25"
                            id='terms'
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                        />
                    </div>
                    <input type="submit" className="btn contained-button rounded-1" value="Create Contract" />
                </form>
            </div>
        </div>
    )
}

export default CreateContractForm
