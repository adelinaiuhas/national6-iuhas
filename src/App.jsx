import { Header } from "./components/Header/Header";
import { menuLogo } from "./components/Header/Menu/MenuButton/MenuButton";
import "./App.css";

function App() {
  return (
    <div className="App" id="app">
      <Header />
      <menuLogo />
    </div>
  );
}

export default App;
