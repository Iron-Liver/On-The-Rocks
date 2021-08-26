import React from "react"
import { Bar, Line, Pie } from 'react-chartjs-2';
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="admin-dashboard-tab-container">
      <div className="baar">
        <Line
        className="baar1"
          data= {{
            labels: ['August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'Users per month 1 - 6 2021',
              data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(230, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }],
          }}
          height={400}
          width={600}
          options={{
            maintanAspectRatio: false,
          }}
        />

  <Bar
          className="baar2"
          data= {{
            labels: ['August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'Users per month 1 - 6 2021',
              data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(230, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }],
          }}
          height={400}
          width={600}
          options={{
            maintanAspectRatio: false,
          }}
          />
          </div>
        <div className="Piee">
          <Pie
          className="pie1"
          data= {{
            labels: ['Users'],
            datasets: [{
              label: 'Users per month 1 - 6 2021',
              data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(230, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }],
          }}
          height={400}
          width={600}
          options={{
            maintanAspectRatio: false,
          }}
        />
        <Pie
         className="pie2"
          data= {{
            labels: ['Users'],
            datasets: [{
              label: 'Users per month 1 - 6 2021',
              data: [12, 22, 50, 10, 5, 120],
            backgroundColor: [
                'rgba(230, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }],
          }}
          height={400}
          width={600}
          options={{
            maintanAspectRatio: false,
          }}
        />
      </div>
    </div>
  )
}
