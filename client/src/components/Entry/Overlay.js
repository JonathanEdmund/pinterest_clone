import { useDispatch } from "react-redux";
import { resetEntry, resetUIState } from "../../store/uiSlice";

const Overlay = () => {
  const dispatch = useDispatch();
  const handleClose = (e) => {
    e.preventDefault();
    dispatch(resetEntry());
    dispatch(resetUIState());
  };
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20"
    ></div>
  );
};

export default Overlay;
