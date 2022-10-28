import React from 'react';
import Select from 'react-select';

import Title from './Title';
import { departements } from '../datas/departementsList';
import { usStates } from '../datas/usStates';

const Form = () => {
  return (
    <form className='add-employee'>
        <Title title="Create Employee" />
        <div className='add-employee-form'>
            <div className="inputs">
                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    required
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    required
                />

                <label htmlFor="date-of-birth">Date of Birth</label>

                <label htmlFor="start-date">Start Date</label>

                <label htmlFor="department">Department</label>
                <Select
                    options={departements}
                    placeholder={departements[0].label}
                />
            </div>

            <div className="inputs">
                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    type="text"
                    name="street"
                    required
                />

                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    required
                />

                <label htmlFor="stateChoice">State</label>
                <Select
                    options={usStates}
                    placeholder={usStates[0].label}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input
                    id="zip-code"
                    type="number"
                    name="zipCode"
                    required
                />
            </div>
        </div>
    </form>
  )
};

export default Form;