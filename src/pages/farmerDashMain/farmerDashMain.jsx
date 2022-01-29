import "./farmerDashMain.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function FarmerDashMain() {
  return (
    <div className="farmerDashMain_container">
      <div className="name_welcome">
        <h1 className="name">Hi FarmHub</h1>
        <div className="welcome">Welcome back!</div>
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
            <strong>$500</strong>
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
