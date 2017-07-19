import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const UniversityItem = ({ university }) => {
  return (
  <li className="university-index-item">
    <Link to={`/university/${university.id}`}>
      <span> { university.schoolName } </span>
    </Link>
  </li>
  );
}

export default UniversityItem;
