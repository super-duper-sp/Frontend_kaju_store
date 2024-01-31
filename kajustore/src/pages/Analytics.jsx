import React from 'react'
import DoubleBarGraph from '../components/Analytics/DoubleBarGraph'
import LineGraph from '../components/Analytics/LineGraph'

const Analytics = () => {
  return (
    <div>
        <div className='flex flex-row gap-4'>
        
        </div>
        <div className='flex flex-row gap-4'>
        <DoubleBarGraph/>
        <LineGraph/>
        </div>
    </div>
  )
}

export default Analytics