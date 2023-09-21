import React from 'react'

// import iconify for icons
import { Icon } from '@iconify/react';

// import of images
import Logo from '../../../assets/images/white-logo.png'


const Navbar = () => {
    let sidebarContainer = document.querySelector('#sidebarContainer')
    const toggle = () => {
        if (sidebarContainer.style.marginLeft === "-60%") {
            sidebarContainer.style.marginLeft = "0px"
        }
        else {
            sidebarContainer.style.marginLeft = "-60%"
        }
    }
    function checkScreenWidth() {
        console.log(window.innerWidth)
        if (window.innerWidth < 767) {
            sidebarContainer.style.marginLeft = "-60%"
        }
        else{
            sidebarContainer.style.marginLeft = "0px"
        }
    }
    // Add an event listener for the resize event
    window.addEventListener('resize', checkScreenWidth)
    return (
        <div className='no-print'>
            <div>
                <div id='sidebar' className='side-bar bg-success d-flex justify-content-center flex-column align-items-center position-fixed left-0 top-0' >
                    <div className='mb-5'>
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none w-100">
                            <img className='mx-auto mt-3 w-75 object-fit-cover' src={Logo} alt='Logo' />
                        </a>
                    </div>
                    {/* style={{borderLeft:"1px solid white"}} */}
                    <ul class="nav nav-pills flex-column mb-auto" >
                        <li className='rounded-2' id='dashboardBorder'>
                            <a href='/dashboard'>
                                <button class="nav-link text-white fs-5 d-flex align-items-center">
                                    <Icon icon="ri:dashboard-fill" className='pe-1 fs-3' />
                                    Dashboard
                                </button>
                            </a>
                        </li>
                        <li className='rounded-2' id='contractBorder'>
                            <a href='/contracts'>
                                <button class="nav-link text-white fs-5 d-flex align-items-center  ">
                                    <Icon icon="mdi:file-document-edit" className='pe-1 fs-3' />
                                    Contracts
                                </button>
                            </a>
                        </li>
                        <li className='rounded-2' id='DashboardBorder'>
                            <a href="/analytics" class="nav-link text-white fs-5 d-flex  align-items-center  ">
                                <Icon icon="ic:outline-analytics" className='pe-1 fs-3' />
                                Analytics
                            </a>
                        </li>
                        <li className='rounded-2' id='DashboardBorder'>
                            <a href='/findContracts'>
                                <button class="nav-link text-white fs-5 d-flex  align-items-center  ">
                                    <Icon icon="basil:bag-outline" className='pe-1 fs-3' />
                                    Find Contracts
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <button id='sidebarToggleBtn' className='btn btn-success d-md-none' onClick={toggle}>
                <Icon icon="ci:hamburger-lg" className='fs-3 p-0'/>
            </button>
        </div>
    )
}

export default Navbar