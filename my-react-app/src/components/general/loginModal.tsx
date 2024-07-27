// src/components/general/LoginModal.tsx
import React, { useEffect, useRef, useState } from 'react';
import './LoginModal.css';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

interface LoginModalProps {
  onClose: () => void;
}
const testUser = {
  email: 'test',
  password: 'test'
};


const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Add this line to import the useNavigate hook

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === testUser.email && password === testUser.password) {
      login('fake-jwt-token'); // Simulating token storage
      onClose();
      navigate('/dashboard'); // Navigate to the dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email Address / Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-password">
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="or-separator">or</div>
        <button className="create-account-button">Create a new account</button>
      </div>
    </div>
  );
};

export default LoginModal;
