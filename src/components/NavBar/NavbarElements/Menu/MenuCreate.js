import React from 'react'
import './Menu.css'
const MenuCreate=()=> {
    return (
        <div className="menu-create">
        <h2 className="sidebar-create">Create</h2>
        <div className="settings-class">
          <i className="fas fa-edit dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Post</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-book-open dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Story</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-video dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Room</h5>
        </div>

        <hr/>

        <div className="settings-class">
          <i className="fas fa-flag dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Page</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-bullhorn dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Ad</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-users dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Group</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-calendar-plus dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Event</h5>
        </div>
        <div className="settings-class">
          <i className="fas fa-shopping-basket dropdown-icon fa-lg"></i>{" "}
          <h5 className="dropdown-css">Marketplace Listing</h5>
        </div>
      </div>
    )
}

export default MenuCreate
