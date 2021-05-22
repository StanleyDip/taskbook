import React from 'react'

import Campus from '../NavBar/NavbarElements/Menu/menu-images/Campus.png';
import Events from '../NavBar/NavbarElements/Menu/menu-images/Events.png';
import NewsFeed from '../NavBar/NavbarElements/Menu/menu-images/NewsFeed.png';
import Pages from '../NavBar/NavbarElements/Menu/menu-images/Pages.png';
import GamingVideo from '../NavBar/NavbarElements/Menu/menu-images/GamingVideo.png';
import PlayGames from '../NavBar/NavbarElements/Menu/menu-images/PlayGames.png';
import FacebookPay from '../NavBar/NavbarElements/Menu/menu-images/FacebookPay.png';
import Offers from '../NavBar/NavbarElements/Menu/menu-images/Offers.png';
import RecentActivity from '../NavBar/NavbarElements/Menu/menu-images/RecentActivity.png';
import Memories from '../NavBar/NavbarElements/Menu/menu-images/Memories.png';
import Saved from '../NavBar/NavbarElements/Menu/menu-images/Saved.png';
import Weather from '../NavBar/NavbarElements/Menu/menu-images/Weather.png';
import Ads from '../NavBar/NavbarElements/Menu/menu-images/Ads.png';
import Jobs from '../NavBar/NavbarElements/Menu/menu-images/Jobs.png';
import BloodDonation from '../NavBar/NavbarElements/Menu/menu-images/BloodDonation.png';
import CrisisResponse from '../NavBar/NavbarElements/Menu/menu-images/CrisisResponse.png';
import FunRaisers from '../NavBar/NavbarElements/Menu/menu-images/FunRaisers.png';
import Messenger from '../NavBar/NavbarElements/Menu/menu-images/Messenger.png';
import MessengerKids from '../NavBar/NavbarElements/Menu/menu-images/MessengerKids.png';
import EmotionalHealth from '../NavBar/NavbarElements/Menu/menu-images/EmotionalHealth.png';
import FriendList from '../NavBar/NavbarElements/Menu/menu-images/FriendsList.png';
import Live from '../NavBar/NavbarElements/Menu/menu-images/live.png';
import RecentFav from '../NavBar/NavbarElements/Menu/menu-images/RecentFav.png';

import './SideBar.css';
const SeeMore=(props)=> {
    const {setSeeMoreItem}=props;
    const handleLess=()=>{
        setSeeMoreItem(false);
    }
    return (
        <React.Fragment>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Ads} alt="" /><h5 className="sidebar-header">Ads</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={BloodDonation} alt=""/><h5 className="sidebar-header">BloodDonation</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Campus} alt=""/><h5 className="sidebar-header">Campus</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={CrisisResponse} alt=""/><h5 className="sidebar-header">CrisisResponse</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={EmotionalHealth} alt=""/><h5 className="sidebar-header">Emotional Health</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Events} alt=""/><h5 className="sidebar-header">Events</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={FacebookPay} alt=""/><h5 className="sidebar-header">FacebookPay</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons" src={FriendList} alt=""/><h5 className="sidebar-header">Friend Lists</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={FunRaisers} alt="" /><h5 className="sidebar-header">Funraisers</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={GamingVideo} alt=""/><h5 className="sidebar-header">Gaming Video</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Jobs} alt=""/><h5 className="sidebar-header">Jobs</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Live} alt=""/><h5 className="sidebar-header">Live Videos</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Memories} alt=""/><h5 className="sidebar-header">Memories</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Messenger} alt=""/><h5 className="sidebar-header">Messenger</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={MessengerKids} alt=""/><h5 className="sidebar-header">Messenger Kids</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Offers} alt=""/><h5 className="sidebar-header">Offers</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Pages} alt=""/><h5 className="sidebar-header">Pages</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={PlayGames} alt=""/><h5 className="sidebar-header">Play Games</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={RecentFav} alt=""/><h5 className="sidebar-header">Recent & Favorites</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={RecentActivity} alt=""/><h5 className="sidebar-header">Recent Ad Activity</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Saved} alt=""/><h5 className="sidebar-header">Saved</h5> </div>
             <div className="sidebar-contents"> <img className="sidebar-icons-img" src={Weather} alt=""/><h5 className="sidebar-header">Weather</h5> </div>
             <div className="sidebar-contents"onClick={handleLess}> <i className="fas fa-chevron-up fa-sm side-chevron-icon" ></i><h5 className="sidebar-header">See Less</h5> </div>
        </React.Fragment>
    )
}

export default SeeMore
