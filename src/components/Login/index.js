import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useHistory } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { useState } from "react";



import { Link, withRouter,Navigate } from 'react-router-dom';


import {getAuth,GoogleAuthProvider,getAdditionalUserInfo} from 'firebase/auth'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAuMJq1e7iJ40gEllbsfZZjJGiki1Mguo8",
  authDomain: "freebaba-6dea0.firebaseapp.com",
  projectId: "freebaba-6dea0",
  storageBucket: "freebaba-6dea0.appspot.com",
  messagingSenderId: "482177714547",
  appId: "1:482177714547:web:ed4ece402dc27392fa5d06",
  measurementId: "G-F1BE4HEFPH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const Login = () => {
    // State for storing Google user data
    const [Gdata, setGdata] = useState(null);
    const [isSubmit, setSubmit] = useState(false);
    const [userexist, setUser] = useState("Inital");
    const [userId,setUserId] = useState(null);
    const [formData, setFormData] = useState({
      full_name: '',
      about: '',
      linkedin_url: '',
      email: '',
      gender:'',
      company: '',
      experience: '',
      collegename: '',
      role: '',
      date_of_birth: '',
      mobile_no: '',
      country: '',
      state: '',
      city: '',
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log(name,value)
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    // const handleInputChange = (e) => {
    //   console.log("XCvdfdb")
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // };

    const handleSubmit = async(e) => {
      e.preventDefault();
      const {createdat,uid,googleProPic,email} = Gdata;
      const {full_name,about,linkedin_url,gender,company,experience,
        collegename,role,date_of_birth,mobile_no,country,state,city} = formData;
      
      const dataToSend = {
        uid,
        full_name,
        googleProPic,
        email,
        company,
        experience,
        collegename,
        role,
        mobile_no,
        country,
        state,
        city,
        about,
        linkedin_url,
        gender,
        date_of_birth,
      }

      try {
          const response = await fetch('http://localhost:4000/createProfile/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
          });
      
          if (response.status === 200) {
            setUserId(response.user_id);
            console.log('Data sent successfully.');
            setSubmit(true)
          } else {
            console.error('Error sending data.');
          }
        } catch (error) {
          console.error('Error:', error);
      }
    //   const Query = `INSERT INTO user (userSK,full_name,profilepic_image_url,username,email,
    //     company,experience,collegename,role,mobile_no,country,state,city,verified,about,linkedin_url,gender,
    //     date_of_birth
    // ) VALUES ('sample_userSK','John Doe','http://example.com/profilepic.jpg','john_doe','john@example.com','Sample Company','5 years','Sample College',
    //     'Developer',1234567890,'Country','State','City','true','About John Doe','http://linkedin.com/in/johndoe','Male','1990-01-01'
    // );
    // `

    // const f = `${uid},${full_name},${googleProPic},`

      // Add your logic to handle the form submission (e.g., send data to the server)
      console.log('Form data submitted:', formData);
    };
   
    // Access the history object for navigation
   
  
    // Function to handle Google sign-in
    const onCheckifUserExist = async(Guid1)=>{
      try {
        const response = await fetch(`http://localhost:4000/profile/isexist/?guid='${Guid1}'`);
        console.log(response);
        if (response.status === 200) {
          console.log('Already a User'); 
          const userData = await response.json();
          setUser(userData.user_id);
          setUser("true");
        } else {
          setUser("false");
          console.error('Not a user.');
        }
      } catch (error) {
        setUser("servererror")
        console.error('Error:', error);
      }
    }

    const handleGoogleSignIn = async () => {
      // Initialize Firebase authentication and Google provider
      console.log("Handle Google button")
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
  
      try {
        // Sign in with Google popup
        const result = await signInWithPopup(auth, provider);
        console.log(result)
  
        // Extract user data from the result
        const Gdata1 = {
          name: result.user.displayName,
          createdat: result.user.metadata.creationTime,
          email: result.user.email,
          uid: result.user.uid,
          googleProPic: result.user.photoURL,
        };
  
        // Store user data in local storage
        localStorage.setItem('Gdata', JSON.stringify(Gdata1));
  
        // Log success and update state
        console.log('Google Sign-In Success');
        setGdata(Gdata1);
        onCheckifUserExist(result.user.uid);
        // Redirect to the profile page
      } catch (error) {
        // Handle Google sign-in error
        console.error('Google Sign-In Error:', error);
      }
    };

    // const UserForm = ()=>(
      
      
    //     <form className="userContform">
    //     {/* Render form fields */}
    //     <div className="formdiv">

        
    //     <label>
    //       Full Name: </label>
    //       <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} />
    //     <div>
    //     <label>
    //       About: </label>
    //       <textarea name="about" value={formData.about} onChange={handleInputChange} />
    //     </div>
        
      
  
    //     <label>
    //       LinkedIn URL: </label>
    //       <input type="text" name="linkedin_url" value={formData.linkedin_url} onChange={handleInputChange} />
      
  
    //     <label>
    //       Email: </label>
    //       <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
       
  
    //     <label>
    //       Company:</label>
    //       <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
       
  
    //     <label>
    //       Experience:</label>
    //       <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} />
       
    //       </div>
    //       <div  className="formdiv">

          
    //     <label>
    //       College Name:</label>
    //       <input type="text" name="collegename" value={formData.collegename} onChange={handleInputChange} />
        
  
    //     <label>
    //       Role:</label>
    //       <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
       
  
    //     <label>
    //       Age:</label>
    //       <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        
  
    //     <label>
    //       Mobile Number:</label>
    //       <input type="tel" name="mobile_no" value={formData.mobile_no} onChange={handleInputChange} />
       
  
    //     <label>
    //       Country:</label>
    //       <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
        
  
    //     <label>
    //       State:</label>
    //       <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
        
  
    //     <label>
    //       City:</label>
    //       <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
    //       <button type="submit" className="btnsubmit">Submit</button>
    //       </div>
    //     {/* Submit button */}
        
    //   </form>
    
    // )

    

    console.log(formData,"ReactFormData")
    const Navbar = () => (
      <nav className="navbar">
        <div className="logo-container">
          {/* <img
            src="https://pics.freeicons.io/uploads/icons/png/11469623821639569239-512.png"
            alt="ZealCrafters Logo"
            className="logo"
          /> */}
          <span className="brand-name">ZealCrafters</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a>contact</a></li>

          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
    console.log(userexist)

    if(userexist =='true'){
      window.location.href = `/profile/${userId}`;
    }else{
      console.log(isSubmit)
    }
    console.log("IsUSerExist",userexist)

    return (
      <>
      <Navbar/>
      <div className="topcont">
        {userexist==="Inital"?
        (<div className="middlecont">
         
          <button type="button" className="google-sign-in-button"  onClick={handleGoogleSignIn}>
            Sign in with Google
          </button>
        </div> ):null
      }
        {userexist == "false"?<div className="userCont">
          <div className="form">
          <form className="userContform">
        {/* Render form fields */}
        <div className="formdiv">

        
        <label>
          Full Name: </label>
          <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} />
        <div>
        <label>
          About: </label>
          <textarea name="about" value={formData.about} onChange={handleInputChange} />
        </div>
        <label>
          Gender:
        </label>
        <select value={formData.gender} name="gender" onChange={handleInputChange}>
          <option>
            Male
          </option>
          <option>
            Femail
          </option>
        </select>
        
      
  
        <label>
          LinkedIn URL: </label>
          <input type="text" name="linkedin_url" value={formData.linkedin_url} onChange={handleInputChange} />
      
  
        <label>
          Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
       
  
        <label>
          Company:</label>
          <input type="text" name="company" value={formData.company} onChange={handleInputChange} />
       
  
        <label>
          Experience:</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} />
       
          </div>
          <div  className="formdiv">

          
        <label>
          College Name:</label>
          <input type="text" name="collegename" value={formData.collegename} onChange={handleInputChange} />
        
  
        <label>
          Job Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleInputChange} />
  
        <label>
          DATE OF BIRTH:</label>
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange} />
        
  
        <label>
          Mobile Number:</label>
          <input type="tel" name="mobile_no" value={formData.mobile_no} onChange={handleInputChange} />
       
  
        <label>
          Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
        
  
        <label>
          State:</label>
          <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
        
  
        <label>
          City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          <button type="submit" className="btnsubmit" onClick={handleSubmit}>Submit</button>
          </div>
        {/* Submit button */}
        
      </form>
          </div>
          
        </div>: null}
        
      </div>
      </>
    );
  };
  
  export default Login;