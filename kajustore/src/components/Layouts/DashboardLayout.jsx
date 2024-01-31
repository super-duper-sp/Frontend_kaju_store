import React from 'react'

import Header from '../Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../Footer';

import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
   <>
     <div className='h-screen w-full bg-[orange]'>
        <div className=" pt-4 pl-2 pr-2">
          <Header />
        </div>

        <div className="md:flex">
          <div className="mt-2 mx-2">
            <Sidebar />
          </div>
          <div className="mt-2 mx-2 bg-colorgrey rounded-lg">
          <Outlet/>
          </div>
        </div>
      </div>




    
   </>
  )
}

export default DashboardLayout