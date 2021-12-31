"use strict"

var eventName

var team = ["Abdullah Efe Atabek", "Ahmet Doğu Tuna", "Ahmet Furkan Tekin", "Ahmet Kankılıç", "Ahmet Yahya Turhan", "Arda Akarsu", "Arhan Kuzey Girgin", "Ayşe Ümmühan Yakıcı", "Bekir Efe Kaya", "Bora Özüdoğru", "Buğra Aydın", "Burak Nezir Altun", "Deniz Arda Kozak", "Deniz Yergin", "Doruk Doğru", "Ebrar Dinç", "Efe Aslan", "Efe Aslan Gürkan", "Elif Çolafoğlu", "Elif Ünal", "Emir Karabulut", "Enes Salih Sezer", "Eray Güleşen", "Erdem Uyan", "Halit Hamza Şeker", "Hilal Tekin", "İbrahim Volkan Gök", "İremnur Özcan", "Kadir Bayra Balaban", "Kağan Zengin", "Mehmet Akif Albayrak", "Muhammed Bilal Öztürk", "Özgür Ozan Güralp", "Seda Vardar", "Sueda Aydın", "Turan Doruk Cerit", "Vefa Ceylan", "Yusuf Adıgüzel", "Yusuf Koymatoğlu", "Zeynep Güler", "Talha Batuhan CEYLAN","Yavuz Selim Şeremetli"]

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
