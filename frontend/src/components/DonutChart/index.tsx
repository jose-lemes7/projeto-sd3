
import Chart from "react-apexcharts";

function DonutChart() {
    const state = {

        series: [477138, 499928, 444867, 220426, 473088],
        options: {                          
            labels: ['Anakin', 'Barry Allen', 'Kal-El',     'Logan', 'Padmé'],    
            legend: {
                show: true,
            }        
        },
    };
    return (
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="donut"
                height="340"
                key="donut_chart_id"                 
            />
        </div>
    );
}

export default DonutChart;