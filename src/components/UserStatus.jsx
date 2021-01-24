import React, { useRef, useEffect} from 'react';
import '../css/userStatus.css';
import { color } from '../common/color';
import { drawArc } from '../common/draw';
import { drawCross } from '../common/draw';
import { drawTitle } from '../common/draw'


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