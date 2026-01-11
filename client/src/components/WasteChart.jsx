import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const WasteChart = () => {
  const data = {
    labels: ['Recycled', 'Refurbished', 'Pending'],
    datasets: [
      {
        data: [300, 150, 100], // Static Demo Data
        backgroundColor: ['#16a34a', '#ca8a04', '#9ca3af'],
        borderWidth: 0,
      },
    ],
  };

  return <div className="h-64 flex justify-center"><Doughnut data={data} /></div>;
};

export default WasteChart;