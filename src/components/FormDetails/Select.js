import React from 'react';
import * as constants from '../constants/constants';

export default function Selects(props) {
  const { name, label, onChange, defaultValues, apiResult, defaultOption, dataId, dataName, disabled, } = props;
  console.log(dataName)
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={defaultValues} onChange={onChange}>
        <option disabled={disabled} value={defaultOption}>{defaultOption}</option>
        {apiResult.map(() => (
          <option key={dataId} value={dataId}>
            {dataName}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}
