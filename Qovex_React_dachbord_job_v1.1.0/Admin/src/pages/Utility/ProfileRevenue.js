import React from 'react'
import ReactApexChart from "react-apexcharts"

const ProfileRevenue = () => {
    var series = [{
        name: 'Revenue',
        data: [50, 55, 126, 86, 47, 68, 106, 74, 65, 57, 86, 68]
    }];
    var options = {
        chart: {
            height: 300,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '14%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1

        },
        colors: ['#556ee6'],
    }
    return (
        <React.Fragment>

            <ReactApexChart
                options={options}
                series={series}
                height={300}
                type="bar"
                className="apex-charts"
            />

        </React.Fragment>
    )
}

export default ProfileRevenue
