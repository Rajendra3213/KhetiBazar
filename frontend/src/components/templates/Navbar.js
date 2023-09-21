import React from 'react'

// import of images
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className='nav-section'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-lg d-flex justify-content-lg-between algin-items-center py-2 collapse navbar-collapse' id="navbarTogglerDemo02">
                    <div className='nav-logo'>
                        <a href='/' className='fs-2'>
                            <img src={Logo} alt='Logo of Kheti Bajar' className='logo-img' />
                        </a>
                    </div>
                    <div className='d-flex justify-content-evenly w-25 align-items-center'>
                        <a href='/' className='nav-link btn text-success'>Home</a>
                        <a href='#workflow' className='nav-link btn'>What we offer</a>
                    </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <a className="navbar-brand w-25" href="/">
                            <img src={Logo} alt='Logo of Kheti Bajar' className='logo-img' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse w-75" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-center text-dark" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center text-dark" href="#about">Link</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar
