import React, { useRef, useEffect} from 'react';
import '../css/canvas.css';

export const Canvas = ({start, end, color}) => {

   const startArc = (start+1)*Math.PI/180,
      endtArc = (end-1)*Math.PI/180;
   
   const canvasRef = useRef(null)

   let img = new Image();
   img.src = "../img/cross.png";

   useEffect(() => {
     
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      const draw = ctx => {
      ctx.beginPath()
      ctx.lineWidth = 16
      ctx.arc(300, 150, 120, startArc, endtArc)
      ctx.strokeStyle = color; 
      ctx.stroke();
      ctx.beginPath()
      ctx.strokeStyle = color; 
      ctx.stroke();
   }
     
     draw(context)

   }, [startArc, endtArc, color])
   
   return <canvas className="canvas" ref={canvasRef} width="600" height="300"/>
 }