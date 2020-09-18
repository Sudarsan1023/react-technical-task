import React from "react";
import "./header.scss";
class Header extends React.Component {
  render() {
    return (
        // Header code start
      <div className="topbar">
        <div className="breadcrub-sections">
          <h5>Settings</h5>
        </div>
        <div className="account-section">
          <h5>Admin</h5>
          <div className="name-letter">A</div>
          <span className="drop-down">
            <i className="lni lni-chevron-down"></i>
          </span>
        </div>
      </div>
        // Header code end
    );
  }
}
export default Header;
