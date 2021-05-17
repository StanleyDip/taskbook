import React from "react";
import Welcome from "./components/Welcome";
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Posts from './components/Posts/Posts'
function App() {
  return (
    <React.Fragment>
      <Welcome/>
      {/* <Posts/> */}
    </React.Fragment>
  );
}

export default App;
