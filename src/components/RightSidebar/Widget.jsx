import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.svg'
import comment from '../../assets/comment.svg'  
import blackLogo from '../../assets/sof-logo.svg'   

const Widget = () => {
  return (
    <div className='widget'>
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" style={{width:"15px"}}/>
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={pen} alt="pen" style={{width:"15px"}}/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
      </div>

      <h4>Features on Meta</h4>
      <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={comment} alt="pen" style={{width:"15px"}}/>
                <p>Review queue workflows - Final releases....</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={comment} alt="pen" style={{width:"15px"}}/>
                <p>Please welcome Valued Associates: #958 - V2Blast #958 - SpencerG</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={blackLogo} alt="pen" style={{width:"15px"}}/>
                <p>Outdated Answers: accepted answers is now unpinned on Stack Overflow.</p>
            </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
               <span>38</span>
                <p>Why was this spam flag declined,yet the questio marked as spam?</p>
            </div>
            <div className="right-sidebar-div-2">
                <span>20</span>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className="right-sidebar-div-2">
                <span>14</span>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
      </div>
    </div>
  )
}

export default Widget
