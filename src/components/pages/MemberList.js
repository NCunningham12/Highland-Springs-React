import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../MemberList.css';

const MemberList = () => {
  const [memberList, setMemberList] = useState([]);
  const [order, setOrder] = useState('');

  const clearForm = () => {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((singleInput) => (singleInput.value = ''));
  };

  const getMembers = () => {
    if (order === 'last') {
      Axios.get('http://localhost:3001/members').then((response) => {
        setMemberList(response.data);
      });
    } else if (order === 'handicap') {
      Axios.get('http://localhost:3001/members-handicap').then((response) => {
        setMemberList(response.data);
      });
    } else {
      Axios.get('http://localhost:3001/members').then((response) => {
        setMemberList(response.data);
      });
    }
  };

  const deleteMember = (id) => {
    let answer = window.confirm('Are you sure you want to delete member?');

    if (answer) {
      Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
        
        clearForm();
        setTimeout(() => {
          alert('Member Deleted');
        }, '500');
      });
    }
  };

  return (
    <div className="member-page">
      <div className="link-container">
        <Link to="/add-member" className="add-member-link">
          "Add Member" Page
        </Link>
      </div>
      <div className="dropdown">
        <label htmlFor="order">Order by: </label>
        <select
          name="order"
          id="order"
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option value="last">Last Name</option>
          <option value="handicap">Handicap</option>
          <option value="member_since">Member Since</option>
        </select>
      </div>
      <div className="member-container">
        <div className="member-list-container">
          <div className="member-list-display" onLoad={getMembers()}>
            {memberList.map((val, key) => {
              return (
                <div className="member-list">
                  <div className="member-fields">
                    <h4>
                      Name: {val.last}, {val.first}
                    </h4>
                    <h4>Handicap: {val.handicap}</h4>
                    <h4>Address: {val.address}</h4>
                    <h4>Phone Number: {val.phone}</h4>
                    <h4>Email: {val.email}</h4>
                    <h4>Joined: {val.member_since}</h4>
                  </div>
                  <div className="crud-btns">
                    <button
                      className="delete-btn btn"
                      onClick={() => deleteMember(val.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
