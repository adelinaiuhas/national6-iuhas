import "./ProfessionalExperience.css";
import { Plexus } from "../ProfessionalExperience/WorkPlaces/Plexus";
import React, { useState } from "react";
export function ProfessionalExperience() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="experience-container">
      <h2
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Plexus
      </h2>
      {isShown && <Plexus />}
      <p>01/Aug/2019 - Ongoing</p>
      <p>Demand analyst SR</p>
      <p>04/Apr/2017 - 31/Jul/2019</p>
      <p>Demand analyst II</p>
      <br />
      <h2>Celestica IPC</h2>
      <p>28/Apr/2016 - 31/Mar/2017</p>
      <p>Commodity management analyst</p>
      <p>07/Jan/2015 - 28/Apr/2016</p>
      <p>Commodity management associate</p>

      <br />
      <h2>Shinheung Electronics</h2>
      <p>09/Apr/2021 - 05/Jan/2015</p>
      <p>Buyer</p>

      <br />
      <h2>Office Depot</h2>
      <p>06/Oct/2021 - 27/Jul/2012</p>
      <p>Process assistant</p>

      <br />
      <h2>King Dominion - US</h2>
      <p>28/Jun/2008 - 26/Sep/2008</p>
      <p>Game Host</p>

      <br />
    </div>
  );
}
