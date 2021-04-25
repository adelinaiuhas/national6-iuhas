import menuSvg from "./menu.svg";
import React, { useState } from "react";
import "./MenuButton.css";
import { MenuFlyOut } from "../MenuFlyOut/MenuFlyOut";

export function MenuButton() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="app-menu-button">
      <img
        src={menuSvg}
        alt="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      />
      {isShown && <MenuFlyOut />}
    </div>
  );
}
