import React from 'react'
import './SettingsAndPrivacy.css'
const SettingsAndPrivacy=(props) =>{
    const {setOnSettings}=props;
    const goback=()=>{
        console.log("hi")
        setOnSettings(true)
    }
    return (
        <div className="settings-container">
        <h2 className="inline-text"> <i class="fas fa-arrow-left fa-sm goback" onClick={goback}></i>  Settings & Privacy</h2>
       
        <div className="settings-class-1st" >
            <i className="fas fa-cog dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Settings & Privacy</h5>
            </div>
            <div className="settings-class" >
            <i className="fas fa-lock dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Privacy Checkup</h5>
            </div>
            <div className="settings-class" >
            <i className="fas fa-lock dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Privacy Shortcuts</h5>
            </div>
            <div className="settings-class" >
            <i className="fas fa-tasks dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Activity Log</h5>
            </div>
            <div className="settings-class" >
            <i className="fas fa-book dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">News Feed Preference</h5>
            </div>
            <div className="settings-class" >
            <i className="fas fa-globe dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Language</h5>
            </div>
        </div>
    )
}

export default SettingsAndPrivacy
