import './style/card.css';
import './style/signup.css'

const LoginSignup = () => {
    return (
        <div className='card'>
            <div className="title">Sign Up</div>
            <div className='subtext'>Are you ready to level up irl?</div>
            <div className='inputs'>
                <div className='input'>
                    <input type="text" placeholder='UserName' />
                </div>
                <div className='input'>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='input'>
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span>
            </div>
            <div className='submit-container'>
                <div className="submit">Sign Up</div>
                <div className="submit">Sign Up</div>
            </div>
        </div>
    )
}

export default LoginSignup