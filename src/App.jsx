import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Education } from "./pages/Education/Education";
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <ProfessionalExperience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
