import React, {useState} from 'react';
import './Menu.css';

const Menu = () => {
  const [category, setCategory] = useState(['Javascript', 'React', 'Node.js', 'Computer Science', 'Network', 'Http']);
  return (
    <>
      <div className = "Menu">
        <ul className = "CategoryContainer1">
          <li>Home</li>
          <li>Story</li>
        </ul>
        <ul className = "CategoryContainer2">
          {category.map((v, i) => (
            <li>{v}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Menu;