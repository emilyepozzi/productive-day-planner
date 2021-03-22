const currentDate = moment().format("MMMM Do, YYYY");
const displayDate = document.getElementById("currentDay");
const currentHour = moment().format("HH:mm");

setInterval (function constDate() {
    const showDate = document.getElementById("currentDay")
    const nowDate = moment().format("MMMM Do, YYYY")
    showDate.innerHTML = nowDate;

})

setInterval (function constTime() {
    const displayTime = document.getElementById("currentTime")
    const nowTime = moment().format("h:mm:ss A")
    displayTime.innerHTML = nowTime;
    console.log(displayTime);
}, 1000)


// Get the button, and when the user clicks on it, execute myFunction
var taskBtn = document
  .querySelector(".btn")
  $(".btn").on("click", function() { 
    var taskEl = $(this).siblings(".text-area");
    var time = this.value;
    var task = taskEl.val();
    localStorage.setItem(time, task);
    console.log(taskEl.val());
  });

//grab the data in local storage and fill in the textarea values
$("#8am-text").val(localStorage.getItem("8am"));
$("#9am-text").val(localStorage.getItem("9am"));
$("#10am-text").val(localStorage.getItem("10am"));
$("#11am-text").val(localStorage.getItem("11am"));
$("#12pm-text").val(localStorage.getItem("12pm"));
$("#1pm-text").val(localStorage.getItem("1pm"));
$("#2pm-text").val(localStorage.getItem("2pm"));
$("#3pm-text").val(localStorage.getItem("3pm"));
$("#4pm-text").val(localStorage.getItem("4pm"));
$("#5pm-text").val(localStorage.getItem("5pm"));
$("#6pm-text").val(localStorage.getItem("6pm"));
$("#7pm-text").val(localStorage.getItem("7pm"));
$("#8pm-text").val(localStorage.getItem("8pm"));
$("#9pm-text").val(localStorage.getItem("9pm"));
$("#10pm-text").val(localStorage.getItem("10pm"));
$("#11pm-text").val(localStorage.getItem("11pm"));
$("#12am-text").val(localStorage.getItem("12am"));
$("#1am-text").val(localStorage.getItem("1am"));
$("#2am-text").val(localStorage.getItem("2am"));
$("#3am-text").val(localStorage.getItem("3am"));
$("#4am-text").val(localStorage.getItem("4am"));
$("#5am-text").val(localStorage.getItem("5am"));
$("#6am-text").val(localStorage.getItem("6am"));
$("#7am-text").val(localStorage.getItem("7am"));

