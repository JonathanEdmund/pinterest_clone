import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import Pin from "../components/Pin";
import Login from "../components/Entry/Login";
import Register from "../components/Entry/Register";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { username } = useParams();
  console.log(username);
  //   const username = useSelector((state) => state.auth.username);
  const [pins, setPins] = useState([]);
  const entry = useSelector((state) => state.ui.entry);

  useEffect(() => {
    fetch(`/api/user/${username}/pins`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPins(data?.pins);
      });
  }, [username]);
  return (
    <>
      {entry?.login && <Login />}
      {entry?.register && <Register />}
      <p className="mt-[11vh] font-bold underline text-2xl text-center">
        Hello {username}!
      </p>
      <div className="mt-[13vh] lg:columns-6 md:columns-3 sm:columns-2 gap-x-2 mx-2">
        {/* <div className="mt-[11vh] lg:h-[100vh] md:h-[250vh] inset-0  flex flex-col flex-wrap justify-start mx-2"> */}
        {pins?.map((pin) => {
          // render pin component
          return <Pin key={pin?._id} pin={pin} />;
        })}
      </div>
    </>
  );
};

export default UserPage;
