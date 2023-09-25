import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  // const [confirmpass, setConfirmPass] = useState(false);
  const fullName = useRef();
  const email = useRef();
  const pass = useRef();
  let navigate = useNavigate();
  function submitRegisterHandler(event) {
    event.preventDefault();
    const userName = fullName.current.value;
    const useremail = email.current.value;
    const password = pass.current.value;
    const userData = {
      fullname: userName,
      email: useremail,
      password: password,
    };
    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
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
        navigate("/user", { replace: true });
      });
  }

  return (
    <form onSubmit={submitRegisterHandler} className="mt-5">
      <div className="mb-3">
        <label htmlFor="InputFullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control"
          id="InputFullName"
          ref={fullName}
        />
      </div>
      <div className="mb-3 mx-3 w-100">
        <label htmlFor="InputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="email@host"
          className="form-control"
          id="InputEmail"
          ref={email}
        />
      </div>
      <div className="mb-3 mx-3 w-100">
        <label htmlFor="InputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          className="form-control"
          id="InputPassword"
          ref={pass}
        />
      </div>
      <div className="mb-3 mx-3 w-100">
        <label htmlFor="InputConfPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="password"
          className="form-control"
          id="InputConfPassword"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        SignUp
      </button>
    </form>
  );
};

export default SignUpForm;
