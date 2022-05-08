Indonesian_2021 = [12.20, 78.06, 64.04];
Javanese_2021 = [85.16, 16.92, 69.26];
Sundanese_2021 = [78.03, 81.04, 6.74];
Multilingual_2021 = [12.38, 17.52, 7.34];
GoogleSTT_2021 = [9.22, 0, 0];
var ctx_2021 = document.getElementById("myChart_2021");
//ctx.style.backgroundColor = 'rgba(240,222,222,1)';
var myChart_2021 = new Chart(ctx_2021, {
    type: 'bar',
    data: {
        labels: ["Indonesian Common Voice Dataset 6.1", "Javanese OpenSLR Dataset", "Sundanese OpenSLR Dataset"],

        datasets: [{
            label: 'Indonesian Model',
            fill: false,
            data: Indonesian_2021,
            backgroundColor: '#726A95',
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },

            {
                label: 'Javanese Model',
                fill: false,
                data: Javanese_2021,
                backgroundColor: '#709FB0',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: [
                    'Sundanese Model'
                ],
                data: Sundanese_2021,
                fill: false,
                backgroundColor: '#A0C1B8',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: 'Multilingual Model',
                fill: false,
                data: Multilingual_2021,
                backgroundColor: '#F4EBC1',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: 'Google Speech To Text',
                fill: false,
                data: GoogleSTT_2021,
                backgroundColor: '#F48B91',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Speech Recognition Model Comparison'
            }
        },
        scales: {
            x: {
              title: {
                  text: "Language",
                  display: false
              }
            },
            y: {
                title: {
                    text: "Word Error Rate (WER)",
                    display: true
                },
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
        },
        responsive: true,

        tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 20)',
                        backgroundColor: 'rgb(255,20, 0)'
                    }
                }
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'rgb(25, 25, 25)',

            }
        }
    }
});

Indonesian_2022 = [12.20, 78.06, 64.04];
Javanese_2022 = [85.16, 16.92, 69.26];
Sundanese_2022 = [78.03, 81.04, 6.74];
Multilingual_2022 = [4.06, 14.29, 7.21];
GoogleSTT_2022 = [9.22, 0, 0];
var ctx_2022 = document.getElementById("myChart_2022");
//ctx.style.backgroundColor = 'rgba(240,222,222,1)';
var myChart_2022 = new Chart(ctx_2022, {
    type: 'bar',
    data: {
        labels: ["Indonesian Common Voice Dataset 6.1", "Javanese OpenSLR Dataset", "Sundanese OpenSLR Dataset"],

        datasets: [{
            label: 'Indonesian Model',
            fill: false,
            data: Indonesian_2022,
            backgroundColor: '#726A95',
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        },

            {
                label: 'Javanese Model',
                fill: false,
                data: Javanese_2022,
                backgroundColor: '#709FB0',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: [
                    'Sundanese Model'
                ],
                data: Sundanese_2022,
                fill: false,
                backgroundColor: '#A0C1B8',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: 'Multilingual Model',
                fill: false,
                data: Multilingual_2022,
                backgroundColor: '#F4EBC1',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
            {
                label: 'Google Speech To Text',
                fill: false,
                data: GoogleSTT_2022,
                backgroundColor: '#F48B91',
                borderColor: [
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                    'rgba(128,128,128,100)',
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Speech Recognition Model Comparison'
            }
        },
        scales: {
            x: {
              title: {
                  text: "Language",
                  display: false
              }
            },
            y: {
                title: {
                    text: "Word Error Rate (WER)",
                    display: true
                },
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }
        },
        responsive: true,

        tooltips: {
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: 'rgb(255, 0, 20)',
                        backgroundColor: 'rgb(255,20, 0)'
                    }
                }
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'rgb(25, 25, 25)',

            }
        }
    }
});
