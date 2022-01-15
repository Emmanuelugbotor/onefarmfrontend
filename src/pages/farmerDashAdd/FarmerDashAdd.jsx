import "./FarmerDashAdd.scss";
import ResponseSuccess from "../../component/responseSuccess/responseSuccess";
import { useState } from "react";
export default function FarmerDashAdd() {
  const [toggle, setToggle] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setToggle(!toggle);
  }
  function removeToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="farmer_add_product">
      <h1 className="farmer_add_product-title">Add Products</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form_wrapper">
          <div className="add_product_input">
            <input type="text" name="" id="" />
            <label htmlFor="">product type</label>
          </div>
          <div className="add_product_input">
            <input type="text" name="" id="" />
            <label htmlFor="">Product Name</label>
          </div>
          <div className="add_product_input">
            <input type="text" name="" id="" />
            <label htmlFor="">Product Price</label>
          </div>
          <div className="add_product_input">
            <input type="text" name="" id="" />
            <label htmlFor=""></label>
          </div>
          <div className="add_product_input">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <label htmlFor="" className="textarea-label">
              desc
            </label>
          </div>
          <div className=" file-input">
            <p>select image</p>
            <label htmlFor="file" className="exceptional">
              Choose file
            </label>
            <input type="file" name="" id="file" />
          </div>
        </div>
        <button>upload</button>
      </form>
      {toggle && <ResponseSuccess onClicked={removeToggle} />}
    </div>
  );
}
