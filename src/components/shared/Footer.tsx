import React from "react";
import mastercard from "../../images/mastercard.svg";
import visa from "../../images/visa.svg";
import paypal from "../../images/paypal.svg";
import americanexpress from "../../images/american-express.svg";
import twitter from "../../images/twitter.svg";
import whatsapp from "../../images/whatsapp.svg";
import instagram from "../../images/instagram.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="leftsideControl">
        <div className="footerdescription">
          <p className="footerlogo">Jaay Designs</p>
          <p>
            Jaay Designs produces contemporary women's wear that look stylish
            everyday of the week. We deliver to over 200 countries and we take
            pride in the quality of our products while offering you the best
            price for our trendy fashion pieces.
          </p>
        </div>
        <p>Copyright © Jaaydesigns</p>
      </div>
      <div className="rightsideControl">
        <div className="officecardContol">
          <div className="officehours">
            <p className="officehoursheader">OFFICE HOURS</p>
            <div>
              <p>Monday-Friday: 9am-5am</p>
              <p>Saturday: 10am-3pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="cardsupport">
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={americanexpress} alt="americaneexpress" />
            <img src={paypal} alt="paypal" />
          </div>
        </div>
        <div className="socials">
          <div className="socialicons">
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <p>contact@jaaydesigns.com</p>
          <p>+2348068048811</p>
          <p>shop 9, ogbogboyro, Ijoka, Akure, Lagos state</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
