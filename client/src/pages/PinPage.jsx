import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const PinPage = () => {
  const { pinId } = useParams();
  const [pin, setPin] = useState();

  useEffect(() => {
    fetch(`/api/post/${pinId}`)
      .then((response) => response.json())
      .then((data) => {
        setPin(data.pin);
      });
  }, [pinId]);
  return (
    <>
      <Navbar />
      <div className="mt-[10vh] p-3">
        <div className="bg-white grid grid-cols-2 mx-60 rounded-3xl shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
          <img
            className="rounded-l-3xl w-full"
            src={pin?.link}
            alt={pin?.title}
          />
          <div>
            <p className="text-lg  ">{pin?.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinPage;
