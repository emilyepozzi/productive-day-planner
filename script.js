const currentDate = moment().format("MMMM Do, YYYY");
const displayDate = document.getElementById("currentDay");
const currentHour = moment().format("HH:mm");

// setInterval (function constDate() {
//     const showDate = document.getElementById("currentDate")
//     const nowDate = moment().format("MMMM Do, YYYY")
//     showDate.innerHTML = nowDate;

// }, 60000)

setInterval (function constTime() {
    const displayTime = document.getElementById("currentTime")
    const nowTime = moment().format("h:mm:ss A")
    displayTime.innerHTML = nowTime;
    console.log(displayTime);
}, 1000)
