import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginEntry } from "../store/uiSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const entry = useSelector((state) => state.auth.entry);

  const dispatch = useDispatch();

  const handleClickLogin = (e) => {
    console.log("login");
    dispatch(setLoginEntry());
  };

  return (
    <nav className="fixed -mt-[7vh] h-[7vh] w-[100vw] z-20 flex justify-between bg-blue-100 px-2 sm:px-4 py-2.5 ">
      {/* {login && <div className="w-[200px] h-[200px] fixed bg-white">abs</div>} */}
      <div>
        <Link to="/">p</Link>
      </div>
      <div>Home</div>
      <div>
        <input type="text" />
      </div>
      {user ? (
        <>dp</>
      ) : (
        <>
          <div>notification</div>
          <div
            className="cursor-pointer"
            name="login"
            onClick={handleClickLogin}
          >
            Login
          </div>
          <div>Sign Up</div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
