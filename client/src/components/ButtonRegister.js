import { useDispatch } from "react-redux";
import { setRegisterEntry } from "../store/uiSlice";

const ButtonRegister = () => {
  const dispatch = useDispatch();

  const handleClickRegister = () => {
    dispatch(setRegisterEntry());
  };
  return (
    <button
      className="bg-gray-200 rounded-3xl px-3 py-2 font-semibold"
      name="register"
      onClick={handleClickRegister}
    >
      Sign up
    </button>
  );
};

export default ButtonRegister;
