// Event Countdown
var eventDate = new Date("March 30, 2026 18:00:00").getTime();

var timer = setInterval(function(){

var now = new Date().getTime();

var distance = eventDate - now;

if(distance < 0){
clearInterval(timer);
document.getElementById("countdown").innerHTML = "VIBRANCE has started!";
return;
}

var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
"VIBRANCE begins in " + days + " days";

},1000);


// Popup functions
function showPopup(){
document.getElementById("popup").style.display="block";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}


// Event Search
function searchEvents(){

var input = document.getElementById("searchInput").value.toLowerCase();

var cards = document.getElementsByClassName("event-card");

for(var i=0;i<cards.length;i++){

var text = cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="";
}else{
cards[i].style.display="none";
}

}

}