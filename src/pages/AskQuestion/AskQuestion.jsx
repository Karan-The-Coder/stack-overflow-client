import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import {askQuestion} from '../../actions/question'

import robot from '../../assets/robot-ques.png'
// import human from '../../assets/human-work.png'
// import {redirect } from 'react-router-dom' 

const AskQuestion = () => {

    const [ questionTitle, setQuestionTitle] = useState('')
    const [ questionBody, setQuestionBody] = useState('')
    const [ questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({questinTitle, questinBody, questinTags})
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id }, navigate))
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n");
        }
    }

    return (
    <div className='ask-question'>
        <div className="ask-ques-container">
            <div className="ques-header">
                <h1>Ask a public Question</h1>
                <img src={robot} alt="robot" style={{width:"350px",height:"210px",marginTop:"15px"}} />
                {/* <img src={human} alt="robot" style={{width:"350px",height:"180px"}} /> */}
            </div>

            <div className="ques-details">
                <h2>Writing a good question</h2>
                <p>You're ready to ask a programming-related question and this form will help guide you through the process.</p>
                <p>Looking to ask a non-programming question? See the topics here to find a relevent site.</p>
                <h4>Steps</h4>
                <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>Describe what you tried and what you expected to happen.</li>
                    <li>Add "tags" which help surfaceyour question to members of the community.</li>
                    <li>Review your question and post it to the site.</li>
                </ul>
            </div>
                
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person.</p>
                        <input type="text" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in s vector?' id='ask-ques-title'/>
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question.</p>
                        <textarea name="" onChange={(e) => {setQuestionBody(e.target.value)}}  onKeyUp={handleEnter} id="ask-ques-body" cols="30" rows="10"></textarea>
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about.</p>
                        <input type="text" onChange={(e) => {setQuestionTags(e.target.value.split(' '))}} placeholder='e.g. (xml typescript wordpress)' id='ask-ques-tags'/>
                    </label>
                </div>
                <input type="submit" className='review-btn' value='Review your Question'/>
            </form>
        </div>
    </div>
)
}

export default AskQuestion
