import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'

// import UserMain from '../pages/users/UserMain'
import UserNav from '../pages/users/UserNav'
import Dashboard from '../components/dashboard/Dashboard'
import Contract from '../components/dashboard/Contract'
import FindContract from '../components/dashboard/FindContract'
import ContractDetails from '../components/dashboard/ContractDetails'

import Profile from '../components/Profile'

import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

import CreateContractForm from '../components/dashboard/forms/CreateContractForm'
import AppointmentForm from '../components/dashboard/forms/AppointmentForm'
import ProposedContract from '../components/dashboard/forms/ProposedContract'
import SellerContract from '../components/dashboard/SellerContract'
import ContractTemplate from '../components/dashboard/ContractTemplate'
import Analytics from '../components/Analytics'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signIn" element={<SignInForm />} />
                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="" element={<UserNav />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contracts" element={<Contract />} />
                    <Route path="/findContracts" element={<FindContract />} />
                    <Route path="/sellerContract" element={<SellerContract />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/createContract" element={<CreateContractForm />} />
                    <Route path="/appointmentForm" element={<AppointmentForm />} />
                    <Route path="/proposedContract" element={<ProposedContract />} />
                    {/* <Route path="/contractDetails/:cid" element={<ContractDetails />} /> */}
                    <Route path="/contractDetails" element={<ContractDetails />} />
                    <Route path="/contracttemplate" element={<ContractTemplate/>} />
                    <Route path="/analytics" element={<Analytics/>} />
                </Route>
            </Routes>

        </Router>
    )
}

export default MyRoutes