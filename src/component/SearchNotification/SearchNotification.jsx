import "./SearchNotification.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchNotification() {
  return (
    <div className="search_notification">
      <div className="search">
        <input type="text" name="" id="" placeholder="search.." />
        <SearchIcon className="search_icon" />
      </div>
      <div className="notification_user">
        <div className="notification">
          <NotificationsNoneIcon />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/images/about-hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
