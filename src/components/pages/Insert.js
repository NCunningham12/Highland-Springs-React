import React, { useState } from 'react';
import '../../App.css';
import Axios from 'axios';

const Insert = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [handicap, setHandicap] = useState(0);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [memberSince, setMemberSince] = useState(0);

  const addMember = () => {
    Axios.post('http://localhost:3001/add-member', {
      first: first,
      last: last,
      handicap: handicap,
      address: address,
      phone: phone,
      email: email,
      memberSince: memberSince,
    }).then(() => {
      console.log('Successfully Added Member')
    })
  };

  return (
    <div className="add-members">
      <h2>Add New Member</h2>
      <div className="add-field">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setFirst(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setLast(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Handicap:</label>
        <input
          type="text"
          onChange={(event) => {
            setHandicap(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Address:</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Phone:</label>
        <input
          type="text"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="add-field">
        <label>Member Since:</label>
        <input
          type="text"
          onChange={(event) => {
            setMemberSince(event.target.value);
          }}
        />
      </div>
      <button type="button" onClick={addMember}>
        Add Member
      </button>
    </div>
  );
};

export default Insert;
