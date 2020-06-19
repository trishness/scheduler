
var strDate = moment().format("dddd, MMMM Do YYYY");
var currentMilTime = parseInt(moment().format("HH"));
var textAreas = $(".col-8")
var buttons =$(".savBtn")
storageArr = JSON.parse(localStorage.getItem("user")) || [];

//upon opening page
pageLoad();
todoText(9);

//checking time, comparing current time to schedule time slots
function pageLoad() {
     $("#currentDay").append(strDate);
     for(let i=9; i<=17; i++){
          checkTime([i]);
     }
     function checkTime(x) {
          if (currentMilTime < x) {
               $("#" + x + "time").addClass("future");
          } else if (currentMilTime > x) {
               $("#" + x + "time").addClass("past");
          } else {
               $("#" + x + "time").addClass("present");
          }
     }
}

//to do list storage
function todoText(x) {
     for (let i=0; i<storageArr.length; i++) {
          $("#" + x + "time").text(storageArr[i]);
          x++;
     }
}

//to do list population from storage
function populate() {
     storageArr=[];
}

$("button").click(function() {
     populate();
     for (let i=0; i< ($("textarea").length); i++) {
          storageArr.push($("textarea")[i].value);
     }
     localStorage.setItem("user", JSON.stringify(storageArr))
})




