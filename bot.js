const tmi = require("tmi.js")

// spin up a new bot client
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN,
    },
    channels: process.env.CHANNEL_NAME,
})
client.connect();

// how the bot handles incoming messages from the IRC
client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

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