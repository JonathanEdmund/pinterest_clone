import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginEntry, setRegisterEntry } from "../store/uiSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const entry = useSelector((state) => state.auth.entry);

  const dispatch = useDispatch();

  const handleClickLogin = (e) => {
    console.log("login");
    dispatch(setLoginEntry());
  };

  const handleClickRegister = (e) => {
    dispatch(setRegisterEntry());
  };

  return (
    <nav className="fixed flex items-center -mt-[11vh] h-[11vh] w-[100vw] z-20 bg-white pb-2 sm:px-4 py-2.5 ">
      <div className="flex w-full items-center h-full">
        <div className="flex  items-center ">
          {/* <div className="rounded-full hover:bg-gray-200 h-10 w-10 items-center justify-center"> */}

          <Link
            className="rounded-full hover:bg-gray-200 h-10 w-10 items-center justify-center"
            to="/"
          >
            P
          </Link>
          <button>Home</button>
        </div>
        <div className="grow h-[5vh]">
          <input
            className="w-full h-full rounded-3xl px-3 bg-gray-200 hover:bg-gray-300"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          {user ? (
            <>dp</>
          ) : (
            <>
              <div>notification</div>
              <button
                className="bg-red-600 rounded-3xl text-white px-3 py-2 font-semibold"
                name="login"
                onClick={handleClickLogin}
              >
                Log in
              </button>
              <button
                className="bg-gray-200 rounded-3xl px-3 py-2 font-semibold"
                name="register"
                onClick={handleClickRegister}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
