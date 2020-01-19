import React from 'react';
import Header from './components/Header/Header.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import PostContainer from './components/PostContainer/PostContainer.jsx';
import './App.css';

const App = () => {

  return (
    <>
     <Header/>
     <div className = 'BigContainer'>
      <TopBar/>
      <PostContainer/>
     </div>
    </>
  );
};
export default App;