import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>
            Difference between Authentication Authorization
          </Card.Title>
          <Card.Text>
            The authorization is a process to set permission for taking any
            action or using data. Similarly, authentication is a process to
            check if the user is permitted or not to access the information or
            perform any action. If an authenticated user is using your app, they
            have identified their true identity in several ways, such as
            providing the right credentials.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>
            Why are you useing firebase? What other options you have to
            implement authorization?
          </Card.Title>
          <Card.Text>
            Google Firebase provides many features that pitch it as the go-to
            backend development tool for web and mobile apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is easy, lightweight, friendly, and industrially
            recognized. There are so many authorization providers like Auth0,
            MongoDB, Okta, Passport, keycloak etc in authorization industry.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center my-3">
        <Card.Body>
          <Card.Title>
            What othe service does firebase provide other than authorization?
          </Card.Title>
          <Card.Text>
            Along with authorization firebase also provide some features like
            firebase database, real-time database, hosting, and machine
            learning.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
