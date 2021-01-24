import React, { useRef, useEffect} from 'react';
import '../css/userStatus.css';
import {color} from '../common/color.js';

const drawArc = (ctx, start, end, color, center, radius) => {
   ctx.beginPath();
   ctx.lineWidth = 10;
   ctx.arc(center, center, radius, start, end);
   ctx.strokeStyle = color; 
   ctx.stroke();
}

const drawCross = (ctx, x, y, color) => {
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.arc(x, y, 8, 0, 2*Math.PI);
   ctx.fillStyle = color;
   ctx.fill();
   ctx.stroke();

   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(x-3, y-3);
   ctx.lineTo(x+3, y+3);
   ctx.strokeStyle = "white";
   ctx.stroke();

   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(x+3, y-3);
   ctx.lineTo(x-3, y+3);
   ctx.strokeStyle = "white";
   ctx.stroke();
}

const drawTitle = (ctx, number, center) => {
   let string = "Team of "+ number; 
   let angle = Math.PI * .8 ; 
   let radius = 42; 
   ctx.font = "20px monospace";
   ctx.translate(100, 100); 
   ctx.rotate(-1 * angle / 1.8); 
   ctx.fillStyle = "white"; 
   ctx.textAlign = "center";

   for (let i = 0; i < string.length; i++) { 
      ctx.rotate(angle / string.length); 
      ctx.save(); 
      ctx.translate(0, -1 * radius); 
      ctx.fillText(string[i], 0, 0); 
      ctx.restore(); 
  } 
};

export const UserStatus = ({member}) => {

   const canvasRef = useRef(null);

   const radius = 88;
   const center = 100;

   useEffect(() => {
   
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      member.forEach(el => {
         let startArc = (el.start+1)*Math.PI/180;
         let endtArc = (el.end-1)*Math.PI/180;

         drawArc(context, startArc, endtArc, color[el.status], center, radius)

         if (el.status === "broken") {
            let crossCenter = (endtArc-startArc)/2 + startArc;
            let x = radius * Math.cos(crossCenter) + center;
            let y = radius * Math.sin(crossCenter) + center;
            drawCross (context, x, y, color[el.status])
         }
      });

      drawTitle(context, member.length, center)

   }, [member])
   
   return <canvas className="canvas" ref={canvasRef} width="200" height="200"/>
}