import { Icon } from '@iconify/react'

const ContractTemplate = () => {
    return (
        <div id='contractDetailContainer'>
            <div className="container ms-lg-4 px-md-5 ms-2 px-2">
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Standard Crop Order Contract Template</h3>
                <h3 className='mt-2 mb-3 fw-bold' style={{ fontSize: "18px" }}>Name:</h3>
                <p>
                    <strong>Product Details</strong><br />
                    Product: <br />
                    Quantity: <br />
                    Price: <br />
                </p>
                <p>
                    <strong>Delivery and Acceptance</strong><br />
                    Delivery Date:  <br />
                    Delivery Location: <br />
                    Acceptance:  <br />
                </p>
                <p>
                    <strong>Payment Terms</strong><br />
                    Payment Amount:  <br />
                    Payment Schedule: <br />
                    Payment Method: <br />
                </p>
                <p>
                    <strong>Quality Assurance</strong><br />
                    Quality Standards: <br />
                    Refunds and Returns:  <br />
                </p>
                <p>
                    <strong>Governing Law</strong><br />
                    This Contract Shall be governed by the  <br />
                </p>
                <p>
                    <strong>Termination</strong><br />
                    Either party may terminate this Contract with a       written notice. <br />
                </p>
                <p>
                    <strong>Confidentiality</strong><br />
                    Both Parties <br />
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
                    <span className='text-success fw-bold'>Contract With: </span> <br />
                    <span className='text-success fw-bold'>Contract Date: </span><br />
                    <span className='text-success fw-bold'>Contract Status: </span><br />
                    <span className='text-success fw-bold'>Contract Remaining Time: </span><br />
                </p>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default ContractTemplate;
