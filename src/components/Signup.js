import React,{useState} from "react";
import "./Signup.css";

const Signup = (props) => {
  const [usersInfo,setUsersInfo]=useState({
    fname:'',
    sname:'',
    emailOrPhone:'',
    password:'',
    gender:'',
      day:'',
      month:'',
      year:''
    
  });
  const { setShowSignup } = props;
  const closeForm = () => {
    setShowSignup(false);
  };
  const handleChange=e=>{
    const {name,value}=e.target;
    setUsersInfo(prevState=>({
      ...prevState,
      [name]:value
    }))
  
}
const addToDB=(e)=>{
  e.preventDefault();
  let tempUsers=localStorage.getItem("UserData");
  tempUsers=JSON.parse(tempUsers);
  tempUsers=Object.keys(tempUsers);
  console.log("checker");
  console.log(tempUsers.emailOrPhone===undefined);
  console.log("New");
  console.log(usersInfo);
  console.log("tempUsers type-->"+typeof(tempUsers));
  console.log("userInfo-->"+usersInfo.fname);
  const checker=tempUsers.emailOrPhone===undefined;
  console.log("tempUsers type after parse-->"+typeof(tempUsers));
  if(checker){// the user doesnot exists
    tempUsers.push(usersInfo);
    localStorage.setItem("UserData",JSON.stringify(tempUsers));
  }
}
  return (
    <div className="signup-card">
      <h2 className="signup-h2">Sign Up</h2>
      <i className="fas fa-times crossbar" onClick={closeForm}></i>
      <p className="guideline">It's quick and easy.</p>
      <hr className="signup-hr" />
      <input className="firstname" placeholder="First Name" name="fname"onChange={handleChange}></input>
      <input className="firstname" placeholder="Surname"name="sname"onChange={handleChange}></input>
      <input
        className="inputs-x"
        placeholder="Mobile number or email address" name="emailOrPhone"onChange={handleChange}></input>
      <input className="inputs-x" placeholder="New Password"name="password"onChange={handleChange}></input>
      <label className="label-signup">Date of birth</label>
      <select className="select-day" name="day"onChange={handleChange} id="day">
        <option>Day</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="10">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="10">30</option>
      </select>
      <select className="select-day" name="month" id="month"onChange={handleChange}>
        <option>Month</option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="Apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sep">Sep</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
      <select className="select-day" name="year" id="year"onChange={handleChange}>
        <option>Year</option>
        <option value="1940">1940</option>
        <option value="1941">1941</option>
        <option value="1942">1942</option>
        <option value="1943">1943</option>
        <option value="1944">1944</option>
        <option value="1945">1945</option>
        <option value="1946">1946</option>
        <option value="1947">1947</option>
        <option value="1948">1948</option>
        <option value="1949">1949</option>
        <option value="1950">1950</option>
        <option value="1951">1951</option>
        <option value="1952">1952</option>
        <option value="1953">1953</option>
        <option value="1954">1954</option>
        <option value="1955">1955</option>
        <option value="1956">1956</option>
        <option value="1957">1957</option>
        <option value="1958">1958</option>
        <option value="1959">1959</option>
        <option value="1960">1960</option>
        <option value="1961">1961</option>
        <option value="1962">1962</option>
        <option value="1963">1963</option>
        <option value="1964">1964</option>
        <option value="1965">1965</option>
        <option value="1966">1966</option>
        <option value="1967">1967</option>
        <option value="1968">1968</option>
        <option value="1969">1969</option>
        <option value="1970">1970</option>
        <option value="1971">1971</option>
        <option value="1972">1972</option>
        <option value="1973">1973</option>
        <option value="1974">1974</option>
        <option value="1975">1975</option>
        <option value="1976">1976</option>
        <option value="1977">1977</option>
        <option value="1978">1978</option>
        <option value="1979">1979</option>
        <option value="1980">1980</option>
        <option value="1981">1981</option>
        <option value="1982">1982</option>
        <option value="1983">1983</option>
        <option value="1984">1984</option>
        <option value="1985">1985</option>
        <option value="1986">1986</option>
        <option value="1987">1987</option>
        <option value="1988">1988</option>
        <option value="1989">1989</option>
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <label className="label-signup">Gender</label>
      <div className="gender">
        Female <input className=" radio form-check-input" type="radio" id="female"name="gender" value="female"onChange={handleChange}/>
      </div>
      <div className="gender">
        Male <input className=" radio form-check-input" type="radio" id="male"name="gender" value="male"onChange={handleChange}/>
      </div>
      <div className="gender">
        Custom <input className=" radio form-check-input" type="radio" id="custom"name="gender" value="custom"onChange={handleChange}/>
      </div>
      <p className="policy">
        By clicking Sign Up, you agree to our <a>Terms,</a> <a>Data Policy</a>{" "}
        and <a>Cookie Policy</a>. You may receive SMS notifications from us and
        can opt out at any time.
      </p>
      
      <button className="signUp-btn" onClick={addToDB}>Sign Up</button>
    </div>
  );
  console.log(usersInfo);
};

export default Signup;
