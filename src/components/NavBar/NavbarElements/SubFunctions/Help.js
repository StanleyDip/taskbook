import React from 'react'
import './Help.css'
const Help=(props)=> {
    const {setOnHelp}=props;
    const goback=()=>{
        setOnHelp(false)
    }
    return (
        <div className="help-container">
            <h2 className="inline-text"> <i class="fas fa-arrow-left fa-sm goback" onClick={goback}></i>  Help & Support</h2>
            <div className="settings-class-1st" >
                <i className="fas fa-cog dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Help Center</h5>
            </div>
            <div className="settings-class" >
                <i className="fas fa-cog dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Support Inbox</h5>
            </div>
            <div className="settings-class" >
                <i className="fas fa-cog dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Report a Problem</h5>
            </div>
        </div>
    )
}

export default Help
