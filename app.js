const clockContainer = document.querySelector('.clock-container')

const formDefault = unit => { return String(unit).length === 1 ? `0${unit}` : unit }

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()


    
    const clockHtml = `
        <span>${formDefault(hours)}</span> :
        <span>${formDefault(minutes)}</span> :
        <span>${formDefault(seconds)}</span>
    `

    clockContainer.innerHTML = clockHtml
}

setInterval(updateClock, 1000)