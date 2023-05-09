
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);
                setChartData({ labels: myLabels, series: mySeries });                
            });
    }, []);


    // const state = {

    //     series: chartData.series,
    //     options: {
    //         labels: chartData.labels,
    //         legend: {
    //             show: true,
    //         }
    //     },
    // };
    const options = {
        legend: {show: true}
    }
    return (
        <div>
            <Chart
                options={{...options, labels: chartData.labels}}
                series={chartData.series}
                type="donut"
                height="340"
                key="donut_chart_id"
            />
        </div>
    );
}

export default DonutChart;