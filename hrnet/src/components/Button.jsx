// React
import React from 'react';

const Button = (props) => {
  return (
    <button
      className="add-btn"
      type="submit"
      onClick={(e) => props.saveEmployee(e)}
    >
      Add Employee
    </button>
  );
};

export default Button;