import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
    <div className="home-container-2">
      <QuestionDetails /> 
    </div>
      <RightSidebar />
    {/* Here i change the RightSidebar outside the container-2 for css approach for floating to the right hand side. */}
  </div>
  )
}

export default DisplayQuestion
