"use strict"

var team = ["Abdullah Efe Atabek", "Ahmet Doğu Tuna", "Ahmet Furkan Tekin", "Ahmet Kankılıç", "Ahmet Yahya Turhan", "Arda Akarsu", "Arhan Kuzey Girgin", "Ayşe Ümmühan Yakıcı", "Bekir Efe Kaya", "Bora Özüdoğru", "Buğra Aydın", "Burak Nezir Altun", "Deniz Arda Kozak", "Deniz Yergin", "Doruk Doğru", "Ebrar Dinç", "Efe Aslan", "Efe Aslan Gürkan", "Elif Çolafoğlu", "Elif Ünal", "Emir Karabulut", "Enes Salih Sezer", "Eray Güleşen", "Erdem Uyan", "Halit Hamza Şeker", "Hilal Tekin", "İbrahim Volkan Gök", "İremnur Özcan", "Kadir Bayra Balaban", "Kağan Zengin", "Mehmet Akif Albayrak", "Muhammed Bilal Öztürk", "Özgür Ozan Güralp", "Seda Vardar", "Sueda Aydın", "Turan Doruk Cerit", "Vefa Ceylan", "Yusuf Adıgüzel", "Yusuf Koymatoğlu", "Zeynep Güler", "Talha Batuhan CEYLAN","Yavuz Selim Şeremetli"]
var date = new Date()

function start() {
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "block"
	document.getElementById("thirdpage").style.display = "none"
	document.getElementById("dateheader").innerHTML = date.toLocaleDateString('tr-TR')
	if (document.getElementById("eventname").value != "") {
		document.getElementById("eventnameheader").innerHTML = document.getElementById("eventname").value
	} else {
		document.getElementById("eventnameheader").innerHTML = "Kulüp Toplantısı"
	}
	team.forEach(e => {
		document.getElementById("secondpage").innerHTML += '<label for="'+e+'" class="container">'+e+'<input name="'+e+'" id="'+e+'" type="checkbox"><span class="checkmark"></span></label>'
	});
	document.getElementById("secondpage").innerHTML += '<button id="endbtn" onclick="end()">Yoklamayı sonlandır</button>'
}

function end() {
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "none"
	document.getElementById("thirdpage").style.display = "block"
}

function savepdf() {
	document.getElementById("endbtn").style.display = "none"
	document.getElementById("firstpage").style.display = "none"
	document.getElementById("secondpage").style.display = "block"
	document.getElementById("thirdpage").style.display = "none"
	html2pdf(document.getElementById("secondpage"))
}
