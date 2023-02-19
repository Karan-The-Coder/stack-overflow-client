import React from 'react'

import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
       <nav className="side-nav">
         {/* Here activeClassName is replaced by activeclassname */}
          <NavLink to='/' className='side-nav-links' activeclassname='active'>
            <p>Home</p>
          </NavLink> 
          <div className="side-nav-div">
             <div><p>PUBLIC</p></div>
             <NavLink to='/Questions' className='side-nav-links' >
                <img src={Globe} alt="Globe" style={{width:'18px'}} />
                <p style={{padding:'10px'}} >Questions</p>
             </NavLink>
             <NavLink style={{padding:'0px 30px'}} to='/Tags' className='side-nav-links' activeclassname='active' > 
                <p>Tags</p>
             </NavLink>
             <NavLink style={{padding:'0px 30px'}} to='/Users' className='side-nav-links' activeclassname='active' > 
                <p>Users</p>
             </NavLink>
          </div>
       </nav>
    </div>
  )
}

export default LeftSidebar
