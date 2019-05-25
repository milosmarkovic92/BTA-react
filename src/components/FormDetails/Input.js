import React from 'react';
import './FormDetails.css';

export default function Input(props) {
  const {label, name, defaultValues, onChange} = props;
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label> */}
      <input type="text" name={name} onChange={onChange} placeholder={label} value={defaultValues}/>
    </div>
  )
}
