import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <>
      <div className = "Post">
          <img className='Thumbnail' src="../../../public\img\front.jpeg"/>
          <p className='Date'>2020.01.17</p>
          <p className='Title'>썸네일 이미지란?</p>
          <hr/>
          <p className='Content'>섬네일은 사진의 축소판이며 사진을 탐색하면서 알아 보기 쉽게 만들어 주며 그림을 일반 문자열 색인과 같게 취급한다.</p>
      </div>
    </>
  );
};
export default Post;