import "./vendorDash.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VendorDashMain() {
  
  const notify = () => toast("Wow so easy!");
  
  const vendorSignIn = useSelector((state) => state.vendorSignIn);
  const { vendorInfo, loading, error, success } = vendorSignIn;


  // console.log("this is te vendor testsing ", vendorSignIn)
  return (
    <div className="vendorDashMain_container">
      <div className="name_welcome">
        <h1 className="name">Hi {vendorInfo.name}</h1>
        <div className="welcome">Welcome !</div>
      </div>
      <div className="card_one">
        <div className="card_one_item">
          <RemoveRedEyeIcon />
          <span>view</span>
          <span>000</span>
        </div>
        <div className="card_one_item">
          <RemoveRedEyeIcon />
          <span>visit</span>
          <span>000</span>
        </div>
        <div className="card_one_item">
          <RemoveRedEyeIcon />
          <span>orders</span>
          <span>000</span>
        </div>
      </div>
      <div className="card_two">
        <div className="card_two_item">
          <div className="left">
            <span>Sales</span>
            <p>Total sales of the week</p>
            <strong>$000</strong>
          </div>
          <div className="right">
            <ArrowUpwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>
        <div className="card_two_item">
          <div className="left">
            <span>Profit</span>
            <p>Total sales of the week</p>
            <strong>$000</strong>
          </div>
          <div className="right">
            <ArrowUpwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>
      </div>
      <div className="card_two">
        <div className="card_two_item blue">
          <div className="left">
            <span>Orders</span>
            <p>Total sales of the week</p>
            <strong>$000</strong>
          </div>
          <div className="right">
            <ArrowUpwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>
        <div className="card_two_item ash">
          <div className="left">
            <span>Visit</span>
            <p>Total sales of the week</p>
            <strong>$000</strong>
          </div>
          <div className="right">
            <ArrowUpwardIcon />
            <ArrowDownwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
