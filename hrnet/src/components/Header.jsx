import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h1>HR Net</h1>
      <div>
        {toggle ? (
          <Link to="/" id="path" onClick={() => setToggle(false)}>
            Home
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