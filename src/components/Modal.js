import React from 'react';
import './Modal.css';

const Modal = ({ closeModal, memberList }) => {

  return (
    <>
      <div className="modal">
        <div
          className="overlay"
        >
          <div className="modal-content">
            <h2>Edit Member</h2>
            <form>
              <label className="label" for="first">
                First name:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="first"
                name="first"
              />
              <br />
              <label className="label" for="last">
                Last name:
              </label>
              <br />
              <input className="edit-input" type="text" id="last" name="last" />
              <br />
              <label className="label" for="handicap">
                Handicap:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="handicap"
                name="handicap"
              />
              <br />
              <label className="label" for="address">
                Address:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="address"
                name="address"
              />
              <br />
              <label className="label" for="phone">
                Phone Number:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="phone"
                name="phone"
              />
              <br />
              <label className="label" for="email">
                Email:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="email"
                name="email"
              />
              <br />
              <label className="label" for="joined">
                Joined:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="joined"
                name="joined"
              />
              <br />
            </form>
            <button
              className="update-btn"
              onClick={() => {
                closeModal(false);
              }}
            >
              Update
            </button>
            <button
              className="cancel-btn"
              onClick={() => {
                closeModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
