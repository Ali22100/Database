import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import { auth } from "../config/firebase";

function LoginSignup() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [loginemail, SetLoginEmail] = useState("");
  const [loginpassword, SetLoginPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
      })
      .catch((error) => {
        console.error("Signup Error:", error.message);
      });
  };

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginemail, loginpassword)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Firebase Auth with React</h2>

      {/* Sign Up Form */}
      <div style={{ backgroundColor: "aliceblue"}} className="card mb-4">
        <div className="card-body">
          <h4 className="card-title text-center mb-3">Sign Up</h4>
          <form onSubmit={signup}>
            <input
              onChange={(e) => SetName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              className="form-control my-2"
              required
            />
            <input
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="form-control my-2"
              required
            />
            <input
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="form-control my-2"
              required
            />
            <div className="d-grid">
              <Button type="submit" variant="outline-info">Sign Up</Button>
            </div>
          </form>
        </div>
      </div>

      {/* Login Form */}
      <div style={{ backgroundColor: "aliceblue"}} className="card">
        <div className="card-body">
          <h4 className="card-title text-center mb-3">Login</h4>
          <form onSubmit={Login}>
            <input
              onChange={(e) => SetLoginEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="form-control my-2"
              required
            />
            <input
              onChange={(e) => SetLoginPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="form-control my-2"
              required
            />
            <div className="d-grid">
              <Button type="submit" variant="outline-info">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
