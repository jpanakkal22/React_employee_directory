import React from "react";
import "./style.css";

function EmployeeCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="Name" src="#" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> 
          </li>
          <li>
            <strong>Email:</strong> 
          </li>
          <li>
            <strong>Phone Number:</strong> 
          </li>
        </ul>
      </div>      
    </div>
  );
}

export default EmployeeCard;
