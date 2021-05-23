import React, { useLayoutEffect } from 'react';
import './style.css';

const useChartSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateChart = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateChart);
    updateChart();
    return () => window.removeEventListener('resize', updateChart);
  }, []);
  return size;
};

export default function App() {
  const [width, height] = useChartSize();

  return (
    <div>
      <h1>Hello React!</h1>
      <p>
        <span>
          Window size: {width} x {height}
        </span>
        ;
      </p>
    </div>
  );
}

import React, { useLayoutEffect, useState } from 'react';
