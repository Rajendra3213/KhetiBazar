import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { backendUrl } from '../../../Api';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';


const Topbar = () => {
    const navigate = useNavigate();
    const [topData, setTopData] = useState('')
    useEffect(() => {
        const uid = localStorage.getItem('uid')
        if (uid === "")
            return console.log('not logged in');
        axios.get(`${backendUrl}/userdetail/${uid}`)
            .then(user => {
                setTopData(user.data)
            })
            .catch(err => console.log(err))
    }, [])
    const logOut = () => {
        // axios.post(`${backendUrl}/signout`)
        //     .then(data => {
        //         if (!data) {
        //             alert('logout failed')
        //         }
        //         else {
        alert('logout success')
        localStorage.setItem('uid', '')
        navigate('/')
        //     }
        // })
    }
    return (
        <div className='no-print' >
            {
                localStorage.getItem('uid') === '' &&
                <div className='d-flex align-items-center justify-content-end py-3 me-3'>
                    <Link to='/signup'>
                        <button className='btn outline-button me-3'>
                            SignUp
                        </button>
                    </Link>
                    <Link to='/signin'>
                        <button className='btn contained-button me-3'>
                            LogIn
                        </button>
                    </Link>
                </div>
            }
            {
                localStorage.getItem('uid') !== '' &&
                <div className='d-flex align-items-center justify-content-end py-3 me-3'>
                    <div>
                        <button className='btn btn-warning me-3' onClick={logOut}>
                            LogOut
                        </button>
                    </div>

                    <Icon icon="mdi:bell-outline" className='fs-3 me-3' />
                    <div className='user-account-detail'>
                        <Link to='/profile'>
                            <div className='user-name' style={{ fontSize: "16px" }}>
                                {topData.name || 'name name'}
                            </div>
                        </Link>
                        <div className='user-email' style={{ fontSize: "10px" }}>
                            {topData.email || 'email@email.com'}
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Topbar