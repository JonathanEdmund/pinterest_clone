import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="mt-[7vh]">
      <h1>PinPage</h1>
      <div className="bg-white grid grid-cols-2 mx-40 p-5 rounded-3xl shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
        <img className="rounded-2xl" src={pin?.link} alt={pin?.title} />
        <div>
          <p className="text-lg  ">{pin?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
