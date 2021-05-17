import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css'
import Signup from './Signup';

function Welcome() {
  const [loginInfo ,setLoginInfo]=useState([]);
  const[showSignup,setShowSignup]=useState(false);
  const toggle=()=>{
    setShowSignup(!showSignup)
  }
  const handleLogin =(e)=>{
    const {name , value}=e.target
    setLoginInfo(prevStep=>({
        ...prevStep,
        [name]:value
    }))
    
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let tempValues =localStorage.getItem("UserData");
     tempValues=JSON.parse(tempValues);
    //  for(let i=0;i<Object.keys(tempValues).length;i++){

    //  }
     console.log(tempValues);
    // for(let i=0;i<tempValues.length;i++){

    // }
  }
    return (
      <React.Fragment>
        <div className="taskbook">
        <h2 className="display-3 center">Taskbook</h2>
        <p className="headline">Taskbook helps you connect and share with the people in your task world.</p>
        </div>
        {/* <div className="card div-card" style={{width:'18rem'}}>
        <div className="card-body">
        <input placeholder="Email address or phone number"/>
        <input placeholder="Password"/>
        </div>
      </div> */}
      <div className="card div-card">
      <form onSubmit={handleSubmit}>
        
  <div className="mb-3">
  
    <input type="text" className="form-control" name="emailOrPhone"onChange={handleLogin} placeholder="Email address or phone number" />
  </div>
  <div className="mb-3">

    <input type="password" className="form-control"placeholder="Password" name="password"onChange={handleLogin}id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary login intro--btn">Log In</button> <br/>
  <a>Forgotton password?</a>
  <hr/>
  <div  className=" intro--btn create" onClick={toggle}>Create New Account</div>
  {showSignup &&<Signup setShowSignup={setShowSignup}/>}
</form>
</div>
     
      </React.Fragment>
    )
}

export default Welcome
