import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Data from "../../dommydata";
import { Link, useNavigate } from "react-router-dom";
import "./FarmerProducts.scss";
import Alert from "../../component/Alert/Alert";
import { getProducts } from "../../redux/actions/productAction";
import { url } from "../../constant/url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {deleteProduct} from '../../redux/actions/productAction'
import axios from "axios";

const { allProduct } = Data;

export default function FarmerProducts() {
  const router = useNavigate()
  const dispatch = useDispatch();

  const getProduct = useSelector((state) => state.getProduct);
  const userSignin = useSelector((state) => state.userSignIn);
  const deleteProd = useSelector((state) => state.deleteProduct);
  
  const [feature, setFeatured] = useState([]);  
  const [category, setCategory] = useState([]);

  const { userInfo } = userSignin;
  const { products, loading, error } = getProduct;
  const { deleteProduct: delProd, loading: signalLoader, error: errorDel } = deleteProd;

  const [farmer_products, setProducts] = useState(products);
  const [initiate, setInitiate] = useState(false);
  const [status, setStatus] = useState(false);
  const [getAllPro, setAllProd] = useState([]);

  
  
  
  useEffect(async() => {
    dispatch(getProducts())
    await axios
      .get(`${url}getproducts`)
      .then((res) => {
        // console.log("ress", res)
        setProducts(res.data.result);
        console.log("sssssssssss", farmer_products)
      })
      .catch((error) => console.log(error), setFeatured([]));

      // if(products){
      //   const newProducts = [...getAllPro].filter((c) => c.farmer_id == userInfo.id);
      //   setProducts(products);
      //   // setProducts(newProducts);
      // }
    
    
  }, [dispatch]);


//handle the edit section
function handleEdit(id){
 const data = farmer_products.filter((c) => c.farmer_id == userInfo.id && c.id === id)
  router(`/dashboard/products/${id}`, {
    state:{from: data}
  })
}

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
              src={`${url+params.row.imagesName}`}
              alt="img_product"
              className="productListImg"
            />
          </div>
        );
      },
    },
    // { field: "id", headerName: "ID", width: 120 },
    { field: "title", headerName: "Title", width: 150, 
    renderCell: (params) => {
      return (
        <div className="productModify">
          <p >
        {`${params.row.category}`}
          </p>
        </div>
      );
    },
  
  },
    { field: "price", headerName: "Price", width: 150,
    renderCell: (params) => {
      return (
        <div className="productModify">
          
           
            <p className=""># {`${params.row.fullbag}`}</p>
          
        </div>
      );
    },
  },

    {
      field: "modify",
      headerName: "Modify",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productModify">
            {/* <Link to={`/dashboard/products/${params.row.id}`} className="link"> */}
              <button className="productListEdit" onClick={()=>handleEdit(params.row.id)}>Edit</button>
            {/* </Link> */}
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

  const handleDelete = (id) => {
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
        const newProducts = [...farmer_products].filter((c) => c.id !== id);
        setProducts(newProducts);
        dispatch(deleteProduct(id, userInfo));
        setStatus(false);

        if (delProd) {
          toast("Product deleted successfully")
        }
        if (errorDel) {
          toast("Network Error, try again");
        }
    }
    
  }, [status, id, products]);

  return (
    <div className="farmerProducts">
      <ToastContainer />
      
      {farmer_products && (
        <DataGrid
          rows={farmer_products.filter((c) => c.farmer_id == userInfo.id)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
            getRowId={(r) => r.id}
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
