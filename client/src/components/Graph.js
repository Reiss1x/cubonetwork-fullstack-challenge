import React from 'react'
import { Chart as ChartJS, ArcElement, Legend, Tooltip, LinearScale } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register (
  Legend,
  Tooltip,
  ArcElement,
  LinearScale,
)
ChartJS.overrides.doughnut.plugins.legend.display = true;

const palette = [
   '#3498db', // Dodger Blue
  '#e74c3c', // Alizarin Crimson
  '#2ecc71', // Emerald
  '#e67e22', // Carrot Orange
  '#9b59b6', // Amethyst Purple
  '#1abc9c', // Turquoise
  '#f39c12', // Sunflower Yellow
  '#34495e', // Wet Asphalt
  '#d35400', // Pumpkin
  '#2980b9', // Belize Hole
];


const Graph = ({ data }) => {

  let userData = {
    labels: data?.map(x => x.firstName),
    datasets: [{
      label: " Participation",
      data: data?.map(x => x.participation),
      offset: 5,
      backgroundColor: palette.map(x => x)
    }],
  }

  let options = {
    animation: {
      animateRotate: false,
      animateScale: true
    },
    plugins: {
      legend: {
        display:true,
        position: 'right',
        labels: {
          boxWidth: 15,
          useBorderRadius:true,
          borderRadius:5

        }
      }
    }
    

  }
  
  return (
    <div>
      <Doughnut style = {{width: 400}}
        data={userData}
        options={options}
      />
    </div>
  )
}

export default Graph;
