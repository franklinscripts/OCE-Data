/* eslint-disable react/no-unescaped-entities */
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import './Signin.css'
import {
   Facebook, 
   Instagram, 
   Twitter 
  } from '@mui/icons-material';
// import { useEffect } from 'react';
import GoogleLogo from '../assets/svgs/google-logo.svg'
import Logo from '../assets/logo.png'

const Signin = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [error, setError] = React.useState('');
  // const [loading, setLoading] = React.useState(false);

  // useEffect(())
  return (
    <div className='body' >
        <header className="">
            <img src={Logo} alt='logo' style={{width:"70px"}}/>
        </header>

        <main className="">
          <h1>Sign in to your account</h1>
          <button className='google' onClick={() => navigate('/dashboard')}>


            <img src={GoogleLogo}  />

            <p>
              Continue with google
            </p>
            
          </button>
          <form action="">
            <div className='input'>
            <EmailIcon style={{backgroundColor: 'inherit', color:'#777E90'}} />
              <input type="text" placeholder="yourmail@here.com" />
            </div>
            <div className='input'>
            <LockIcon style={{backgroundColor: 'inherit', color:'#777E90' }} />
            <input type="password" placeholder="password"  />
              
            </div>
            <button type="submit" className='signBtn'>Sign in</button>
          </form>
            
        </main>

        <aside>
          <p>Or <span>Forgot password?</span></p>
          <p> Don't have an account? <span> Sign up</span></p>
          

          <small>Follow us</small>
         <div className='aside-icons'>
         <Facebook />
         <Instagram />
         <Twitter />
         </div>
        </aside>
        
    </div>
  )
}

export default Signin