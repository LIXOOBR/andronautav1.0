const tmi = require("tmi.js");

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "insira o nome do seu bot aqui",
        password: "insira o oauth do seu chat aqui"
    },
    channels: ["#nome do seu bot"]
};

const client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", (channel, user, message, self) => {

    if (self) return;
	let sender = user['display-name']
	
	if(user['mod'] === false){
		if(message.includes("www. ")) || message.includes(".com")){
		client.timeout("channel, sender, 30, Link detection system trigered.");
		}
	}
	
	
	if(message === !funcionar){
		client.action("insira o nome do seu bot aqui", "insira sua mensagem aqui")
	}
	
});
