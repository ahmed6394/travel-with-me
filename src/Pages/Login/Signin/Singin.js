import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import GoogleSignin from "../GoogleSignin/GoogleSignin";
import { async } from "@firebase/util";

const Singin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  const navigateToSignup = (e) => {
    navigate("/signup");
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please SignIn</h2>
      <Form onSubmit={handleSignin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          className="btn w-50 d-block mx-auto my-2"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <p className="mt-2">
        Forgot password?{"  "}
        <Link
          to="/signin"
          className="text-primary text-decoration-none pe-auto"
          onClick={resetPassword}
        >
          Reset Password
        </Link>
      </p>

      <GoogleSignin></GoogleSignin>

      <p className="mt-2">
        New User?{"  "}
        <Link
          to="/signup"
          className="text-primary text-decoration-none pe-auto"
          onClick={navigateToSignup}
        >
          Please Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Singin;
