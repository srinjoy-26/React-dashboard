import { Chart as Chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const Expensegraph = () =>{
  return(
    <div className= "bg-[#F3F8FF] rounded-md p-2">
      <Bar
        data={{
          labels: ["SEP", "OCT", "NOV", "DEC", "JAN"],
          datasets: [
            {
              label: "expense",
              data: [20000, 30000, 40000, 50000, 78000],
            },
            {
              label: "Spends",
              data: [40000, 70000, 80000, 70000, 68000],
            },
          ],
        }}
      />
    </div>
  )
}

export default Expensegraph;