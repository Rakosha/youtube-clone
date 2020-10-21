import React, { useState } from "react";

import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
import "./header.css";

import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/home">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <Avatar
          src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/29573339_1846799815370055_3662978827016442340_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=klFsS6xiW3AAX-c4Bkp&_nc_ht=scontent.fyvr3-1.fna&oh=fc75699c4f628a774bc43873be834b09&oe=5FA9F88C"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Header;

//https://material-ui.com/components/material-icons/
