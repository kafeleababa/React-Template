import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <div className='nav'>
        <ul>
          <Link to='/'><button className='nav-btn'>Home</button></Link>
          <Link to='/bio'><button className='nav-btn'>Bio</button></Link>
        </ul>
      </div>
    </>
  )
}

export default Nav
