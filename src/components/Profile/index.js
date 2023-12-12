import React, {useState,useEffect } from 'react';

import Post from "../Posts";
import './index.css'
import Navbar from "../Navbar";

const dummyData = [
  {
    "post_id": 1,
    "user_id": 101,
    "user_profile_pic": "https://buffer.com/library/content/images/2022/03/sigmund-MQ2xYBHImKM-unsplash--1--1.jpg",
    "user_name": "User101",
    "post_image_url": "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D",
    "post_text": "This is the first post. What a wonderful day!",
    "created_at": "2023-01-01",
    "likes_count": 15,
    "comments_count": 8,
    "is_public": true
  },
  {
    "post_id": 2,
    "user_id": 102,
    "user_profile_pic": "http://example.com/profile_pic2.jpg",
    "user_name": "User102",
    "post_image_url": "https://example.com/image2.jpg",
    "post_text": "Enjoying the weekend getaway!",
    "created_at": "2023-02-15",
    "likes_count": 20,
    "comments_count": 12,
    "is_public": true
  },
  {
    "post_id": 3,
    "user_id": 103,
    "user_profile_pic": "http://example.com/profile_pic3.jpg",
    "user_name": "User103",
    "post_image_url": "https://example.com/image3.jpg",
    "post_text": "Exploring new places!",
    "created_at": "2023-03-10",
    "likes_count": 25,
    "comments_count": 5,
    "is_public": true
  },
  {
    "post_id": 4,
    "user_id": 104,
    "user_profile_pic": "http://example.com/profile_pic4.jpg",
    "user_name": "User104",
    "post_image_url": "https://example.com/image4.jpg",
    "post_text": "Coding all night long!",
    "created_at": "2023-04-05",
    "likes_count": 18,
    "comments_count": 10,
    "is_public": true
  },
  {
    "post_id": 5,
    "user_id": 105,
    "user_profile_pic": "http://example.com/profile_pic5.jpg",
    "user_name": "User105",
    "post_image_url": "https://example.com/image5.jpg",
    "post_text": "Chilling by the beach.",
    "created_at": "2023-05-20",
    "likes_count": 30,
    "comments_count": 15,
    "is_public": true
  },
  {
    "post_id": 6,
    "user_id": 106,
    "user_profile_pic": "http://example.com/profile_pic6.jpg",
    "user_name": "User106",
    "post_image_url": "https://example.com/image6.jpg",
    "post_text": "Foodie adventures!",
    "created_at": "2023-06-12",
    "likes_count": 22,
    "comments_count": 7,
    "is_public": true
  },
  {
    "post_id": 7,
    "user_id": 107,
    "user_profile_pic": "http://example.com/profile_pic7.jpg",
    "user_name": "User107",
    "post_image_url": "https://example.com/image7.jpg",
    "post_text": "Hiking in the mountains.",
    "created_at": "2023-07-25",
    "likes_count": 28,
    "comments_count": 9,
    "is_public": true
  },
  {
    "post_id": 8,
    "user_id": 108,
    "user_profile_pic": "http://example.com/profile_pic8.jpg",
    "user_name": "User108",
    "post_image_url": "https://example.com/image8.jpg",
    "post_text": "Lazy Sunday vibes.",
    "created_at": "2023-08-08",
    "likes_count": 16,
    "comments_count": 6,
    "is_public": true
  },
  {
    "post_id": 9,
    "user_id": 109,
    "user_profile_pic": "http://example.com/profile_pic9.jpg",
    "user_name": "User109",
    "post_image_url": "https://example.com/image9.jpg",
    "post_text": "Gaming marathon!",
    "created_at": "2023-09-30",
    "likes_count": 24,
    "comments_count": 11,
    "is_public": true
  },
  {
    "post_id": 10,
    "user_id": 110,
    "user_profile_pic": "http://example.com/profile_pic10.jpg",
    "user_name": "User110",
    "post_image_url": "https://example.com/image10.jpg",
    "post_text": "Artistic moments.",
    "created_at": "2023-10-15",
    "likes_count": 19,
    "comments_count": 8,
    "is_public": true
  }
]


const ProfileData = 
  {
    user_id: 1,
    userSK: "sk123",
    full_name: "John Doe",
    gender: "Male",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    linkedIn_url: "https://www.linkedin.com/in/johndoe/",
    profilepic_image_url: "https://example.com/johndoe.jpg",
    username: "johndoe",
    email: "johndoe@example.com",
    company: "ABC Inc.",
    experience: "5 years",
    collegename: "University XYZ",
    role: "Software Engineer",
    date_of_birth: 19900101, // Assuming YYYYMMDD format
    mobile_no: 1234567890,
    country: "USA",
    state: "California",
    city: "San Francisco",
    verified: "Yes",
  }


const Profile=()=>{
  const [posttext,setText] = useState("");
  const [datamain, setdatamain] = useState([]);
  const [userInfo, setuserInfo] = useState({
    full_name:"",
    gender:"",
    about:"",
    linkedIn_url:"",
    profilepic_image_url:"",
    username:"",
    email:"",
    company:"",
    experience:"",
    collegename:"",
    role:"",
    date_of_birth:"",
    mobile_no:"",
    country:"",
    state:"",
    city:"",
    verified:""
  })

 
  // const fetchProfileData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/profiles/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Data",data)
  //       setdatamain(data);
  //       console.log('User data fetched successfully.');
  //     } else {
  //       console.log(`Error fetching profile data: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching profile data:', error);
  //   }
  // };
  

  useEffect(() => {
    console.log(`Fetching profile data for ID:`,userInfo)
  },[]);
  

  const imageStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url("${userInfo.profilepic_image_url}")`,
  };

  return (
    // Your component JSX here
    <>
      <Navbar/>
      <div className="profile-top-body-div">
        <div className="mid-main-body-profile">
          <div className="cover-photo-profile-card">
          </div>
          <div className="profile-div-top-card">
          <div className="Profilecard-profile-pic-div">
              <div style={imageStyle}>
              </div>
          </div>
            <div >
             <strong><span className="profile-username-span">{userInfo.username}</span></strong> 
            </div>
          </div>
          <div className="profile-card-user-details">
            <div className="profile-card-user-details-span1">
              <span>Full Name: <strong>{userInfo.full_name}</strong></span>
              <span>Company: <strong>{userInfo.company}</strong></span>
              <span>Designation:<strong>{userInfo.role}</strong></span>
              <span>Experience:<strong>{userInfo.experience}</strong></span>
              <span>College: <strong>{userInfo.collegename}</strong></span>
            </div>
            <div className="profile-card-user-details-span2">
              <span>{userInfo.country}</span>
              <span>{userInfo.state}</span>
              <span>{userInfo.city}</span>
            </div>
          </div>
        </div>
          <div className="About-class-top">
             About:-<br/>
             {userInfo.about}
          </div>
          <div className="post-form-container About-class-top">
      <form >

        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content" 
          rows="4" cols="50"
          required
        ></textarea>
         

        <button type="submit">Post</button>
      </form>
          </div>
    <div className="About-class-top">
    {dummyData.map((post) => (
        <Post key={post.post_id} post={post} />
      ))}
    </div>
      </div>
    </>
  );
};

export default Profile;
