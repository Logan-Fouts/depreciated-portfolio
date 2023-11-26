import React from "react";
import "./style/Home.css";
import me from "../assets/me.png";

function Home() {
  return (
    <div id="HomeContainer">
      <img src={me} alt="me" id="Me" />
      <div id="Content">
        <h1>Welcome To My Portfolio</h1>Heres some stuff stuff stuff
      </div>
    </div>
  );
}

export default Home;
