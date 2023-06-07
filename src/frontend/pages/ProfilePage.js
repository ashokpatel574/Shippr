import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <section className="userInfo_container  flex-column">
      <h3 className="userInfo_container-title">Account Information</h3>
      <article className="userInfo_wrapper flex-center flex-column padding-xl gap-l">
        <div className="userInfo_NavLink-container ">
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
          <NavLink
            to="userOrder"
            className={({ isActive }) => {
              return isActive
                ? "userOrderNavLink active "
                : " userOrderNavLink";
            }}
          >
            <span className="userOrder_title">Order</span>
          </NavLink>
        </div>
        <Outlet />
      </article>
    </section>
  );
};

export default ProfilePage;
