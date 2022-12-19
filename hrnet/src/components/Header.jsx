// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h1>HRNet</h1>
      <div className='container'>
        {toggle ? (
          <Link to="/" id="path" onClick={() => setToggle(false)}>
            Add a new Employee
          </Link>
        ) : (
          <Link
            to="/employees-list"
            id="path"
            onClick={() => setToggle(!toggle)}
          >
            View Current Employees
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;