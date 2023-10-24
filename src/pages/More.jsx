import Navbar from "../components/Navbar"
import WindowIcon from '@mui/icons-material/Window';
import { NotificationsOutlined } from '@mui/icons-material';
import install from '../assets/svgs/install.svg';
import broadcast from '../assets/svgs/broadcast.svg';
import key from '../assets/svgs/key.svg';
import affliate from '../assets/svgs/affliate.svg';
import logout from '../assets/svgs/logout.svg';
import arrow from '../assets/svgs/forward.svg'
import './More.css'


const More = () => {
  return (
    <div className="more-container">
      <Navbar 
      initialNav={
        <div style={{display:'flex', gap: '26px', alignItems: 'center'}}>
          <WindowIcon style={{color:'#0163A4', fontSize: '36px'}} />
          <h2 className='navbar-subtitle' style={{fontSize:'20px', fontWeight: 'bold'}}>More</h2>

        </div>
      }
      finalNav={
        <div>
          <NotificationsOutlined style={{color:'#777E90', fontSize: '30px'}}/>
        </div>
      }
      />
      <div className="more-main">
        <div className="more-div">
          <div className="lp">
          <img src={install} alt="img" />
          <div className="pl">
            <h4>Install App</h4>
            <p>NO storage required</p>
          </div>

          </div>
          <button>Install App</button>
        </div>
        <div className="more-div">
          <div className="lp">
          <img src={broadcast} alt="img" />
          <div className="pl">
            <h4>Invite Friends</h4>
            <p>Get paid when you spread the word!</p>
          </div>

          </div>
          <button>Invite</button>
        </div>
        <div className="more-div">
          <div className="lp">
          <img src={key} alt="img" />
          <div className="pl">
            <h4>Security</h4>
            <p>Protect yourself from intruders</p>
          </div>
          </div>
          <img src={arrow} alt="" />
        </div>
        <div className="more-div">
          <div className="lp">
          <img src={affliate} alt="img" />
          <div className="pl">
            <h4>Affiliate Program</h4>
            <p>Earn with our affiliate program</p>
          </div>

          </div>
          <button className="white">Join</button>
        </div>
        <div className="more-div red">
          <div className="lp">
          <img src={logout} alt="img" />
          <div className="pl">
            <h4>sign out</h4>
          </div>

          </div>
        </div>
      </div>

      
    </div>
  )
}

export default More