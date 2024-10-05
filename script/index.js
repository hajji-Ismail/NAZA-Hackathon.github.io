// CO2 Chart Data
const co2Data = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
        label: 'Global CO2 Concentration (ppm)',
        data: [390, 393, 396, 398, 402, 404, 407, 410, 414, 416, 413, 417, 420], // Example data
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1
    }]
};


const co2ChartConfig = {
    type: 'line',
    data: co2Data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'CO2 Concentration (ppm)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    }
};

new Chart(document.getElementById('co2Chart'), co2ChartConfig);

// Population Chart Data
const populationData = {
    labels: ['Urban Areas', 'Rural Areas'],
    datasets: [{
        label: 'CO2 Emissions per Capita',
        data: [7.2, 3.4], // Example data
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};

const populationChartConfig = {
    type: 'bar',
    data: populationData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'CO2 Emissions per Capita'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    }
};

new Chart(document.getElementById('populationChart'), populationChartConfig);

// Methane Chart Data
const methaneData = {
    labels: ['CO2', 'CH4', 'N2O', 'Other GHGs'],
    datasets: [{
        label: 'Proportion of GHGs',
        data: [72, 15, 9, 4], // Example proportions
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

const methaneChartConfig = {
    type: 'pie',
    data: methaneData,
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        }
    }
};

new Chart(document.getElementById('methaneChart'), methaneChartConfig);