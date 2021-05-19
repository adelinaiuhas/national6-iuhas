import "./ProfessionalExperience.css";
import { Plexus } from "./WorkPlaces/Plexus";
import React, { useState } from "react";
import { Celestica } from "./WorkPlaces/Celestica";
import { SHC } from "./WorkPlaces/SHC";
import { OfficeDepot } from "./WorkPlaces/OfficeDepot";
import { KingsDominion } from "./WorkPlaces/KingsDominion";

export function ProfessionalExperience() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  return (
    <div className="experience-container">
      <h2
        onMouseEnter={() => setIsShown1(true)}
        onMouseLeave={() => setIsShown1(false)}
      >
        Plexus
      </h2>
      {isShown1 && <Plexus />}
      <p>01/Aug/2019 - Ongoing</p>
      <p>Demand analyst SR</p>
      <p>04/Apr/2017 - 31/Jul/2019</p>
      <p>Demand analyst II</p>
      <br />
      <h2
        onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}
      >
        Celestica IPC
      </h2>
      {isShown2 && <Celestica />}
      <p>28/Apr/2016 - 31/Mar/2017</p>
      <p>Commodity management analyst</p>
      <p>07/Jan/2015 - 28/Apr/2016</p>
      <p>Commodity management associate</p>

      <br />
      <h2
        onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}
      >
        Shinheung Electronics
      </h2>
      {isShown3 && <SHC />}
      <p>09/Apr/2021 - 05/Jan/2015</p>
      <p>Buyer</p>

      <br />
      <h2
        onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)}
      >
        Office Depot
      </h2>
      {isShown4 && <OfficeDepot />}
      <p>06/Oct/2021 - 27/Jul/2012</p>
      <p>Process assistant</p>

      <br />
      <h2
        onMouseEnter={() => setIsShown5(true)}
        onMouseLeave={() => setIsShown5(false)}
      >
        King Dominion - US
      </h2>
      {isShown5 && <KingsDominion />}
      <p>28/Jun/2008 - 26/Sep/2008</p>
      <p>Game Host</p>

      <br />
    </div>
  );
}
