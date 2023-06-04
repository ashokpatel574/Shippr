import React from "react";
import CompanyLogoBird from "../../../assets/logo/shipprLogoBird.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Icons from material icon library
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useData } from "../../context/DataContext";
import { ActionType, Filters } from "../../constant";

const Header = () => {
  const { token } = useAuth();
  const {
    state: { filters, wishlist, cartlist },
    dispatch,
  } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  const searchFilterHandler = (e) => {
    const { value } = e.target;

    dispatch({
      type: ActionType.ChangeFilter,
      payload: { filterType: Filters.Search, filterValue: value },
    });
  };

  return (
    <header className="header_container  ">
      <nav className=" header_nav-container flex-space-between page-containerWidth padding-tp-btm-m   ">
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
        <ul className="header_container-partTwo flex-space-between flex-nowrap gap-xxl  ">
          {location.pathname === "/products" ? (
            <li className="searchInputPrimary_container ">
              <label htmlFor="searchInputPrimary flex-center flex-nowrap">
                <input
                  id="searchInputPrimary"
                  className="searchInput_primary "
                  type="text"
                  placeholder="Search..."
                  name="searchInputPrimary"
                  value={filters.searchText}
                  onChange={searchFilterHandler}
                />
                <span className="flex-center">
                  <SearchIcon />
                </span>
              </label>
            </li>
          ) : (
            ""
          )}
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

          <li className=" wishlistIcon-container flex-center">
            <NavLink to="wishlist">
              <span className="">
                <FavoriteBorderIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
              {wishlist.length > 0 && (
                <span className="wishlistCount">{wishlist.length}</span>
              )}
            </NavLink>
          </li>
          <li className="cartlistIcon-container flex-center">
            <NavLink to="cart">
              <span className="">
                <ShoppingCartIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
              {cartlist.length > 0 && (
                <span className="cartCount">{cartlist.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
