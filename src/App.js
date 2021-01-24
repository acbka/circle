
import './App.css';
import { UserStatus } from './components/UserStatus';
import { Button } from './components/Button';
import circle from './img/circle.svg';
import magnifier from './img/Magnifier.svg';
import visitArrow from './img/Visit Arrow.svg'

function App() {

   const status = ["lit", "unlit", "broken"];

   const member = [];

   const random = (minNumber, maxNumber) => {
      const randomNumber = Math.floor((Math.random() * maxNumber) + minNumber);
      return randomNumber;
   }

   const numberOfMembers = random (2, 9);

   const arcStep = 360 / numberOfMembers;
   
   for (let i = 0; i <numberOfMembers; i++) {
      member[i] = {
         id: i,
         start: arcStep * i,
         end: arcStep * (i+1),
         status: status[random(0, 3)]
      }
   }

   const search = () => {
      alert("search")
   }

   const visit = () => {
      alert("visit")
   }

  return (
   <div className="main-circle">
      <img src={circle} alt="circle"></img>
      <UserStatus member={member}></UserStatus>
      <Button clickButton={search} icon={magnifier} name="magnifier"></Button>
      <Button clickButton={visit} icon={visitArrow} name="visit"></Button>
   </div>
  );
}

export default App;
