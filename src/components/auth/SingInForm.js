import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignInForm = () => {
  const mailData = useRef();
  const passData = useRef();
  let navigate = useNavigate();
  function submitFormHandler(event) {
    event.preventDefault();
    const userEmail = mailData.current.value;
    const userPass = passData.current.value;
    const sendData = {
      email: userEmail,
      password: userPass,
    };
    fetch("http://localhost:8000/auth/signin", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.id);
        localStorage.setItem("r", data.role);
        localStorage.setItem("userName", data.username);
        if (data.role === "student") {
          navigate("/home", { replace: true });
        } else if (data.role === "admin") {
          navigate("/admin", { replace: true });
        }
      });
  }
  return (
    <form onSubmit={submitFormHandler} className="mt-5">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Type your email"
          ref={mailData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Type your password"
          ref={passData}
        />
      </div>
      <div className="mb-3 mx-3 w-100">
        <Link to="/forgetPassword">Forget Password</Link>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Signin
      </button>
      <div className="mt-3">
        <Link to="/signup" className="btn btn-dark text-white w-100">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
