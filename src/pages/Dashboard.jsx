import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
import './Dashboard.css'

const Dashboard = ( ) => {
    return (
        <div className="container">
         {/* <Navbar /> */}
         <Outlet />
         <Footer />
        </div>
    )
}
export default Dashboard