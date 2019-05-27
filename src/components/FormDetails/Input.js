import React from 'react';
import './FormDetails.css';

export default function Input(props) {
  const {label, name, defaultValues, onChange, type} = props;
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label> */}
      <input type={type} name={name} onChange={onChange} placeholder={label} value={defaultValues}/>
    </div>
  )
}
