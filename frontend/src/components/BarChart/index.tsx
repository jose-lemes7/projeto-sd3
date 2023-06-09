import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type SeriesData = {
    name: string;
    data: number[];
}
type ChartData = {
    labels: string[];
    series: SeriesData[];
};

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: ["Label1"],
        series: [
            {
                name: "Name1",
                data: [10]
            }
        ]
    });    
    
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then(response => {
            const data = response.data as SaleSuccess[];
            const sellerNames = data.map(x => x.sellerName)
            const sucess = data.map(x => round( 100 * x.deals / x.visited, 1));
            const serie1: SeriesData = {name: "Sucesso %", data: sucess};
            setChartData({
                labels: sellerNames, 
                series: [serie1]
            });
        })
    },[]);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
    };
    
    return (
        <div id="chart">
            <Chart
                options={{...options, labels: chartData.labels}} 
                series={chartData.series}
                type="bar"
                height="240"
            />
        </div>
    );
}



export default BarChart;