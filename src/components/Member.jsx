import React, { useState} from 'react';
import '../css/member.css'

export const Member = ({dataInput, status}) => {

   const [value, setValue] = useState("lit");

   const handleChange = e => {
      e.preventDefault();
      setValue (e.target.value);
   };

   const handleClick = e => {
      e.preventDefault();
      dataInput(value);
   };

   const list = status.map((item, index) => {
      return <option key = {index} value = {item}>{item}</option>
   })

   return (
      <div>
         <form className="user-form">
         <p className="text">Add a user with </p>
            <select className="select-user"
            onChange={handleChange}>
               {list}
            </select>
            <p className="text"> status</p>
            <button className="addButton" onClick={handleClick}>add</button>
         </form>
      </div>
   )
}