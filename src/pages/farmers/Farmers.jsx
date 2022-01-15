import './Farmers.scss';
import Data from '../../dommydata';
// import HomeIcon from '@mui/icons-material/Home';
import SearchComponent from '../../component/Search/Search';
import StarIcon from '@mui/icons-material/Star';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';
const { farmers } = Data;
export default function Farmers() {
  const [current, setCurrent] = useState(farmers[0].id);

  function handleClicked(id) {
    setCurrent(id);
  }
  return (
    <div className="farmers">
      <div className="farmer_sidebar">
        <div className="logo">
          <img src="/images/main-logo.png" alt="main-logo" />
        </div>
        <div className="farmer_heading">
          <PersonOutlineIcon />
          <span>Our Farmers</span>
        </div>
        <ul className="farmer_list">
          {farmers.map((user) => {
            return (
              <li
                key={user.id}
                onClick={() => handleClicked(user.id)}
                className={current === user.id && 'active'}
              >
                <div className="farmer_list_image">
                  <img src={`${user.photo_url}`} alt="" />
                </div>
                <div className="farmer_list_name">{user.user_name}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="farmer_main">
        <div className="farmer_main_wrapper">
          <SearchComponent />
          <div className="user__card">
            <div className="user__card-title">Profile</div>
            <li>
              <div className="farmer_list_image">
                <img src={`${farmers[current - 1].photo_url}`} alt="" />
              </div>
              <div className="farmer_list_name">
                <span className="name">{farmers[current - 1].user_name}</span>
                <span className="title">{farmers[current - 1].title}</span>
              </div>
            </li>
            <div className="strength">
              Profile Strength: <span>100%</span>
            </div>
            <div className="rating">
              <p>Rating:</p>
              <div className="rating_wrapper">
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
                <StarIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="individual_products">
            <h3 className="individual_products_title">List of Products</h3>
            <ul className="products_list">
              {farmers[current - 1].product.map((prod, index) => {
                return (
                  <li className="products_item" key={index}>
                    <div className="products_item_image">
                      <img src={`${prod.img}`} alt="" />
                    </div>
                    <div className="products_item_category">{prod.name}</div>
                    <button className="button">view product</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
