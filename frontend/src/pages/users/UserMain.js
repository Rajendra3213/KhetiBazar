import React from 'react'


import Sidebar from '../../components/dashboard/templates/Sidebar'
import Topbar from '../../components/dashboard/templates/Topbar'

import Contract from '../../components/dashboard/Contract'

import Dashboard from '../../components/dashboard/Dashboard'
import FindContract from '../../components/dashboard/FindContract'


const UserMain = () => {
    return (
        <div>
            <div className='row mw-100 gx-0'>
                <div id='sidebarContainer' className='sidebar-container no-print'>
                    <Sidebar />
                </div>
                <div className='content-container'>
                    <div>
                        <Topbar />
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-dash" role="tabpanel" aria-labelledby="pills-dash-tab" tabindex="0">
                            <Dashboard />
                        </div>
                        <div class="tab-pane fade" id="pills-contract" role="tabpanel" aria-labelledby="pills-contract-tab" tabindex="0">
                            <Contract />
                        </div>
                        <div class="tab-pane fade" id="pills-findContract" role="tabpanel" aria-labelledby="pills-findContract-tab" tabindex="0">
                            <FindContract />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserMain