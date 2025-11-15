import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/card.css';
import './style/signup.css';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate();

    return (
        <div className='card'>
            <div className="title">{action}</div>
            <div className='subtext'>Are you ready to level up irl?</div>
            <div className='inputs'>
                <div className='input'>
                    <input type="text" placeholder='Username' />
                </div>

               
                {action === "Login" ? <div></div> :
                    <div className='input'>
                    <input type="email" placeholder='Email' />
                </div>
                } 

                <div className='input'>
                    <input type="password" placeholder='Password' />
                </div>
                </div>

            {action === "Sign Up" ?<div></div> :
                <div className="forgot-password">Forgot Password? <span>Click Here!</span>
            </div>
            }

            {action === "Login" ?<div></div> :
                <div className="forgot-password">Have an account? <span onClick={()=>{setAction("Login")}}>Click Here!</span>
            </div>
            }

            <div className='submit-container'>
                <div className={action === "Login" ? "submit light" : "submit"}
                    onClick={() => { setAction("Sign Up"); }}>Sign Up
                </div>

                <div className={action === "Sign Up" ? "submit light" : "submit"}
                    onClick={() => {
                        if (action !== "Login") {
                            setAction("Login");
                        } else {
                            navigate('/');
                        }
                    }}>Login
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
