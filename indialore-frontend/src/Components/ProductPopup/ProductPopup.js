import React from "react";
import { useContext, useState } from "react";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { FirebaseContext, AuthContext } from "../../contexts/UserContext";

function ProductPopup({ handleClose, show }) {
  const showHideClassName = show ? "popup1 active" : "popup1";

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");

  const [response, setResponse] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const date = new Date();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // const handleImageUrlChange = (e) => {
  //   setImageUrl(e.target.value);
  // };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .storage()
      .ref(`/images/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          firebase
            .firestore()
            .collection("Products")
            .add({
              name: name,
              description: desc,
              state: category,
              img_url: url,
              price: price,
              quantity: quantity,
              size: size,
              seller: user.uid,
              createdAt: date.toDateString()
            })
            .then(() => {
              setResponse("Product added successfully");
              setName("");
              setDesc("");
              setCategory("");
              setImage(null);
              setQuantity(0);
              setPrice(0);
              setSize("");
              setTimeout(() => {
                setResponse("");
              }, 3000);
            });
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={showHideClassName}>
      <div className="close-btn" onClick={handleClose}>
        <span>
          <CloseSharpIcon />
        </span>
      </div>
      <div className="product-form">
        <h3>Product Details</h3>
        <div className="product-form-element">
          <label htmlFor="prod-name">Product Name</label>
          <input
            type="text"
            id="prod-name"
            placeholder="Enter Product Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-desc">Product Description</label>
          <input
            type="text"
            id="prod-desc"
            placeholder="Enter Product Description"
            value={desc}
            onChange={handleDescChange}
          />
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-state">State</label>
          {/* <input
            type="text"
            id="prod-state"
            placeholder="Enter State"
            value={category}
            onChange={handleCategoryChange}
          /> */}
          <select
            id="prod-state"
            placeholder="Enter State"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected hidden>
              ---Select State---
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Himachal">Himachal</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-qty">Quantity</label>
          <input
            type="number"
            id="prod-qty"
            placeholder="Enter Product Quantity"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-price">Price</label>
          <input
            type="number"
            id="prod-price"
            placeholder="Enter Product Price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-size">Size</label>
          <select
            id="prod-size"
            placeholder="Enter Product Size"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="" disabled selected hidden>
              ---Select Size---
            </option>
            <option value="f">Free Size</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="product-form-element">
          <label htmlFor="prod-img">Product Image</label>
          {/* <input
            type="text"
            id="prod-img"
            placeholder="Enter Product Image URL"
            value={imageUrl}
            onChange={handleImageUrlChange}
          /> */}
          {/* <p>{image? URL.createObjectURL(image): ''}</p> */}
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="product-form-element" onClick={handleSubmit}>
          <input type="submit" value="Submit" />
        </div>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default ProductPopup;
