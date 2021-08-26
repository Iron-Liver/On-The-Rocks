import React from "react"
import { Bar } from 'react-chartjs-2';


export default function Dashboard() {
  return (
    <div>
        <Bar
          data= {{
            labels: ['August', 'September', 'October', 'November', 'December'],
            datasets: [{
              label: 'Users per month'
            }]
          }}
          height={400}
          width={600}
          options={{
            maintanAspectRatio: false,
          }}

        />
    </div>
  )
}
