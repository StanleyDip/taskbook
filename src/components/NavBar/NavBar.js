import React,{useState} from 'react'
import Dropdown from './NavbarElements/Dropdown';
import './NavBar.css'

import Menu from '../NavBar/NavbarElements/Menu/Menu';
const NavBar=()=> {
 
    const [isDropdown,setIsDropdown]=useState(false);
    const [openMenu,setOpenMenu]=useState(false);
    const handleDropDown=()=>{
        setOpenMenu(false)
        setIsDropdown(!isDropdown)
        
    }
    const handleMenu=()=>{
        setIsDropdown(false)
        setOpenMenu(!openMenu)
    }
    return (
        <React.Fragment>
         <div className="Navbar-header">
         <i className="fab fa-facebook  blue-big taskbar"></i>
         <span className="placeholder-icon"><i className="fas fa-search"></i></span>
         <input type="search" className="search-bar"placeholder="Search facebook"/>
         <i className="fas fa-home blue-small"></i> 
         
         <i className="fas fa-play-circle blue-small"></i>
         <i className="fas fa-briefcase blue-small"></i>
         <i className="fas fa-users blue-small"></i> 
         
         <div className={openMenu ?`dogerblued`:`right-icon`} onClick={handleMenu}>
         <i className="fas fa-ellipsis-v fa-lg"></i>
         <i className="fas fa-ellipsis-v fa-lg"></i>
         <i className="fas fa-ellipsis-v fa-lg"></i>
         </div>
         <i className="fab fa-facebook-messenger right-icon"></i>
         <i className="fas fa-bell right-icon"></i>
         <i className={`fas fa-caret-down ${ isDropdown ? `dogerblued`:`right-icon`} fa-lg`} onClick={handleDropDown}></i>
         {/* <i className="fas fa-caret-down right-icon fa-lg" onClick={handleDropDown}></i> */}
         
         
       
        </div>
        {isDropdown && <Dropdown/>} 
        {openMenu && <Menu/>}
        </React.Fragment>

    )
}

export default NavBar
