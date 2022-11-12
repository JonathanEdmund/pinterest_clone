import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import Pin from "../components/Pin";
import Login from "../components/Entry/Login";
import Register from "../components/Entry/Register";

const Homepage = () => {
  const [pins, setPins] = useState([]);
  const entry = useSelector((state) => state.ui.entry);

  useEffect(() => {
    fetch("/api/post")
      .then((response) => response.json())
      .then((data) => {
        alert(
          "This is NOT a static app. Please try the login, sign up, pin functionalities. Also check your user page to see you collection of pins:). To check the server side please check my github repository at https://github.com/JonathanEdmund/pinterest_clone, thank you :D"
        );
        setPins(data?.pins);
      });
  }, []);
  return (
    <>
      {entry?.login && <Login />}
      {entry?.register && <Register />}

      <div className="mt-[11vh] lg:columns-6 md:columns-3 sm:columns-2 gap-x-2 mx-2">
        {/* <div className="mt-[11vh] lg:h-[100vh] md:h-[250vh] inset-0  flex flex-col flex-wrap justify-start mx-2"> */}
        {pins.map((pin) => {
          // render pin component
          return <Pin key={pin._id} pin={pin} />;
        })}
      </div>
    </>
  );
};

export default Homepage;
