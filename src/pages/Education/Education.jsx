import "./Education.css";
import fsega from "./fsega.png";
import scit from "./scit.jpg";
import ubb from "./ubb.jpg";
import Windesheim from "./Windesheim.jpg";

export function Education() {
  return (
    <div className="education-container">
      <img src={scit} alt="scit" />
      <h2>12/Jan/2021 - 13/May/2021</h2>
      <p>Scoala Informala de IT - Junior Developer</p>
      <p>HTML, CSS, JavaScript, React</p>
      <br />
      <img src={ubb} alt="ubb" />
      <img src={fsega} className="fsega" alt="fsega" />
      <h2>2009 - 2011</h2>
      <p>
        Babes-Bolyai University, Faculty of Economics and Business
        Administration, Cluj-Napoca, Romania
      </p>
      <p>Master in entrepreneurship and business management</p>
      <br />
      <img src={Windesheim} alt="Windesheim" />
      <h2>02/Feb/2009 - 29/Jun/2009</h2>
      <p>Windesheim University, The School of Management and Law</p>
      <p>ERASMUS student</p>
      <br />
      <img src={ubb} alt="ubb" />
      <img src={fsega} className="fsega" alt="fsega" />
      <h2>2006 - 2009</h2>
      <p>
        Babes-Bolyai University, Faculty of Economics and Business
        Administration, Cluj-Napoca, Romania
      </p>
      <p>Major in management</p>
    </div>
  );
}
