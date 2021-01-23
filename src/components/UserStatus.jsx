import React, { useRef, useEffect} from 'react';
import '../css/canvas.css';
import {color} from '../common/color.js';

const drawArc = (ctx, start, end, color) => {
   ctx.beginPath()
   ctx.lineWidth = 16
   ctx.arc(300, 120, 100, start, end)
   ctx.strokeStyle = color; 
   ctx.stroke();
}

const drawCross = (ctx, x, y, color) => {
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.arc(x, y, 13, 0, 2*Math.PI);
   ctx.fillStyle = color;
   ctx.fill();
   ctx.stroke();

   ctx.beginPath();
   ctx.lineWidth = 2;
   ctx.moveTo(x-5, y-5);
   ctx.lineTo(x+5, y+5);
   ctx.strokeStyle = "white";
   ctx.stroke();

   ctx.beginPath();
   ctx.lineWidth = 2;
   ctx.moveTo(x+5, y-5);
   ctx.lineTo(x-5, y+5);
   ctx.strokeStyle = "white";
   ctx.stroke();
}

export const UserStatus = ({member}) => {

   const canvasRef = useRef(null)

   useEffect(() => {
   
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      member.forEach(el => {
         let startArc = (el.start+1)*Math.PI/180;
         let endtArc = (el.end-1)*Math.PI/180;

         drawArc(context, startArc, endtArc, color[el.status])

         if (el.status === "broken") {
            let crossCenter = (endtArc-startArc)/2 + startArc;
            let x = 100 * Math.cos(crossCenter) + 300;
            let y = 100 * Math.sin(crossCenter) + 120;
            drawCross (context, x, y, color[el.status])
         }
      });

   }, [member])
   
   return <canvas className="canvas" ref={canvasRef} width="500" height="250"/>
}