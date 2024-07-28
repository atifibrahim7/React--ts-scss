import React, { useState } from "react";
import { FaHome, FaChartLine, FaEnvelope, FaEllipsisH } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import "./IconSidebar.scss";

const IconSidebar: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const user = {
    name: "Muhammad Salman",
    username: "msalman.qlu123",
    status:
      "Status will be shown here when ever a user set a status. Status will be shown here when ever a user set a status.",
    email: "m.salman@qlu.ai",
    phone: "033412456123",
  };

  const openModal = () => {
    console.log("Opening modal");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="icon-sidebar">
        <div className="icons-top">
          <div className="icon">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="icon">
            <FaChartLine />
            <span>Analytics</span>
          </div>
          <div className="icon">
            <FaEnvelope />
            <span>Messages</span>
          </div>
          <div className="icon">
            <FaEllipsisH />
            <span>More</span>
          </div>
        </div>
        <div className="icon-bottom">
          <button className="iconbar-add" onClick={openModal}>
            
          </button>
        </div>
      </div>
      <ProfileModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        user={user}
      />
    </>
  );
};

export default IconSidebar;
