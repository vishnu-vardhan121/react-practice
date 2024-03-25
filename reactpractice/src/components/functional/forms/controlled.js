import { useState } from "react";

const ControlledComp = () => {
  const [uname, unameState] = useState("");
  const [usernameError, setUserError] = useState("");

  const unameHandler = (event) => {
    const username = event.target.value;
    unameState(username);

    if (username.length > 13) {
      setUserError("user name must have bellow 13 charecters");
    } else {
      setUserError("");
    }
  };

  const loginApi = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: uname,
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginApi();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required=""
            onChange={unameHandler}
          />
          {usernameError ? (
            <h6 style={{ color: "red" }}>{usernameError}</h6>
          ) : null}
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </>
  );
};

export default ControlledComp;
