import React from 'react'
import Users from '../components/settings/Users'
import Shop from '../components/settings/Shop'
import ShopUsers from '../components/settings/ShopUsers'

const Settings = () => {
  return (
    <div>
        <h1>
            SETTINGS
        </h1>

        <div className='flex flex-row gap-4'>

            <Users/>
            <Shop/>
            <ShopUsers/>

        </div>
    </div>
  )
}

export default Settings