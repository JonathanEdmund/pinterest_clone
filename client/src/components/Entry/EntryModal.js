
import { useDispatch } from "react-redux";
import { resetEntry, resetUIState } from "../../store/uiSlice";
import Overlay from "./Overlay";

const EntryModal = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(resetEntry());
    dispatch(resetUIState());
  };

  return (
    <>
      <Overlay />
      <div className="fixed inset-x-0 top-20 mx-auto p-5 border w-96 shadow-lg rounded-3xl bg-white z-20">
        <div className="mt-3">
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 mx-5 my-3 text-3xl"
          >
            x
          </button>
          <div className="mx-auto my-5 flex items-center justify-center h-8 w-8 rounded-full bg-red-600">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512.883 512.883"
              style={{ enableBackground: "new 0 0 512.883 512.883" }}
            />
          </div>
          <h3 className="text-center text-3xl leading-6 font-medium text-gray-900">
            Welcome to Pinterest
          </h3>
          <div className="mt-2 px-7 py-3">
            {/* <Form /> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryModal;
