/* In this project, our aim was learning basics of javascript and date methods */
function askName() {
    // this part used for Taking input from user
    var name = prompt("What's your name?");
    document.getElementById("myName").innerText = name;
 }
 
 function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var Day = date.getDay();
 // Determination of the current date
   if (Day == 1) {
     Day = "Monday";
   } else if (Day == 2) {
     Day = "Tuesday";
   } else if (Day == 3) {
     Day = "Wednesday";
   } else if (Day == 4) {
     Day = "Thursday";
   } else if (Day == 5) {
     Day = "Friday";
   } else if (Day == 6) {
     Day = "Saturday";
   } else if (Day == 7) {
     Day = "Sunday";
   }
 /// If hour, minute or second less than 10, the code will put zero to start part.
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 // showing exact current time in the website
   var time = h + ":" + m + ":" + s + " " + Day;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }
 
 askName();
 showTime();
