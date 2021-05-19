import { Photo } from "../Photo/Photo";
import { Link } from "react-router-dom";

import "./Header.css";

export function Header() {
  return (
    <div className="cv-header">
      <Photo />
      <p className="cv-header-title">Adelina Iuhas</p>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Professional Experience</Link>
        <Link to="/projects">Skills and projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
