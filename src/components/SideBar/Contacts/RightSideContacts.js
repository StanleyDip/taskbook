import React from 'react'
import ContactList from './components/ContactList'
import './RightSideContacts.css'
const RightSideContacts=()=> {
    return (
        <div className="contact-container">
            <hr/>
            <p>Contact</p>
            <i class="fas fa-video contact-icon"></i> 
            <i class="fas fa-search contact-icon"></i>
            <i class="fas fa-ellipsis-h contact-icon"></i>
            <ContactList/>
        </div>
    )
}

export default RightSideContacts
