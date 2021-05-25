import "./Projects.css";
import html from "./html5.svg";
import css from "./css-3.svg";
import js from "./java-script-logo.svg";
import react from "./logo.svg";
import myCV from "./me.jpg";
export function Projects() {
  return (
    <div className="projects-container">
      <h2>Language skills</h2>
      <br />
      <div className="level">
        {" "}
        <h3 className="beginner">Beginner</h3>
        <h3 className="advanced">Advanced</h3>
      </div>
      <br />
      <p>English</p>

      <hr style={{ width: "100%" }} />
      <p>French</p>
      <hr style={{ width: "60%" }} />
      <p>Spanish</p>
      <hr style={{ width: "30%" }} />
      <br />
      <h2>Programming skills</h2>
      <br />
      <div className="level">
        {" "}
        <h3 className="beginner">Beginner</h3>
        <h3 className="advanced">Advanced</h3>
      </div>
      <br />
      <img src={html} style={{ width: "5%" }} alt="html" />
      <hr style={{ width: "100%" }} />
      <img src={js} style={{ width: "6%" }} alt="js" />
      <hr style={{ width: "80%" }} />
      <img src={css} style={{ width: "6%" }} alt="css" />
      <hr style={{ width: "70%" }} />

      <img
        src={react}
        style={{ width: "10%", marginLeft: "-10px" }}
        alt="react"
      />
      <hr style={{ width: "40%" }} />
      <br />
      <h2>Programming project - My Online CV</h2>
      <a
        href="https://compassionate-raman-d3be72.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={myCV} className="my-cv" alt="Adelina Iuhas CV" />
      </a>
    </div>
  );
}
