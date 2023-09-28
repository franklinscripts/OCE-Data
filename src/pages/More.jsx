import Navbar from "../components/Navbar"
import WindowIcon from '@mui/icons-material/Window';
import { NotificationsOutlined } from '@mui/icons-material';


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

      
    </div>
  )
}

export default More