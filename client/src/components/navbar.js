import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="fixed flex items-center -mt-[11vh] h-[11vh] w-[100vw] z-20 bg-white pb-2 sm:px-4 py-2.5 ">
      <div className="flex w-full items-center h-full">
        <div className="flex  items-center ">
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
              <ButtonLogin />
              <ButtonRegister />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
