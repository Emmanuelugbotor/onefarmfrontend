import "./VendorDashboard.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NavLink, Routes, Route, useLocation, Link } from "react-router-dom";
import VendorDashMain from './vendorDashMain'
import SearchNotification from "../../component/SearchNotification/SearchNotification";
import FarmerDashAdd from "../farmerDashAdd/FarmerDashAdd";
import FarmerProducts from "../farmerProduct/FarmerProducts";
import FarmerSubscribe from "../farmerSuscribe/farmerSubscribe";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/vendorsAction";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  

// export default function VendorDashboard() {
  
  
//   const notify = () => toast("This feature is coming out soon");

//   const dispatch = useDispatch();
//   const { pathname } = useLocation();

//   const Logout=()=>  dispatch(signOut())

//   useEffect(()=>{

//   }, [dispatch])
  
//   return (
//     <div className="vendorDash">
//       <ToastContainer />
//       <div className="vendorDashboard_left">
//         <div  className="logo">
//           <Link to={"/"}>
//           <img src="/images/main-logo.png" alt="main-logo" />
//           </Link>
//         </div>
//         <ul className="vendorDashboard_left_list">
          
//           <NavLink
//             to=""
//             className={(navData) =>
//               "nav-link " +
//               (navData.isActive && pathname === "/vendor" ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item ">
//               <HomeIcon className="icon" />
//               <span>Dashboard</span>
//             </li>
//           </NavLink>
        
//           <NavLink
//             to="add"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item">
//               <AddCircleOutlineIcon className="icon" />
//               <span>add product</span>
//             </li>
//           </NavLink>

//           <NavLink
//             to="products"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item">
//               <RemoveRedEyeIcon className="icon" />
//               <span>view products</span>
//             </li>
//           </NavLink>

//           <NavLink
//             to="subscribe"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item">
//               <CardMembershipIcon className="icon" />
//               <span>Suscribe</span>
//             </li>
//           </NavLink>

//           <NavLink
//             to="chat"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item">
//               <ChatIcon className="icon" />
//               <span>Chat</span>
//             </li>
//           </NavLink>

//           <div
//             // to="e-learning"
//             onClick={()=>notify()}
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item"  >
//               <SchoolIcon className="icon" />
//               <span>E-learning</span>
//             </li>
//           </div>

//           <NavLink
//             to="settings"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item">
//               <SettingsIcon className="icon" />
//               <span>settings</span>
//             </li>
//           </NavLink>

//           <NavLink
//             to="logout"
//             className={(navData) =>
//               "nav-link " + (navData.isActive ? "active" : "")
//             }
//           >
//             <li className="vendorDashboard_left_item logout" onClick={()=>Logout()}>
//               <LogoutIcon className="icon" />
//               <span>logout</span>
//             </li>
//           </NavLink>

//         </ul>
//       </div>
//       <div className="vendorDashboard_right">
//         <SearchNotification />
//         <Routes>
//           <Route path="" element={<VendorDashMain />} />
//           <Route path="add" element={<FarmerDashAdd />} />
//           <Route path="products" element={<FarmerProducts />} />
//           <Route path="subscribe" element={<FarmerSubscribe />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }



export default function VendorDashboard() {

  
  const notify = () => toast("This feature is coming out soon");

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const Logout=()=>  dispatch(signOut())

  useEffect(()=>{

  }, [dispatch])

  // 
  const [reveal, setReveal] = useState(false);
  // handle the hide implementation
  function handleToggle() {
    setReveal(!reveal);
  }
  return (

    <div className="vendorDash">
      {/* <ToastContainer/> */}
      <div
        className={
          reveal ? "vendorDashboard_left reveal" : "vendorDashboard_left"
        }
      >
        <div className="menuIcon_logo_wrapper">
          <MenuIcon className="menuIcon" onClick={handleToggle} />
          <div className="logo">
            <Link to={"/"}>
              <img src="/images/main-logo.png" alt="main-logo" />
            </Link>
          </div>
        </div>

        <ul className="vendorDashboard_left_list">
          <NavLink
            to=""
            className={(navData) =>
              "nav-link " +
              (navData.isActive && pathname === "/vendor" ? "active" : "")
            }
          >
            <li className="vendorDashboard_left_item " onClick={handleToggle}>
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>

          <NavLink
            to="/farmers"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="vendorDashboard_left_item" onClick={handleToggle}>
              <AddCircleOutlineIcon className="icon" />
              <span> Market </span>
            </li>
          </NavLink>

          <NavLink
            to="products"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="vendorDashboard_left_item" onClick={handleToggle}>
              <RemoveRedEyeIcon className="icon" />
              <span>Transaction </span>
            </li>
          </NavLink>

          {/* <div
            onClick={()=> toast("This feature is coming out soon")}
            style={{
              cursor: "pointer"
            }}
            to="subscribe"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <CardMembershipIcon className="icon" />
              <span>Suscribe</span>
            </li>
          </div>

          <div
            onClick={()=> toast("This feature is coming out soon")}
            style={{
              cursor: "pointer"
            }}
            to="chat"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <ChatIcon className="icon" />
              <span>Chat</span>
            </li>
          </div>

          <div
            // to="e-learning"
            style={{
              cursor: "pointer"
            }}
            onClick={()=> toast("This feature is coming out soon")}
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <SchoolIcon className="icon" />
              <span>E-learning</span>
            </li>
          </div> */}

          <NavLink
            to="settings"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="vendorDashboard_left_item" onClick={handleToggle}>
              <SettingsIcon className="icon" />
              <span>settings</span>
            </li>
          </NavLink>

          <div
            // to="logout"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li
              className="vendorDashboard_left_item logout"
              onClick={() => Logout()}
            >
              <LogoutIcon className="icon" />
              <span>logout</span>
            </li>
          </div>
        </ul>
      </div>
      <div className="vendorDashboard_right">
        <div className="menu_icon_searchNotification">
          <MenuIcon className="menuIcon" onClick={handleToggle} />
          <SearchNotification />
        </div>

        <Routes>
          <Route path="" element={<VendorDashMain />} />
          {/* <Route path="add" element={<FarmerDashAdd />} />
          <Route path="products" element={<FarmerProducts />} /> */}
          <Route path="subscribe" element={<FarmerSubscribe />} />
          {/* <Route path="settings" element={<FarmersSetting />} /> */}
        </Routes>
      </div>
    </div>
  );
}