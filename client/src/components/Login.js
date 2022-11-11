import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { resetEntry } from "../store/uiSlice";

const Login = () => {
  const dispatch = useDispatch();

  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(input);
    dispatch(login(input));
  };

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(resetEntry());
  };

  return (
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
            style={{ enableBackground: "new 0 0 512.883 512.883;" }}
          />
        </div>
        <h3 className="text-center text-3xl leading-6 font-medium text-gray-900">
          Welcome to Pinterest
        </h3>
        <div className="mt-2 px-7 py-3">
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm  mb-2" for="username">
              Username
            </label>
            <input
              type="text"
              className="appearance-none border-2 rounded-2xl w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="username"
              placeholder="Username"
              ref={userRef}
            />
            <label className="block text-gray-700 text-sm  mb-2" for="password">
              Password
            </label>
            <input
              type="password"
              className="appearance-none border-2 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <p className="text-gray-700 font-bold text-sm">
              Forgotten your password?
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
        </div>
      </div>
    </div>
  );
};

export default Login;
