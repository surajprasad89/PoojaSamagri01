import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Samagri</h1>
      <p className='explore-menu-text'>
      Choose from a carefully curated selection of premium Pooja Samagri.
      Our mission is to provide you with all the essential items for your spiritual rituals, ensuring a divine and fulfilling experience every time
      </p>
      <div className="explore-menu-list">
        {menu_list && menu_list.length > 0 ? menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
            key={index} 
            className='explore-menu-list-item'
          >
            <p>{item.menu_name}</p>
          </div>
        )) : <p>No items available.</p>}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
