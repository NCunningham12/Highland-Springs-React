import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open
      </button>

      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Edit Member</h2>
          <form action="">
            <label for="first">First name:</label>
            <br />
            <input type="text" id="first" name="first" />
            <br />
            <label for="last">Last name:</label>
            <br />
            <input type="text" id="last" name="last" />
            <label for="handicap">Handicap:</label>
            <br />
            <input type="text" id="handicap" name="handicap" />
            <label for="address">Address:</label>
            <br />
            <input type="text" id="address" name="address" />
            <label for="phone">Phone Number:</label>
            <br />
            <input type="text" id="phone" name="phone" />
            <label for="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" />
            <label for="joined">Joined:</label>
            <br />
            <input type="text" id="joined" name="joined" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
