import "./detailsResponse.scss";
export default function DetailsResponse() {
  return (
    <div className="details_response">
      <div className="card">
        <h1>details</h1>
        <p>
          <strong>Name</strong> Super Farm
        </p>
        <p>
          <strong>Payment method :</strong> Payment Before delivery
        </p>
        <p>
          <strong>Shipment Details :</strong> 2 -3 working Days
        </p>
        <p>
          <strong>Goods Type :</strong> Full Bag, Half Bag, Quater Bag
        </p>
        <button className="close">Close</button>
      </div>
    </div>
  );
}
