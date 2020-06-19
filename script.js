var d = new Date();
var strDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(strDate);


//textArea1=$("#9am")
//textArea2=$("#10am")
//textArea3=$("#11am")
//textArea4=$("#12pm")
//textArea5=$("#1pm")
//textArea6=$("#2pm")
//textArea7=$("#3pm")
//textArea8=$("#4pm")
//textArea9=$("#5pm")
currentTime=moment().format("ha");
console.log(currentTime);


console.log(moment().format("ha"));

var textAreas = $(".col-8")
console.log(textAreas)

var buttons =$(".savBtn")
console.log(buttons)


//loop for checking time and displaying textArea color
for (i=0; i<textAreas.length; i++) {
     
     if(textAreas[i].attributes[0].nodeValue===currentTime) {
          $(textAreas[i]).attr("class", "present");
    };

    if(textAreas[i].attributes[0].nodeValue > currentTime) {
          $(textAreas[i]).attr("class", "past");
     };

     if(textAreas[i].attributes[0].nodeValue < currentTime) {
          $(textAreas[i]).attr("class", "future");
     };
      //not sure why this makes my col-8 look like a col-2
}


//loop for saving textArea input when clicked
$("button").click(function()){
for (i=0; i<buttons.length; i++) {
     if(buttons[i]){};
}
});
     //if id of save button is clicked, save that text area's content to local storage



//if(textAreas[i].attributes[0].nodeValue === (moment().format("ha"))) {
          //console.log("true")
          //(textArea+i).attr("class","past")
     //} from underneath the loop with aslan


//if current time < block time, color = green
//if current time = block time, color = red
//if current time > block tim, coloe = grey

//to save to local storage... localStorage.setItem("todo", textArea[i].textContent)