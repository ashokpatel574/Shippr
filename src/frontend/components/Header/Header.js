import React from "react";
import CompanyLogoBird from "../../../assets/logo/shipprLogoBird.png";

// Icons from material icon library
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  return (
    <header className="header_container ">
      <nav className=" header_nav-container sticky ">
        <div className="flex-space-between">
          <div className="header_container-partOne flex-center">
            <div>
              <img
                src={CompanyLogoBird}
                alt="shippr company logo"
                width="75px"
              />
            </div>
            <h2>Shippr</h2>
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
              <p>Home</p>
            </li>

            <li>
              <span>
                <AccountCircleIcon />
              </span>
            </li>
            <li>
              <span>
                <FavoriteBorderIcon />
              </span>
            </li>
            <li>
              <span>
                <ShoppingCartIcon />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
