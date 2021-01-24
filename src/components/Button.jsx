import React from 'react';
import '../css/button.css'

export const Button = ({clickButton, icon, name}) => {

   const handleClick = e => {
      e.preventDefault();
      clickButton();
   };

   return (
      <div className="main_button">
         <button className={name} onClick={handleClick}><img src={icon} alt={name} /></button>
      </div>
   )
}