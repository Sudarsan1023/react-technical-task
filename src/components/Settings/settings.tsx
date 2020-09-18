import React from "react";
import "./settings.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../header/header";

class Settings extends React.Component {
  render() {
    return (
      // Setting code start
      <div className="settings-main-container">
        <Header />
        <div className="main-section">
          <div className="head-section">
            <h5>GENERAL SETTINGS</h5>
          </div>
          {/* Menu list cards code start */}
          <div className="cards-section">
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/user.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Users</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/horse.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Tags</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <Link to="/dialouges" className="route">
                <div className="menu-icon">
                  <img
                    src={require("../../images/jigsaw.png")}
                    alt=""
                    className="image"
                  />
                  <div className="menu-text">
                    <p>Dialouges</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/laptop.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Intents</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/bar.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Carriers</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/paper.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Important histories</p>
                </div>
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-icon">
                <img
                  src={require("../../images/jigsaw.png")}
                  alt=""
                  className="image"
                />
                <div className="menu-text">
                  <p>Permissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu list cards code end */}
      </div>
      // Setting code end
    );
  }
}
export default Settings;
