import { useState } from "react";
import { Link } from "react-router-dom";

const Pin = (props) => {
  const { _id, link, title } = props.pin;
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="w-[16%] mb-3 pb-3 rounded-lg">
      <div
        className="relative w-full"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <button className="absolute top-0 right-0 z-10 bg-red-600 text-white p-3 rounded-3xl m-2">
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
