import React from "react";
import "./adminDashboard.scss";
import KeyIcon from "@mui/icons-material/Key";
import { Link, useLocation } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
export default function AdminDashboard() {
  const { pathname } = useLocation();
  const dashboardArray = [
    {
      name: "Dashboard",
      _id: 1,
      path: "",
      icon: KeyIcon,
      pathLink: "/admin_dashboard",
    },
    {
      name: "Business",
      _id: 2,
      path: "business",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/business",
    },
    {
      name: "Farmers",
      _id: 3,
      path: "farmers",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/farmers",
    },
    {
      name: "Buyers",
      _id: 4,
      path: "buyers",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/buyers",
    },
  ];
  const dashboardArray1 = [
    {
      name: "Setting",
      _id: 1,
      path: "Setting",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/Setting",
    },
    {
      name: "Contact",
      _id: 2,
      path: "Contact",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/Contact",
    },
    {
      name: "Logout",
      _id: 3,
      path: "Logout",
      icon: KeyIcon,
      pathLink: "/admin_dashboard/Logout",
    },
  ];
  const farmerList = [
    {
      _id: "122gfhfk737369xd12985",
      desc: " Vel pellentesque ornare ",
      status: "suspended",
    },
    {
      _id: "122gfhfk737369xd12986",
      desc: " Vel pellentesque ornare ",
      status: "suspended",
    },
    {
      _id: "122gfhfk737369xd12987",
      desc: " Vel pellentesque ornare ",
      status: "suspended",
    },
    {
      _id: "122gfhfk737369xd12988",
      desc: " Vel pellentesque ornare ",
      status: "suspended",
    },
    // {
    //   _id: "122gfhfk737369xd12989",
    //   desc: " Vel pellentesque ornare ",
    //   status: "suspended",
    // },
    // {
    //   _id: "122gfhfk737369xd12990",
    //   desc: " Vel pellentesque ornare ",
    //   status: "suspended",
    // },
  ];
  return (
    <div className="admin_dashboard">
      <div className="sidenav">
        <div className="image_wrapper">
          <img src="/images/main-logo.png" alt="" className="header__logo" />
        </div>
        <h1>Main pages</h1>
        <ul className="active">
          {dashboardArray.map((item) => {
            return (
              <Link
                to={item.path}
                key={item._id}
                className={
                  item.pathLink === pathname ? "nav-link active" : "nav-link"
                }
              >
                <li>
                  <item.icon className="icon" />
                  <span>{item.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
        <h1>General</h1>
        <ul>
          {dashboardArray1.map((item) => {
            return (
              <Link
                to={item.path}
                key={item._id}
                className={
                  item.pathLink === pathname ? "nav-link active" : "nav-link"
                }
              >
                <li>
                  <item.icon className="icon" />
                  <span>{item.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="main_content">
        <div className="search_notification main_content_notification-wrapper ">
          <div className="notification_user main_content_notification">
            <div className="notification">
              <NotificationsNoneIcon />
              <span>1</span>
            </div>
            <div className="user">
              <img src="/images/about-hero-img.png" alt="" />
            </div>
          </div>
        </div>
        <section className="farmers-network">
          <div className="title_add">
            <h1>Farmers</h1>
            <button>
              Add <AddIcon className="add" />
            </button>
          </div>
          <div className="farmer_table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {farmerList.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.desc}</td>
                      <td>
                        <button>{item.status}</button>
                      </td>
                      <td>
                        <button className="btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
