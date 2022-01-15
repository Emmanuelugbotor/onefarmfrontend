import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Data from "../../dommydata";
import { Link } from "react-router-dom";
import "./FarmerProducts.scss";
import Alert from "../../component/Alert/Alert";
const { allProduct } = Data;

export default function FarmerProducts() {
  const [products, setProducts] = useState(allProduct);
  const [initiate, setInitiate] = useState(false);
  const [status, setStatus] = useState(false);
  const columns = [
    {
      field: "img",
      headerName: "IMG",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              src={`${params.row.img}`}
              alt="img_product"
              className="productListImg"
            />
            {/* {params.row.name} */}
          </div>
        );
      },
    },
    { field: "id", headerName: "ID", width: 120 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "price", headerName: "Price", width: 150 },

    {
      field: "modify",
      headerName: "Modify",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productModify">
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="productListEdit">Edit</button>
            </Link>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productRemove">
            <button
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  // handling the temporal removal of data and updating the state...
  // const [data, setData] = useState(productRows);
  function handleDelete(id) {
    setInitiate(!initiate);
    if (status) {
      const newProducts = [...products].filter((c) => c.id !== id);
      setProducts(newProducts);
    }
    setStatus(false);
  }
  function handleRemove() {
    setInitiate(!initiate);
  }
  function handleTrue() {
    setStatus(true);
    setInitiate(!initiate);
  }
  function handleFalse() {
    setStatus(false);
    setInitiate(!initiate);
  }

  return (
    <div className="farmerProducts">
      {products && (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          //   getRowId={(r) => r._id}
        />
      )}
      {initiate && (
        <Alert
          handleClicked={handleRemove}
          handleTrue={handleTrue}
          handleFalse={handleFalse}
        />
      )}
    </div>
  );
}
