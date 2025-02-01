import "./page.css";
import Footer from "./Footer";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";

export default function Hero() {
  const { addToCart } = useContext(CartContext);
  // const showPopup = (message) => {
  //   alert(message);
  // };

  const [isLoading, setIsLoading] = useState(true);

  const products = [
    {
      id: 1,
      name: "Album 1",
      image: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      price: 120,
    },
    {
      id: 2,
      name: "Album 2",
      image: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      price: 190,
    },
    {
      id: 3,
      name: "Album 3",
      image: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      price: 110,
    },
    {
      id: 4,
      name: "Album 4",
      image: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      price: 420,
    },
    {
      id: 5,
      name: "T-Shirt",
      image: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
      price: 103,
    },
    {
      id: 6,
      name: "Cofee",
      image: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
      price: 100,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  //Using SweetAlert2
  const showPopup = (message) => {
    Swal.fire({
      title: "Added to Cart",
      text: message,
      icon: "success",
      timer: 2000, // Auto-close after 2 seconds
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  return (
    <div className="body">
      <div className="hero">
        <h1 className="gen">The Generics</h1>
      </div>

      <section id="music">
        <h2 className="mus">MUSIC</h2>
        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="music-sec">
            {products.map((product) => (
              <div className="music-card" key={product.id}>
                <h3 className="titel">{product.name}</h3>
                <img
                  className="cont-img"
                  src={product.image}
                  alt={product.name}
                />
                <div className="img-footer">
                  <p className="price">${product.price}</p>
                  <button
                    title="add to cart"
                    className="card-btn"
                    onClick={() => (
                      addToCart(product),
                      showPopup(`${product.name} added to cart`)
                      
                    )}
                  >
                    ADDCART
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
