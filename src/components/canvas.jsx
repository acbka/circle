import React, { useEffect } from 'react';

export const Canvas = ({ draw }) => {
  const canvas = React.createRef();

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    draw(ctx);
  }, [draw, canvas]);

  return <canvas ref={canvas} />;
};

