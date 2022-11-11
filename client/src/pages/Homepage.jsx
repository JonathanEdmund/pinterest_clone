import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";
import Pin from "../components/Pin";
import Overlay from "../components/Overlay";

const Homepage = () => {
  const [pins, setPins] = useState([]);
  const entry = useSelector((state) => state.ui.entry);

  useEffect(() => {
    fetch("/api/post")
      .then((response) => response.json())
      .then((data) => {
        setPins(data?.pins);
      });
  }, []);
  return (
    <>
      {entry?.login && (
        <>
          <Overlay />
          <Login />
        </>
      )}

      {/* <div className="inset-0 h-full lg:columns-6 md:columns-3 sm:columns-2 gap-x-2 mx-2"> */}
      <div className="mt-[7vh] h-[100vh] inset-0  flex flex-col flex-wrap justify-start mx-2">
        {pins.map((pin) => {
          // render pin component
          return <Pin key={pin._id} pin={pin} />;
        })}
      </div>
    </>
  );
};

export default Homepage;
