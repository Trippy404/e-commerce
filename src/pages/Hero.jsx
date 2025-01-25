
import "./page.css";
import img1 from "../assets/images/Album 1.png";
import img2 from "../assets/images/Album 2.png";
import img3 from "../assets/images/Album 3.png";
import img4 from "../assets/images/Album 4.png";
import img5 from "../assets/images/Shirt.png";
import img6 from "../assets/images/Cofee.png";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="body">
      <div className="hero">
        <h1 className="gen">The Generics</h1>
      </div>

      <section id="music">
        <h2 className="mus">MUSIC</h2>


        <div className="music-sec">
          <div className="first-card">
          <div className="music-card">
            <h3 className="titel">Album 1</h3>
            <img className="cont-img" src={img1} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button className="card-btn">ADD TO CART</button>
            </div>
          </div>

          <div className="music-card">
            <h3 className="titel">Album 2</h3>
            <img className="cont-img" src={img2} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button className="card-btn">ADD CART</button>
            </div>
          </div>
          </div>

         <div className="second-card">
         <div className="music-card">
            <h3 className="titel">Album 3</h3>
            <img className="cont-img" src={img3} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button  className="card-btn">ADD CART</button>
            </div>
          </div>
          <div className="music-card">
            <h3 className="titel">Album 3</h3>
            <img className="cont-img" src={img4} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button  className="card-btn">ADD CART</button>
            </div>
          </div>
         </div>

        </div>




      </section>


     <section className="merch">
    <h2 className="season">MERCH</h2>

     <div className="first-card">
          <div className="music-card">
            <h3 className="titel">Album 1</h3>
            <img className="cont-img-tshirt" src={img5} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button className="card-btn">ADD TO CART</button>
            </div>
          </div>
          
          <div className="music-card">
            <h3 className="titel">Album 2</h3>
            <img className="cont-img-cofee" src={img6} alt="" />
            <div className="img-footer">
            <p className="price">$120</p>
            <button className="card-btn">ADD CART</button>
            </div>
          </div>
          </div>
     </section>

     <div className="footer-btn">
     <button className="btn-footer">See the Cart</button>
     </div>

     <Footer/>
    </div>
  );
}
