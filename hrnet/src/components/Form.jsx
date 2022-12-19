// React
import React, { useState } from 'react';

// Redux
import { initialState } from '../redux/store/store';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions/actions';

// Components
import Select from 'react-select';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Modal } from 'vp_react_modale';
import Title from './Title';
import Button from './Button';

// Datas
import { departements } from '../datas/departementsList';
import { usStates } from '../datas/usStates';


const Form = () => {

    const dispatch = useDispatch()

    const setValue = (args) => {
        const name = args.target ? args.target.name : args.name;
        const value = args.target ? args.target.value : args.value;
        state[name] = value;
        setState(state);
      };

    const [isOpen, setIsOpen] = useState(false);
    
    const [state, setState] = useState(initialState);

    const saveEmployee = (e) => {
        e.preventDefault();
        const startDate = +state.startDate.$D + "/" + +state.startDate.$M + "/" + +state.startDate.$y;
        const birthDate = +state.birthDate.$D + "/" + +state.birthDate.$M + "/" + +state.birthDate.$y;
        const newState = {
            firstName: state.firstName,
            lastName: state.lastName,
            startDate: startDate,
            department: state.department.label,
            birthDate: birthDate,
            street: state.street,
            city: state.city,
            state: state.state.label,
            zipCode: state.zipCode,
        };
        checkForm(newState);
    };

    const checkForm = (newState) => {
        if (newState.firstName.length < 2) {
          alert('Please enter a First Name (min 2 lettres)');
        } else if (newState.lastName.length < 2) {
          alert('Please enter a Last Name (min 2 lettres)');
        } else if (newState.startDate == null) {
          alert('Please select a Start date');
        } else if (newState.birthDate == null) {
          alert('Please select a Date of birth');
        } else if (newState.street.length < 2) {
          alert('Please enter a Street (min 2 lettres)');
        } else if (newState.city.length < 2) {
          alert('Please enter a City (min 2 lettres)');
        } else if (newState.zipCode.length === 0) {
          alert('Please enter a Zip code');
        } else {
          setState(newState);
          dispatch(addEmployee(newState))
          setIsOpen(true);
          document.getElementById('add-employee').reset();
          console.log(state)
        }
    };

    const textModal = 'New employee added with success.';

  return (
    <form action="#" method="GET" className='add-employee' id="add-employee">
        <Title title="Create Employee" />
        <div className='add-employee-form'>
            <div className="inputs">
                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    onChange={setValue}
                    name="firstName"
                    required
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    onChange={setValue}
                    name="lastName"
                    required
                />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(date) =>
                      setState({ ...state, birthDate: date })
                    }
                    value={state.birthDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <label htmlFor="start-date">Start Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(date) =>
                        setState({ ...state, startDate: date })
                    }
                    value={state.startDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <label htmlFor="department">Department</label>
                <Select
                    options={departements}
                    onChange={(value) => {
                        setValue({ name: 'department', value });
                    }}
                    placeholder={departements[0].label}
                />
            </div>

            <div className="inputs">
                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    type="text"
                    onChange={setValue}
                    name="street"
                    required
                />

                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    onChange={setValue}
                    name="city"
                    required
                />

                <label htmlFor="stateChoice">State</label>
                <Select
                    options={usStates}
                    onChange={(value) => {
                        setValue({ name: 'state', value });
                    }}
                    placeholder={usStates[0].label}
                />

                <label htmlFor="zip-code">Zip Code</label>
                <input
                    id="zip-code"
                    type="number"
                    onChange={setValue}
                    name="zipCode"
                    required
                />
            </div>
        </div>
        <Button saveEmployee={saveEmployee} />
        <Modal content={textModal} trigger={isOpen} setTrigger={setIsOpen} />
    </form>
  )
};

export default Form;