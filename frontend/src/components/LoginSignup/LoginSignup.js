import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginSignup.css";
import person_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Clear error if whole form is empty
  useEffect(() => {
    const { username, email, password } = formData;
    if (!username && !email && !password) {
      setError("");
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7002/api/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token, role, username } = res.data;
      console.log("Login successful, role:", role);

      // Store token and role
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);

      alert("Login successful!");

      // Navigate based on role
      if (role === "admin") {
        navigate("/login-admin");
      } else {
        navigate("/login-user");
      }
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-container">
      <div className="navbar">Listen IQ</div>

      <div className="container">
        <div className="header">
          <div className="text">Log In</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && (
          <div style={{ color: "red" }}>{error}</div>
        )}

        <div className="submit-container">
          <div className="submit" onClick={handleLogin}>
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
