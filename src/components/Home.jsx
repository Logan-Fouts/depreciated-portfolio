import React from "react";
import "./style/Home.css";
import me from "../assets/me.png";

function Home() {
  return (
    <div id="HomeContainer">
      <img src={me} alt="me" id="Me" />
      <div id="Content">
        <h1>Welcome To My Portfolio</h1>
        <p>
          👋 Hello, I am Logan Fouts! I am a passionate and creative software
          technology student at Linnaeus University in Sweden. My journey in the
          world of technology is marked by a commitment to excellence and the
          need to be continuously learning. I love solving problems that make
          life easier for people. 🚀 What I Do: - Programming Wizardry:
          Transforming concepts into robust code. - Web Development: Crafting
          engaging and user-friendly websites with some of the latest
          technologies. - 3D Printing Enthusiast: Bringing digital designs to
          life in the physical world.Explore my portfolio to see my latest
          projects, get to know me, and get in touch if you would like. Happy
          coding!
        </p>
      </div>
    </div>
  );
}

export default Home;
