import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <header>
      <nav>
        <div className="firstNavContainer">
          <div className="upperNavDiv">
            <p>Jaay Designs</p>
            <div className="searchContainer">
              <input type="text" placeholder="Search" />
              <div className="searchbox">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>

          <div className="navlist">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">What's New?</a>
              </li>
              <li>
                <a href="#">Size Chart</a>
              </li>
              <li>
                <a href="#">Book a consultation</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
            </ul>
            <div className="cartDiv">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
        <div className="navIons">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
