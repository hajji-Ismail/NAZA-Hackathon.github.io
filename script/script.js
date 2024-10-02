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
   // Initialize the map
   const map = L.map('map').setView([37.7749, -122.4194], 8); // Set initial coordinates (San Francisco)

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
   }).addTo(map);

   // Sample sea level data
   const seaLevelData = [0, 0.5, 1, 1.5, 2, 2.5]; // in mm for the years 2010-2015
   const years = ['2010', '2011', '2012', '2013', '2014', '2015'];

   // Chart.js for visualizations
   const ctx = document.getElementById('chart').getContext('2d');
   const chart = new Chart(ctx, {
       type: 'line',
       data: {
           labels: years,
           datasets: [{
               label: 'Sea Level Rise (mm)',
               data: seaLevelData,
               borderColor: 'blue',
               fill: false
           }]
       },
       options: {
           responsive: true,
           scales: {
               y: {
                   beginAtZero: true,
                   title: {
                       display: true,
                       text: 'Sea Level Rise (mm)'
                   }
               },
               x: {
                   title: {
                       display: true,
                       text: 'Year'
                   }
               }
           }
       }
   });

   // Quiz functionality
   const quizData = [
       { question: "What causes sea level rise?", options: ["Melting Ice", "Thermal Expansion", "Both"], answer: "Both" },
       { question: "Which gas contributes most to global warming?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Carbon Dioxide" },
       { question: "What percentage of the world's population lives in coastal areas?", options: ["30%", "50%", "70%"], answer: "50%" },
   ];

   function createQuiz() {
       const quizContainer = document.getElementById('quiz');
       quizData.forEach((q, index) => {
           const questionElement = document.createElement('div');
           questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
           q.options.forEach(option => {
               questionElement.innerHTML += `<input type="radio" name="question${index}" value="${option}">${option}<br>`;
           });
           quizContainer.appendChild(questionElement);
       });
   }

   document.getElementById('submit').addEventListener('click', function() {
       let score = 0;
       quizData.forEach((q, index) => {
           const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
           if (selectedOption && selectedOption.value === q.answer) {
               score++;
           }
       });
       document.getElementById('results').innerHTML = `Your score: ${score} out of ${quizData.length}`;
   });

   createQuiz();