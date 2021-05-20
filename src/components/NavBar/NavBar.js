import React,{useState} from 'react'
import Dropdown from './NavbarElements/Dropdown';
import './NavBar.css'
const NavBar=()=> {
    const [isDropdown,setIsDropdown]=useState(false);
    const handleDropDown=()=>{
        setIsDropdown(!isDropdown)
    }
    return (
        <React.Fragment>
         <div className="Navbar-header">
         {/* <i class="fab fa-facebook taskbar"></i>
         <i class="fas fa-home"></i>
         <i class="fad fa-play-circle"></i>
         <i class="fas fa-briefcase"></i>
         <i class="fas fa-users"></i> */}
    
         <i className="fas fa-caret-down right-icon fa-lg" onClick={handleDropDown}></i>
         <i className="fas fa-bell right-icon"></i>
         <i className="fab fa-facebook-messenger right-icon"></i>
         <div className="right-icon">
         <i className="fas fa-ellipsis-v fa-lg"></i>
         <i className="fas fa-ellipsis-v fa-lg"></i>
         <i className="fas fa-ellipsis-v fa-lg"></i>
         </div>
        </div>
        {isDropdown && <Dropdown/>} 
        </React.Fragment>

    )
}

export default NavBar
