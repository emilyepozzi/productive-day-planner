// const currentDate = moment().format("MMMM Do, YYYY");
// const displayDate = document.getElementById("currentDay");
// const currentHour = moment().format("HH:mm");

// setInterval (function constDate() {
//     const showDate = document.getElementById("currentDay")
//     const nowDate = moment().format("MMMM Do, YYYY")
//     showDate.innerHTML = nowDate;

// })

// setInterval (function constTime() {
//     const displayTime = document.getElementById("currentTime")
//     const nowTime = moment().format("h:mm:ss A")
//     displayTime.innerHTML = nowTime;
//     console.log(displayTime);
// }, 1000)


//mood of the day, saving to local storage



// Get the button, and when the user clicks on it, execute myFunction
var taskBtn = document.querySelector(".btn").addEventListener("click", function() {
var taskEl = $('.text-area');
localStorage.setItem(".text-area", taskEl.val());
console.log(taskEl.val());

// for each to save individual text area boxes
// taskEl.forEach(taskEl);

});

var storedValue = localStorage.getItem(".text-area");

//grab the data in local storage and fill in the textarea values
$('text-area').each(function() {
    $(this).val(localStorage.getItem($(this).attr('text-area')));
});