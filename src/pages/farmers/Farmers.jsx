// import HomeIcon from '@mui/icons-material/Home';
import "./Farmers.scss";
import axios from "axios";
import Data from "../../dommydata";
import { url } from "../../constant/url";
import { useEffect, useState } from "react";
import addToCarts from "../../utils/addToCart";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import SearchComponent from "../../component/Search/Search";
import { getProducts } from "../../redux/actions/productAction";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CartButton from "../../utils/cartButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DetailsResponse from "../../component/detailsResponse/detailsResponse";

const { farmers } = Data;

export default function Farmers() {

  const userSignin = useSelector((state) => state.userSignIn);

  const { userInfo } = userSignin;




  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  const [current, setCurrent] = useState(farmers[0].id);
  const [farmersList, setFarmersList] = useState(farmers);
  const [productList, setProduct] = useState(farmers);
  const [farmersProduct, setFarmerProduct] = useState(farmers);

const [show, setShow] = useState(false); 
const [productInfo, setProductInfo] = useState();

  function handleClicked(id) {
    setCurrent(id);
    setFarmerProduct(productList.filter((items) => items.farmer_id === id));
    setReveal(!reveal);
  }

  let added = addToCarts(useDispatch, useSelector);

  const hideDetails = () => {
    setShow(!show);
  };

  const showDetails = (items) => {
    setShow(true);
    setProductInfo(items);
  };

  useEffect(() => {
    axios
      .get(`${url}getFarmers`)
      .then((res) => {
        let { data } = res;
        setFarmersList(data.result);
      })
      .catch((e) => {
        console.log("ERROR FETCHING DATA ");
      });

    axios
      .get(`${url}getProducts`)
      .then((res) => {
        let { data } = res;
        setFarmerProduct(data.result);
        setProduct(data.result);
      })
      .catch((e) => {
        console.log("ERROR FETCHING PRODUCT DATA ");
      });

    dispatch(getProducts());
  }, [dispatch]);
  // handle thetoggle implementation of the farmers hamburger
  function handleToggle() {
    setReveal(!reveal);
  }
  return (
    <div className="farmers">
      <CartButton />
      <div className={reveal ? "reveal farmer_sidebar" : "farmer_sidebar"}>
        <div className="hamburger_logo_wrapper">
          <MenuIcon className="menuIcon" onClick={handleToggle} />
          <div className="logo">
            <Link to={"/"}>
              <img src="/images/main-logo.png" alt="main-logo" />
            </Link>
          </div>
        </div>

        <div className="farmer_heading">
          <PersonOutlineIcon className="farmers_icon" />
          <h1>Our Farmers</h1>
        </div>
        <ul className="farmer_list">
          {farmersList.map((user) => {
            return (
              <li
                key={user.id}
                onClick={() => handleClicked(user.id)}
                className={current === user.id && "active"}
              >
                <div className="farmer_list_image">
                  <img
                    src={`${
                      user.photo_url ? user.photo_url : "/images/main-logo.png"
                    }`}
                    alt=""
                  />
                </div>
                <div className="farmer_list_name">
                  {user.name} <br /> {user.address}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="farmer_main">
        <div className="farmer_main_wrapper">
          <div className="search_home_wrapper">
            <MenuIcon className="home_icon" onClick={handleToggle} />
            <SearchComponent class={true} />
          </div>
          <div className="user__card">
            <div className="user__card-title">Profile</div>
            <li>
              <div className="farmer_list_image">
                <img
                  src={`${
                    farmersList[current - 1].photo_url
                      ? farmersList[current - 1].photo_url
                      : "/images/main-logo.png"
                  }`}
                  alt=""
                />
              </div>
              <div className="farmer_list_name">
                <span className="name">{farmersList[current - 1].name}</span>
                <span className="title">
                  {farmersList[current - 1].address}
                </span>
              </div>
            </li>
            <div className="strength">
              Profile Strength: <span>85%</span>
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
              {farmersProduct.map((prod, index) => {
                return (
                  <li className="products_item" key={index}>
                    <div className="products_item-wrapper">
                      <div className="products_item_image">
                        <img src={`${url + prod.imagesName}`} alt="" />
                      </div>
                      <div className="products_item_category">
                        <p> {prod.name} </p>
                        <p> #{prod.amt} </p>
                        {/* <span> {prod.weight} kg </span> */}
                      </div>
                    </div> 
                    {
                     userInfo&& userInfo.token && userInfo.role === "farmer" ? (
                        null
                      ): (

                        <button
                          className="button"
                          onClick={() => added(`${prod.id}`, prod.fullbag)}
                          style={{borderRadius: "50%"}}
                        >
                          <i className="fa fa-shopping-cart" aria-hidden="true">  </i>

                          {/* {prod.amt} */}

                        </button>

                      )
                    }
                    <button className="button" onClick={() => showDetails(prod)} >View Product</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {show && (
        <DetailsResponse items={productInfo} hideDetails={hideDetails} />
      )}
    </div>
  );
}
