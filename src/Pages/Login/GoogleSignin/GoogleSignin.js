import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/google.png";

const GoogleSignin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {"User Not Found"}</p>;
  }

  if (user) {
    return navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
        <p className="mt-3 px-2">Or</p>
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto my-2 color-white"
        >
          <img src={google} alt="" />
          <span className="px-3">Google Login</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleSignin;
