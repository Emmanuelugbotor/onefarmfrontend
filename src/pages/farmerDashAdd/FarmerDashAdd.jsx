import "./FarmerDashAdd.scss";
import ResponseSuccess from "../../component/responseSuccess/responseSuccess";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../redux/actions/productAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

export default function FarmerDashAdd() {
  let dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;

  const prostPro = useSelector((state) => state.postProduct);
  // console.log("PRODUCTS ", prostPro);
  const { products, error } = prostPro;

  // const [category, setCategory] = useState("");
  // const [weight, setWeight] = useState("");
  // const [amt, setAmt] = useState("");
  // const [desc, setDesc] = useState("");
  // const [fullbag, SetFullbag] = useState("");
  const [halfbag, setHalfbag] = useState("");
  const [quaterbag, setQuaterbag] = useState("");
  // const [img, setImg] = useState(null);

  const [feedback, setFeedBack] = useState("");
  const [feedbackErr, setError] = useState("");

  // function handleSubmit(e) {
  // e.preventDefault();
  // let formInfo = new FormData();

  // formInfo.append("category", category);
  // formInfo.append("weight", weight);
  // formInfo.append("amt", amt);
  // formInfo.append("desc", desc);
  // formInfo.append("fullbag", fullbag);
  // formInfo.append("halfbag", halfbag);
  // formInfo.append("quaterbag", quaterbag);
  // formInfo.append("img", img);

  // dispatch(postProducts(formInfo, userInfo));

  //   if (products) {
  //     setToggle(!toggle);
  //     toast("Product uploaded successfully");
  //   }
  //   if (error) {
  //     toast("Network Error, try again");
  //     setError(error);
  //   }
  //  }

  function removeToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {}, [dispatch, prostPro]);

  // -------------------------form product----------------------------//
  const {
    handleSubmit,
    register,
    setError: setErr,
    formState: { errors },
  } = useForm();
  const { onChange, ...rest } = register("");
  const [isLoading, setIsLoading] = useState(false);
  const [logoIgnored, setlogoIgnored] = useState(false);

  //* getting the first litter of the user name
  const [initial, setInitial] = useState("s");
  // useEffect(() => {
  //   const userData = JSON.parse(localStorage['user'])
  //   setInitial(userData['data']['firstName'].slice(0, 1))
  // }, [])

  //* handling the image file and the image preview
  const [image, setImage] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);
  function SizeValidator(file) {
    let maxSize = 3000000;
    if (file.size > maxSize) {
      return {
        code: "size-too-large",
        message: `Size is larger than 3mb`,
      };
    }

    return null;
  }
  const { getRootProps, getInputProps, fileRejections, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: "image/jpeg, image/png",
      maxFiles: 1,
      validator: SizeValidator,
    });

  //* convert to base 64
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //* handling submit
  const onSubmit = async (data) => {
    if (!acceptedFiles[0]) {
      setlogoIgnored(true);
      return null;
    }
    setIsLoading(true);
    const base64 = await convertBase64(acceptedFiles[0]);
    if (image) {
      dispatch(
        postProducts(
          {
            ...data,
            img: base64,
            quaterbag: quaterbag ? quaterbag : "",
            halfbag: halfbag ? halfbag : "",
          },
          userInfo
        )
      );
    }
  };

  return (
    <div className="farmer_add_product">
      <ToastContainer />
      <h1 className="farmer_add_product-title">Add Products</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_wrapper">
          <div className="orgLogo">
            <div className="thumbnail">
              <h4>Add Product image</h4>
              <div className="imagePreview">
                {image ? (
                  <img src={image && URL.createObjectURL(image)} alt="logo" />
                ) : (
                  <h1>{initial}</h1>
                )}
              </div>
            </div>
            <div className="fileinput">
              <div className="upload" {...getRootProps()}>
                <input {...getInputProps()} />
                <button>Choose image</button>
              </div>
              {
                <p className="error">
                  {Array.isArray(fileRejections) && fileRejections.length > 0
                    ? fileRejections[0].errors[0]["message"]
                    : ""}
                </p>
              }
              {acceptedFiles.length < 1 && logoIgnored ? (
                <p className="error-red">please provide an image</p>
              ) : (
                ""
              )}
              <ul>
                <li>Image should be of dimension 100 x 100</li>
                <li>Image should have a maximum size of 3mb</li>
              </ul>
            </div>
          </div>
          <div className="add_product_input">
            <select
              type="text"
              // onChange={(e) => setCategory(e.target.value)}
              {...register("category", {
                required: "* select one of the product",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "please select from the dropdown list",
                },
              })}
            >
              <option>*Select Product Category </option>
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
            {errors?.category && (
              <span className="error-red">{errors.category.message}</span>
            )}
            {/* <label htmlFor="">product type</label> */}
          </div>
          <div className="add_product_input_wrapper">
            <div className="add_product_input">
              <input
                type="number"
                // name="weight"
                placeholder="Weight of product (kg)"
                // onChange={(e) => setWeight(e.target.value)}
                {...register("weight", {
                  required: "add the weight of product",
                })}
              />
              {errors?.weight && (
                <span className="error-red">{errors.weight.message}</span>
              )}
              {/* <label htmlFor="">Weight of product (kg) </label> */}
            </div>
            <div className="add_product_input">
              <input
                type="text"
                name="amt"
                placeholder="Product Price (#)"
                // onChange={(e) => {
                //   setAmt(e.target.value);
                //   SetFullbag(e.target.value);
                // }}
                {...register("amt", { required: "price is required" })}
              />
              {/* <label htmlFor="">Product Price</label> */}
              {errors?.amt && (
                <span className="error-red">{errors.amt.message}</span>
              )}
            </div>
          </div>

          <div className="add_product_input_wrapper">
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
              {/* <label htmlFor=""></label> */}
            </div>
            <div className="add_product_input">
              <input
                type="number"
                name="quaterbag"
                id=""
                placeholder="amount for quater bag(#) ( Optional )"
                onChange={(e) => setQuaterbag(e.target.value)}
              />
              {/* <label htmlFor=""></label> */}
            </div>
          </div>

          <div className="add_product_input textarea">
            <textarea
              // name="desc"
              // id=""
              cols="30"
              rows="10"
              placeholder="Describe the product that you want to sell in details. "
              // onChange={(e) => setDesc(e.target.value)}
              {...register("desc", {
                required: "Describe the product in details",
              })}
            ></textarea>
            {errors?.desc && (
              <span className="error-red">{errors.desc.message}</span>
            )}
            {/* <label htmlFor="" className="textarea-label"> desc </label> */}
          </div>
        </div>
        <button>upload</button>

        {feedbackErr && (
          <h5
            className="farmer_add_product-title"
            style={{ color: "red", marginTop: "2rem", marginLeft: "1rem" }}
          >
            {feedbackErr}
          </h5>
        )}
      </form>
      {toggle && <ResponseSuccess onClicked={removeToggle} />}
    </div>
  );
}
