import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Data from "../../dommydata";
import { Link } from "react-router-dom";
import "./FarmerProducts.scss";
import Alert from "../../component/Alert/Alert";
import { getProducts } from "../../redux/actions/productAction";

const { allProduct } = Data;

export default function FarmerProducts() {
  const dispatch = useDispatch();

  const getProduct = useSelector((state) => state.getProduct);

  const [feature, setFeatured] = useState([]);
  const [category, setCategory] = useState([]);
  // const { products, loading, error } = getProduct;

  useEffect(() => {
    // axios
    //   .get(`${url}getproducts`)
    //   .then((res) => {
    //     setFeatured(res.data.items);
    //     setCategory(res.data.items);
    //   })
    //   .catch((error) => console.log(error), setFeatured([]));
    dispatch(getProducts());
  }, [dispatch]);

  const [products, setProducts] = useState(allProduct);
  const [initiate, setInitiate] = useState(false);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(0);

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
    setId(id);
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
  useEffect(() => {
    if (status && id) {
        const newProducts = [...products].filter((c) => c.id !== id);
        setProducts(newProducts);
        setStatus(false);
    }
  }, [status, id, products]);
  return (
    <div className="farmerProducts">
      {products && (
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={6}
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
