import React from "react";
import heroImage from "../../images/heroimage.jpg";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <div className="heroTextTop">
          <div className="heroHeaderText">
            <h1 className="style">STYLE YOUR</h1>
            <h1>CONFIDENCE</h1>
          </div>
          <div>
            <p>Your number one online marketplace</p>
            <p className="readymade">for ready-made and custom-made dresses</p>
          </div>
        </div>
        <div className="heroTextButtom">
          <p>SHOP DRESSES</p>
          <p>BOOK CONSULTATION</p>
        </div>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="girl sitting" />
      </div>
    </div>
  );
};

export default Hero;
