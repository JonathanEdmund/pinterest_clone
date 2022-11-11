import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pin from "../api/pin";
import { setLoginEntry } from "../store/uiSlice";

const Pin = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const { _id, link, title } = props.pin;
  const [isShown, setIsShown] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    if (!user) {
      console.log(user);
      dispatch(setLoginEntry());
      return;
    }
    console.log(_id);
    await pin({ pinId: _id });
    console.log("sucess");
  };

  return (
    // <div className="lg:w-[16%] md:w-[30%] mb-3 pb-3 rounded-lg">
    <div className="mb-3 pb-3 rounded-lg">
      <div
        className="relative w-full"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <button
            className="absolute top-0 right-0 z-10 bg-red-600 text-white p-3 rounded-3xl m-2"
            onClick={handleClick}
          >
            Save
          </button>
        )}
        <Link to={`/pin/${_id}`}>
          <img
            className="rounded-lg hover:brightness-75 w-full"
            src={link}
            alt={title}
          />
        </Link>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Pin;
