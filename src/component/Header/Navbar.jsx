import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from "@mui/icons-material/Inbox";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Avatar } from "@mui/material";


function Navbar() {
  const user = useSelector(selectUser);
  // console.log(user)
  return (
    <>
      <div className="content">
        <div className="left-content">
          <Link to="/">
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
              alt="logo"
            />
          </Link>
          <p>Products</p>
        </div>
        <div className="middle-content">
          <SearchIcon />
          <input type="text" placeholder="Search..."></input>
        </div>
        <div className="right-content">
          <Avatar src={user?.photo} />
          <InboxIcon />
          <img
            src="https://stackoverflow.design/assets/img/logos/se/se-icon.svg"
            alt="Dropdown"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
