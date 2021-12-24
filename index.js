const Discord = require("discord.js");
const client = new Discord.Client();
const {
	JsonDatabase
} = require("wio.db");
const db = new JsonDatabase("db");
var kanal = "921411028217126975"; // MESAJLARIN GONDERILECEĞI KANAL ID BURAYA
var sahip = "919245038129643551"; // KENDI ID'NIZ BURAYA

client.on('ready', ()=>{
	client.channels.get('921411028217126976').join()
	})

client.on("ready",()=>{
	console.log("owo");
});

const ardademrrandom = ["18000", "20000", "16000","15000","17000","19000"]
const ardademrrandomsayı = ardademrrandom[Math.floor(Math.random() * ardademrrandom.length)];
var ardademrrandommesaj = Math.floor(Math.random() * 999999999) + 1;
var ardademrrandommesaj1 = Math.floor(Math.random() * 999999999) + 1;
var ardademrrandommesaj2 = Math.floor(Math.random() * 999999999) + 1;

const ardademrrandom1 = ["18000", "19000", "20000", "21000","15000","16000","17000"]
const ardademrrandomsayı1 = ardademrrandom1[Math.floor(Math.random() * ardademrrandom1.length)];

const ardademrrandom2 = ["15000", "16000", "17000"]
const ardademrrandomsayı2 = ardademrrandom2[Math.floor(Math.random() * ardademrrandom2.length)];


setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo basladı");
		client.channels.get(kanal).send(ardademrrandommesaj);
	};
},ardademrrandomsayı);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo h");
		client.channels.get(kanal).send(ardademrrandommesaj1);
	};
},ardademrrandomsayı1);

setInterval(function(){
	if(db.get("owodg") != "1"){
		client.channels.get(kanal).send("owo b");
		client.channels.get(kanal).send(ardademrrandommesaj2);
	};
},ardademrrandomsayı2);

client.on("message",message=>{
	if(message.channel.id==kanal){
		if(message.author.id=="408785106942164992"){ // BURAYI ELLEMEYIN
			if(message.content.includes("Beep Boop") || message.content.includes("Please DM me") || message.content.includes("Are you a real human?")){
				db.set("owodg","1");
				message.channel.send("owo bitti.");
			};
		};
	};

	if(message.author.id == sahip){
		if(message.content == "dark31!aç"){
			db.set("owodg","0");
			message.channel.send("acıldı.");
		};
	};

	if(message.author.id == sahip){
		if(message.content == "dark31!kapat"){
			db.set("owodg","1");
			message.channel.send("kapandı.");

			
		};
	};
});

client.login(""); // HESAP TOKENI BURAYA
