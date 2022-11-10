import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

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

  return (
    <div className="bg-blue-100">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={userRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
