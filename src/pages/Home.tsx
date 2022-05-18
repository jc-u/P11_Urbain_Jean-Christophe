import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="homecontainer">
        <div className="homebanner">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;