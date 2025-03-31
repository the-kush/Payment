import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className='m-10'>
        <Balance value={1000} />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard

