import {
    SAVE_EMPLOYEE
 } from './type.js';
 
 // LOADING ACTION
 
 const addEmployee = (employee) => {
    return {
       type: SAVE_EMPLOYEE,
       payload: { employee }
    }
 }

 
 export { addEmployee };