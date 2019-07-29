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
