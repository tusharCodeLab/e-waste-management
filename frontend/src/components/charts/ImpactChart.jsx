import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ImpactChart = () => {
  const data = {
    labels: ['Recycled', 'Landfill', 'Toxic Waste'],
    datasets: [
      {
        data: [35, 45, 20],
        backgroundColor: ['#10B981', '#374151', '#EF4444'],
        borderColor: ['#000000', '#000000', '#000000'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#9CA3AF' } },
    },
  };

  return <div className="w-full max-w-xs mx-auto"><Doughnut data={data} options={options} /></div>;
};

export default ImpactChart;