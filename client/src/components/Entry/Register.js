import { useRef } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/authSlice";
import EntryModal from "./EntryModal";

const Register = () => {
  return (
    <EntryModal>
      <Form />
    </EntryModal>
  );
};

export default Register;

const Form = () => {
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
    dispatch(register(input));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="username">
        Username
      </label>
      <input
        type="text"
        className="appearance-none border-2 rounded-2xl w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="username"
        placeholder="Username"
        ref={userRef}
      />
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        className="appearance-none border-2 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="password"
        placeholder="Create a password"
        ref={passwordRef}
      />
      <label className="block text-gray-700 text-sm  mb-2" htmlFor="age">
        Age
      </label>
      <input
        type="number"
        className="appearance-none border-2 rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="age"
        placeholder="Age"
      />

      <div className="items-center my-4">
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-3xl w-full shadow-sm hover:bg-red-700 focus:outline-none"
        >
          Continue
        </button>
      </div>
    </form>
  );
};
