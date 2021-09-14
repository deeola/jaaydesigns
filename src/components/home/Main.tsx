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
        <div className="couture">
          {/* <img src={jaaycouture} alt="jaay couturess" /> */}
          <div className="shopjaay">SHOP JAAYCOUTURE</div>
        </div>
        <div className="kiddies">
          {/* <img src={jaaykiddies} alt="jaay kiddiess" /> */}
          <div className="shopjaay">SHOP JAAYKiddies</div>
        </div>

        <div className="bridals">
          {/* <img src={jaaybridals} alt="jaay bridalss" /> */}
          <div className="shopjaay">SHOP JAAYBRIDALS</div>
        </div>
      </section>
      <div className="shopby">WHAT'S NEW?</div>
      <section className="newcontainer">
        <div className="shopbynew">
          <div className="newDivControl">
            <div className="newImageContainer">
              <img src={pinafore} alt="sweet pinafore" />
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p>Sweet Pinafore</p>
                <p>€90.00</p>
                <div>
                  <div className="blue"></div>
                  <div className="red"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="newTextControlleft">
                <p>DETAILS</p>
                <select name="sizeselect" id="sizeselect">
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div>ADD TO CART</div>
          </div>
          <div className="newDivControl">
            <div className="newImageContainer">
              <img src={kimono} alt="sweet pinafore" />
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p>Olivia's Kimono</p>
                <p>€90.00</p>
                <div>
                  <div className="blue"></div>
                  <div className="red"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="newTextControlleft">
                <p>DETAILS</p>
                <select name="sizeselect" id="sizeselect">
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div>ADD TO CART</div>
          </div>
          <div className="newDivControl">
            <div className="newImageContainer">
              <img src={tisetop} alt="sweet pinafore" />
            </div>
            <div className="newTextControl">
              <div className="newTextControlRight">
                <p>Tise's Top and Trouser</p>
                <p>€90.00</p>
                <div>
                  <div className="blue"></div>
                  <div className="red"></div>
                  <div className="green"></div>
                </div>
              </div>
              <div className="newTextControlleft">
                <p>DETAILS</p>
                <select name="sizeselect" id="sizeselect">
                  <option value="">Size</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
              </div>
            </div>
            <div>ADD TO CART</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
