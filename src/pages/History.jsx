import Navbar from "../components/Navbar"
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import './History.css'
const History = () => {
  return (
    <div>
      <Navbar 
      initialNav={
      <div style={{display:'flex', gap: '26px', alignItems: 'center'}}>
        <div className='profile'>
        <ChangeCircleIcon style={{color:'#0163A4', fontSize: '36px'}} />
        </div>
        <div className='navbar-text'>
          <h2 className='navbar-subtitle' style={{fontSize:'20px', fontWeight: 'bold'}}>History</h2>
        </div>
      
      </div>
      }
      finalNav={
        <div className="icons-flex">
          <SearchOutlinedIcon />
          <CalendarMonthOutlinedIcon />
        </div>
      }
      
      
      />
    </div>
  )
}

export default History