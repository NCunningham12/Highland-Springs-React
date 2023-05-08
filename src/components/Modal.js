import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="modal">
        <div className="overlay">
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
              <br />
              <label for="handicap">Handicap:</label>
              <br />
              <input type="text" id="handicap" name="handicap" />
              <br />
              <label for="address">Address:</label>
              <br />
              <input type="text" id="address" name="address" />
              <br />
              <label for="phone">Phone Number:</label>
              <br />
              <input type="text" id="phone" name="phone" />
              <br />
              <label for="email">Email:</label>
              <br />
              <input type="text" id="email" name="email" />
              <br />
              <label for="joined">Joined:</label>
              <br />
              <input type="text" id="joined" name="joined" />
              <br />
            </form>
            <button className="update-btn" onClick={toggleModal}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
