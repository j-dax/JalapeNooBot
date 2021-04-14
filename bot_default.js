const tmi = require('tmi.js');
require("dotenv").config();

const commands = require("./commands/index");

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot
    console.log(context);

    const prefix = process.env.COMMAND_PREFIX;

    msg = msg.trim();
    const prefixMatches = (msg && msg[0] === prefix)
    if (!prefixMatches) return;

    const args = msg.split(" ")
    const command = args.shift().substr(1);

    // If the command is known, let's execute it
    if (command === "dice")
    {
        client.say(target, commands.dice());
    }
    else if (command === "sh")
    {
        client.say(target, commands.scared());
    }
    else if (command === "ban")
    {
        for (arg in args) {
            client.say(target, commands.ban(args[arg]));
        }
    }
    else if (command === "false")
    {
        client.say(target, commands._false());
    }
    else if (command === "shoot")
    {
        if (args?.length > 0)
            client.say(target, commands.shoot(context["display-name"], args[0]));
        else 
            client.say(target, "You shot at nothing. And missed.");
    }
    else
    {
        console.log(`* Unknown command ${command}`);
        return;
    }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    // client.say(`#littlejalapenoo`, commands.wake(process.env.BOT_USERNAME));
    console.log(`* Connected to ${addr}:${port}`);
    
    console.log(
        commands["save"](commands)
    );

    // console.log("saved commands!");
    // commands.load();
    // console.log("reloaded commands, again!");

}