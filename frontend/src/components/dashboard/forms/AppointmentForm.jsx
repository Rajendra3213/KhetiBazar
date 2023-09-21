import React from 'react'

const AppointmentForm = () => {
    return (
        <div>
            <div className="container ms-lg-4 px-md-5 ms-2 px-2">
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Appointment Form</h3>
                <form>
                    <div className="row">
                        <div className="col-md-5">
                            <label className='label-control text-secondary mb-1' htmlFor="name">
                                Enter Name <span className='text-danger ms-1 '>*</span>
                            </label>
                            <input id='name' type="text" className='form-control' placeholder='Enter Your Name Here'/>
                        </div>
                        <div className="col-md-1 d-none d-md-block"></div>
                        <div className="col-md-5">
                            <label for='appointmentDate' className='label-control text-secondary mb-1' htmlFor="name">
                                Enter Appointment Date <span className='text-danger ms-1 '>*</span>
                            </label>
                            <input id='appointmentDate' type="date" className='form-control' />
                        </div>
                        <div className="col-md-1 d-none d-md-block"></div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-11">
                            <label for='message' className='label-control text-secondary mb-1' htmlFor="name">
                                Enter Message <span className='text-danger ms-1 '>*</span>
                            </label>
                            <textarea id='message' type="text" className='form-control' style={{ height: "300px" }} placeholder='Enter Your Message Here'></textarea>
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

export default AppointmentForm