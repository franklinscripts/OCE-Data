
import { NotificationsOutlined } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import Navbar from "../components/Navbar";


const Services = () => {
  return (
    <div id="sidebar">
       <Navbar 
      initialNav={
        <div style={{display:'flex', gap: '26px', alignItems: 'center'}}>
          <TelegramIcon style={{color:'#0163A4', fontSize: '36px'}} />
          <h2 className='navbar-subtitle' style={{fontSize:'20px', fontWeight: 'bold'}}>Services</h2>

        </div>
      }
      finalNav={
        <div>
          <NotificationsOutlined style={{color:'#777E90', fontSize: '30px'}}/>
        </div>
      }
      />

    </div>
  )
}

export default Services