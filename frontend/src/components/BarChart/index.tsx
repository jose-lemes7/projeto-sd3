import Chart from "react-apexcharts";

function BarChart() {
    const state = {

        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ],
        options: {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']            
        }

    };
    return (
        <div id="chart">
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height="340"
                key="bar_chart_id"
            />
        </div>
    );
}



export default BarChart;