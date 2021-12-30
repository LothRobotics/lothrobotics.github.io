"use strict"

var eventName

var team = ["Tuna Çalışkan","Ahmet KANKILIÇ","Efe Aslan","Vefa Ceylan","Kadir Kayra Balaban","Talha Batuhan CEYLAN","Sena Vardar","Deniz Arda Kozak","Erdem UYAN","Ahmet Doğu Tuna","Elifnaz Çolfaoğlu","Zeynep Güler","Hilal Tekin","Halit Hamza Şeker","Yavuz Selim Şeremetli","Arhan kuzey girgin","Muhammed Bilal Öztürk","Abdullah Efe Atabek","Muhammed Emir Yıldırım","Burak Nezir ALTUN","Elif Ünal","Emir Karabulut","Eray Güleşen","Arda dönmez","Ebrar Dinç","Deniz Yergin","Efe Aslan","Bora Özüdoğru","Yusuf Adıgüzel","İbrahim Volkan Gök"]

function start() {
	eventName = document.getElementById("eventname").value
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "block"
	document.getElementById("thirdpage").style.display = "none"
	if (eventName != "") {
		document.getElementById("eventheader").innerHTML = eventName + "<br>Yoklama"
	}
	team.forEach(e => {
		document.getElementById("secondpage").innerHTML += '<label for="'+e+'">'+e+'</label> <input type="checkbox" name="'+e+'" id="'+e+'"><hr></hr>'
	});
	document.getElementById("secondpage").innerHTML += '<button onclick="end()">Yoklamayı Sonlandır</button>'
}

function end() {
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "none"
	document.getElementById("thirdpage").style.display = "block"
}

function savepdf() {
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "block"
	document.getElementById("thirdpage").style.display = "none"
	html2pdf(document.getElementById("secondpage"))
}