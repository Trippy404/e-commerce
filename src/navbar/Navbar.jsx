import "./nav.css";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import crat from "../assets/images/crat.png";
import deleteIcon from "../assets/images/delete.png";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";

export default function Navbar() {
  const {count} = useContext(CartContext);
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);


  const handleImageClick = (id) => {
    navigate(`/product/${id}`); //redirect to product details page which is selected by user
  };

  const handleRemove = () => {
    setIsToggled((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  //Using SweetAlert2
  const buyconform = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Cart is Empty",
        text: "Please add some items before proceeding.",
        icon: "warning",
        confirmButtonColor: "#ff6b6b",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Purchase",
      text: "Are you sure you want to buy all items?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Buy Now",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Thank You!",
          text: "Your purchase has been confirmed.",
          icon: "success",
          confirmButtonColor: "#28a745",
        });

        clearCart();
        navigate("/");
      }
    });
  };
//Using SweetAlert2
  const handleRemoveItem = (id, name) => {
    Swal.fire({
      title: `Remove ${name}?`,
      text: "Are you sure you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id, name);
        Swal.fire({
          title: "Removed!",
          text: `${name} has been removed from your cart.`,
          icon: "success",
          confirmButtonColor: "#28a745",
        });
      }
    });
  };


  return (
    <div className="navbar">
      <nav className="nav">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-list ${isMenuOpen ? "show" : ""}`}>
          <Link className="link" to="/">
            <li className="li">HOME</li>
          </Link>
          <Link className="link" to="/hero">
            <li className="li">STORE</li>
          </Link>
          <Link className="link" to="/about">
            <li className="li">ABOUT</li>
          </Link>
        </ul>
        <div className="cart">
          <img
            className="cart-img"
            src={crat}
            alt="cart"
            onClick={handleRemove}
          />
          {<div className="cart-count">{count}</div>}
        </div>

        <div className={`${isToggled ? "cart-whol-body " : "show-cart"}`}>
          <div className="add-cart-page">
            <div className="cart-header">
              <h2 className="cart-header">CART</h2>
              <button onClick={handleRemove} className="btn-cross">
                <img className="delete-btn" src={deleteIcon} alt="" />
              </button>
            </div>

            <div className="table-start" border={1}>
              <div className="heading">
                <li className="item-name">Item</li>
                <li className="item-price">Price</li>
                <li className="item-quantity">Quantity</li>
                <li className="item-total">Total</li>
              </div>
              <ul className="cart-table">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="item-name">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                        onClick={() => handleImageClick(item.id)}
                      />
                      {item.name}
                    </div>

                    <div className="item-price">${item.price}</div>
                    <div className="item-quantity">{item.quantity}</div>
                    <div className="item-total">
                      ${item.price * item.quantity}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id , item.name)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <button className="buy-now" onClick={buyconform}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
