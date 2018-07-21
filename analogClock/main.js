setInterval(function(){
		var date = new Date();
		updateClock(date);
}, 1000);
function updateClock(date){
		var secondHand = document.getElementById("second").style;
		var hourHand = document.getElementById("hour").style;
		var minuteHand = document.getElementById("minute").style;
		secondHand.transform = "rotate(" + date.getSeconds()*6 + "deg)";
		minuteHand.transform = "rotate(" + date.getMinutes()*6 + "deg)";
		hourHand.transform = "rotate(" + (date.getHours()*30 + date.getMinutes() * 0.5) + "deg)";
}