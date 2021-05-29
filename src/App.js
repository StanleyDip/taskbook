import React,{useState} from "react";
import Welcome from "./components/Welcome";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Posts from './components/Posts/Posts'
import NavBar from "./components/NavBar/NavBar";
import './index.css'
import CreatePost from "./components/CreatePost/CreatePost";
import RightSideContacts from "./components/SideBar/Contacts/RightSideContacts";
function App() {
  const [goToPost,setGoToPost]=useState(false);
  return (
    
    
    //   {goToPost ? <Welcome setGoToPost={setGoToPost}/>
    //   :
     <React.Fragment>
      <NavBar/>
      <RightSideContacts/>
      {/* <Posts/>  */}
    
  <CreatePost/>
  
  </React.Fragment>
  );
}

export default App;
