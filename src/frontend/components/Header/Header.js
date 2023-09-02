import { NavLink, useLocation, useNavigate } from "react-router-dom";
// Icons from material icon library
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// Context
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { ActionType, Filters } from "../../constant";
import CompanyLogoBird from "../../../assets/logo/shipprLogoBird.png";

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
      <nav className=" header_nav-container page-containerWidth padding-tp-btm-m   ">
        <div className="header_container-partOne flex-nowrap">
          <NavLink to="/">
            <div className="flex-center">
              <img
                src={CompanyLogoBird}
                alt="shippr company logo"
                width="70px"
                className="logo"
              />
            </div>
          </NavLink>
          <NavLink to="/">
            <h2>Shippr</h2>
          </NavLink>
        </div>
        <>
          {location.pathname === "/products" ? (
            <div className="searchInputPrimary_container flex-center  ">
              <label htmlFor="searchInputPrimary ">
                <input
                  id="searchInputPrimary"
                  className="searchInput_primary"
                  type="text"
                  placeholder="Search products here"
                  name="searchInputPrimary"
                  value={filters.searchText}
                  onChange={searchFilterHandler}
                />
                <span className="flex-center">
                  <SearchIcon />
                </span>
              </label>
            </div>
          ) : (
            ""
          )}
        </>
        <ul className="header_container-partTwo  flex-nowrap gap-xxl  ">
          <li className="header_home-text flex-center">
            <NavLink to="products">
              <p>Explore</p>
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
                LogIn
              </button>
            )}
          </li>

          <li className=" wishlistIcon-container flex-center">
            <NavLink to="wishlist">
              <span className="">
                <FavoriteBorderIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
              {wishlist.length > 0 && token && (
                <span className="wishlistCount">{wishlist.length}</span>
              )}
            </NavLink>
          </li>
          <li className="cartlistIcon-container flex-center">
            <NavLink to="cart">
              <span className="">
                <ShoppingCartIcon sx={{ "& :hover": { color: "#3c0ac2" } }} />
              </span>
              {cartlist.length > 0 && token && (
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
