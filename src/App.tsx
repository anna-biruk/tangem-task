import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import Banner from "./components/Banner";

function App() {
  const [showFooterBanner, setShowFooterBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerBannerHeight = 55;

      if (scrollPosition > headerBannerHeight) {
        setShowFooterBanner(true);
      } else {
        setShowFooterBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <HeaderBanner />
      <div style={{ marginTop: "550px" }}>{showFooterBanner && <Banner />}</div>
    </div>
  );
}

export default App;
