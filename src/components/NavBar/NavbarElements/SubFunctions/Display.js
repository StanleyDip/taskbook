import React from 'react'
import './Display.css'
const Display=(props)=> {
    const {setOnDisplay}=props
    const goback=()=>{
        setOnDisplay(false)
    }
    return (
        <div className="display-container">
            <h2 className="inline-text"> <i class="fas fa-arrow-left fa-sm goback" onClick={goback}></i>  Display & Accessibility</h2>
            <div className="display-child-1st">
            <h3 className="darkmode-header"> <i className="fas fa-moon dropdown-icon fa-lg"></i>Dark Mode</h3>
            <p className="display-1st">Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
            <div className="OnOff hover">Off<input className="OnOffButton"type="radio" id="darkmodeoff" name="darkmodeoff" checked value="darkmodeoff"/></div>
            <div className="OnOff-2nd hover">On<input className="OnOffButton-2nd"type="radio" id="darkmodeon" name="darkmodeon" value="darkmodeon"/></div>
            </div>
        <div className="display-child">
        <h3 className="darkmode-header"> <i className="fas fa-compact-disc dropdown-icon fa-lg"></i>CompactMode</h3>
        <p className="display-1st">Make your font size smaller so more content can fit on the screen.</p>
        <div className="OnOff hover">Off<input className="OnOffButton"type="radio" id="off" name="off" checked value="off"/></div>
            <div className="OnOff-2nd hover">On<input className="OnOffButton-2nd"type="radio" id="on" name="on" value="on"/></div>
        </div>
        <div className="user-info-2nd">
            <i className="fas fa-keyboard dropdown-icon fa-lg"></i>  <h5 className="dropdown-css">Keyboard</h5><i className="fas fa-chevron-right more-details fa-lg"></i>
            </div>
    </div>
    )
}

export default Display
