import React from "react";
import Modal from "react-modal";
import "../styles/ProfileModal.css";
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
        <button className="close-button" onClick={onRequestClose}>
          X
        </button>
        <div className="profile-header">
          <img
            src="https://randomuser.me/api/portraits"
            alt="Profile"
            className="profile-pic"
          />
          <button className="edit-button">Edit</button>

          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.status}</p>
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
