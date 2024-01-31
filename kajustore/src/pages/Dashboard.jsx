import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';



const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
  return (
    <div> Home
        {
            user ?
            <ul>
            <li>{user._id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
        </ul>:
        <div>
          
        </div>

        }
    </div>
   
  )
}

export default Dashboard