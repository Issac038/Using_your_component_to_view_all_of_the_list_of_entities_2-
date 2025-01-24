import React from 'react';
import './postcard.css';
import LikeButton from './likebutton';

const PostCard = ({ profilePicture, username, content }) => {
  return (
    <div className="post-card">
      <img className="post-card__image" src={profilePicture} alt={`${username}'s profile`}/>
      <div className="post-card__content">
        <h3>{username}</h3>
        <p>{content}</p>
      </div>
      <LikeButton />
    </div>
  );
};

export default PostCard;
