import { useRef } from "react";

const UnconntrolledComp = () => {
  const usermailRef = useRef("");
  //useRef() returns an object
  const userpasswordRef = useRef("");

  const submitDetails = (event) => {
    event.preventDefault();
    console.log(usermailRef.current.value);
    // grtting input value
    const useremail = usermailRef.current.value;
    const password = userpasswordRef.current.value;

    if (useremail.length > 8) {
      alert("username and password must be 8 charecters");
    } else {
    }
  };
  return (
    <>
      <form onSubmit={submitDetails}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={usermailRef}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={userpasswordRef}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default UnconntrolledComp;
