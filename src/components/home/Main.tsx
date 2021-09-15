import React, { FC } from "react";
import pinafore from "../../images/gall1.jpg";
import jaaycouture from "../../images/hero2.jpg";
import jaaykiddies from "../../images/jaaykiddies.jpg";
import jaaybridals from "../../images/photo2.jpg";
import kimono from "../../images/photo1.jpg";
import tisetop from "../../images/photo4.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="shopby">SHOP BY COLLECTIONS</div>
      <section className="collectionscontainer">
        <div
          className="couture"
          style={{ backgroundImage: `url(${jaaycouture})` }}
        >
          {/* <img src={jaaycouture} alt="jaay couturess" /> */}
          <div className="shopjaay">SHOP JAAYCOUTURE</div>
        </div>
        <div
          className="kiddies"
          style={{ backgroundImage: `url(${jaaykiddies})` }}
        >
          {/* <img src={jaaykiddies} alt="jaay kiddiess" /> */}
          <div className="shopjaay">SHOP JAAYKiddies</div>
        </div>

        <div
          className="bridals"
          style={{ backgroundImage: `url(${jaaybridals})` }}
        >
          {/* <img src={jaaybridals} alt="jaay bridalss" /> */}
          <div className="shopjaay">SHOP JAAYBRIDALS</div>
        </div>
      </section>
      <div className="shopby">WHAT'S NEW?</div>
      <section className="newcontainer">
        <div className="shopbynew">
          <div className="newDivControl">
            <div
              className="newImageContainer"
              style={{ backgroundImage: `url(${pinafore})` }}
            >
              {/* <img src={pinafore} alt="sweet pinafore" /> */}
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p className="productName">Sweet Pinafore</p>
                <p className="productPrice">€90.00</p>
              </div>
              <div className="newTextControlleft">
                <p className="productDetails">DETAILS</p>
                <select
                  name="sizeselect"
                  id="sizeselect"
                  className="productSize"
                >
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div className="addtocart">ADD TO CART</div>
          </div>
          <div className="newDivControl">
            <div
              className="newImageContainer"
              style={{ backgroundImage: `url(${kimono})` }}
            >
              {/* <img src={kimono} alt="sweet pinafore" /> */}
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p className="productName">Olivia's Kimono</p>
                <p className="productPrice">€90.00</p>
              </div>
              <div className="newTextControlleft">
                <p className="productDetails">DETAILS</p>
                <select
                  name="sizeselect"
                  id="sizeselect"
                  className="productSize"
                >
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div className="addtocart">ADD TO CART</div>
          </div>
          <div className="newDivControl">
            <div
              className="newImageContainer"
              style={{ backgroundImage: `url(${tisetop})` }}
            >
              {/* <img src={tisetop} alt="sweet pinafore" /> */}
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p className="productName">Tise's Top and Trouser</p>
                <p className="productPrice">€90.00</p>
              </div>
              <div className="newTextControlleft">
                <p className="productDetails">DETAILS</p>
                <select
                  className="productSize"
                  name="sizeselect"
                  id="sizeselect"
                >
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div className="addtocart">ADD TO CART</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
