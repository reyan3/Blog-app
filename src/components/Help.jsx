import React from "react";
import "./Help.css";
import { FaQuestion } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaBug } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const help = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p>
        Need Help? We're here to assist you. Browse resources or reach out to
        us.
      </p>

      <div className="search-box">
        <input type="text" placeholder="🔍 Search your issue..." />
      </div>

      <div className="support-grid">
        <div className="card">
          <FaQuestion />
          FAQs
        </div>
        <div className="card">
          <MdContacts /> Contact Us
        </div>
        <div className="card">
          <FaBug /> Report Bug
        </div>
        <div className="card">
          <IoIosPeople /> Community
        </div>
      </div>

      <div className="contact-box">
        <p>Still need help?</p>
        <button>💬 Chat with Us</button>
        <p>
          or email: <a href="mailto:clan6229@gmail.com">support@myblog.com</a>
        </p>
      </div>
    </div>
  );
};

export default help;
