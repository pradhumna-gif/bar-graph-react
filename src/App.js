import './App.css';
import DataForm from './components/DataForm';
import { useState } from 'react'
import { Bar } from 'react-chartjs-2';

function App() {
  const [barData, setBarData] = useState({
    labels: ['React', 'Angular'],
    datasets: [
      {
        label: 'Skill',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: ["-1", "-1"]
      }
    ]
  })

  const formSubmit = (react, angular) => {
    barData.datasets[0].data = [react, angular];
    setBarData({ ...barData })
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Dynamic Bar Chart</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <DataForm onFormSubmit={formSubmit} />
        </div>
        <div className="col-md-6">
          {barData.datasets[0].data[0] >= 0 && barData.datasets[0].data[1] >= 0 && <Bar
            data={barData}
            options={{
              title: {
                display: true,
                text: 'Skill',
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'right'
              }
            }}
          />}
        </div>
      </div>
    </div>
  );
}

export default App;
