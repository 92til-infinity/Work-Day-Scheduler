var currentDate = moment().format("MMM Do YY");
function todaysDate() {
    $("#currentDay").text(currentDate);
    console.log(currentDate);
}
todaysDate();
// ^^
// calls the current date to the selected section

// global variables
var saveBUTTON = $(".saveBUTTON");
var Time = moment().format("H");
var TimeInt = parseInt(Time);
// global variables

// set data attributes to each input by hour and ID.
// should put the individual inputs results into and array

$("#7HOUR").attr("data-time", moment("7:00 am", "h:mm a").format("H"));
$("#8HOUR").attr("data-time", moment("8:00 am", "h:mm a").format("H"));
$("#9HOUR").attr("data-time", moment("9:00 am", "h:mm a").format("H"));
$("#10HOUR").attr("data-time", moment("10:00 am", "h:mm a").format("H"));
$("#11HOUR").attr("data-time", moment("11:00 am", "h:mm a").format("H"));
$("#12HOUR").attr("data-time", moment("12:00 pm", "h:mm a").format("H"));
$("#13HOUR").attr("data-time", moment("13:00 pm", "h:mm a").format("H"));
$("#14HOUR").attr("data-time", moment("14:00 pm", "h:mm a").format("H"));
$("#15HOUR").attr("data-time", moment("15:00 pm", "h:mm a").format("H"));
$("#16HOUR").attr("data-time", moment("16:00 pm", "h:mm a").format("H"));
$("#17HOUR").attr("data-time", moment("17:00 pm", "h:mm a").format("H"));
$("#18HOUR").attr("data-time", moment("18:00 pm", "h:mm a").format("H"));
$("#19HOUR").attr("data-time", moment("19:00 pm", "h:mm a").format("H"));



$(document).ready(function () {

    // call the local storage function made at the end
    localLOCAL();


    // set a variable inputTIME forLoop to get proper time class.
    for (var i = 7; i <= 19; i++) {
        var inputTIME = $("#" + i + "HOUR").attr("data-time");
        var inputTimeInt = parseInt(inputTIME);
        // console.log(inputTimeInt);
        // Set color styling based if past present or future.
        if (TimeInt === inputTimeInt) {
            $("#" + i + "HOUR").addClass("present");

        }

        if (TimeInt > inputTimeInt) {
            $("#" + i + "HOUR").addClass("past");
        }

        if (TimeInt < inputTimeInt) {
            $("#" + i + "HOUR").addClass("future");
        }

    }




    //  BUTTON HOVER 
    // mouse events from https://api.jquery.com/
    saveBUTTON.on("mouseenter", function () {
        $(this).addClass('hover');
    });

    saveBUTTON.on("mouseleave", function () {
        $(this).removeClass('hover');
    });


    //  BUTTON CLICK
    // save the hour's plan to local storage
    saveBUTTON.on("click", function (event) {
        event.preventDefault();
        var hour = $(this).siblings("input").attr("data-time");
        var plan = $(this).siblings("input").val();
        localStorage.setItem(hour, plan);
        console.log(hour + " " + plan);
    });


    //  Retrieves stored user inputs from local storage
    function localLOCAL() {
        // hours to account for: 1, 2, 3, 4, 5, 8, 9, 10, 11, 12
        // starts at 7 to keep only the times i have in the log.
        for (var i = 7; i <= 19; i++) {
            $("#" + i + "HOUR").val(localStorage.getItem(i));
        }
    }


});