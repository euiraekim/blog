import React from 'react';
import './PostContainer.css';
import VerticalPostContainer from './VerticalPostContainer.jsx';

const PostContainer = () => {
     return (
    <>
      <div className = "PostContainer">
        <VerticalPostContainer/>
        <VerticalPostContainer/>
        <VerticalPostContainer/>
      </div>
    </>
  );
};
export default PostContainer;