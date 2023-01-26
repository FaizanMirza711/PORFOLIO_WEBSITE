import React from "react"
import logo from "./f-logo.png";
// import { Anchor, Row, Col } from 'antd';
// import { Anchor } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-0">

            <li className="nav-item active">
              <a className="nav-link" href="#header">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achivements">achivements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact me</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}
