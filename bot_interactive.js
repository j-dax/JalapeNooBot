const tmi = require("tmi.js");
var readline = require("readline");
require("dotenv").config();

// spin up a new bot client
const client = new tmi.Client({
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN,
    },
    // connection: {
    //     secure: true,
    //     reconnect: true
    // },
    channels: [process.env.CHANNEL_NAME],
})

// how the bot handles incoming messages from the IRC
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

client.connect();

function onMessageHandler(target, context, message, self) {
    // don't talk to yourself
    if (self) return

    // remove additional whitespace
    const commandName = message.trim()

    if (commandName === '!d20') {
        const num = rollDice(commandName)
        client.say(target, `You rolled ${num}.`)
    } else {
        console.log(`* Not a known command:\n\t${commandName}\n`)
    }
}

function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`)
}

async function resolve(promise) {
    return await promise;
}

function chat() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(r=>rl.question(`${process.env.BOT_USERNAME}>`), input=>{
        rl.close();
        r(input);
    })
}

/**
 * TODO: figure out why the bot won't connect
 */

while (true) {
    resolve(chat());
}