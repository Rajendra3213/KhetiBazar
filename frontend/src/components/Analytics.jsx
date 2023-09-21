import React from 'react'
import analysisGraph from '../assets/images/analysis-graph.png'
// import Chart from 'chart.js/auto';
const Analytics = () => {
  return (
    <div className='mw-100 px-5 overflow-hidden'>
        <img src={analysisGraph} alt="a graph" className='w-100 object-fit-cover mx-3' style={{marginTop:"-80px",zIndex:"-1"}}/>
    </div>
  )
}

export default Analytics