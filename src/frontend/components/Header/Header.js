import React from "react";
import CompanyLogoBird from "../../../assets/logo/shipprLogoBird.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Icons from material icon library
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header_container ">
      <nav className=" header_nav-container flex-space-between  ">
        <div className="header_container-partOne flex-center flex-nowrap">
          <NavLink to="/">
            <div className="flex-center">
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
        <ul className="header_container-partTwo flex-space-between flex-nowrap ">
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
          <li className="header_home-text flex-center">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
          </li>

          <li className="flex-center">
            {token ? (
              <NavLink to="profile">
                <span>
                  <AccountCircleIcon
                    sx={{ "& :hover": { color: "#3c0ac2" } }}
                  />
                </span>
              </NavLink>
            ) : (
              <button
                onClick={() => navigate("login")}
                className="btn logInBtn"
              >
                Log In
              </button>
            )}
          </li>

          <li className="flex-center">
            <NavLink to="wishlist">
              <span>
                <FavoriteIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
            </NavLink>
          </li>
          <li className="flex-center">
            <NavLink to="cart">
              <span>
                <ShoppingCartIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
