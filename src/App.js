
import './App.css';
import { Canvas } from './components/canvas'

function App() {

   const color = ["b9c6ce", "6c889a", "C42F2F" ];

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
         color: color[random(0, 2)]
      }
   }

  
   
   const list = member.map((item,index) => {
      return <li key={index} >member = {item.id}, arc = {item.start}, color = {item.color}</li>;
   })


  return (
   <div>
      <p>numberOfMembers = {numberOfMembers}</p>
      {list}
      <Canvas
      draw = {ctx => {
         ctx.beginPath();
         ctx.arc(95, 50, 40, 270*Math.PI/180, 0, true);
         ctx.strokeStyle = color[1];
         ctx.stroke();
         }
       }></Canvas>
   </div>
  );
}

export default App;
