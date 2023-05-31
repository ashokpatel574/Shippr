import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <article className="userInfo_container flex-center">
      <h3 className="userInfo_container-title">Account Information</h3>
      <section className="userInfo_wrapper flex-center">
        <div className="userInfo_NavLink-container">
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              return isActive
                ? "userProfileNavLink active "
                : " userProfileNavLink";
            }}
            end
          >
            <span className="userProfile_title">Profile</span>
          </NavLink>
          <NavLink
            to="userAddress"
            className={({ isActive }) => {
              return isActive
                ? "userAddressNavLink active "
                : " userAddressNavLink";
            }}
          >
            <span className="userAddress_title">Address</span>
          </NavLink>
        </div>
        <Outlet />
      </section>
    </article>
  );
};

export default ProfilePage;
