aDatasets1 = [12.20, 78.06, 64.04];
aDatasets2 = [85.16, 16.92, 69.26];
aDatasets3 = [78.03, 81.04, 6.74];
aDatasets4 = [12.38, 17.52, 7.34];
var ctx = document.getElementById("myChart");
//ctx.style.backgroundColor = 'rgba(240,222,222,1)';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Indonesian", "Javanese", "Sundanese"],

        datasets: [{
            label: 'Indonesian Model',
            fill: false,
            data: aDatasets1,
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
                data: aDatasets2,
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
                data: aDatasets3,
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
                data: aDatasets4,
                backgroundColor: '#F4EBC1',
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
