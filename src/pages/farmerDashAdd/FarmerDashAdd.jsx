import "./FarmerDashAdd.scss";
import ResponseSuccess from "../../component/responseSuccess/responseSuccess";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../redux/actions/productAction";

export default function FarmerDashAdd() {
  let dispatch = useDispatch()
  const [toggle, setToggle] = useState(false); 

  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;

  const prostPro = useSelector((state) => state.postProduct);
  // console.log("PRODUCTS ", prostPro);
  const {products, error } = prostPro;
 

  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [amt, setAmt] = useState("");
  const [desc, setDesc] = useState("");
  const [fullbag, SetFullbag] = useState("");
  const [halfbag, setHalfbag] = useState("");
  const [quaterbag, setQuaterbag] = useState("");
  const [img, setImg] = useState(null);

  const [feedback, setFeedBack] = useState("");
  const [feedbackErr, setError] = useState("");

  function handleSubmit(e) {
    
    e.preventDefault();
    let formInfo = new FormData();

    formInfo.append("category", category);
    formInfo.append("weight", weight);
    formInfo.append("amt", amt);
    formInfo.append("desc", desc);
    formInfo.append("fullbag", fullbag);
    formInfo.append("halfbag", halfbag);
    formInfo.append("quaterbag" ,  quaterbag);
    formInfo.append("img", img);
    
    dispatch(postProducts(formInfo, userInfo))
    if(products) {
      setToggle(!toggle);
      setFeedBack(`${products.msg}`);
    }
    if(error){
      setError(error)
    }

  }
  
  function removeToggle() {
    setToggle(!toggle);
  }
  
  useEffect(()=>{

  }, [dispatch, prostPro])

  return (
    <div className="farmer_add_product">
      <h1 className="farmer_add_product-title">Add Products</h1>
      {feedbackErr && <h5 className="farmer_add_product-title" style={{color: "red"}}> {feedbackErr} </h5> }
      {feedback && <h5 className="farmer_add_product-title" style={{color: "green"}}> {feedback} </h5> }

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form_wrapper">
          <div className="add_product_input">
            <select
              type="text"
              name="category"
              id=""
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option> Select Product Category </option>
              <option value="avocado"> avocado </option>
              <option value="beefruit"> beefruit </option>
              <option value="bell pepper"> bell pepper </option>
              <option value="broccoli"> broccoli </option>
              <option value="cabbage"> cabbage </option>
              <option value="carrot"> carrot </option>
              <option value="chilli pepper"> chilli pepper </option>
              <option value="irish potatoes"> irish potatoes </option>
              <option value="kelly"> kelly </option>
              <option value="mushroom"> mushroom </option>
              <option value="onions"> onions </option>
              <option value="passion fruit"> passion fruit </option>
              <option value="pepper"> pepper </option>
              <option value="potatoes"> potatoes </option>
              <option value="strawberry"> strawberry </option>
              <option value="tillary"> tillary </option>
              <option value="tatashe"> tatashe </option>
              <option value="tomatoes"> tomatoes </option>
              <option value="coli flower"> coli flower </option>
              <option value="lettuce"> lettuce </option>
              <option value="rose flower"> rose flower </option>
            </select>
            {/* <label htmlFor="">product type</label> */}
          </div>

          <div className="add_product_input">
            <input
              type="number"
              name="weight"
              id=""
              required
              placeholder="Weight of product (kg)"
              onChange={(e) => setWeight(e.target.value)}
            />
            {/* <label htmlFor="">Weight of product (kg) </label> */}
          </div>
          <div className="add_product_input">
            <input
              type="text"
              name="amt"
              id=""
              placeholder="Product Price (#)"
              onChange={(e) => {
                setAmt(e.target.value);
                SetFullbag(e.target.value);
              }}
            />
            {/* <label htmlFor="">Product Price</label> */}
          </div>

          <div className="add_product_input">
            <input
              type="number"
              name="halfbag"
              id=""
              placeholder="amount for half bag(#) ( Optional )"
              onChange={(e) => {
                setHalfbag(e.target.value);
              }}
            />
            <label htmlFor=""></label>
          </div>
          <div className="add_product_input">
            <input
              type="number"
              name="quaterbag"
              id=""
              placeholder="amount for quater bag(#) ( Optional )"
              onChange={(e) => setQuaterbag(e.target.value)}
            />
            <label htmlFor=""></label>
          </div>

          <div
            className="add_product_input"
            style={{ width: "100% !important" }}
          >
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="Describe the product that you want to sell in details. "
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            {/* <label htmlFor="" className="textarea-label"> desc </label> */}
          </div>
          <div className=" file-input">
            <p>select image</p>
            <label htmlFor="file" className="exceptional">
              Choose file
            </label>
            <input
              type="file"
              onChange={(e) => {console.log(e.target.files); setImg(e.target.files[0])}}
              name="img"
              id="file"
              required
            />
          </div>
        </div>
        <button>upload</button>
        

      {feedbackErr && <h5 className="farmer_add_product-title" style={{color: "red", marginTop: "2rem", marginLeft: "1rem"}}> {feedbackErr} </h5> }

      </form>
      {toggle && <ResponseSuccess onClicked={removeToggle} />}
    </div>
  );
}
