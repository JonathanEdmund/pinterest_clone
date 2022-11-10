import { useEffect, useState } from "react";
const Homepage = () => {
  const [pins, setPins] = useState([]);

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
      {pins.map((pin) => {
        // render pin component
        return <p>{pin.link}</p>;
      })}
    </>
  );
};

export default Homepage;
