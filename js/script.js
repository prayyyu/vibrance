// Run only after page loads
document.addEventListener("DOMContentLoaded", () => {


// ✅ Event Countdown
var countdownEl = document.getElementById("countdown");

if(countdownEl){

var eventDate = new Date("March 30, 2026 18:00:00").getTime();

var timer = setInterval(function(){

var now = new Date().getTime();
var distance = eventDate - now;

if(distance < 0){
clearInterval(timer);
countdownEl.innerHTML = "VIBRANCE has started!";
return;
}

var days = Math.floor(distance / (1000 * 60 * 60 * 24));

countdownEl.innerHTML =
"VIBRANCE begins in " + days + " days";

},1000);

}


// ✅ Popup functions
window.showPopup = function(){
var popup = document.getElementById("popup");
if(popup){
popup.style.display = "block";
}
}

window.closePopup = function(){
var popup = document.getElementById("popup");
if(popup){
popup.style.display = "none";
}
}


// ✅ Event Search
window.searchEvents = function(){

var inputEl = document.getElementById("searchInput");

if(!inputEl) return; // stop if not on events page

var input = inputEl.value.toLowerCase();

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

});
