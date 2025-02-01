import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { CartContext } from "../CartContext";
import "./page.css";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cart, addToCart, handleRemoveItem } = useContext(CartContext);

  const product = cart.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-errpage">
        <h1>Product not found</h1>
        <p>Sorry,Your Cart is Empty.</p>
        <p>Click below button to go back to the home page</p>
        <button className="btn" onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1 className="product-header">{product.name}</h1>
      <div className="product-body">
        <img className="product-img" src={product.image} alt={product.name} />
       <div className="product-info">
       <p className="product-price">Price: ${product.price}</p>
        <p className="product-quantity">Quantity :{product.quantity}</p>
        <p className="product-total">
          Total : ${product.price * product.quantity}
        </p>
       </div>

        <div className="group-product">
          <button className="btn" onClick={() => addToCart(product)}>
            Add Item
          </button>
          <button className="btn" onClick={() => handleRemoveItem(product.id, product.name)}>
            Remove Item
          </button>
        </div>
      </div>
      <p className="about-product">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae quo voluptatem odit repudiandae non, cumque eligendi aliquid asperiores eius.</p>
    </div>
  );
}
