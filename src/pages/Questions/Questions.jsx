import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'


function Questions() {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainbar /> 
      </div>
      <RightSidebar />
      {/* Here i change the RightSidebar outside the container-2 for css approach for floating to the right hand side. */}
    </div>
  )
}

export default Questions
