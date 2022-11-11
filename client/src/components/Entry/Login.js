import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import EntryModal from "./EntryModal";

const Login = () => {
  return (
    <EntryModal>
      <Form />
    </EntryModal>
  );
};

export default Login;

const Form = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(login(input));
  };

  const handleError = () => {
    if (ui.error?.status) return "outline outline-red-600";

    return "border-2";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="username">
        Username
      </label>
      <input
        type="text"
        className={`appearance-none rounded-2xl w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${handleError()}`}
        name="username"
        placeholder="Username"
        ref={userRef}
      />
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        className={`appearance-none rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${handleError()}`}
        name="password"
        placeholder="Password"
        ref={passwordRef}
      />
      {ui.error?.status && (
        <p className="text-sm text-red-600 my-1">{ui.error.message}</p>
      )}
      <p className="text-gray-700 font-semibold text-sm hover:underline ">
        Forgot your password?
      </p>
      <div className="items-center my-4">
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-red-700 focus:outline-none"
        >
          Log in
        </button>
      </div>
    </form>
  );
};
