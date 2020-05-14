var express=require("express");
var request=require("request");
var bodyparser=require("body-parser");
// var time = require('time');

var app = express();

var at="{ACCESS_TOKEN}";
var testerRecipient="{ID}";

//image:
var image1="https://i.imgur.com/Kg4l9hp.png",attachment_i1=556114605320871;
var image2="https://i.imgur.com/4teozvl.jpg",attachment_i2=251638932610800;
var image3="https://i.imgur.com/Gl1eRhP.jpg",attachment_i3=1547730032081750;
var image4="https://i.imgur.com/IkQZ835.jpg",attachment_i4=2948552578704626;
var image5="https://i.imgur.com/3awnzQ8.png",attachment_i5=685843405307164;//night1
var image6="https://i.imgur.com/htzI1jz.png",attachment_i6=292194478475236;//night2
var image7="https://i.imgur.com/YTnSfBh.gif",attachment_i7=1243944389330480;//LOVE

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
console.log("Listening...");

function checkTime(arg) {
	let date_ob = new Date();
	// 	console.log(date_ob.getTimezoneOffset());
	//    // date_ob.setTimezone("America/Los_Angeles");
	//    // current date
	//    // adjust 0 before single digit date
	   let date = ("0" + date_ob.getDate()).slice(-2);
	
	//    // current month
	   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	
	//    // current year
	   let year = date_ob.getFullYear();
	
	//    // current hours
	   let hours = date_ob.getHours();
	
	//    // current minutes
	   let minutes = date_ob.getMinutes();
	
	//    // current seconds
	   let seconds = date_ob.getSeconds();

	   if(seconds==0)
	   if(minutes==0)
		   if(hours==21){
			   sendText(testerRecipient,"Oyaa~ Let's have a nice sleep, Nii-san");
			   sendByAttachmentID(testerRecipient,attachment_i6);
			   sendByAttachmentID(testerRecipient,attachment_i5);
		   }
		
			   if(seconds==0)
			   if(minutes==0)
				   if(hours==6){
					   sendText(testerRecipient,"Good morning, Nii-san. I feel you will have a nince day today!");
					   sendByAttachmentID(testerRecipient,attachment_i2);
				   }

					   if(seconds==0)
					   if(minutes==45)
						   if(hours==11){
							   sendText(testerRecipient,"Okaeri, Nii-san");
							   sendByAttachmentID(testerRecipient,attachment_i1);
						   }

	console.log(getTimeNow());
}
  
setInterval(checkTime, 1000,"test para");
// setTimeout(myFunc, 1500, 'funky');
// clearTimeout(timeoutObj);
// clearImmediate(immediateObj);
// clearInterval(intervalObj);

app.get("/webhook",function(req,res){
	//res.send("<button>Hi</button>");
	console.log("get!"+cov);
	if(req.query["hub.verify_token"]=="try"){
		//res.send(req.query["hub.challenge"]);	
		res.status(200).send(req.query["hub.challenge"]);
	}
	
});

app.post("/webhook",function(req,res){
	console.log("posted start:");
	var msg_events=req.body.entry;
	msg_events.forEach(function(pageEntry){
		pageEntry.messaging.forEach(function(msg){
			console.log(msg);
			giveText(msg.sender.id,msg.message.text);
			res.sendStatus(200);		
		});	
	
	});
	console.log("posted end!");	
});

let
	van_m = 4345040249,
	anh_m = 7226394309,
	toan_m = 4884624999,
	sinh_m = 6275460345,
	tin_m = 8632900528 ,//6491888812, 6575955534
	gdcd_m = 8221191641,//8311211345
	su_m = 9012849742,
	dia_m = 3695849203,//8613256129
	ly_m = 7713790828,
	hoa_m = 6179532374,
	gdqp_m = 5378445871,
	td_m = 7827114599,

	van_mp = 221180,
	anh_mp=266760,
	toan_mp = "phammy",
	sinh_mp = 335696,
	tin_mp = "tinvb2020", //123456
	gdcd_mp = 123456,
	su_mp = 770711,
	dia_mp = "hoangnuvb",//221461
	ly_mp = 878098,
	hoa_mp = 254591,
	gdqp_mp = 123456,
	td_mp = 123456;

