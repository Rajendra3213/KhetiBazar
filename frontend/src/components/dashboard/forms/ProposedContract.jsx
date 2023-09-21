import React from 'react'

const ProposedContract = () => {
    return (
        <div>
            <div className="container ms-lg-4 px-md-5 ms-2 px-2">
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Proposed Contract</h3>
                <form>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <label for='template' className='label-control text-secondary mb-1' htmlFor="name">
                                Select Your Contract Template <span className='text-danger ms-1'>*</span>
                            </label>
                                <select id='template' className='form-select'>
                                    <option value="1">Template 1</option>
                                    <option value="2">Template 2</option>
                                    <option value="3">Template 3</option>
                                    <option value="4">Template 4</option>
                                </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-11">
                            <label for='message' className='label-control text-secondary mb-1' htmlFor="name">
                                Enter Message <span className='text-danger ms-1'>*</span>
                            </label>
                            <textarea id='message' type="text" className='form-control' style={{ height: "300px" }}></textarea>
                        </div>
                    </div>
                    <button className="mt-3 btn contained-button px-3" style={{fontSize:"16px"}}>
                        Send Appointment letter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProposedContract