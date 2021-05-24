import React,{useState} from "react";
import Welcome from "./components/Welcome";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Posts from './components/Posts/Posts'
import NavBar from "./components/NavBar/NavBar";
import './index.css'
function App() {
  const [goToPost,setGoToPost]=useState(false);
  return (
    
    
    //   {goToPost ? <Welcome setGoToPost={setGoToPost}/>
    //   :
     <React.Fragment>
      <NavBar/> 
      <Posts/> 
    
  
  </React.Fragment>
  );
}

export default App;
