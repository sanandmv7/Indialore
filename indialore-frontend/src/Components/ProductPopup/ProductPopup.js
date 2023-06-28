import React, { useEffect } from "react";
import { useContext, useState } from "react";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { FirebaseContext, AuthContext } from "../../contexts/UserContext";

import env from "react-dotenv";
import { Web3Context } from "../../contexts/Web3Context";

const StoreContract = require("../../artifacts/contracts/Store.sol/Store.json");
const StoreContractAbi = StoreContract.abi;

function ProductPopup({ handleClose, show }) {
  const showHideClassName = show ? "popup1 active" : "popup1";

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [tokenId, setTokenId] = useState(0);
  const [size, setSize] = useState("");

  const [response, setResponse] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const { currentAccount } = useContext(Web3Context);

  const [categories, setCategories] = useState([]);

  const { ethers } = require("ethers");

  const date = new Date();

  useEffect(() => {
    firebase
      .firestore()
      .collection("Category")
      .get()
      .then((snapshot) => {
        const allCats = snapshot.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(allCats);
      });
  }, [firebase]);

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

  const handleTokenIdChange = (e) => {
    setTokenId(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  async function addProduct(imgUri) {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const storeContract = new ethers.Contract(
          env.STORE_ADDRESS,
          StoreContractAbi,
          signer
        );

        let txn = await storeContract.listProductForSale(
          currentAccount,
          tokenId,
          name,
          price,
          quantity,
          imgUri
        );
        await txn.wait(2);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .storage()
      .ref(`/images/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          addProduct(url);

          firebase
            .firestore()
            .collection("Products")
            .add({
              name: name,
              tokenId: tokenId,
              description: desc,
              state: category,
              img_url: url,
              price: price,
              quantity: quantity,
              size: size,
              seller: user.uid,
              createdAt: date.toDateString(),
            })
            .then((docRef) => {
              firebase
                .firestore()
                .collection("Products")
                .doc(docRef.id)
                .update({ docId: docRef.id });

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
          <label htmlFor="token-id">TokenId</label>
          <input
            type="number"
            id="token-id"
            placeholder="Enter Token Id For Product"
            value={tokenId}
            onChange={handleTokenIdChange}
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
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
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
