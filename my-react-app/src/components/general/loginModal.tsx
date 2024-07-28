// src/components/general/LoginModal.tsx
import React, { useEffect, useRef, useState } from "react";
import "./LoginModal.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin"; // Import useLogin

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login: authLogin } = useAuth(); // Renamed to authLogin to avoid naming conflict
  const modalRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate: login, isLoading, isError, error } = useLogin(); // Destructure useLogin hook

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(
      { email, password },
      {
        onSuccess: (data) => {
          authLogin(data.token, email); // Call authLogin with token and email
          onClose();
          navigate("/dashboard"); // Navigate to the dashboard after login
        },
        onError: () => {
          alert("Invalid credentials");
        },
      }
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email Address / Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading} // Disable input fields when loading
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading} // Disable input fields when loading
          />
          <div className="forgot-password">
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"} // Display loading state
          </button>
        </form>
        {isError && (
          <div className="error-message">{(error as Error).message}</div>
        )}
        <div className="or-separator">or</div>
        <button className="create-account-button">Create a new account</button>
      </div>
    </div>
  );
};

export default LoginModal;
