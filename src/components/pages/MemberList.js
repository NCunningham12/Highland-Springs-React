import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../MemberList.css';

const MemberList = () => {
  const [memberList, setMemberList] = useState([]);

  const getMembers = () => {
    
    Axios.get('http://localhost:3001/members').then((response) => {
      setMemberList(response.data);
    });
  };

  const deleteMember = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className="member-page">
      <div className="link-container">
        <Link to="/add-member" className="add-member-link">
          "Add Member" Page
        </Link>
      </div>
      <div className="dropdown">
        <label for='order'>Order by: </label>
        <select name='order' id='order'>
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
