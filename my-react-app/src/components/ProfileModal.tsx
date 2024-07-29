import React from "react";
import Modal from "react-modal";
import "../styles/ProfileModal.css";
import Picture from "../assets/hello.jpg";
Modal.setAppElement("#root");

interface ProfileModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  user: {
    name: string;
    username: string;
    status: string;
    email: string;
    phone: string;
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onRequestClose,
  user,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Profile"
      className="profile-modal"
      overlayClassName="profile-modal-overlay"
    >
      <div className="profile-modal-content">
        <div className="top">
          <div>
            <h3>Profile</h3>
          </div>
          <div>
            <button className="close-button" onClick={onRequestClose}>
              X
            </button>
          </div>
        </div>
        <div className="line"></div>
        <div className="profile-header">
          <div className="pfp">
            <img src={Picture} alt="Profile" className="profile-pic" />
          </div>
          <div>
            <button className="edit-button">Edit</button>
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
            <p>{user.status}</p>
          </div>
        </div>
        <div className="profile-info">
          <h3>Email Address</h3>
          <button className="edit-button">Edit</button>
          <p>{user.email}</p>

          <h3>Contact Number</h3>
          <p>{user.phone}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
