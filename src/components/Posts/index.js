import React, { useState,useEffect } from 'react';
import './index.css'

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes_count);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment,setComment] = useState("");

  useEffect=(()=>{


  },[])

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    
    <div className="post">
      
      <div className="user-info">
        <img src={post.user_profile_pic} alt="User Profile" />
        <span>{post.user_name}</span>
      </div>
      <img className="post-image" src={post.post_image_url} alt="Post" />
      <p className="post-text">{post.post_text}</p>
      <div className="post-details">
        <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(!liked);
         }}
      >
         {likes} {liked? "Liked":"Like"}
      </button>

        <button onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
      {showComments && (
        <div className="comments">
          {/* Map through the comments and display them */}
          {Array.from({ length: post.comments_count }, (_, index) => (
            <div key={index} className="comment">
              Comment {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default Post;
