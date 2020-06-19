var d = new Date();
var strDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(strDate);
textArea1=$("#9am")
textArea2=$("#10am")
textArea3=$("#11am")
textArea4=$("#12pm")
textArea5=$("#1pm")
textArea6=$("#2pm")
textArea7=$("#3pm")
textArea8=$("#4pm")
textArea9=$("#5pm")



console.log(moment().format("ha"));

$("#9")

var textAreas = $(".col-8")
console.log(textAreas)

for (i=0; i<textAreas.length; i++) {
     //if(textAreas[i].attributes[0].nodeValue === (moment().format("ha"))) {
          //console.log("true")
          //(textArea+i).attr("class","past")
     //}
     if(textAreas[i].attributes[0].nodeValue===(moment().format("ha"))) {
          textAreas[i].setAttribute("class", "present");
    }

    if(textAreas[i].attributes[0].nodeValue > (moment().format("ha"))) {
          textAreas[i].setAttribute("class", "past");
}

    //that last one did respond to the current time, but made the block disappear//
}



//if current time < block time, color = green
//if current time = block time, color = red
//if current time > block tim, coloe = grey

