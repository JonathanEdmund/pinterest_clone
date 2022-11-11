import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Button from "./Button";
import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";
import ButtonCircle from "./ButtonCircle";

import { ReactComponent as Logo } from "../img/pinterest-social-media-svgrepo-com.svg";
import { ReactComponent as User } from "../img/user.svg";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="fixed flex items-center -mt-[11vh] h-[11vh] w-screen z-20 bg-white pb-2 sm:px-4 py-2.5">
      <div className="flex w-full items-center h-full justify-between">
        <div className="flex items-center ">
          <Link to="/">
            <ButtonCircle>
              <Logo />
            </ButtonCircle>
          </Link>
          {/* <button>Home</button> */}
          {user && (
            <>
              <Button bg="dark">Home</Button>
              <Button bg="light">Today</Button>
              <Button bg="light">Create</Button>
            </>
          )}
        </div>
        {user && (
          <div className="grow h-[5vh] px-2">
            <input
              className="w-full h-full rounded-3xl px-3 bg-gray-200 hover:bg-gray-300"
              type="text"
              placeholder="Search"
            />
          </div>
        )}
        <div className="flex justify-self-end">
          {user ? (
            <>
              <ButtonCircle>b</ButtonCircle>
              <ButtonCircle>b</ButtonCircle>
              <ButtonCircle>b</ButtonCircle>
              <Link to={"adf"}>
                <ButtonCircle>
                  <User />
                </ButtonCircle>
              </Link>
            </>
          ) : (
            <div>
              <ButtonLogin />
              <ButtonRegister />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
