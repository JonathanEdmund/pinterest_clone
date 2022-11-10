import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { itemId } = useParams();

  return (
    <>
      <h1>ItemPage</h1>
      <p>{itemId}</p>
    </>
  );
};

export default ItemPage;
