import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MemberList = () => {
  const [memberList, setMemberList] = useState([]);

  const getMembers = () => {
    Axios.get('http://localhost:3001/members').then((response) => {
      setMemberList(response.data);
    });
  };

  return (
    <div className="member-page">
      <Link to='/add-member'>Add Member Page
      </Link>
      <div className="member-list-container">
        <div className="member-list-display" onLoad={getMembers()}>
          {memberList.map((val, key) => {
            return (
              <div className="member-list">
                <p>ID: {val.id}</p>
                <p>Name: {val.last}, {val.first}</p>
                <p>Handicap: {val.handicap}</p>
                <p>Address: {val.address}</p>
                <p>Phone Number: {val.phone}</p>
                <p>Email: {val.email}</p>
                <p>Joined: {val.member_since}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberList;
