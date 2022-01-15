import "./farmerSubscribe.scss";
import CheckIcon from "@mui/icons-material/Check";
export default function FarmerSubscribe() {
  return (
    <div className="farmerSubscribe">
      <div className="farmerSubscribe_title">Suscribe</div>
      <div className="details">promote your properties to get more client </div>
      <div className="packages">
        <ul className="silver precious">
          <h3 className="type">silver</h3>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
        </ul>
        <ul className="gold precious">
          <h3 className="type">gold</h3>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
        </ul>
        <ul className="platinum precious">
          <h3 className="type">Platinum</h3>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
          <li>
            <CheckIcon className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
