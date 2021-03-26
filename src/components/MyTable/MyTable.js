import React, { useState } from 'react';
import './MyTable.css';
import { rows } from '../../store';

export const MyTable = (props) => {
  let [filterValue, setFilterValue] = useState('');

  return (
    <div className="flex mg-t-50">
      <input
        className="filter-input"
        value={filterValue}
        onChange={(e) => setFilterValue(e.currentTarget.value)}
      ></input>
      <table className="table">
        <tr className="title-tr">
          <td>Last name</td>
          <td>First name</td>
          <td>Nickname</td>
          <td>Age</td>
          <td>Country</td>
          <td>Last activity</td>
        </tr>
        {rows
          .filter((row) => {
            if (filterValue.trim() === '') return true;
            if (row.lastName.includes(filterValue)) return true;
            if (row.firstName.includes(filterValue)) return true;
            return false;
            // return (
            //   row.lastName.includes(filterValue) ||
            //   row.firstName.includes(filterValue)
            // );
          })
          .map((row) => (
            <tr key={row.id}>
              <td>{row.lastName}</td>
              <td>{row.firstName}</td>
              <td>{row.nickname}</td>
              <td>{row.age}</td>
              <td>{row.country}</td>
              <td>{row.lastActivity}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};
