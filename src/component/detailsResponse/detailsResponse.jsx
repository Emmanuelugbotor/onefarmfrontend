import "./detailsResponse.scss";
export default function DetailsResponse({items, hideDetails}) {

  return (

    <div className="details_response">
      <div className="card">
        <h1>SHIPPING DETAILS</h1>
        <p>
          <strong>Name: </strong> {items.name.replace("_", " ").toUpperCase()}
        </p>
        <p>
          <strong>Payment method :</strong> Visa / Master Card
        </p>
        <p>
          <strong>Shipment  :</strong> 2 - 3 working Days
        </p>
        <p>
          <strong>Goods Type :</strong> Full Bag, Half Bag, Quater Bag
        </p>

        <button className="close" onClick={()=>hideDetails()}>Close</button>
      </div>
    </div>
  );
}
