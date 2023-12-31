import Navbar from "../components/Navbar"
import { NotificationsOutlined } from '@mui/icons-material';
import './Home.css'
import Balance from "../components/Balance";
import QuickAccess from "../components/QuickAccess";
import Profile from '../assets/profile.jpg'
import Network from "../components/Network";


const Home = () => {
  const hours = new Date().getHours();
  const isDayTime = hours >= 6 && hours < 20;
  let currentTime = '';
  
  if (isDayTime) {
    currentTime = 'Good day 🤑🤭';
  } else {
    currentTime = 'Good night 👋👽';
  }
  
  console.log(currentTime); // Outputs the appropriate greeting based on the time of day
  
  return (
    <div className='home-container'>
      
      <Navbar 
      initialNav={
        <div className="home-f">
            <img src={Profile} alt="img" />
            <div className='navbar-text'>
                <p className='navbar-title'>
                    {currentTime}
                </p>
                <p className='navbar-subtitle'>
                   Jennie
                </p>
            </div>

        </div>
      }
      finalNav={
        <div>
          <NotificationsOutlined style={{color:'#777E90', fontSize: '30px'}}  />
        </div>
      }
      
      />
      <div className="main">
        <div className="balance-container">
        <Balance />
        <QuickAccess />
        <Network />
       
      <div className="main-footer">
        <h1>Recent transactions</h1>
        <p>Your recent transactions would appear here.</p>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Home