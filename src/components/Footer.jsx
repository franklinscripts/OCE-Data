import {  HomeOutlined } from "@mui/icons-material"
// import {  } from "@mui/icons-material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GridViewIcon from '@mui/icons-material/GridView';
import './Footer.css'
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">

      <NavLink to='/dashboard' className='footer-items ' end>
        <HomeOutlined style={{backgroundColor: "inherit", fontSize:'28px' }} />
        <p>Home</p>
      </NavLink>
        
      <NavLink to='services' className='footer-items'>
        <RocketLaunchIcon style={{backgroundColor: "inherit"}} />
        <p>Services</p>
      </NavLink>
        
      <NavLink to='history' className='footer-items'>
        <AccessTimeIcon style={{backgroundColor: "inherit"}}/>
        <p>History</p>
      </NavLink>
        
      <NavLink to='more' className='footer-items'>
        <GridViewIcon style={{backgroundColor: "inherit"}}/>
        <p>More</p>
      </NavLink>
      </div>
        
    </div>
  )
}

export default Footer