import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
import BackImage from "../../assets/images/BLUBERRI.jpg";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors when the input value changes
    setValidationErrors({
      ...validationErrors,
      [`${name}Error`]: "",
    });

    // Clear the error message when any input value changes
    setErrorMessage("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    // Clear validation errors when the input value changes
    setValidationErrors({
      ...validationErrors,
      confirmPasswordError: "",
    });

    // Clear the error message when confirm password changes
    setErrorMessage("");
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setValidationErrors({
        ...validationErrors,
        emailError: "Please enter a valid email address",
      });
      setErrorMessage("Please fix the errors before registering."); // Set error message here
      return false;
    }
    return true; // Return true for valid email
  };

  const validatePassword = () => {
    if (formData.password !== confirmPassword) {
      setValidationErrors({
        ...validationErrors,
        passwordError: "Passwords do not match",
        confirmPasswordError: "Passwords do not match",
      });
      return false;
    }
    return true; // Return true for matching passwords
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password before submission
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      setErrorMessage("Please fix the errors before registering.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users",
        formData
      );

      console.log("Server response:", response);

      if (response.status === 201) {
        navigate("/login");
      } else {
        console.error("Registration failed:", response.data.message);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      setErrorMessage("An error occurred during registration.");
    }
  };

  return (
    <div
      className="container mt-5 "
      style={{ backgroundImage: `url(${BackImage})` }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Sign Up</div>
            <div className="card-body">
              <form>
                {errorMessage && (
                  <span
                    className="error-message"
                    style={{ color: "red", fontSize: "12px" }}
                  >
                    {errorMessage}
                  </span>
                )}
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${
                      validationErrors.emailError ? "error" : ""
                    }`}
                    required
                  />

                  {validationErrors.emailError && (
                    <span className="error-message">
                      {validationErrors.emailError}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`form-control ${
                      validationErrors.emailError ? "error" : ""
                    }`}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmpassword">Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className={`form-control ${
                      validationErrors.emailError ? "error" : ""
                    }`}
                  />
                  {validationErrors.confirmPasswordError && (
                    <span className="error-message">
                      {validationErrors.confirmPasswordError}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </form>
              <p className="mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
