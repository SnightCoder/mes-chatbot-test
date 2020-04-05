var express=require("express");
var request=require("request");
var bodyparser=require("body-parser");
var app = express();
var at="{PACCESS_TOKEN}";

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
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
	if(message!=null){
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
}
