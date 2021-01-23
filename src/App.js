
import './App.css';
import { Canvas } from './components/canvas'

function App() {

   const color = ["#b9c6ce", "#6c889a", "#C42F2F" ];

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
         color: color[random(0, 3)]
      }
   }

   
  
   
   const list = member.map((item,index) => {
      return      <Canvas key= {index} start={item.start} end={item.end} color={item.color}></Canvas>;
   })

   console.log("member", member)
console.log("member1", member[1].start)

  return (
   <div>
      <p>numberOfMembers = {numberOfMembers}</p>
      {list}
   </div>
  );
}

export default App;
