import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  const navigateToSignup = (e) => {
    navigate("/signin");
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please SignUp</h2>
      <Form onSubmit={handleSignup}>
        <Form.Control type="text" placeholder="Your Name" />
        <br />
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
          Submit
        </Button>
      </Form>
      <p className="mt-2">
        Already Signup?{"  "}
        <Link
          to="/signin"
          className="text-primary text-decoration-none pe-auto"
          onClick={navigateToSignup}
        >
          Please Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
