// JavaScript Document
//Import Kolin Balance
function getbalance() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var text = this.responseText
      var obj = JSON.parse(text);
		
document.getElementById("kolinbalance").innerHTML = (obj.balance/100).toLocaleString();
document.getElementById("percentageholder").innerHTML = ((obj.balance/300000000000)*100).toFixed(1); 
    }
  };
	var WavesAddress = document.getElementById("address").value;
  xhttp.open("GET", "https://nodes.wavesnodes.com/assets/balance/" + WavesAddress + "/FiKspxSpkpzT4pMUA9ccZkbJmVXTdu4JhFDXNNXr5noW?t=", true);
  xhttp.send();
}
//Import Date
$(document).ready(function myFunction() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var w = weekday[d.getDay()];
	var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
	var m = month[d.getMonth()];
  document.getElementById("day").innerHTML = w;
	document.getElementById("date").innerHTML = m +" " + + d.getDate().toString()+ ", " + d.getFullYear().toString() +".";
})

