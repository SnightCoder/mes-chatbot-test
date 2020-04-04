var express=require("express");
var request=require("request");
var bodyparser=require("body-parser");
var app = express();
var at="EAAHXcBkyGtMBADb9pJHuRlIRMyN348J3JgfHJZB1q5aqZAVJWjg8v0yWwzNmZCONoGax7acxOeVFe8YtBTEAMOWQL0ept8xX1QYUPpi2fkxZATyC9G3h9hQBIRosZCcIZAknRgnNhyIc9hW9XY3NILZAGw0KNPV2lwNQA3mZAQVTKq2gKeRJ5M9xbZBGfqhQFrigZD";

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.listen(3000);
console.log("Listening...");
app.get("/webhook",function(req,res){
	//res.send("<button>Hi</button>");
	console.log("get!");
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
			sendText(msg.sender.id,msg.message.text);
			res.sendStatus(200);		
		});	
	
	});
	console.log("posted end!");	
});

function sendText(id, message){
	
	if(message.toUpperCase() == "I LOVE YOU"){
		message = "I love you too Nii-san <3";
	}
	else if(message.toUpperCase() == "I LIKE YOU"){
		message = "I love you Nii-san";
	}
	else
	message = "Hello Nii-san ◍•ᴗ•◍";

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
