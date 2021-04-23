import { MenuButton } from "./MenuButton/MenuButton";
import { MenuFlyOut } from "./MenuFlyout/MenuFlyOut";

import "./Menu.css";

export function Menu() {
  return (
    <div className="app-menu">
      {" "}
      <MenuButton />
      <MenuFlyOut />
    </div>
  );
}
