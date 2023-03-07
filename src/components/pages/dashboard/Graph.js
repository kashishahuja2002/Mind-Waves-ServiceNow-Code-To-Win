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

const formatData = (rawData, color, type) => {
    
    let weeks = [];
    if(type==="monthly") {
        const numDays = new Date(2023, new Date().getMonth() + 1, 0).getDate();
        const numWeeks = Math.ceil(numDays / 7);
    
        for(let i=1; i<=numWeeks; i++) {
            weeks.push(`Week ${i}`);
        }
    }

    return (
        {
            labels: type==="weekly" ? ["M", "T", "W", "T", "F", "S", "S"] : weeks,
            datasets: [
                {
                    label: "",
                    data: rawData.map((data) => data),
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
    const { graphData, color, type } = props;

    return (
        <Bar {...config} data={formatData(graphData, color, type)} />
    );
}

export default Graph;