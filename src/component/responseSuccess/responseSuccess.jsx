import "./responseSuccess.scss";
export default function ResponseSuccess({ onClicked }) {
  return (
    <div className="response_success">
      <div className="card">
        <h1>Congratulation</h1>
        <h2>Product Upload Successful</h2>
        <button onClick={onClicked}>Close</button>
      </div>
    </div>
  );
}
