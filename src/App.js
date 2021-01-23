
import './App.css';
import { UserStatus } from './components/UserStatus'

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

  return (
   <div>
      <UserStatus member={member}></UserStatus>
   </div>
  );
}

export default App;
