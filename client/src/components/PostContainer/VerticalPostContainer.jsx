import React from 'react';
import Post from './Post.jsx';
import './VerticalPostContainer.css';

const VerticalPostContainer = () => {
  return (
    <>
      <div className = "VerticalPostContainer">
        <Post/>
        <Post/>
      </div>
    </>
  );
};
export default VerticalPostContainer;