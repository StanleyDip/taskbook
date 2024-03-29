import React,{useState} from 'react'
import './Dropdown.css'
import SettingsAndPrivacy from './SubFunctions/SettingsAndPrivacy';
import Help from './SubFunctions/Help';
import Display from './SubFunctions/Display';
import image from './dp.jpg'
const Dropdown=()=> {
    const [onSetting,setOnSettings]=useState(false);
    const [onHelp, setOnHelp]=useState(false);
    const [onDisplay,setOnDisplay]=useState(false);
    const user={
        name:"Stanley Dip Rozario",
        img:"https://i.pinimg.com/originals/bb/02/08/bb0208c91c715973c8574d572534c565.jpg"
    }
    const handleSettings=()=>{
        setOnSettings(true)
    }
    const handleHelp=()=>{
        setOnHelp(true)
    }
    const handleDisplay=()=>{
        console.log(onDisplay)
        setOnDisplay(true)
    }
    return (
     (!onSetting && !onHelp && !onDisplay) ?
        <div className="notification">
            
            <div className="user-info-1st">
                <img className="dropdown-avatar" src={image} alt=""/>
                <h3 className="dropdown-username">{user.name}</h3> <br/>
                <p className="feedback-profile">See your profile</p> <br/>
            </div>
            <hr/>
            <div className="user-info">
            <i className="fas fa-exclamation-circle dropdown-icon fa-lg"></i><h3 className="bolder-ok">Give Feedback</h3> <br/>
                <p className="feedback">Help us improve the new Facebook.</p> <br/>  
            </div>
            <hr/>
            <div className="user-info-2nd" onClick={handleSettings}>
            <i className="fas fa-cog dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Settings & Privacy</h5><i className="fas fa-chevron-right more-details fa-lg"></i>
            </div>
            <div className="user-info-2nd" onClick={handleHelp}>
            <i className="fas fa-question-circle dropdown-icon fa-lg"></i><h5 className="dropdown-css">Help & Support</h5> <i className="fas fa-chevron-right more-details fa-lg"></i>
            </div>

            <div className="user-info-2nd" onClick={handleDisplay}>
            <i className="fas fa-moon dropdown-icon fa-lg"></i><h5 className="dropdown-css">Display & Accessibility</h5> <i className="fas fa-chevron-right more-details fa-lg"></i>
            </div>
            <div className="user-info-2nd">
            <i className="fas fa-sign-out-alt dropdown-icon fa-lg"></i><h5 className="dropdown-css">Logout</h5>
            </div>
            <p className="footer-tagline">Privacy &#183; Terms &#183; Advertising	&#183; Ad Choices	&#183; Cookies	&#183; More	&#183; Facebook &copy; 2021</p>
        </div>
            :
            ( 
           (onHelp && (<Help setOnHelp={setOnHelp} />) )||
           (onSetting &&( <SettingsAndPrivacy setOnSettings={setOnSettings}/>) )||
           (onDisplay &&(<Display setOnDisplay={setOnDisplay}/>))
           )

            
    )
    
}

export default Dropdown
