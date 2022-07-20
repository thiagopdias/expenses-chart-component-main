const ctx = document.querySelector('#chart')

fetch('./data.json').then(response => {
    return response.json()
}).then(jsonData => {
    const days = jsonData.map(element => {
        return element.day
    });

    const amounts = jsonData.map(element => {
        return element.amount
    })
    
    const backgroundColor = []
    const hoverBackgroundColor = []

    function checkToday() {
        let d = new Date()
        let day = days[d.getDay()]
        for(let index of days) {
            if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else if(day === index) {
                backgroundColor.push('hsl(186, 34%, 60%)')
                hoverBackgroundColor.push('hsla(186, 34%, 60%, 0.8)')
            } else {
                backgroundColor.push('hsl(10, 79%, 65%)')
                hoverBackgroundColor.push('hsla(10, 79%, 65%, 0.8)')
            }
            console.log(index)
        }
    }

    checkToday()
    
    const labels = days

    const data = {
        labels: labels,
        datasets: [{
            backgroundColor: backgroundColor,
            hoverBackgroundColor: hoverBackgroundColor,
            borderRadius: 5,
            borderSkipped: 'false',
            label: '$',
            data: amounts,
        }]
    }

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    new Chart(ctx, config)
})