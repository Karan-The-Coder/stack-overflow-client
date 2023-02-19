import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import AboutAuth from './AboutAuth'
import icon from '../../assets/login-icon.png'
import { signup, login } from '../../actions/auth'

const Auth = () => {

    const [isSignup,setIsSignup] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  //for the hide user details in the search-bar . 
        
        if(!email && !password){
            alert("Please enter email and password to cotinue!")
        }
        if(isSignup){ 
            if(!name){
                alert("Please enter a name to continue!")
            }
            dispatch(signup({name, email, password}, navigate))
        }
        else{
            dispatch(login({email, password}, navigate))
        }
    }

    return (
        <section className="auth-section">
            { isSignup && <AboutAuth /> }
            <div className='auth-container-2'>
                { !isSignup && <img src={icon} alt='stack-overflow' className='login-logo' style={{ width:"70px"}}/> }
                <form onSubmit={handleSubmit} >
                    {
                        isSignup && (
                            <label htmlFor="name">
                                <h4>Display Name</h4>
                                <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}} />
                            </label>
                        )
                    }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display:"flex",justifyContent:"space-between"}}>
                            <h4>Password</h4>
                            { !isSignup && <p style={{ fontSize:"12px",color:"#8686ff",}}>forgot password?</p>}
                        </div>
                        <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} />
                        { isSignup && <p style={{ color:"#666767", fontSize:"12px"}}>Passwords must contain at least eight<br/> characters,including atleast 1 letter and<br/> 1 number.</p> }
                    </label>
                    {
                        isSignup && (
                            <label htmlFor="chek">
                                <input style={{marginRight:"15px"}} type="checkbox" id='check'/>
                                <p style={{ fontSize:"12px"}}>Opt-in to receive occasional <br/>product updates, User research invitation,<br/>company announcements, and digests.</p>
                            </label>
                        )
                    }
                    <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'Log in'}</button>
                    {
                        isSignup && (
                            <p style={{ color:"#666767", fontSize:"12px"}} >
                                By clicking "Sign up", You agree to our<br/>
                                <span style={{ color:"#8686ff",cursor:"pointer"}}>terms of services</span>,<span style={{ color:"#8686ff",cursor:"pointer"}}> privacy policy</span  > and<span style={{ color:"#8686ff",cursor:"pointer"}}> cookie policy.</span>
                            </p>
                        )
                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : "Sign up"}</button>
                </p>
            </div>
        </section>
  )
}

export default Auth
