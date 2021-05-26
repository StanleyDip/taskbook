import React,{useState} from 'react'
import './CreatePost.css'
import image from '../NavBar/NavbarElements/dp.jpg';
import ModalCreateTask from './CreateTaskModal';
function CreatePost() {
  
   
    return (
        <div className="createpost-container">
            <div className="createpost-1st">
                <img className="createpost-avatar" src={image} alt=""/>
                <input className="createpost-input"  type="search" placeholder="What task do you want to do?"/>
            </div>
            <div className="createpost-2nd">
                <div className="create-videos">
                <i className="fas fa-video fa-lg createpost-video"></i>
                <p className="cp">Live Video</p>
            </div>
            <div className="create-photos">
                <i className="fas fa-images fa-lg createpost-photos"></i>
                <p className="cp">Photo/Video</p>
            </div>
            <div className="create-photos">
            <i className="far fa-smile fa-lg createpost-activity"></i>
                <p className="cp">Photo/Video</p>
            </div>
            </div>
        </div>
    )
}

export default CreatePost
