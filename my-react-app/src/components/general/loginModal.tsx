// src/components/LoginModal.tsx
import '../../styles/LoginModal.scss';
// src/components/LoginModal.tsx
import React, { useEffect, useRef } from 'react';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email Address / Phone Number" />
          <input type="password" placeholder="Password" />
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
