import React from 'react'
import Campus from './menu-images/Campus.png';
import Events from './menu-images/Events.png';
import Friends from './menu-images/Friends.png';
import Groups from './menu-images/Groups.png';
import NewsFeed from './menu-images/NewsFeed.png';
import Pages from './menu-images/Pages.png';
import GamingVideo from './menu-images/GamingVideo.png';
import PlayGames from './menu-images/PlayGames.png';
import Watch from './menu-images/Watch.png';
import FacebookPay from './menu-images/FacebookPay.png';
import MarketPlace from './menu-images/MarketPlace.png';
import Offers from './menu-images/Offers.png';
import RecentActivity from './menu-images/RecentActivity.png';
import Memories from './menu-images/Memories.png';
import Saved from './menu-images/Saved.png';
import Weather from './menu-images/Weather.png';
import Ads from './menu-images/Ads.png';
import Jobs from './menu-images/Jobs.png';
import BloodDonation from './menu-images/BloodDonation.png';
import Covid19 from './menu-images/Covid19.png';
import CrisisResponse from './menu-images/CrisisResponse.png';
import FunRaisers from './menu-images/FunRaisers.png';
import Messenger from './menu-images/Messenger.png';
import MessengerKids from './menu-images/MessengerKids.png';
import './Menu.css'
const MenuItems=() =>{
    return (
      
    <div className="menu-items">
        <input className="menu-search" placeholder=" Search Menu"type="search'"/>
        <h4 className="menu-header">Social</h4>
        <p className="menu-para">Connect with family, friends and  communities who shate your interests.</p>
        <div className="menu-img"><img src={Campus}/>
            <br/> Campus
        </div>
        
        <div className="menu-img"><img src={Events} alt=""/>
            <br/> Events
        </div>

        <div className="menu-img"><img src={Friends} alt=""/>
            <br/> Friends
        </div>
        <div className="menu-img"><img src={Groups} alt=""/>
            <br/> Groups
        </div>
        <div className="menu-img"><img src={NewsFeed} alt=""/>
            <br/> NewsFeed
        </div>
        <div className="menu-img"><img src={Pages} alt=""/>
            <br/> Pages
        </div>
        <hr/>

        <h4 className="menu-header">Entertainment</h4>
        <p className="menu-para">Pass the time with videos, games and posts that interest you.</p>
        <div className="menu-img"><img src={GamingVideo} alt=""/>
            <br/> Gaming Video
        </div>
        <div className="menu-img"><img src={PlayGames} alt=""/>
            <br/> Play Games
        </div>
        <div className="menu-img"><img src={Watch} alt=""/>
            <br/> Watch
        </div>
        <hr/>

        <h4 className="menu-header">Shopping</h4>
        <p className="menu-para">See what’s for sale, discover new brands and manage your payments.</p>
        <div className="menu-img"><img src={FacebookPay} alt=""/>
            <br/> Facebook Pay
        </div>
        <div className="menu-img"><img src={MarketPlace} alt=""/>
            <br/> Marketplace
        </div>
        <div className="menu-img"><img src={Offers} alt=""/>
            <br/> Offers
        </div>
        <hr/>
   

    <h4 className="menu-header">Personal</h4>
        <p className="menu-para">Review everything that’s specific to your experience on Facebook.</p>
        <div className="menu-img"><img src={RecentActivity} alt=""/>
            <br/> Recent Ad Activity
        </div> 
         <div className="menu-img"><img src={Memories} alt=""/>
            <br/> Memories
        </div> 
        <div className="menu-img"><img src={Saved} alt=""/>
            <br/> Saved
        </div> 
         <div className="menu-img"><img src={Weather} alt=""/>
            <br/> Weather
        </div>
        <hr/>

        <h4 className="menu-header">Professional</h4>
        <p className="menu-para">Grow your business or career with tools designed to help you achieve your goals.</p>
        <div className="menu-img"><img src={Ads} alt=""/>
            <br/> Ads
        </div>
        <div className="menu-img"><img src={Jobs} alt=""/>
            <br/> Jobs
        </div>
        <hr/>


        <h4 className="menu-header">Community Resources</h4>
        <p className="menu-para">See the latest info about important topics and support causes that matter to you.</p>
        <div className="menu-img"><img src={BloodDonation} alt=""/>
            <br/> Blood Donations
        </div> 
         <div className="menu-img"><img src={Covid19} alt=""/>
            <br/> COVID-19 Information...
        </div> 
        <div className="menu-img"><img src={CrisisResponse} alt=""/>
            <br/> Crisis Response
        </div> 
         <div className="menu-img"><img src={FunRaisers} alt=""/>
            <br/> Funraisers
        </div>
        <hr/>


        <h4 className="menu-header">More from Facebook</h4>
        <p className="menu-para">See more of the apps and services the Facebook company has to offer.</p>
        <div className="menu-img"><img src={Messenger} alt=""/>
            <br/> Messenger
        </div> 
         <div className="menu-img"><img src={MessengerKids} alt=""/>
            <br/> Messenger Kids
        </div> 
        </div>
    )
}

export default MenuItems
