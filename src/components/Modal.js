import React, { useState } from 'react';
import './Modal.css';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Modal = ({ closeModal, memberList }) => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState('');
  const [handicap, setHandicap] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState('');

  const updatedMember = () => {
    Axios.get('http://localhost:3001/members/:id').then((response) => {
      console.log(response.data.first);
      setFirst(response.data.first);
    });
  };

  return (
    <>
      <div className="modal" onLoad={() => updatedMember()}>
        <div className="overlay">
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
                value={first}
                onChange={updatedMember}
              />
              <br />
              <label className="label" for="last">
                Last name:
              </label>
              <br />
              <input
                className="edit-input"
                type="text"
                id="last"
                name="last"
                value={last}
              />
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
                value={handicap}
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
                value={address}
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
                value={phone}
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
                value={email}
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
                value={joined}
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
