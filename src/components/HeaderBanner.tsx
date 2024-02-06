import "./HeaderBanner.css";
import CrossIcon from "../assets/cross-icon.svg";
import { useState } from "react";
import NextIcon from "../assets/next-icon.svg";

const HeaderBanner = () => {
  const promotions = [
    {
      text: (
        <div>
          <span style={{ fontWeight: "bold" }}>Black Friday,</span> 27-28 Nov
        </div>
      ),
    },
    {
      text: <div style={{ color: "#D7A830", fontWeight: "bold" }}> 10%OFF</div>,
    },
    {
      text: (
        <div>
          Use code{" "}
          <span style={{ color: "#D7A830", fontWeight: "bold" }}>10FRIDAY</span>{" "}
          at checkout
        </div>
      ),
    },
  ];

  const [currentPromotion, setCurrentPromotion] = useState(0);

  const handleNextPromotion = () => {
    setCurrentPromotion((prev) => (prev + 1) % promotions.length);
  };
  return (
    <div className="container">
      <img className="header-image" src="/main.png" alt="header_image"></img>
      <div className="mobile-only">
        <div className="promotion-container">
          {promotions[currentPromotion].text}
          <img
            className="next-button"
            onClick={handleNextPromotion}
            src={NextIcon}
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            alt="next-icon"
          ></img>
        </div>
      </div>
      <div className="desktop-only">
        <div className="promotion-container">
          {promotions.map((promo, index) => (
            <div key={index}>{promo.text}</div>
          ))}
        </div>
      </div>
      <div style={{ marginRight: "20px" }}>
        <button className="header-shop-button ">Shop now </button>
        <img
          className="header-cross-icon"
          src={CrossIcon}
          alt="cross-icon"
        ></img>
      </div>
    </div>
  );
};

export default HeaderBanner;
