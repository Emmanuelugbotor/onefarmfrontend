import { useLocation } from "react-router-dom";
import "./farmerEdit.scss";
import { useState } from "react";
import {
  TextField,
  List,
  Typography,
  ListItem,
  Button,
  TextareaAutosize,
} from "@mui/material";

import { useEffect } from "react";

export default function FarmerEdit() {

  const location = useLocation();
  const [product, setProduct] = useState();

  const [inputValues, setInputValues] = useState({

    id: '',
    category: ``,
    weight: ``,
    amt: ``,
    imagesName: ``,
    desc: ``,
    fullbag: ``,
    halfbag: ``,
    quaterbag: ``,

  });

  useEffect(() => {

    setProduct(location?.state?.from[0]);
    setInputValues({

      id: `${product?.id}`,
      category: `${product?.category}`,
      weight: `${product?.weight}`,
      amt: `${product?.amt}`,
      fullbag: `${product?.fullbag}`,
      halfbag: `${product?.halfbag}`,
      quaterbag: `${product?.quaterbag}`,
      desc: `${product?.desc}`,
      imagesName: `${product?.imagesName}`

    });
  }, [product]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValues)

  }

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    if(name === 'imagesName'){
      setInputValues({ ...inputValues, [name]: e.target.files[0] });
    }
  };

  return (
    <div className="farmer_add_product">
      {/* <ToastContainer /> */}
      <h1 className="farmer_add_product-title">Edit Products</h1>

      <form onSubmit={handleSubmit}>
        <div className="form_wrapper">
          <div className="add_product_input">
            <select
              type="text"
              name="category"
              id="category"
              name="category"
              required
              readOnly
            >
              <option value={product?.category}>{product?.category}</option>
            </select>
            {/* <label htmlFor="">product type</label> */}
          </div>
          <div className="add_product_input_wrapper">
            <div className="add_product_input">
              <input
                type="text"
                name="weight"
                id="weight"
                name="weight"
                required
                // placeholder="Weight of product (kg)"
                defaultValue={product?.weight}
                onChange={handleInputChange}
              />
              {/* <label htmlFor="">Weight of product (kg) </label> */}
            </div>
            <div className="add_product_input">
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Product Price (#)"
                defaultValue={product?.price}
                onChange={handleInputChange}
              />
              {/* <label htmlFor="">Product Price</label> */}
            </div>
          </div>

          <div className="add_product_input_wrapper">
            <div className="add_product_input">
              <input
                type="text"
                name="halfbag"
                id="halfbag"
                placeholder="amount for half bag(#) ( Optional )"
                defaultValue={product?.halfbag}
                onChange={handleInputChange}
              />
              <label htmlFor=""></label>
            </div>
            <div className="add_product_input">
              <input
                type="text"
                name="quaterbag"
                id="quaterbag"
                defaultValue={product?.quaterbag}
                onChange={handleInputChange}
              />
              <label htmlFor=""></label>
            </div>
          </div>

          <div className="add_product_input textarea">
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              placeholder="Describe the product that you want to sell in details. "
              defaultValue={product?.desc}
              onChange={handleInputChange}
            ></textarea>
            {/* <label htmlFor="" className="textarea-label"> desc </label> */}
          </div>
          {/* ---------file upload------------ */}
          <div className=" file-input">
            <p>select image</p>
            <label htmlFor="file" className="exceptional">
              Choose file
            </label>
            <input
              type="file"
              name="imagesName"
              id="file"
              required
            />
          </div>
        </div>
        <button>update</button>

        {/* {feedbackErr && (
      <h5
        className="farmer_add_product-title"
        style={{ color: "red", marginTop: "2rem", marginLeft: "1rem" }}
      >
        
        {feedbackErr}
      </h5>
    )} */}
      </form>
      {/* {toggle && <ResponseSuccess onClicked={removeToggle} />} */}
    </div>
  );
}