function giveText(id, message){
	var imageurl="";
	var atID="";
	var imageSend=false;
	if(message!=null){
	if(message.toUpperCase() == "I LOVE YOU"){
		message = "I love you too Nii-san <3";
	}
	else if(message.toUpperCase() == "HAVE A NICE DAY"){
		message = "Thanks, you too! Nii-san";
		imageSend=true;
		imageurl=image1;
		atID=attachment_i1;
	}
	else if(message.toUpperCase() == "ECCHI"){
		message = "You're a pervert, aren't you?";
		imageSend=true;
		imageurl=image4;	
		atID=attachment_i4;
	}
	else if(message.toUpperCase() == "SHOW"){
		message = "Showing all images";
		sendByAttachmentID(id,attachment_i1);
		sendByAttachmentID(id,attachment_i2);
		sendByAttachmentID(id,attachment_i3);
		sendByAttachmentID(id,attachment_i4);
		sendByAttachmentID(id,attachment_i5);
		sendByAttachmentID(id,attachment_i6);
		sendByAttachmentID(id,attachment_i7);
	}
	else if(message.toUpperCase() == "TIME"){
		message = getTimeNow();
	}
	else if(message.toUpperCase() == "I LIKE YOU"){
		message = "I love you Nii-san";
	}
	else if(message.toUpperCase() == "LOVE"){
		message = "≧ ︿ ≦";
		imageSend=true;
		imageurl=image7;	
		atID=attachment_i7;
	}
	else if(message.toUpperCase() == "MY ID"){
		message = "Nii-san's recipient ID: "+id;	
	}
	else if(message.toUpperCase() =="HELP"){
		message = "Try sending \"ncov info\", Nii-san";
	}
	else if(message.toUpperCase() == "NCOV LINK"){
		message	= "Here Nii-san:\nhttps://corona.kompa.ai/\nhttps://ncov.moh.gov.vn/\nhttps://google.com/covid19-map/?hl=en\nhttps://www.worldometers.info/coronavirus/\nhttps://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest";
	}
	else if(message.toUpperCase() == "NCOV INFO"){
		cov=0;
		getcovidToday(id,"world");
		return;
	}
	else if(message.toUpperCase() == "HOW ARE YOU" || message.toUpperCase() == "HOW ARE YOU TODAY"){
		message= "Much better now that Nii-san is with me";
	}
	else if(message.toUpperCase() == "WHY ARE YOU SO CUTE"){
		message = "That’s a pretty cute question for you to ask me, Nii-san!";
	}
	else if(message.toUpperCase() == "YOU'RE SO ADORABLE"){
		message = "Acute angle, you say? Nope, I’m A CUTE ANGEL!";
	}
	else if(message.toUpperCase() == "THANKS"){
		message = "Glad to help! Nii-san";
	}

	//#region monhoc
	else if(message.toUpperCase()=="VAN"){
			message=van_mp;
			sendText(id,van_m);
	}
	else if(message.toUpperCase()=="ANH"){
			message=anh_mp;
			sendText(id,anh_m);
	}
	else if(message.toUpperCase()=="TOAN"){
			message=toan_mp;
			sendText(id,toan_m);
	}
	else if(message.toUpperCase()=="SINH"){
			message=sinh_mp;
			sendText(id,sinh_m);
	}
	else if(message.toUpperCase()=="TIN"){
			message=tin_mp;
			sendText(id,tin_m);
	}
	else if(message.toUpperCase()=="GDCD"){
			message=gdcd_mp;
			sendText(id,gdcd_m);
	}
	else if(message.toUpperCase()=="SU"){
			message=su_mp;
			sendText(id,su_m);
	}
	else if(message.toUpperCase()=="DIA"){
			message=dia_mp;
			sendText(id,dia_m);
	}
	else if(message.toUpperCase()=="LY"){
			message=ly_mp;
			sendText(id,ly_m);
	}
	else if(message.toUpperCase()=="HOA"){
			message=hoa_mp;
			sendText(id,hoa_m);
	}
	else if(message.toUpperCase()=="TD"){
			message=td_mp;
			sendText(id,td_m);
	}
	else if(message.toUpperCase()=="GDQP"){
			message=gdqp_mp;
			sendText(id,gdqp_m);
	}
	//#endregion mon hoc
	else{

	var imes = message.split(" ");
	if (imes[0].toUpperCase() == "NCOV"){
		cov=0;
		//sorting in development...
		var cname=message.substr(5);
		getcovid(id,cname);

		return;
	}
	else
	{
		message = "Hello Nii-san ◍•ᴗ•◍";
		imageSend=true;
		imageurl=image3;
		atID=attachment_i3;
	}
	}
	}
	else{
	message = "wdym, Nii-san?!";
	}

	sendText(id,message);
	if(imageSend){
		// sendImage(id,imageurl);
		sendByAttachmentID(id,atID);
	}
}

