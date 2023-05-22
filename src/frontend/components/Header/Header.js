import React from "react";
import CompanyLogoBird from "../../../assets/logo/shipprLogoBird.png";

// Icons from material icon library
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_container ">
      <nav className=" header_nav-container sticky ">
        <div className="flex-space-between">
          <div className="header_container-partOne flex-center">
            <NavLink to="/">
              <div>
                <img
                  src={CompanyLogoBird}
                  alt="shippr company logo"
                  width="75px"
                />
              </div>
            </NavLink>
            <NavLink to="/">
              <h2>Shippr</h2>
            </NavLink>
          </div>
          <ul className="header_container-partTwo ">
            <li className="searchInputPrimary_container ">
              <label htmlFor="searchInputPrimary flex-center">
                <input
                  id="searchInputPrimary"
                  className="searchInput_primary"
                  type="text"
                  placeholder="Search..."
                  name="searchInputPrimary"
                />
                <span className="flex-center">
                  <SearchIcon />
                </span>
              </label>
            </li>
            <li className="header_home-text">
              <NavLink to="/">
                <p>Home</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="profile">
                <span>
                  <AccountCircleIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="wishlist">
                <span>
                  <FavoriteBorderIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="cart">
                <span>
                  <ShoppingCartIcon />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
