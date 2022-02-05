import "./FarmerDashboard.scss";
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
import FarmerDashMain from "../farmerDashMain/farmerDashMain";
import SearchNotification from "../../component/SearchNotification/SearchNotification";
import FarmerDashAdd from "../farmerDashAdd/FarmerDashAdd";
import FarmerProducts from "../farmerProduct/FarmerProducts";
import FarmerSubscribe from "../farmerSuscribe/farmerSubscribe";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions/usersAction";
import { useEffect } from "react";

export default function FarmerDashboard() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const Logout=()=>  dispatch(signOut())

  useEffect(()=>{

  }, [dispatch])
  
  return (
    <div className="farmerDash">
      <div className="farmerDashboard_left">
        <div  className="logo">
          <Link to={"/"}>
          <img src="/images/main-logo.png" alt="main-logo" />
          </Link>
        </div>
        <ul className="farmerDashboard_left_list">
          
          <NavLink
            to=""
            className={(navData) =>
              "nav-link " +
              (navData.isActive && pathname === "/dashboard" ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item ">
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
        
          <NavLink
            to="add"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <AddCircleOutlineIcon className="icon" />
              <span>add product</span>
            </li>
          </NavLink>

          <NavLink
            to="products"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <RemoveRedEyeIcon className="icon" />
              <span>view products</span>
            </li>
          </NavLink>

          {/* <NavLink
            to="subscribe"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <CardMembershipIcon className="icon" />
              <span>Suscribe</span>
            </li>
          </NavLink>

          <NavLink
            to="chat"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <ChatIcon className="icon" />
              <span>Chat</span>
            </li>
          </NavLink>

          <NavLink
            to="e-learning"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <SchoolIcon className="icon" />
              <span>E-learning</span>
            </li>
          </NavLink>
 */}
          <NavLink
            to="settings"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item">
              <SettingsIcon className="icon" />
              <span>settings</span>
            </li>
          </NavLink>

          <NavLink
            to="logout"
            className={(navData) =>
              "nav-link " + (navData.isActive ? "active" : "")
            }
          >
            <li className="farmerDashboard_left_item logout" onClick={()=>Logout()}>
              <LogoutIcon className="icon" />
              <span>logout</span>
            </li>
          </NavLink>

        </ul>
      </div>
      <div className="farmerDashboard_right">
        <SearchNotification />
        <Routes>
          <Route path="" element={<FarmerDashMain />} />
          <Route path="add" element={<FarmerDashAdd />} />
          <Route path="products" element={<FarmerProducts />} />
          <Route path="subscribe" element={<FarmerSubscribe />} />
        </Routes>
      </div>
    </div>
  );
}
