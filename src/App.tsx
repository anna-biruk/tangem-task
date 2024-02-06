import React from "react";
import "./App.css";
import HeaderBanner from "./components/HeaderBanner";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <HeaderBanner />
      <div style={{ marginTop: "650px" }}>
        {" "}
        <Banner />
      </div>
    </div>
  );
}

export default App;
