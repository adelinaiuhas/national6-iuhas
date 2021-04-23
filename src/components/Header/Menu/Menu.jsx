import { MenuButton } from "./MenuButton/MenuButton";
import { handleFlyOut } from "./MenuFlyOut/MenuFlyOut";
import "./Menu.css";

export function Menu() {
  return (
    <div className="app-menu">
      {" "}
      <MenuButton onClick={this.handleFlyOut} />{" "}
    </div>
  );
}
