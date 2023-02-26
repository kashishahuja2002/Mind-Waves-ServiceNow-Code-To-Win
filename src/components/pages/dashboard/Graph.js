import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const config = {
    type: 'bar',
    options: {
        responsive: true,
        plugins: {
            legend: {
                display:false,
            },
            title: {
                display: false,
            }
        },
    },
};

const formatData = (rawData, color) => {
    return (
        {
            labels: rawData.map((data) => data.year),
            datasets: [
                {
                    label: "",
                    data: rawData.map((data) => data.userGain),
                    backgroundColor: color,
                    borderWidth: 0,
                    borderSkipped: false,
                    borderRadius: Number.MAX_VALUE,
                    barThickness: 10,
                },
            ],
        }
    );
}

const Graph = (props) => {
    const { graphData, color } = props;

    return (
        <Bar {...config} data={formatData(graphData, color)} />
    );
}

export default Graph;