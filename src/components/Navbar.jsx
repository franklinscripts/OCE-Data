import './Navbar.css';
// eslint-disable-next-line react/prop-types
const Navbar = ({ initialNav, finalNav}) => {

  return (
    <div className='navbar-container'>
        <div className='profile'>
          {initialNav}
        </div>
        <div>
        {finalNav}
        </div>
       
        
    </div>
  )
}

export default Navbar