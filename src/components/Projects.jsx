import React from "react";
import Project from "./Project";
import PicPurge from "../assets/picpurge.gif";
import PHash from "../assets/phash.png";
import "./style/Projects.css";

function Projects() {
  const externalUrl =
    "https://www.hackerfactor.com/blog/index.php?/archives/432-Looks-Like-It.html";

  return (
    <div id="projects">
      <h1 id="pageTitle">My Current Projects</h1>
      <div id="picPurge">
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
                In this article, the author delves into the pHash algorithm,
                which is a perceptual hashing technique used for image
                comparison. Unlike the Average Hash, pHash employs a discrete
                cosine transform (DCT) to handle image frequencies. The process
                involves reducing the image size, converting to grayscale,
                computing the DCT, and then reducing and averaging the DCT
                values to create a unique hash. This approach makes pHash more
                robust, especially in scenarios involving minor modifications.
              </p>
              <h3>What Difference Does It Make?</h3>
              <p>
                Using the above approach and optimizing my code, I was able to
                turn the script from running in a matter of hours to a matter of
                minutes. Despite the oddities of the authors obsession with
                Alyson Hannigan, this bit of research turned out to help speed
                up the program exponentially.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
