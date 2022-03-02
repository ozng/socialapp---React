import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const reTypePassword = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (reTypePassword.current.value !== password.current.value) {
      reTypePassword.current.setCustomValidity("Passwords not matching");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social App</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <div className="registerRight">
          <form onSubmit={handleClick} className="registerBox">
            <input
              placeholder="Username"
              required
              ref={username}
              type="text"
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="registerInput"
            />
            <input
              placeholder="Password"
              ref={password}
              type="password"
              className="registerInput"
              required
              minLength={6}
            />
            <input
              placeholder="Re-type Password"
              ref={reTypePassword}
              type="password"
              className="registerInput"
              required
              minLength={6}
            />
            <button type="submit" className="registerButton">
              Sign Up
            </button>
            <button className="registerRegisterButton">
              Log into your Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
