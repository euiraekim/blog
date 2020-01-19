import React, {useState} from 'react';
import './TopBar.css';

const TopBar = () => {
  const [category, setCategory] = useState(['Javascript', 'React', 'Node.js', 'Computer Science', 'Network', 'Http']);
  return (
    <>
      <div className = "TopBar">
          <img className='SearchIcon' src="../../../public\img\search.png"/>
      </div>
    </>
  );
};
export default TopBar;