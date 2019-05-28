import React from 'react';
import * as constants from '../constants/constants';

const professions = constants.professions;

export default function Selects(props) {
  const { name, defaultValues, onChange, label } = props;
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={defaultValues} onChange={onChange} id="">
        {professions.map((profession, index) => {
          if (profession === professions[0]) {
           return <option value="" disabled hidden key={index}>{profession}</option>
          }
          return <option value={profession} key={index}>{profession}</option>
        }
          
        )}
      </select>
    </React.Fragment>
  )
}
