import { useDispatch } from "react-redux";
import { setLoginEntry } from "../store/uiSlice";

const ButtonLogin = () => {
  const dispatch = useDispatch();
  const handleClickLogin = () => {
    dispatch(setLoginEntry());
  };
  return (
    <button
      className="bg-red-600 rounded-3xl text-white px-3 py-2 font-semibold"
      name="login"
      onClick={handleClickLogin}
    >
      Log in
    </button>
  );
};

export default ButtonLogin;
