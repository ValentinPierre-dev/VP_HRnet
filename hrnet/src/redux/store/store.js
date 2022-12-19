import { createStore } from 'redux';
import { usersReducer } from '../reducers/reducers.js';

const initialState = {
   listEmployee : [{
      firstName: 'Pierre',
      lastName: 'Paul',
      startDate: '23/06/2010',
      department: 'Sales',
      birthDate: '12/06/1993',
      street: '21, rue du test',
      city: 'DIJON',
      state: 'ALASKA',
      zipCode: 4135
   },
   {
      firstName: 'Jean',
      lastName: 'Dupont',
      startDate: '09/11/2022',
      department: 'Sales',
      birthDate: '23/11/1995',
      street: '21, rue du test',
      city: 'METZ',
      state: 'CALIFORNIA',
      zipCode: 7618
   },
   {
      firstName: 'Michel',
      lastName: 'Resin',
      startDate: '16/12/2016',
      department: 'Sales',
      birthDate: '07/08/1992',
      street: '21, rue du test',
      city: 'STRASBOURG',
      state: 'COLORADO',
      zipCode: 6459
   },
   {
      firstName: 'Luc',
      lastName: 'Fraisier',
      startDate: '13/05/2001',
      department: 'Sales',
      birthDate: '07/12/1991',
      street: '21, rue du test',
      city: 'PARIS',
      state: 'MICHIGAN',
      zipCode: 4721
   }]
};

function setInitialState() {
   return { ...initialState };
}

const store = createStore(
   usersReducer,
   setInitialState(),
);

export { store, initialState };