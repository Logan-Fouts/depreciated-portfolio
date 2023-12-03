import React from "react";
import Project from "./Project";
import PicPurge from "../assets/picpurge.gif";
import PyDeck from "../assets/pydeckGUI.png";
import PHash from "../assets/phash.png";
import Streamdeck from "../assets/streamdeck.jpg";
import Keyboard from "../assets/keyboard.png";
import "./style/Projects.css";

function Projects() {
  const externalUrl =
    "https://www.hackerfactor.com/blog/index.php?/archives/432-Looks-Like-It.html";

  return (
    <div id="projects">
      <h1 id="pageTitle">My Current Projects</h1>
      <div id="projectEntry">
        <Project
          title="PicPurge"
          imgSrc={PicPurge}
          link="https://github.com/Logan-Fouts/PicPurge"
          description="A Python script that facilitates the identification and removal of
        duplicate images within a designated directory, as well as image
        sorting using Machine Learning. This script utilizes image hashing for
        comparison purposes and now incorporates sorting functionality using
        TensorFlow for enhanced efficiency. The script offers both a
        command-line interface and a user-friendly GUI for seamless
        utilization."
        />
        <div id="details">
          <h2>Interesting Details:</h2>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="link"
          >
            <img src={PHash} alt="phash image" id="phashImg" />
          </a>
          <div id="detailsContent">
            <h3>A Very Odd Helpful Article</h3>
            <p>
              In this article, the author delves into the pHash algorithm, which
              is a perceptual hashing technique used for image comparison.
              Unlike the Average Hash, pHash employs a discrete cosine transform
              (DCT) to handle image frequencies. The process involves reducing
              the image size, converting to grayscale, computing the DCT, and
              then reducing and averaging the DCT values to create a unique
              hash. This approach makes pHash more robust, especially in
              scenarios involving minor modifications.
            </p>
            <h3>What Difference Does It Make?</h3>
            <p>
              Using the above approach and optimizing my code, I was able to
              turn the script from running in a matter of hours to a matter of
              minutes. Despite the oddities of the authors obsession with Alyson
              Hannigan, this bit of research turned out to help speed up the
              program exponentially.
            </p>
          </div>
        </div>
      </div>

      <div id="projectEntry">
        <Project
          title="Py-Deck"
          imgSrc={PyDeck}
          link="https://github.com/Logan-Fouts/Py-Deck"
          description="This project is a fork of teh python-elgato-streamdeck repo on github. 
          I created some new functionality but mainly took a shot at making a nice looking and easy to use GUI. 
          This implementation allows users to easily use stream deck on linux to run keybinds and commands in 
          the terminal. This project was actually a side effect of my past 'the perfect' keyboard work. 
          Ill talk more about that in the subsection below."
        />
        <div id="details">
          <h1 id="h2Title">Custom Keyboard Endeavour</h1>
          <div id="images">
            <img src={Streamdeck} alt="phash image" id="streamDeckImg" />
            <img src={Keyboard} alt="phash image" id="keyboardImg" />
          </div>
          <div id="detailsContent">
            <h3>The Design</h3>
            <p>
              Crafting the ideal keyboard setup was a more challenging process then expected,
              particularly when tailored for compatibility with the Ender 3 3D
              printer. This envisioned configuration prioritizes adaptability,
              featuring a Stream Deck mount designed for effortless removal. M3
              screws and heated inserts provide structural stability, while the
              integration of a Raspberry Pi Pico adds a smart dimension,
              enabling customization and automation. The synergy between 3D
              printing technology and thoughtful design not only ensures
              practicality but also infuses a creative touch, allowing users to
              personalize their workspace with precision and innovation.
              Assembling this keyboard becomes a dynamic journey, where each
              component contributes to a seamlessly integrated and
              technologically advanced solution for an enriched user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
