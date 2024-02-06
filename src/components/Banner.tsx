import "./Banner.css";
import CrossIcon from "../assets/cross-icon.svg";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");

    if (isBannerClosed === "true") {
      setIsBannerVisible(false);
    }
  }, []);

  const handleCloseBanner = () => {
    localStorage.setItem("isBannerClosed", "true");

    setIsBannerVisible(false);
  };
  return isBannerVisible ? (
    <div id="banner" className="banner">
      <span className="cross-icon" onClick={handleCloseBanner}>
        <img
          src={CrossIcon}
          alt="cross-icon"
          style={{ width: "11.5px", height: "11.5px" }}
        />
      </span>
      <div className="banner-info">
        <h1 className="banner-title">Black Friday</h1>
        <h2 className="gradient-text">10%OFF</h2>
        <p style={{ color: "#6C6C70" }}>
          Use code <span style={{ color: "#D7A830" }}>10FRIDAY</span> at
          checkout
        </p>
        <button className="shop-button">Shop now through Monday</button>
      </div>
    </div>
  ) : null;
};

export default Banner;
