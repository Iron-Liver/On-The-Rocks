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
              label: 'Users per month 2021',
              data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(140, 45, 27, 0.5)',
              'rgba(128, 81, 24, 0.5)',
              'rgba(128, 116, 24, 0.5)',
              'rgba(83, 95, 187, 0.51)',
              'rgba(177, 26, 26, 0.51)',
            ],
            borderColor: [
              'rgba(140, 45, 27, 0.8)',
              'rgba(128, 81, 24, 0.8)',
              'rgba(128, 116, 24, 0.8)',
              'rgba(83, 95, 187, 0.8)',
              'rgba(177, 26, 26, 0.8)',
                
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
              label: 'Users per month 2021',
              data: [12, 19, 3, 5, 3],
            backgroundColor: [
              'rgba(140, 45, 27, 0.5)',
              'rgba(128, 81, 24, 0.5)',
              'rgba(128, 116, 24, 0.5)',
              'rgba(83, 95, 187, 0.51)',
              'rgba(177, 26, 26, 0.51)',
            ],
            borderColor: [
              'rgba(140, 45, 27, 0.8)',
              'rgba(128, 81, 24, 0.8)',
              'rgba(128, 116, 24, 0.8)',
              'rgba(83, 95, 187, 0.8)',
              'rgba(177, 26, 26, 0.8)',
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
              data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(140, 45, 27, 0.5)',
              'rgba(128, 81, 24, 0.5)',
              'rgba(128, 116, 24, 0.5)',
              'rgba(83, 95, 187, 0.51)',
              'rgba(177, 26, 26, 0.51)',
            ],
            borderColor: [
              'rgba(140, 45, 27, 0.8)',
              'rgba(128, 81, 24, 0.8)',
              'rgba(128, 116, 24, 0.8)',
              'rgba(83, 95, 187, 0.8)',
              'rgba(177, 26, 26, 0.8)',
            ],
            borderWidth: 1
            }],
          }}
       
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
              data: [12, 22, 50, 10, 5],
            backgroundColor: [
              'rgba(140, 45, 27, 0.5)',
              'rgba(128, 81, 24, 0.5)',
              'rgba(128, 116, 24, 0.5)',
              'rgba(83, 95, 187, 0.51)',
              'rgba(177, 26, 26, 0.51)',
            ],
            borderColor: [
              'rgba(140, 45, 27, 0.8)',
              'rgba(128, 81, 24, 0.8)',
              'rgba(128, 116, 24, 0.8)',
              'rgba(83, 95, 187, 0.8)',
              'rgba(177, 26, 26, 0.8)',
            ],
            borderWidth: 1
            }],
          }}
      
          options={{
            maintanAspectRatio: false,
          }}
        />
      </div>
    </div>
  )
}
