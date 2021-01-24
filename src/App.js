import React, { useState } from 'react';
import './App.css';
import { UserStatus } from './components/UserStatus';
import { Button } from './components/Button';
import circle from './img/circle.svg';
import magnifier from './img/Magnifier.svg';
import visitArrow from './img/Visit Arrow.svg'
import { Member } from './components/Member';

function App() {

   const status = ["lit", "unlit", "broken"];

   //const member = [];



   //const numberOfMembers = random (2, 9);

  // const arcStep = 360 / numberOfMembers;
   



   const [members, setMembers] = useState([]);

const addMember = (value) => {
  const newMemberIndex = members.length + 1;
  let newMembers = [];

  if (newMemberIndex > 1) {
    newMembers = members.map((member) => {
      return {
        ...member,
        start: (360 / newMemberIndex) * member.id,
        end: (360 / newMemberIndex) * (member.id + 1),
      };
    });
  }

  setMembers([
    ...newMembers,
    {
      id: newMemberIndex - 1,
      start: (360 / newMemberIndex) * (newMemberIndex - 1),
      end: (360 / newMemberIndex) * newMemberIndex,
      status: value,
    },
  ]);
  
};


   const search = () => {
      alert("search")
   }

   const visit = () => {
      alert("visit")
   }

  return (
   <div>
      <Member dataInput={addMember} status={status}></Member>
      <div className="main-circle">
         <img src={circle} alt="circle"></img>
         <UserStatus member={members}></UserStatus>
         <Button clickButton={search} icon={magnifier} name="magnifier"></Button>
         <Button clickButton={visit} icon={visitArrow} name="visit"></Button>
      </div>
   </div>
  );
}

export default App;
