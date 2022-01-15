import "./Alert.scss";
import ClearIcon from "@mui/icons-material/Clear";
export default function Alert({ handleClicked, handleFalse, handleTrue }) {
  return (
    <div className="alert">
      <div className="card">
        <h1>Are you sure you want to delete this product</h1>
        <div className="alert_decision">
          <button onClick={handleFalse}>No</button>
          <button onClick={handleTrue}>Yes</button>
        </div>
        <ClearIcon onClick={handleClicked} className="remove" />
      </div>
    </div>
  );
}
