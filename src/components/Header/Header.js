import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logout from "../../images/logout-icon.svg"
import viewFriends from "../../images/friends_1.svg"
import userIcon from "../../images/user-icon.svg"


const Header = ({ user, signOut }) => {



    
  const button = user && (
    <div className="header-login-container">
      <Link to={`/${user.name}`}>
        <div className="icon-and-text">
          <img className="dashboard-btn" src={userIcon} />
          <h3 className="nav-bar-text">Back to Dashboard</h3>
        </div>
      </Link>
      <Link to={`${user.name}/friends`}>
        <div className="icon-and-text">
          <img className="view-friends-btn" src={viewFriends}/>
          <h3 className="nav-bar-text">View Friends Upcoming Shows</h3>
        </div>
      </Link>
      <Link to="/">
        <div className="icon-and-text">
          <img className="logout-btn" src={logout} onClick={() => signOut("")}/>
          <h3 className="nav-bar-text">Logout</h3>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="header">
      <div className="h1-wrapper">
      <Link to={`/${user.name}`}>
        <h1>CONCERT CREW</h1>
      </Link>
      </div>
      {button}
    </div>
  );
};

export default Header;