function sendText(id,message)
{
	request({
		url:"https://graph.facebook.com/v6.0/me/messages",
		qs: {access_token:at	},
		method:"POST",
		json: {
			recipient:{id:id},
			message:{text:message}
		}
	});
}

function sendImage(id,url)
{
	request({
		url:"https://graph.facebook.com/v6.0/me/messages",
		qs: {access_token:at	},
		method:"POST",
		json: {
			recipient:{id:id},
			message:{

				attachment:{
					type:"image", 
					payload:{
					  is_reusable: true,
					  url:url
					}
				  }

			}
		}
	});
}

function sendByAttachmentID(id,attachment_id)
{
	request({
		url:"https://graph.facebook.com/v6.0/me/messages",
		qs: {access_token:at	},
		method:"POST",
		json: {
			recipient:{id:id},
			message:{

				attachment:{
					type:"image", 
					payload:{
						attachment_id: attachment_id
					}
				  }

			}
		}
	});
}



let cov=1;
function getcovid(id,countryName){
	// var url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/228"
	var url = "https://corona.lmao.ninja/v2/countries/"+countryName;
	if(countryName.toUpperCase()=="WORLD") url = "https://corona.lmao.ninja/v2/all";

request({
    url: url,
    json: true
}, function (error, response, data) {

    if (!error && response.statusCode === 200) {
		if(cov==0){
		cov = 1;
		//console.log(data[0].country);704
		let confirmedCases = data.cases;
		let deaths = data.deaths;
		let recovered = data.recovered;
		let country = data.country;
		if(countryName.toUpperCase()=="WORLD")country="World";
		let todayCases = data.todayCases;
		let percentDeath= ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";	

		sendText(id,country+ "\n🤧 Cases: "+confirmedCases+" ( + "+todayCases+" )"+"\n👌 Recovered: "+recovered+"\n💀 Deaths: "+deaths+"\n% of Deaths: "+percentDeath)
		}
		console.log("cov: "+cov);
    }

})
}

function getcovidToday(id,countryName){
	// var url = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/228"
	var url = "https://corona.lmao.ninja/v2/countries/"+countryName;
	url = "https://corona.lmao.ninja/v2/all";

request({
    url: url,
    json: true
}, function (error, response, data) {

    if (!error && response.statusCode === 200) {
		if(cov==0){
		cov = 1;
		//console.log(data[0].country);704
		let confirmedCases = data.cases;
		let deaths = data.deaths;
		let recovered = data.recovered;
		let country = data.country;
		let todayCases = data.todayCases;
		let percentDeath= ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";	

		sendText(id,"Today cases:" + " Hôm nay thế giới có thêm "+todayCases+" ca nhiễm 😞");
		}
		console.log("cov: "+cov);
    }

})
}

function getTimeNow(){
	let date_ob = new Date();
// 	console.log(date_ob.getTimezoneOffset());
//    // date_ob.setTimezone("America/Los_Angeles");
//    // current date
//    // adjust 0 before single digit date
   let date = ("0" + date_ob.getDate()).slice(-2);

//    // current month
   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

//    // current year
   let year = date_ob.getFullYear();

//    // current hours
   let hours = date_ob.getHours();

//    // current minutes
   let minutes = date_ob.getMinutes();

//    // current seconds
   let seconds = date_ob.getSeconds();

//    // prints date in YYYY-MM-DD format
//    console.log(year + "-" + month + "-" + date);

//    // prints date & time in YYYY-MM-DD HH:MM:SS format
//    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

//    // prints time in HH:MM format
//    console.log(hours + ":" + minutes);
//    // console.log(`arg was => ${arg}`);
   return year + "-" + month + "-" + date + "\n" + hours + ":" + minutes + ":" + seconds;
}
