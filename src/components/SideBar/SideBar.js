import React,{useState} from 'react'
import pic from '../NavBar/NavbarElements/dp.jpg';
import './SideBar.css'
import Covid19 from '../NavBar/NavbarElements/Menu/menu-images/Covid19.png';
import Friends from '../NavBar/NavbarElements/Menu/menu-images/Friends.png';
import Groups from '../NavBar/NavbarElements/Menu/menu-images/Groups.png';
import MarketPlace from '../NavBar/NavbarElements/Menu/menu-images/MarketPlace.png';
import Watch from '../NavBar/NavbarElements/Menu/menu-images/Watch.png';
import i1 from './grp-image/i1.jpg';
import i2 from './grp-image/i2.jpg';
import i3 from './grp-image/i3.jpg';
import i4 from './grp-image/i4.jpg';
import SeeMore from './SeeMore';
const SideBar=()=> {
    const grpName=[
        {name:"CSE/EEE Jobs in Bangladesh",
         image:i1
        },
        {name:"CSE/EEE Job for Fresher",
        image:i2
        },
        {name:"Job for Bracu Students",
        image:i3},
        {name:"CSE/EEE JOBS in Bangladesh",
        image:i4}
    ]
    const [seeMoreItem,setSeeMoreItem]=useState(false);
    const handleMore=()=>{
        setSeeMoreItem(true);
    }
    return (
        <div className="sidebar-container">
             <div className="sidebar-contents"> <img className="sidebar-icons" src={pic} alt=""/><h5 className="sidebar-header">Stanley Dip Rozario</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Covid19} alt="" /><h5 className="sidebar-header">COVID-19 Information Center</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Friends} alt=""/><h5 className="sidebar-header">Friends</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Groups} alt=""/><h5 className="sidebar-header">Groups</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={MarketPlace} alt=""/><h5 className="sidebar-header">MarketPlace</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Watch} alt=""/><h5 className="sidebar-header">Watch</h5> </div>
             {/* <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Ads} alt=""/><h5 className="dropdown-css">Ads</h5> </div> */}
             
             {!seeMoreItem ?
             
             <div className="sidebar-contents" onClick={handleMore}> <i className="fas fa-chevron-down fa-sm side-chevron-icon"></i><h5 className="sidebar-header">See More</h5> </div>
             : <SeeMore setSeeMoreItem={setSeeMoreItem}/>
             
             }
             <hr/>
             <h5 className="sidebar-header gray">Your Shortcuts</h5> <br/>
             {grpName.map((user) => <div className="sidebar-contents-shortcut"> <img className="sidebar-icons-img-shortcut" src={user.image} alt="" /><h5 className="shortcut-header">{user.name}</h5> </div>)}

              {/* <p className="footer-tagline">Privacy &#183; Terms &#183; Advertising	&#183; Ad Choices	&#183; Cookies	&#183; More	&#183; Facebook &copy; 2021</p> */}
        </div>
         
    )
}

export default SideBar
