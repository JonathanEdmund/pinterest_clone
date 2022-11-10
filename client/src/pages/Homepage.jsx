import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "../components/Login";

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
      <h1>Homepage</h1>
      {entry?.login && <Login />}

      {pins.map((pin) => {
        // render pin component
        return <img key={pin._id} src={pin.link} alt={pin.title} />;
      })}
    </>
  );
};

export default Homepage;
