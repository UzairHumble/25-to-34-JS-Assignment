// ===============Positive Integer====================

var positive = parseInt(prompt("Enter Positive Number only"));
var round = Math.round(positive);
var ceils = Math.ceil(positive);
var floors = Math.floor(positive);

if(positive < 0){
    alert("Enter correct number")
}
else{
    document.getElementById("positive").innerHTML += "<p><li> Number: " + positive + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + round + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + ceils + "</li>"
    document.getElementById("positive").innerHTML += "<li> round of the number " + floors + "</li></p>"
}

// ===============Negative Integer================

var negative = parseInt(prompt("Enter Negative Number only"));

var roundN = Math.round(negative);
var ceilsN = Math.ceil(negative);
var floorsN = Math.floor(negative);

if(negative > 0){
    alert("Enter correct number")
}
else{
    document.getElementById("negative").innerHTML += "<p><li> Number: " + negative + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + roundN + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + ceilsN + "</li>"
    document.getElementById("negative").innerHTML += "<li> round of the number " + floorsN + "</li></p>"
}

//===============Positive Float===================

var positive = parseFloat(prompt("Enter Positive Number only"));
var round = Math.round(positive);
var ceils = Math.ceil(positive);
var floors = Math.floor(positive);

if(positive < 0){
    alert("Enter correct number")
}


else{
    document.getElementById("positive").innerHTML += "<p><li> Number: " + positive + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + round + "</li>";
    document.getElementById("positive").innerHTML += "<li> round of the number " + ceils + "</li>"
    document.getElementById("positive").innerHTML += "<li> round of the number " + floors + "</li></p>"
}

//  =========Negative Float===============

var negative = parseFloat(prompt("Enter Negative Number only"));
var roundN = Math.round(negative);
var ceilsN = Math.ceil(negative);
var floorsN = Math.floor(negative);

if(negative > 0){
    alert("Enter correct number")
}
else{
    document.getElementById("negative").innerHTML += "<p><li> Number: " + negative + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + roundN + "</li>";
    document.getElementById("negative").innerHTML += "<li> round of the number " + ceilsN + "</li>"
    document.getElementById("negative").innerHTML += "<li> round of the number " + floorsN + "</li></p>"
}

// ==========Absolute Value============

var absolute = parseFloat(prompt("Type any number"));

var convert = Math.abs(absolute);

document.getElementById("absolute").innerHTML = "<p><li> absolute Number of "+absolute+ " is " + convert + "</li></p>";

// ============Dice Program============
function dice(){
var dice1 = Math.random() * 6;

var dice2 = Math.round(dice1);
document.getElementById("dice").innerText = "\r\n Random dice value is " + dice2 + "\r\n";
}

function headtail(){
    var htrandom = Math.random() * 1;

    var htround = Math.round(htrandom);
    if(htround == 0){
    document.getElementById("ht").innerText = "\r\n Head it is"
}
else{
    document.getElementById("ht").innerText = "\r\n Tail it is"
}
}
// ==========Generating random number between 1 to 100==================

var rnum = Math.random() * 100;

var roundnum = Math.round(rnum);

document.getElementById("rnum").innerText = " \r\n Random number between 0 to 100 is "+ roundnum + "\r\n";

// =========Secret Random Number===================

var srandom = Math.random() * 10;

var srouund = Math.round(srandom);

var secretnumber = parseInt(prompt("Type any number between 0 to 10"));

if(secretnumber == srouund){
    alert("You win, the number is correct")
}
else{
    alert("Try Again, the number you have entered is not match. Correct number was " + srouund)
}

// ==========Displaying date================

var dates = new Date();

document.getElementById("dates").innerText = "\r\n" + dates ;

// ===========Displaying Current Month=============

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Spetember", "October", "November", "December"];    

var month = dates.getMonth();

document.getElementById("month").innerText = "\r\n Current Month: " + months[month] + "\r\n" ;

// ==========Display Current Day===============

var day = dates.getDay();
var days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

alert("today is "+days[day]);

// =============Display Funday or Working day================

if(days[day] === "Sun" || days[day] === "Sat"){
    alert("Today is a Funday")
}
else{
    alert("Today is a Working Day")     
}

// =======Displaying AM and PM===========

var hour = dates.getHours();
console.log(hour);
if(hour < 12){
    document.getElementById("hour").innerText = "\r\n" + "It's AM" +   "\r\n"
}
else{
    document.getElementById("hour").innerText =  "\r\n" + "It's PM"+   "\r\n"
}

// ==========Finding out the birth year============

var age = prompt("Enter your age");

var year = dates.getFullYear();

var birthYear = year - age ;

document.getElementById("age").innerText = "Your Age is: " + age;

document.getElementById("bYear").innerText = "Your Birth year is " + birthYear;

// ============K-Electric Bill==================

function bill() {
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var nou = document.getElementById("nou").value;
    var cpu = document.getElementById("cpu").value;
    var late = 200;

    if (name == "" || month == "" || nou == "" || cpu == "") {
        alert("Enter all information first");
    }
    else {
        var net = nou * cpu;
        document.getElementById("net").innerHTML = "<p> Net Amount Payable (Within Due Date) " + net + "</p>";
        document.getElementById("late").innerHTML = "<p> Late Payment Charges " + late + "</p>";
        var gross = net + late;
        document.getElementById("gross").innerHTML = "<p> Gross Amount Payable(After Due Date) " + gross;

    }

}
